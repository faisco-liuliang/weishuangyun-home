#!/usr/bin/env node
import { mkdirSync, readFileSync, writeFileSync } from "node:fs"
import { resolve } from "node:path"

const rootDir = process.cwd()
const blogDataPath = resolve(rootDir, "lib", "blog-data.ts")
const tokenPath = resolve(rootDir, ".feishu", "user-token.json")

const args = new Set(process.argv.slice(2))
const writeMode = args.has("--write")
const overwriteExisting = args.has("--overwrite-existing")
const rowStart = Number(getArg("--row-start") ?? "2")
const rowEnd = Number(getArg("--row-end") ?? Number.MAX_SAFE_INTEGER)
const spreadsheetToken = getArg("--spreadsheet-token") ?? parseSpreadsheetToken(process.env.FEISHU_SHEET_URL)
const sheetId = getArg("--sheet-id") ?? process.env.FEISHU_SHEET_ID ?? "28f2dd"
const range = getArg("--range") ?? process.env.FEISHU_SHEET_RANGE ?? "A1:T500"
const siteBaseUrl = (process.env.SITE_BASE_URL ?? "https://weishuangyun.fkw.com").replace(/\/$/, "")

if (!process.env.FEISHU_APP_ID || !process.env.FEISHU_APP_SECRET) {
  fail("Missing FEISHU_APP_ID or FEISHU_APP_SECRET.")
}

if (!spreadsheetToken) {
  fail("Missing spreadsheet token. Set FEISHU_SHEET_URL or pass --spreadsheet-token.")
}

const tokenStore = readTokenStore()
const accessToken = await getAccessToken(tokenStore)
const values = await readSheetValues(accessToken, spreadsheetToken, sheetId, range)

if (values.length < 2) {
  fail("The sheet range must include a header row and at least one data row.")
}

const headers = values[0].map((value) => normalizeHeader(value))
const rows = values
  .slice(1)
  .map((cells, index) => ({ cells, rowNumber: index + 2 }))
  .filter(({ rowNumber }) => rowNumber >= rowStart && rowNumber <= rowEnd)
const currentPosts = readCurrentPosts()
const existingSlugs = new Set(currentPosts.map((post) => post.slug))
const incomingEntries = []
const skippedEntries = []

for (const { cells, rowNumber } of rows) {
  const docLink = cell(headers, cells, ["文章链接"])
  if (!docLink) continue

  const slug = rowToSlug(headers, cells, rowNumber)
  const title = cell(headers, cells, ["关键词标题", "标题"], slug)

  if (existingSlugs.has(slug) && !overwriteExisting) {
    skippedEntries.push({
      rowNumber,
      slug,
      title,
      link: `${siteBaseUrl}/blog/${slug}`,
      reason: "代码中已存在",
    })
    continue
  }

  const entry = await rowToPost(accessToken, headers, cells, rowNumber)
  incomingEntries.push(entry)
  existingSlugs.add(slug)
}

const incomingPosts = incomingEntries.map(({ post }) => post)
const mergedPosts = mergePosts(currentPosts, incomingPosts)

console.log(`Found ${rows.length} row(s), ${incomingEntries.length} importable.`)
for (const post of incomingPosts) {
  console.log(`- ${post.slug}: ${post.title}`)
}
for (const entry of skippedEntries) {
  console.log(`- skipped ${entry.slug}: ${entry.title} (${entry.reason})`)
}

if (!writeMode) {
  console.log("Dry run only. Re-run with --write to update blog data.")
  process.exit(0)
}

if (incomingPosts.length > 0) {
  writeBlogData(mergedPosts)
}

console.log(`Imported ${incomingPosts.length} new post(s), skipped ${skippedEntries.length} existing post(s).`)

function getArg(name) {
  const index = process.argv.indexOf(name)
  return index === -1 ? undefined : process.argv[index + 1]
}

function parseSpreadsheetToken(url) {
  if (!url) return ""
  const match = url.match(/\/sheets\/([A-Za-z0-9]+)/)
  return match?.[1] ?? ""
}

