#!/usr/bin/env node
import { execFileSync } from "node:child_process"
import { mkdirSync, readFileSync, writeFileSync } from "node:fs"
import { dirname, resolve } from "node:path"
import { fileURLToPath } from "node:url"

const rootDir = resolve(dirname(fileURLToPath(import.meta.url)), "..")
const blogDataPath = resolve(rootDir, "lib/blog-data.ts")

const args = new Set(process.argv.slice(2))
const writeMode = args.has("--write")
const sheetUrl = getArg("--sheet-url") ?? process.env.LARK_SHEET_URL
const sheetId = getArg("--sheet-id") ?? process.env.LARK_SHEET_ID
const range = getArg("--range") ?? process.env.LARK_SHEET_RANGE ?? "A1:Q500"
const reviewedStatus = process.env.LARK_REVIEWED_STATUS ?? "已审核"
const publishedStatus = process.env.LARK_PUBLISHED_STATUS ?? "已发布"
const siteBaseUrl = (process.env.SITE_BASE_URL ?? "https://weishuangyun.fkw.com").replace(/\/$/, "")
const skippedStatus = process.env.LARK_SKIPPED_STATUS ?? publishedStatus
const shouldCheckSite = process.env.LARK_CHECK_SITE !== "0" && Boolean(process.env.SITE_BASE_URL)

if (!sheetUrl && !process.env.LARK_SPREADSHEET_TOKEN) {
  fail("Missing LARK_SHEET_URL. Pass --sheet-url or set LARK_SHEET_URL.")
}

const readOutput = runLark([
  "sheets",
  "+read",
  "--as",
  "user",
  ...(sheetUrl ? ["--url", sheetUrl] : ["--spreadsheet-token", process.env.LARK_SPREADSHEET_TOKEN]),
  ...(sheetId ? ["--sheet-id", sheetId] : []),
  "--range",
  range,
  "--value-render-option",
  "ToString",
])

const values = extractValues(JSON.parse(readOutput))
if (values.length < 2) {
  fail("The sheet range must include a header row and at least one data row.")
}

const headers = values[0].map((value) => normalizeHeader(value))
const rows = values.slice(1)
const statusIndex = findColumn(headers, ["状态", "status"])
const approvedRows = rows
  .map((cells, index) => ({ cells, rowNumber: index + 2 }))
  .filter(({ cells }) => text(cells[statusIndex]) === reviewedStatus)

const currentPosts = readCurrentPosts()
const existingSlugs = new Set(currentPosts.map((post) => post.slug))
const incomingEntries = []
const skippedEntries = []

for (const { cells, rowNumber } of approvedRows) {
  const slug = rowToSlug(headers, cells, rowNumber)
  const title = cell(headers, cells, ["标题", "title", "Title"], slug)
  const existingPost = currentPosts.find((post) => post.slug === slug)
  const existsOnSite = existingPost ? true : await sitePostExists(slug)

  if (existingSlugs.has(slug) || existsOnSite) {
    skippedEntries.push({
      rowNumber,
      slug,
      title,
      link: `${siteBaseUrl}/blog/${slug}`,
      reason: existingPost ? "代码中已存在" : "网站已发布",
    })
    existingSlugs.add(slug)
    continue
  }

  const entry = await rowToPost(headers, cells, rowNumber, { downloadImages: writeMode })
  incomingEntries.push(entry)
  existingSlugs.add(slug)
}

const incomingPosts = incomingEntries.map(({ post }) => post)
const mergedPosts = mergePosts(currentPosts, incomingPosts)

console.log(`Found ${approvedRows.length} reviewed row(s).`)
for (const post of incomingPosts) {
  console.log(`- ${post.slug}: ${post.title}`)
}
for (const entry of skippedEntries) {
  console.log(`- skipped ${entry.slug}: ${entry.title} (${entry.reason})`)
}

if (!writeMode) {
  console.log("Dry run only. Re-run with --write to update blog data and mark rows as published.")
  process.exit(0)
}

if (incomingPosts.length > 0) {
  writeBlogData(mergedPosts)
}

for (const entry of incomingEntries) {
  const { rowNumber, post } = entry
  writeCell(statusIndex, rowNumber, publishedStatus)

  const linkIndex = optionalColumn(headers, ["发布链接", "链接", "url", "URL"])
  if (linkIndex !== -1) writeCell(linkIndex, rowNumber, `${siteBaseUrl}/blog/${post.slug}`)

  const publishedAtIndex = optionalColumn(headers, ["发布时间", "publishedAt", "published_at"])
  if (publishedAtIndex !== -1) writeCell(publishedAtIndex, rowNumber, new Date().toISOString())

  const imageStatusIndex = optionalColumn(headers, ["图片状态", "imageStatus", "ImageStatus"])
  if (imageStatusIndex !== -1 && entry?.imageStatus) writeCell(imageStatusIndex, rowNumber, entry.imageStatus)
}

