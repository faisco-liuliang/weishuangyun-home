import type { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { blogCategories, getBlogPosts, getBlogUrlSlug, getFeaturedPost } from "@/lib/blog-data"
import { ArrowRight, Clock, User, Tag, Search } from "lucide-react"

export const metadata: Metadata = {
  title: "博客 - AI 企业数字化增长干货资讯",
  description:
    "维双云博客，分享 AI 建站、SEO/GEO 优化、私域运营、AI 营销工具、数字化转型案例等实战干货，帮助中小企业掌握增长方法论。",
  keywords: ["AI 建站", "SEO 教程", "GEO 优化", "私域运营", "企业数字化", "建站教程", "营销干货"],
  alternates: { canonical: "https://wsy.fkw.com/blog" },
  openGraph: {
    url: "https://wsy.fkw.com/blog",
    title: "博客 - 维双云 AI 企业数字化增长干货",
    description: "AI 建站、SEO/GEO 优化、私域运营实战干货，每周更新，助力企业掌握数字化增长方法论。",
  },
}

export default function BlogPage() {
  const featuredPost = getFeaturedPost()
  const posts = getBlogPosts().filter((post) => post.slug !== featuredPost.slug)

  return (
    <>
      <Header />
      <main className="pt-16">
        {/* Hero */}
        <section className="py-20 px-4 sm:px-6 section-blue-bg border-b border-border">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-3">维双云博客</p>
              <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 text-balance">
                AI 企业数字化增长干货
              </h1>
              <p className="text-lg text-muted-foreground max-w-xl mx-auto text-pretty leading-relaxed">
                AI 建站、SEO/GEO 优化、私域运营、AI 营销工具……每周更新实战干货，助力企业掌握数字化增长方法论。
              </p>
            </div>

            {/* Search bar */}
            <div className="relative max-w-lg mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
              <input
                type="search"
                placeholder="搜索文章..."
                className="w-full pl-11 pr-4 py-3 rounded-xl border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring text-sm"
              />
            </div>
          </div>
        </section>

        <section className="py-16 px-4 sm:px-6 bg-background">
          <div className="max-w-7xl mx-auto">
            {/* Category Filter */}
            <div className="flex flex-wrap gap-2 mb-12">
              {blogCategories.map((cat) => (
                <span
                  key={cat}
                  className={`text-sm px-4 py-1.5 rounded-full cursor-pointer transition-colors ${
                    cat === "全部"
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-secondary-foreground hover:bg-accent hover:text-accent-foreground"
                  }`}
                >
                  {cat}
                </span>
              ))}
            </div>

            {/* Featured Post */}
            <div className="mb-10">
              <Link href={`/blog/${getBlogUrlSlug(featuredPost)}`}>
                <Card className="border-primary/20 bg-gradient-to-br from-accent/60 to-card card-hover overflow-hidden">
                  {featuredPost.coverImage && (
                    <img
                      src={featuredPost.coverImage.src}
                      alt={featuredPost.coverImage.alt}
                      className="h-64 w-full object-cover"
                    />
                  )}
                  <CardContent className="p-8">
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                      <Badge className="bg-primary text-primary-foreground">精选推荐</Badge>
                      <Badge variant="outline" className="text-primary border-primary/30">{featuredPost.category}</Badge>
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3 text-balance hover:text-primary transition-colors">
                      {featuredPost.title}
                    </h2>
                    <p className="text-muted-foreground leading-relaxed mb-5 max-w-3xl text-pretty">
                      {featuredPost.excerpt}
                    </p>
                    <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground mb-5">
                      <span className="flex items-center gap-1.5"><User className="size-3.5" />{featuredPost.author}</span>
                      <span className="flex items-center gap-1.5"><Clock className="size-3.5" />{featuredPost.readTime}阅读</span>
                      <span>{featuredPost.date}</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {featuredPost.tags.map((tag) => (
                        <span key={tag} className="flex items-center gap-1 text-xs text-muted-foreground bg-secondary px-2.5 py-1 rounded-md">
                          <Tag className="size-3" />{tag}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </div>

            {/* Post Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((post) => (
                <Link key={post.slug} href={`/blog/${getBlogUrlSlug(post)}`}>
                  <Card className="h-full border-border card-hover">
                    {post.coverImage && (
                      <img
                        src={post.coverImage.src}
                        alt={post.coverImage.alt}
                        className="aspect-[16/9] w-full object-cover"
                      />
                    )}
                    <CardContent className="p-6 flex flex-col gap-4 h-full">
                      <div className="flex items-center justify-between">
                        <Badge variant="secondary" className="text-xs">{post.category}</Badge>
                        <span className="text-xs text-muted-foreground">{post.date}</span>
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-foreground mb-2 leading-snug hover:text-primary transition-colors text-balance">
                          {post.title}
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                          {post.excerpt}
                        </p>
                      </div>
                      <Separator />
                      <div className="flex items-center justify-between text-xs text-muted-foreground">
                        <span className="flex items-center gap-1.5"><User className="size-3" />{post.author}</span>
                        <span className="flex items-center gap-1.5"><Clock className="size-3" />{post.readTime}阅读</span>
                      </div>
                      <div className="flex items-center text-sm font-medium text-primary gap-1">
                        阅读全文 <ArrowRight className="size-3.5" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>

            {/* Load more */}
            <div className="text-center mt-12">
              <button className="px-8 py-3 rounded-xl border border-border text-sm font-medium text-foreground hover:bg-secondary transition-colors">
                加载更多文章
              </button>
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section className="py-16 px-4 sm:px-6 section-blue-bg">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-foreground mb-3">订阅每周干货</h2>
            <p className="text-muted-foreground mb-8 text-pretty">
              每周一篇精选文章，SEO、GEO、私域运营实战干货，直接发送到您的邮箱。
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-sm mx-auto">
              <input
                type="email"
                placeholder="输入您的邮箱地址"
                className="flex-1 px-4 py-3 rounded-xl border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring text-sm"
              />
              <button className="bg-primary text-primary-foreground px-6 py-3 rounded-xl text-sm font-medium hover:bg-primary/90 transition-colors whitespace-nowrap">
                立即订阅
              </button>
            </div>
            <p className="text-xs text-muted-foreground mt-3">不发垃圾邮件，随时可取消订阅</p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