function readTokenStore() {
  try {
    return JSON.parse(readFileSync(tokenPath, "utf8"))
  } catch (error) {
    fail(`Failed to read ${tokenPath}: ${error.message}`)
  }
}

async function getAccessToken(tokenStore) {
  if (tokenStore.access_token && !isExpired(tokenStore)) return tokenStore.access_token
  if (!tokenStore.refresh_token) fail("Missing refresh_token. Re-run the user auth script.")

  const response = await fetch("https://open.feishu.cn/open-apis/authen/v2/oauth/token", {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify({
      grant_type: "refresh_token",
      refresh_token: tokenStore.refresh_token,
      client_id: process.env.FEISHU_APP_ID,
      client_secret: process.env.FEISHU_APP_SECRET,
    }),
  })

  const payload = await response.json()
  if (!response.ok || (payload.code !== 0 && payload.code !== "0")) {
    fail(`Failed to refresh token: ${payload.msg ?? response.status}`)
  }

  const nextTokenStore = {
    ...(payload.data ?? payload),
    obtained_at: new Date().toISOString(),
    redirect_uri: tokenStore.redirect_uri,
  }
  try {
    mkdirSync(resolve(rootDir, ".feishu"), { recursive: true })
    writeFileSync(tokenPath, JSON.stringify(nextTokenStore, null, 2))
  } catch (error) {
    // Cron automations may run in environments where the workspace is writable
    // but dot-directories or credential files are blocked. Keep going with the
    // freshly refreshed token held in memory instead of aborting the sync.
    console.warn(`Warning: failed to persist refreshed token to ${tokenPath}: ${error.message}`)
  }
  return nextTokenStore.access_token
}

function isExpired(tokenStore) {
  if (!tokenStore.obtained_at || !tokenStore.expires_in) return true
  const obtainedAt = Date.parse(tokenStore.obtained_at)
  const ttlMs = Math.max(0, Number(tokenStore.expires_in) - 300) * 1000
  return Number.isNaN(obtainedAt) || Date.now() >= obtainedAt + ttlMs
}

async function feishuRequest(accessToken, url) {
  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json; charset=utf-8",
    },
  })
  const payload = await response.json()
  if (!response.ok || (payload.code !== 0 && payload.code !== "0")) {
    fail(`Feishu API error for ${url}: ${payload.msg ?? response.status}`)
  }
  return payload
}

async function readSheetValues(accessToken, currentSpreadsheetToken, currentSheetId, currentRange) {
  const encodedRange = encodeURIComponent(`${currentSheetId}!${currentRange}`)
  const payload = await feishuRequest(
    accessToken,
    `https://open.feishu.cn/open-apis/sheets/v2/spreadsheets/${currentSpreadsheetToken}/values/${encodedRange}`
  )
  return extractValues(payload)
}

function extractValues(payload) {
  const candidates = [
    payload?.data?.valueRange?.values,
    payload?.data?.value_range?.values,
    payload?.valueRange?.values,
    payload?.value_range?.values,
    payload?.values,
  ]
  const values = candidates.find((candidate) => Array.isArray(candidate))
  if (!values) {
    fail("Could not find cell values in Feishu sheet response.")
  }
  return values
}

function normalizeHeader(value) {
  return text(value).trim()
}

function text(value) {
  if (value == null) return ""
  if (Array.isArray(value)) return value.length > 0 ? text(value[0]) : ""
  if (typeof value === "string") return value.trim()
  if (typeof value === "number") return String(value).trim()
  if (typeof value === "object" && "link" in value) return String(value.link).trim()
  if (typeof value === "object" && "text" in value) return String(value.text).trim()
  return String(value).trim()
}

function optionalColumn(headers, names) {
  return headers.findIndex((header) => names.some((name) => header.toLowerCase() === name.toLowerCase()))
}

function cell(headers, cells, names, fallback = "") {
  const index = optionalColumn(headers, names)
  return index === -1 ? fallback : text(cells[index])
}

function rowToSlug(headers, cells, rowNumber) {
  const rawSlug = cell(headers, cells, ["slug", "路径", "文章路径"])
  if (rawSlug) return slugify(rawSlug)
  const title = cell(headers, cells, ["关键词标题", "标题"])
  if (!title) fail(`Row ${rowNumber} is missing title.`)
  return slugify(title)
}