for (const entry of skippedEntries) {
  writeCell(statusIndex, entry.rowNumber, skippedStatus)

  const linkIndex = optionalColumn(headers, ["发布链接", "链接", "url", "URL"])
  if (linkIndex !== -1) writeCell(linkIndex, entry.rowNumber, entry.link)

  const imageStatusIndex = optionalColumn(headers, ["图片状态", "imageStatus", "ImageStatus"])
  if (imageStatusIndex !== -1) writeCell(imageStatusIndex, entry.rowNumber, `${entry.reason}，跳过发布`)
}

console.log(`Published ${incomingPosts.length} new post(s), skipped ${skippedEntries.length} existing post(s).`)

function getArg(name) {
  const index = process.argv.indexOf(name)
  return index === -1 ? undefined : process.argv[index + 1]
}

function runLark(commandArgs) {
  try {
    return execFileSync("lark-cli", commandArgs, {
      cwd: rootDir,
      encoding: "utf8",
      stdio: ["ignore", "pipe", "pipe"],
    })
  } catch (error) {
    const stderr = error.stderr?.toString() ?? ""
    const stdout = error.stdout?.toString() ?? ""
    fail([stdout, stderr].filter(Boolean).join("\n") || error.message)
  }
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
    fail("Could not find cell values in lark-cli output.")
  }
  return values
}

function normalizeHeader(value) {
  return text(value).trim()
}

function text(value) {
  if (value == null) return ""
  if (typeof value === "string") return value.trim()
  if (typeof value === "number") return String(value)
  if (typeof value === "object" && "text" in value) return String(value.text).trim()
  return String(value).trim()
}

function findColumn(headers, names) {
  const index = optionalColumn(headers, names)
  if (index === -1) fail(`Missing required column: ${names.join(" / ")}`)
  return index
}

function optionalColumn(headers, names) {
  return headers.findIndex((header) => names.some((name) => header.toLowerCase() === name.toLowerCase()))
}

function cell(headers, cells, names, fallback = "") {
  const index = optionalColumn(headers, names)
  return index === -1 ? fallback : text(cells[index])
}

function rowToSlug(headers, cells, rowNumber) {
  const rawSlug = cell(headers, cells, ["slug", "Slug", "路径", "文章路径"])
  if (rawSlug) return slugify(rawSlug)
  const title = cell(headers, cells, ["标题", "title", "Title"])
  if (!title) fail(`Row ${rowNumber} is missing title.`)
  return slugify(title)
}

