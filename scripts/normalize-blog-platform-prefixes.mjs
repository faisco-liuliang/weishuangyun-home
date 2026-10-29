#!/usr/bin/env node
import { readFileSync, writeFileSync } from "node:fs"
import { resolve } from "node:path"
import { normalizeBlogPostPlatformPrefixes } from "./blog-content-normalization.mjs"

const blogDataPath = resolve(process.cwd(), "lib", "blog-data.ts")
const dateFrom = getArg("--date-from") ?? "2026-10-26"
const writeMode = process.argv.includes("--write")
const posts = readCurrentPosts()
let changedCount = 0

const normalizedPosts = posts.map((post) => {
  if (post.date < dateFrom) return post
  const normalized = normalizeBlogPostPlatformPrefixes(post)
  if (JSON.stringify(normalized) !== JSON.stringify(post)) changedCount += 1
  return normalized
})

console.log(`Found ${changedCount} post(s) with removable platform prefixes on or after ${dateFrom}.`)
if (!writeMode) {
  console.log("Dry run only. Re-run with --write to update blog data.")
} else if (changedCount > 0) {
  writeBlogData(normalizedPosts)
  console.log(`Updated ${changedCount} post(s).`)
}

function getArg(name) {
  const index = process.argv.indexOf(name)
  return index === -1 ? undefined : process.argv[index + 1]
}

function readCurrentPosts() {
  const source = readFileSync(blogDataPath, "utf8")
  const startMarker = "export const blogPosts: BlogPost[] = "
  const endMarker = "export function getBlogPosts"
  const startIndex = source.indexOf(startMarker)
  const endIndex = source.indexOf(endMarker, startIndex)
  if (startIndex === -1 || endIndex === -1) throw new Error("Could not locate blogPosts array.")
  return Function(`return ${source.slice(startIndex + startMarker.length, endIndex).trim()}`)()
}

function writeBlogData(posts) {
  const source = readFileSync(blogDataPath, "utf8")
  const startMarker = "export const blogPosts: BlogPost[] = "
  const endMarker = "export function getBlogPosts"
  const startIndex = source.indexOf(startMarker)
  const endIndex = source.indexOf(endMarker, startIndex)
  const serialized = JSON.stringify(posts, null, 2)
    .replace(/"([^"]+)":/g, "$1:")
    .replace(/\n/g, "\n  ")
  writeFileSync(blogDataPath, `${source.slice(0, startIndex)}${startMarker}${serialized}\r\n\r\n${source.slice(endIndex)}`)
}
