#!/usr/bin/env node
import http from "node:http"
import { mkdirSync, writeFileSync } from "node:fs"
import { resolve } from "node:path"
import { execFile } from "node:child_process"

const FEISHU_APP_ID = process.env.FEISHU_APP_ID
const FEISHU_APP_SECRET = process.env.FEISHU_APP_SECRET
const PORT = Number(process.env.FEISHU_OAUTH_PORT ?? 8765)
const REDIRECT_URI = process.env.FEISHU_REDIRECT_URI ?? `http://127.0.0.1:${PORT}/callback`
const TOKEN_PATH = resolve(process.cwd(), ".feishu", "user-token.json")

if (!FEISHU_APP_ID || !FEISHU_APP_SECRET) {
  fail("Missing FEISHU_APP_ID or FEISHU_APP_SECRET in the current environment.")
}

const authUrl = new URL("https://open.feishu.cn/open-apis/authen/v1/index")
authUrl.searchParams.set("app_id", FEISHU_APP_ID)
authUrl.searchParams.set("redirect_uri", REDIRECT_URI)
authUrl.searchParams.set("scope", "offline_access docx:document:readonly sheets:spreadsheet:readonly")
authUrl.searchParams.set("state", String(Date.now()))

const server = http.createServer(async (request, response) => {
  const url = new URL(request.url ?? "/", REDIRECT_URI)
  if (url.pathname !== "/callback") {
    response.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" })
    response.end("Not found")
    return
  }

  const code = url.searchParams.get("code")
  const error = url.searchParams.get("error")
  if (error) {
    response.writeHead(400, { "Content-Type": "text/plain; charset=utf-8" })
    response.end(`Authorization failed: ${error}`)
    closeServer(1)
    return
  }

  if (!code) {
    response.writeHead(400, { "Content-Type": "text/plain; charset=utf-8" })
    response.end("Missing code")
    closeServer(1)
    return
  }

  try {
    const token = await exchangeCode(code)
    mkdirSync(resolve(process.cwd(), ".feishu"), { recursive: true })
    writeFileSync(TOKEN_PATH, JSON.stringify(token, null, 2))
    response.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" })
    response.end(`Authorization completed. Token saved to ${TOKEN_PATH}`)
    console.log(`Saved token to ${TOKEN_PATH}`)
    closeServer(0)
  } catch (authError) {
    response.writeHead(500, { "Content-Type": "text/plain; charset=utf-8" })
    response.end(`Authorization failed: ${authError.message}`)
    closeServer(1)
  }
})

server.listen(PORT, "127.0.0.1", () => {
  console.log(`Listening on ${REDIRECT_URI}`)
  console.log("Open the URL below in your browser and approve the app:")
  console.log(authUrl.toString())
  openBrowser(authUrl.toString())
})

async function exchangeCode(code) {
  const response = await fetch("https://open.feishu.cn/open-apis/authen/v2/oauth/token", {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify({
      grant_type: "authorization_code",
      code,
      client_id: FEISHU_APP_ID,
      client_secret: FEISHU_APP_SECRET,
      redirect_uri: REDIRECT_URI,
    }),
  })

  const payload = await response.json()
  if (!response.ok || (payload.code !== 0 && payload.code !== "0")) {
    throw new Error(`${payload.msg ?? `HTTP ${response.status}`} ${JSON.stringify(payload)}`)
  }

  const tokenPayload = payload.data ?? payload
  return {
    ...tokenPayload,
    obtained_at: new Date().toISOString(),
    redirect_uri: REDIRECT_URI,
  }
}

function openBrowser(url) {
  execFile("cmd", ["/c", "start", "", `"${url}"`], { windowsHide: true }, () => {})
}

function closeServer(code) {
  server.close(() => {
    process.exit(code)
  })
}

function fail(message) {
  console.error(message)
  process.exit(1)
}