async function rowToPost(accessToken, headers, cells, rowNumber) {
  const title = cell(headers, cells, ["关键词标题", "标题"])
  if (!title) fail(`Row ${rowNumber} is missing title.`)

  const docLink = cell(headers, cells, ["文章链接"])
  if (!docLink) fail(`Row ${rowNumber} is missing article link.`)

  const slug = rowToSlug(headers, cells, rowNumber)
  const docToken = parseDocToken(docLink)
  const content = await fetchDocMarkdown(accessToken, docToken, slug, title)
  if (!content) fail(`Row ${rowNumber} returned empty content from document.`)

  const industry = cell(headers, cells, ["行业（文本）"], "")
  const articleType = cell(headers, cells, ["文章类型"], "")
  const tags = [industry, articleType].filter(Boolean)
  const excerpt = makeExcerpt(content)

  return {
    rowNumber,
    post: {
      slug,
      title,
      description: excerpt,
      excerpt,
      category: articleType || "行业洞察",
      author: cell(headers, cells, ["品牌", "作者"], "维双云内容团队"),
      date: normalizeDate(cell(headers, cells, ["文章上传日期", "发布日期", "日期"], "")),
      readTime: estimateReadTime(content),
      tags,
      content: normalizeDocContent(content),
    },
  }
}

function parseDocToken(link) {
  const match = link.match(/\/docx\/([A-Za-z0-9]+)/)
  if (!match) fail(`Unsupported Feishu doc link: ${link}`)
  return match[1]
}

async function fetchDocMarkdown(accessToken, docToken, slug, title) {
  const payload = await feishuRequest(
    accessToken,
    `https://open.feishu.cn/open-apis/docx/v1/documents/${docToken}/blocks?page_size=500`
  )

  const blocks = payload?.data?.items ?? []
  const rootBlock = blocks.find((block) => block.block_id === docToken)
  const orderedBlocks = orderBlocks(blocks, rootBlock?.children ?? [])
  const imageState = { index: 0 }
  const lines = []

  for (const block of orderedBlocks) {
    const line = await blockToMarkdown(accessToken, block, slug, title, imageState)
    if (Array.isArray(line)) {
      lines.push(...line)
      continue
    }
    if (line != null) lines.push(line)
  }

  return lines.join("\n").replace(/\n{3,}/g, "\n\n").trim()
}

function orderBlocks(blocks, childIds) {
  const byId = new Map(blocks.map((block) => [block.block_id, block]))
  return childIds.map((id) => byId.get(id)).filter(Boolean)
}

async function blockToMarkdown(accessToken, block, slug, title, imageState) {
  switch (block.block_type) {
    case 2:
      return getRichText(block.text?.elements)
    case 3:
      return `# ${getRichText(block.heading1?.elements)}`
    case 4:
      return `## ${getRichText(block.heading2?.elements)}`
    case 5:
      return `### ${getRichText(block.heading3?.elements)}`
    case 6:
      return `#### ${getRichText(block.heading4?.elements)}`
    case 27:
      return await downloadImageBlock(accessToken, block.image?.token, slug, title, imageState)
    default:
      return null
  }
}

function getRichText(elements = []) {
  return elements
    .map((element) => {
      if (element.text_run?.content) return element.text_run.content
      if (element.mention_user?.name) return element.mention_user.name
      return ""
    })
    .join("")
    .trim()
}

async function downloadImageBlock(accessToken, imageToken, slug, title, imageState) {
  if (!imageToken) return null
  const response = await fetch(`https://open.feishu.cn/open-apis/drive/v1/medias/${imageToken}/download`, {
    headers: { Authorization: `Bearer ${accessToken}` },
  })
  if (!response.ok) {
    console.warn(`Failed to download image ${imageToken}: HTTP ${response.status}`)
    return null
  }

  const contentDisposition = response.headers.get("content-disposition") ?? ""
  const contentType = response.headers.get("content-type") ?? ""
  const fallbackExt = extensionFromContentType(contentType) ?? "png"
  const filename = parseFilename(contentDisposition) ?? `image-${imageState.index + 1}.${fallbackExt}`

  const dir = resolve(rootDir, "public", "blog", slug)
  mkdirSync(dir, { recursive: true })
  const filePath = resolve(dir, filename)
  const bytes = Buffer.from(await response.arrayBuffer())
  writeFileSync(filePath, bytes)

  imageState.index += 1
  return `![${title} 配图 ${imageState.index}](/blog/${slug}/${filename})`
}

