import type { Metadata } from "next"
import Link from "next/link"
import { notFound, permanentRedirect } from "next/navigation"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { getBlogPost, getBlogSlugs, getBlogUrlSlug } from "@/lib/blog-data"
import { defaultRegisterUrl } from "@/lib/product-links"
import { ArrowLeft, Clock, User, Tag, Calendar } from "lucide-react"

const BASE_URL = "https://weishuangyun.fkw.com"

type Props = { params: Promise<{ slug: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const decodedSlug = decodeURIComponent(slug)
  const post = getBlogPost(decodedSlug)
  if (!post) return {}
  const urlSlug = getBlogUrlSlug(post)

  return {
    title: post.title,
    description: post.description,
    keywords: post.tags,
    authors: [{ name: post.author }],
    alternates: {
      canonical: `${BASE_URL}/blog/${urlSlug}`,
    },
    openGraph: {
      type: "article",
      locale: "zh_CN",
      url: `${BASE_URL}/blog/${urlSlug}`,
      title: post.title,
      description: post.description,
      siteName: "维双云",
      publishedTime: post.date,
      authors: [post.author],
      tags: post.tags,
      images: post.coverImage ? [{ url: post.coverImage.src, alt: post.coverImage.alt }] : undefined,
    },
  }
}

export function generateStaticParams() {
  return getBlogSlugs().map((slug) => ({ slug }))
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const decodedSlug = decodeURIComponent(slug)
  const post = getBlogPost(decodedSlug)
  if (!post) notFound()
  const urlSlug = getBlogUrlSlug(post)
  if (decodedSlug !== urlSlug) permanentRedirect(`/blog/${urlSlug}`)

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    author: {
      "@type": "Person",
      name: post.author,
    },
    publisher: {
      "@type": "Organization",
      name: "维双云",
      url: BASE_URL,
    },
    datePublished: post.date,
    dateModified: post.date,
    url: `${BASE_URL}/blog/${urlSlug}`,
    keywords: post.tags.join(", "),
    articleSection: post.category,
    image: post.coverImage ? `${BASE_URL}${post.coverImage.src}` : undefined,
    inLanguage: "zh-CN",
  }

  const lines = post.content.split("\n")

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main className="pt-16">
        <article className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
          {/* Breadcrumb */}
          <nav aria-label="面包屑导航" className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
            <Link href="/" className="hover:text-primary transition-colors">首页</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-primary transition-colors">博客</Link>
            <span>/</span>
            <span className="text-foreground line-clamp-1">{post.title}</span>
          </nav>

          {/* Category + Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            <Badge className="bg-primary text-primary-foreground">{post.category}</Badge>
            {post.tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="text-xs">
                <Tag className="size-3 mr-1" />
                {tag}
              </Badge>
            ))}
          </div>

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground leading-tight text-balance mb-6">
            {post.title}
          </h1>

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-5 text-sm text-muted-foreground mb-8">
            <span className="flex items-center gap-1.5"><User className="size-4" />{post.author}</span>
            <span className="flex items-center gap-1.5"><Calendar className="size-4" />{post.date}</span>
            <span className="flex items-center gap-1.5"><Clock className="size-4" />{post.readTime}阅读</span>
          </div>

          {post.coverImage && (
            <figure className="mb-10 overflow-hidden rounded-xl border border-border bg-card">
              <img
                src={post.coverImage.src}
                alt={post.coverImage.alt}
                className="aspect-[16/9] w-full object-cover"
              />
            </figure>
          )}

          <Separator className="mb-10" />

          {/* Content */}
          <div className="prose prose-lg max-w-none text-foreground leading-relaxed">
            {lines.map((line, i) => {
              if (line.startsWith("## ")) {
                return <h2 key={i} className="text-2xl font-bold text-foreground mt-10 mb-4">{line.slice(3)}</h2>
              }
              if (line.startsWith("### ")) {
                return <h3 key={i} className="text-xl font-semibold text-foreground mt-7 mb-3">{line.slice(4)}</h3>
              }
              const imageMatch = line.match(/^!\[(.*)\]\((.*)\)$/)
              if (imageMatch) {
                return (
                  <figure key={i} className="my-8 overflow-hidden rounded-xl border border-border bg-card">
                    <img src={imageMatch[2]} alt={imageMatch[1]} className="w-full object-cover" />
                  </figure>
                )
              }
              if (line.startsWith("| ")) {
                return null // 表格简化处理
              }
              if (line.trim() === "") {
                return <div key={i} className="mb-3" />
              }
              return (
                <p key={i} className="text-muted-foreground leading-relaxed mb-4 text-pretty">
                  {line}
                </p>
              )
            })}
          </div>

          <Separator className="my-12" />

          {/* Back link */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
          >
            <ArrowLeft className="size-4" />
            返回博客列表
          </Link>
        </article>

        {/* CTA */}
        <section className="py-16 px-4 sm:px-6 section-blue-bg border-t border-border">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-foreground mb-3">准备好开始了吗？</h2>
            <p className="text-muted-foreground mb-8">免费试用维双云，专属顾问一对一指导您快速上线。</p>
            <a
              href={defaultRegisterUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
            >
              免费试用
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
