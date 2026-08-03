import { readFile } from "node:fs/promises"
import { resolve } from "node:path"
import { NextResponse } from "next/server"

type Props = {
  params: Promise<{
    slug: string
    asset: string
  }>
}

export async function GET(_request: Request, { params }: Props) {
  const { slug, asset } = await params
  const decodedSlug = decodeURIComponent(slug)
  const decodedAsset = decodeURIComponent(asset)

  try {
    const filePath = resolve(process.cwd(), "public", "blog", decodedSlug, decodedAsset)
    const buffer = await readFile(filePath)

    return new NextResponse(buffer, {
      headers: {
        "Content-Type": contentType(decodedAsset),
        "Cache-Control": "public, max-age=31536000, immutable",
      },
    })
  } catch {
    return NextResponse.json({ error: "Not found" }, { status: 404 })
  }
}

function contentType(filename: string) {
  const lower = filename.toLowerCase()
  if (lower.endsWith(".png")) return "image/png"
  if (lower.endsWith(".jpg") || lower.endsWith(".jpeg")) return "image/jpeg"
  if (lower.endsWith(".webp")) return "image/webp"
  if (lower.endsWith(".gif")) return "image/gif"
  if (lower.endsWith(".svg")) return "image/svg+xml"
  return "application/octet-stream"
}
