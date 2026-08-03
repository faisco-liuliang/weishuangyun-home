import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { getBlogPosts, getBlogUrlSlug } from "@/lib/blog-data"
import { ArrowRight, Clock, User } from "lucide-react"

const categoryColors: Record<string, string> = {
  "GEO 优化": "bg-amber-100 text-amber-700 border-amber-200",
  "SEO 优化": "bg-green-100 text-green-700 border-green-200",
  私域运营: "bg-violet-100 text-violet-700 border-violet-200",
  产品教程: "bg-blue-100 text-blue-700 border-blue-200",
  行业洞察: "bg-rose-100 text-rose-700 border-rose-200",
}

export function BlogPreview() {
  const featuredPosts = getBlogPosts().slice(0, 3)

  return (
    <section className="py-24 px-4 sm:px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-14 gap-4">
          <div>
            <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-3">
              干货博客
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-balance">
              AI 企业数字化增长实战指南
            </h2>
            <p className="text-muted-foreground mt-3 text-base max-w-xl text-pretty">
              AI 建站、SEO/GEO 优化、私域运营、AI 营销工具……每周更新，帮助您掌握最新的数字化增长方法论。
            </p>
          </div>
          <Link
            href="/blog"
            className="flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors shrink-0"
          >
            查看全部文章
            <ArrowRight className="size-4" />
          </Link>
        </div>

        {/* Article grid: first card spans full width on md+, remaining two in a row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Featured article */}
          <Link
            href={`/blog/${getBlogUrlSlug(featuredPosts[0])}`}
            className="md:col-span-2 group"
          >
            <Card className="h-full border-border bg-card card-hover overflow-hidden">
              {featuredPosts[0].coverImage && (
                <img
                  src={featuredPosts[0].coverImage.src}
                  alt={featuredPosts[0].coverImage.alt}
                  className="h-56 w-full object-cover"
                />
              )}
              <CardContent className="p-8 flex flex-col gap-5 h-full">
                <Badge
                  className={`self-start text-xs border ${categoryColors[featuredPosts[0].category] ?? "bg-muted text-muted-foreground"}`}
                  variant="outline"
                >
                  {featuredPosts[0].category}
                </Badge>

                <div className="flex-1">
                  <h3 className="text-xl font-bold text-foreground leading-snug text-balance mb-3 group-hover:text-primary transition-colors">
                    {featuredPosts[0].title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed text-pretty line-clamp-3">
                    {featuredPosts[0].excerpt}
                  </p>
                </div>

                <div className="flex items-center gap-4 text-xs text-muted-foreground pt-2 border-t border-border">
                  <span className="flex items-center gap-1.5">
                    <User className="size-3.5" />
                    {featuredPosts[0].author}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="size-3.5" />
                    {featuredPosts[0].readTime}阅读
                  </span>
                  <span className="ml-auto flex items-center gap-1 font-medium text-primary text-xs">
                    阅读全文 <ArrowRight className="size-3.5" />
                  </span>
                </div>
              </CardContent>
            </Card>
          </Link>

          {/* Two smaller articles stacked */}
          <div className="flex flex-col gap-6">
            {featuredPosts.slice(1).map((post) => (
              <Link key={post.slug} href={`/blog/${getBlogUrlSlug(post)}`} className="group flex-1">
                <Card className="h-full border-border bg-card card-hover overflow-hidden">
                  {post.coverImage && (
                    <img
                      src={post.coverImage.src}
                      alt={post.coverImage.alt}
                      className="h-28 w-full object-cover"
                    />
                  )}
                  <CardContent className="p-6 flex flex-col gap-4 h-full">
                    <Badge
                      className={`self-start text-xs border ${categoryColors[post.category] ?? "bg-muted text-muted-foreground"}`}
                      variant="outline"
                    >
                      {post.category}
                    </Badge>

                    <div className="flex-1">
                      <h3 className="text-base font-bold text-foreground leading-snug text-balance mb-2 group-hover:text-primary transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed text-pretty line-clamp-2">
                        {post.excerpt}
                      </p>
                    </div>

                    <div className="flex items-center gap-3 text-xs text-muted-foreground pt-2 border-t border-border">
                      <span className="flex items-center gap-1.5">
                        <Clock className="size-3.5" />
                        {post.readTime}阅读
                      </span>
                      <span className="ml-auto flex items-center gap-1 font-medium text-primary text-xs">
                        阅读全文 <ArrowRight className="size-3.5" />
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