async function rowToPost(headers, cells, rowNumber, options = { downloadImages: false }) {
  const title = cell(headers, cells, ["标题", "title", "Title"])
  let content = cell(headers, cells, ["正文", "内容", "content", "Content", "markdown", "Markdown"])
  if (!title) fail(`Row ${rowNumber} is missing title.`)
  if (!content) fail(`Row ${rowNumber} is missing content.`)

  const slug = rowToSlug(headers, cells, rowNumber)
  const coverImageUrl = cell(headers, cells, ["封面图URL", "封面图", "coverImage", "coverImageUrl", "CoverImage"])
  const coverImageAlt = cell(headers, cells, ["封面图Alt", "图片Alt", "coverImageAlt", "CoverImageAlt"], title)
  const inlineImages = cell(headers, cells, ["正文配图", "contentImages", "ContentImages"])
    .split(/\n/)
    .map((item) => item.trim())
    .filter(Boolean)

  if (inlineImages.length > 0) {
    const existingContent = content
    const imageMarkdown = inlineImages
      .filter((imageUrl) => !existingContent.includes(imageUrl))
      .map((imageUrl, index) => `![${title} 配图 ${index + 1}](${imageUrl})`)
      .join("\n\n")
    if (imageMarkdown) content = `${content.trim()}\n\n${imageMarkdown}`
  }

  const excerpt = cell(headers, cells, ["摘要", "excerpt", "Excerpt", "description", "Description"], content.replace(/[#>*_\-\n]/g, "").slice(0, 120))
  const tags = cell(headers, cells, ["标签", "tags", "Tags"])
    .split(/[,，、\n]/)
    .map((tag) => tag.trim())
    .filter(Boolean)

  let coverImage
  let imageStatus = coverImageUrl ? "外链可用" : "无封面图"
  if (coverImageUrl) {
    if (options.downloadImages) {
      const downloadResult = await downloadCoverImage(coverImageUrl, slug)
      coverImage = {
        src: downloadResult.src,
        alt: coverImageAlt,
      }
      imageStatus = downloadResult.ok ? "已下载" : `下载失败：${downloadResult.message}`
    } else {
      coverImage = {
        src: coverImageUrl,
        alt: coverImageAlt,
      }
    }
  }

  const post = {
    slug,
    title,
    description: cell(headers, cells, ["SEO描述", "seoDescription", "description", "Description"], excerpt),
    excerpt,
    category: cell(headers, cells, ["分类", "category", "Category"], "行业洞察"),
    author: cell(headers, cells, ["作者", "author", "Author"], "维双云内容团队"),
    date: cell(headers, cells, ["发布日期", "日期", "date", "Date"], new Date().toISOString().slice(0, 10)),
    readTime: cell(headers, cells, ["阅读时长", "readTime", "ReadTime"], estimateReadTime(content)),
    tags,
    content,
  }
  if (coverImage) post.coverImage = coverImage

  return { post, rowNumber, imageStatus }
}

async function downloadCoverImage(imageUrl, slug) {
  try {
    const response = await fetch(imageUrl)
    if (!response.ok) {
      return { ok: false, src: imageUrl, message: `HTTP ${response.status}` }
    }

    const contentType = response.headers.get("content-type") ?? ""
    const extension = extensionFromContentType(contentType) ?? extensionFromUrl(imageUrl) ?? "jpg"
    const dir = resolve(rootDir, "public", "blog", slug)
    const filename = `cover.${extension}`
    mkdirSync(dir, { recursive: true })
    const arrayBuffer = await response.arrayBuffer()
    writeFileSync(resolve(dir, filename), Buffer.from(arrayBuffer))

    return { ok: true, src: `/blog/${slug}/${filename}`, message: "ok" }
  } catch (error) {
    return { ok: false, src: imageUrl, message: error.message }
  }
}

function extensionFromContentType(contentType) {
  if (contentType.includes("image/jpeg")) return "jpg"
  if (contentType.includes("image/png")) return "png"
  if (contentType.includes("image/webp")) return "webp"
  if (contentType.includes("image/gif")) return "gif"
  return undefined
}

function extensionFromUrl(imageUrl) {
  try {
    const pathname = new URL(imageUrl).pathname
    const match = pathname.match(/\.([a-zA-Z0-9]+)$/)
    return match?.[1]?.toLowerCase()
  } catch {
    return undefined
  }
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

function estimateReadTime(content) {
  const minutes = Math.max(1, Math.ceil(content.replace(/\s/g, "").length / 600))
  return `${minutes} 分钟`
}

function readCurrentPosts() {
  const source = readFileSync(blogDataPath, "utf8")
  const match = source.match(/export const blogPosts: BlogPost\[] = (\[[\s\S]*?\])\n\nexport function getBlogPosts/)
  if (!match) fail("Could not locate blogPosts array in lib/blog-data.ts.")
  const moduleSource = `const blogPosts = ${match[1]}; return blogPosts`
  return Function(moduleSource)()
}

function mergePosts(currentPosts, incomingPosts) {
  const bySlug = new Map(currentPosts.map((post) => [post.slug, post]))
  for (const post of incomingPosts) {
    bySlug.set(post.slug, { ...bySlug.get(post.slug), ...post })
  }
  return [...bySlug.values()].sort((a, b) => b.date.localeCompare(a.date))
}

async function sitePostExists(slug) {
  if (!shouldCheckSite) return false
  const url = `${siteBaseUrl}/blog/${slug}`
  try {
    const response = await fetch(url, { method: "HEAD" })
    if (response.ok) return true
    if (response.status === 405) {
      const getResponse = await fetch(url, { method: "GET" })
      return getResponse.ok
    }
  } catch {
    return false
  }
  return false
}

function writeBlogData(posts) {
  const source = readFileSync(blogDataPath, "utf8")
  const serialized = JSON.stringify(posts, null, 2)
    .replace(/"([^"]+)":/g, "$1:")
    .replace(/\n/g, "\n  ")
  const nextSource = source.replace(
    /export const blogPosts: BlogPost\[] = \[[\s\S]*?\]\n\nexport function getBlogPosts/,
    `export const blogPosts: BlogPost[] = ${serialized}\n\nexport function getBlogPosts`
  )
  writeFileSync(blogDataPath, nextSource)
}

function writeCell(colIndex, rowNumber, value) {
  const rangeRef = `${columnName(colIndex + 1)}${rowNumber}`
  runLark([
    "sheets",
    "+write",
    "--as",
    "user",
    ...(sheetUrl ? ["--url", sheetUrl] : ["--spreadsheet-token", process.env.LARK_SPREADSHEET_TOKEN]),
    ...(sheetId ? ["--sheet-id", sheetId] : []),
    "--range",
    rangeRef,
    "--values",
    JSON.stringify([[value]]),
  ])
}

function columnName(index) {
  let name = ""
  while (index > 0) {
    const remainder = (index - 1) % 26
    name = String.fromCharCode(65 + remainder) + name
    index = Math.floor((index - 1) / 26)
  }
  return name
}

function fail(message) {
  console.error(message)
  process.exit(1)
}
