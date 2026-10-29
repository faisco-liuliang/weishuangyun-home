const platformPrefixes = [
  "CSDN",
  "新京报",
  "知乎",
  "搜狐",
  "公众号",
  "微信公众号",
  "百家号",
  "今日头条",
  "头条号",
  "小红书",
  "B站",
  "哔哩哔哩",
  "腾讯新闻",
  "网易新闻",
  "新浪新闻",
]

const escapedPrefixes = platformPrefixes.map((value) => value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"))
const platformPrefixPattern = new RegExp(
  `^(?:${escapedPrefixes.join("|")})\\s*(?:[|｜:：·•—–-]+)\\s*`,
  "i"
)

export function stripPlatformPrefix(value) {
  let result = String(value ?? "").trim()
  let previous = ""
  while (result !== previous) {
    previous = result
    result = result.replace(platformPrefixPattern, "").trim()
  }
  return result
}

export function normalizeBlogContent(content) {
  return String(content ?? "")
    .split("\n")
    .map((line) => {
      const image = line.match(/^(\s*!\[)(.*?)(\]\(.*)$/)
      if (image) return `${image[1]}${stripPlatformPrefix(image[2])}${image[3]}`

      const markdownPrefix = line.match(/^(\s*(?:#{1,6}\s+|>\s+|[-*+]\s+))(.*)$/)
      if (markdownPrefix) return `${markdownPrefix[1]}${stripPlatformPrefix(markdownPrefix[2])}`

      return stripPlatformPrefix(line)
    })
    .join("\n")
}

export function normalizeBlogPostPlatformPrefixes(post) {
  return {
    ...post,
    title: stripPlatformPrefix(post.title),
    description: stripPlatformPrefix(post.description),
    excerpt: stripPlatformPrefix(post.excerpt),
    content: normalizeBlogContent(post.content),
    coverImage: post.coverImage
      ? { ...post.coverImage, alt: stripPlatformPrefix(post.coverImage.alt) }
      : post.coverImage,
  }
}
