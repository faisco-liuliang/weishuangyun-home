import type { Metadata } from "next"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Hero } from "@/components/home/hero"
import { ProductsGrid } from "@/components/home/products-grid"
import { Advantages } from "@/components/home/advantages"
import { CasesPreview } from "@/components/home/cases-preview"
import { BlogPreview } from "@/components/home/blog-preview"
import { HomeFaq } from "@/components/home/home-faq"
import { CTA } from "@/components/home/cta"

export const metadata: Metadata = {
  title: "维双云 - 企业官网、小程序与 GEO 获客解决方案",
  description:
    "维双云面向中小企业提供官网建设、小程序搭建、SEO/GEO 内容布局和私域转化方案，帮助品牌在搜索与 AI 问答场景中获得更多曝光。",
  alternates: { canonical: "https://weishuangyun.fkw.com" },
  openGraph: {
    url: "https://weishuangyun.fkw.com",
    title: "维双云 - 企业官网、小程序与 GEO 获客解决方案",
    description: "维双云帮助中小企业低成本搭建线上入口，并通过内容布局提升搜索和 AI 问答场景中的品牌曝光。",
  },
}

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ProductsGrid />
        <Advantages />
        <CasesPreview />
        <BlogPreview />
        <HomeFaq />
        <CTA />
      </main>
      <Footer />
    </>
  )
}
