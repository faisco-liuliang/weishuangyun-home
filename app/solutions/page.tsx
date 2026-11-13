import type { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { BreadcrumbJsonLd } from "@/components/seo/json-ld"
import { ArrowRight, LayoutTemplate } from "lucide-react"
import { industrySolutions } from "@/lib/industry-solutions"

const BASE_URL = "https://wsy.fkw.com"

export const metadata: Metadata = {
  title: "行业解决方案 - 餐饮、美业、健身瑜伽、烘焙茶饮、家政服务小程序",
  description: "维双云面向餐饮、美业、健身瑜伽、烘焙咖啡茶饮和家政服务等本地商家，提供门店展示、预约、简单会员记录和线下经营工具。",
  keywords: ["餐饮小程序", "美业预约小程序", "健身瑜伽小程序", "咖啡店小程序", "家政服务小程序"],
  alternates: { canonical: `${BASE_URL}/solutions` },
}

export default function SolutionsPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "首页", url: BASE_URL }, { name: "行业解决方案", url: `${BASE_URL}/solutions` }]} />
      <Header />
      <main className="pt-16">
        <section className="hero-dark-bg px-4 py-12 sm:px-6 sm:py-16">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-3 text-sm font-semibold text-orange-300">行业解决方案</p>
            <h1 className="mb-5 text-3xl font-bold leading-tight text-white sm:text-4xl">为本地门店匹配合适的小程序方案</h1>
            <p className="mx-auto max-w-2xl text-base leading-7 text-slate-300">从门店展示、客户预约到线下开单，先按您的经营场景选择合适的起步方案；具体功能与版本范围以当期说明为准。</p>
          </div>
        </section>
        <section className="px-4 py-16 sm:px-6">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {industrySolutions.map((solution) => (
                <Link key={solution.slug} href={`/solutions/${solution.slug}`} className="group overflow-hidden rounded-2xl border border-border bg-card transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg">
                  <div className="relative h-44 overflow-hidden bg-secondary">
                    <img src={solution.image} alt={solution.imageAlt} className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" />
                    <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1 text-sm font-semibold text-primary shadow-sm">{solution.name}</span>
                  </div>
                  <div className="p-6">
                    <h2 className="mb-3 text-lg font-bold leading-7 text-foreground">{solution.title}</h2>
                    <p className="mb-5 line-clamp-3 text-sm leading-6 text-muted-foreground">{solution.description}</p>
                    <span className="inline-flex items-center gap-1 text-sm font-medium text-primary">查看行业方案 <ArrowRight className="size-4" /></span>
                  </div>
                </Link>
              ))}
              <a href="https://yk.fkw.com/model/?_ta=9611" target="_blank" rel="noopener noreferrer" className="group flex min-h-[360px] flex-col justify-between rounded-2xl border border-dashed border-primary/35 bg-gradient-to-br from-blue-50 via-card to-violet-50 p-7 transition-all hover:-translate-y-1 hover:border-primary hover:shadow-lg">
                <div>
                  <div className="mb-8 flex size-14 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-sm"><LayoutTemplate className="size-7" /></div>
                  <p className="mb-3 text-sm font-semibold text-primary">门店通模板库</p>
                  <h2 className="mb-3 text-2xl font-bold text-foreground">更多行业模板</h2>
                  <p className="leading-7 text-muted-foreground">餐饮、美业、健身瑜伽、生活服务等更多行业模板，按经营场景挑选并免费试用。</p>
                </div>
                <span className="inline-flex items-center gap-1 text-sm font-medium text-primary">免费试用更多模板 <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" /></span>
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