function parseFilename(contentDisposition) {
  const utf8Match = contentDisposition.match(/filename\*=UTF-8''([^;]+)/i)
  if (utf8Match) return decodeURIComponent(utf8Match[1])
  const plainMatch = contentDisposition.match(/filename="([^"]+)"/i)
  if (plainMatch) return plainMatch[1]
  return null
}

function extensionFromContentType(contentType) {
  if (contentType.includes("image/jpeg")) return "jpg"
  if (contentType.includes("image/png")) return "png"
  if (contentType.includes("image/webp")) return "webp"
  if (contentType.includes("image/gif")) return "gif"
  return null
}

function normalizeDocContent(content) {
  return content
    .replace(/\r\n/g, "\n")
    .replace(/\n{3,}/g, "\n\n")
    .replace(/\n([0-9]+)\.\s/g, "\n## $1. ")
    .trim()
}

function makeExcerpt(content) {
  return content
    .replace(/[#>*_\-\n]/g, "")
    .replace(/\s+/g, "")
    .slice(0, 120)
}

function normalizeDate(value) {
  const textValue = String(value || "").trim()
  if (!textValue) return new Date().toISOString().slice(0, 10)
  const parsed = Date.parse(textValue)
  if (Number.isNaN(parsed)) return new Date().toISOString().slice(0, 10)
  return new Date(parsed).toISOString().slice(0, 10)
}

function estimateReadTime(content) {
  const minutes = Math.max(1, Math.ceil(content.replace(/\s/g, "").length / 600))
  return `${minutes} 分钟`
}

function slugify(value) {
  const slug = value
    .trim()
    .toLowerCase()
    .replace(/https?:\/\//g, "")
    .replace(/[^a-z0-9\u4e00-\u9fa5]+/g, "-")
    .replace(/^-+|-+$/g, "")
  return slug || `post-${Date.now()}`
}

function readCurrentPosts() {
  const source = readFileSync(blogDataPath, "utf8")
  const startMarker = "export const blogPosts: BlogPost[] = "
  const endMarker = "export function getBlogPosts"
  const startIndex = source.indexOf(startMarker)
  const endIndex = source.indexOf(endMarker, startIndex)
  if (startIndex === -1 || endIndex === -1) fail("Could not locate blogPosts array in lib/blog-data.ts.")
  const arraySource = source.slice(startIndex + startMarker.length, endIndex).trim()
  const moduleSource = `const blogPosts = ${arraySource}; return blogPosts`
  return Function(moduleSource)()
}

function mergePosts(currentPosts, incomingPosts) {
  const bySlug = new Map(currentPosts.map((post) => [post.slug, post]))
  for (const post of incomingPosts) {
    bySlug.set(post.slug, { ...bySlug.get(post.slug), ...post })
  }
  return [...bySlug.values()].sort((a, b) => b.date.localeCompare(a.date))
}

function writeBlogData(posts) {
  const source = readFileSync(blogDataPath, "utf8")
  const startMarker = "export const blogPosts: BlogPost[] = "
  const endMarker = "export function getBlogPosts"
  const startIndex = source.indexOf(startMarker)
  const endIndex = source.indexOf(endMarker, startIndex)
  if (startIndex === -1 || endIndex === -1) fail("Could not locate blogPosts array in lib/blog-data.ts.")
  const serialized = JSON.stringify(posts, null, 2)
    .replace(/"([^"]+)":/g, "$1:")
    .replace(/\n/g, "\n  ")
  const nextSource = `${source.slice(0, startIndex)}${startMarker}${serialized}\r\n\r\n${source.slice(endIndex)}`
  writeFileSync(blogDataPath, nextSource)
}

function fail(message) {
  console.error(message)
  process.exit(1)
}
