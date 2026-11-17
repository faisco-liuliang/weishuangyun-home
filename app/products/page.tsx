import type { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { buttonVariants } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { ContactQrButton } from "@/components/contact/contact-qr-button"
import { cn } from "@/lib/utils"
import { ArrowRight, ShoppingCart, Globe, GraduationCap, CalendarCheck, Store } from "lucide-react"

export const metadata: Metadata = {
  title: "产品中心 - 门店、商城、预约与教育小程序产品",
  description:
    "维双云产品中心，提供私域商城、门店系统、轻应用预约、教育系统与企业官网等标准化小程序及线上经营产品。",
  keywords: ["维双云产品", "AI 建站", "私域商城", "企业官网", "教育系统", "门店管理"],
}

const products = [
  {
    name: "私域商城",
    tagline: "AI 营销商城，小程序 + 会员 + 分销闭环",
    desc: "AI 商品文案、活动建议、分销裂变、拼团秒杀、直播带货，打造完整私域电商闭环。",
    href: "/products/mall",
    icon: ShoppingCart,
    color: "text-blue-600",
    bg: "bg-blue-50",
    badge: "热门",
    highlights: ["1站3端商城", "分销裂变", "直播电商", "拼团砍价"],
    priceFrom: "1,998",
  },
  {
    name: "企业官网",
    tagline: "AI 建站 + SEO，官网内容持续增长",
    desc: "AI 辅助生成页面、栏目和内容，兼顾百度 SEO 与 AI 搜索可见度，让客户主动找到你。",
    href: "/products/website",
    icon: Globe,
    color: "text-sky-600",
    bg: "bg-sky-50",
    badge: "SEO 必备",
    highlights: ["AI 建站", "百度精准收录", "内容运营", "表单线索收集"],
    priceFrom: "698",
  },
  {
    name: "教育系统",
    tagline: "AI 题库 + 直播课 + 知识付费",
    desc: "AI 题库导入、智能组卷、直播录播、报名缴费和学员管理，快速搭建在线学校。",
    href: "/products/education",
    icon: GraduationCap,
    color: "text-violet-600",
    bg: "bg-violet-50",
    badge: "新品",
    highlights: ["AI 题库导入", "智能组卷", "直播课堂", "知识付费"],
    priceFrom: "1,998",
  },
  {
    name: "轻应用",
    tagline: "AI 表单/预约/内容发布小程序",
    desc: "AI 辅助生成表单、预约页面和服务说明，适合门诊、美业、家政等服务快速上线。",
    href: "/products/booking",
    icon: CalendarCheck,
    color: "text-emerald-600",
    bg: "bg-emerald-50",
    badge: "服务行业",
    highlights: ["多端发布", "在线预约", "万能表单", "自动提醒"],
    priceFrom: "698",
  },
  {
    name: "门店系统",
    tagline: "AI 辅助门店经营，多门店会员一体化",
    desc: "连锁门店统一管理，AI 辅助会员分层、活动建议和经营数据解读，提升整体运营效率。",
    href: "/products/store",
    icon: Store,
    color: "text-orange-600",
    bg: "bg-orange-50",
    badge: "连锁推荐",
    highlights: ["AI 经营分析", "多门店管理", "会员体系", "经营报表"],
    priceFrom: "198",
  },
]

export default function ProductsPage() {
  return (
    <>
      <Header />
      <main className="pt-16">
        {/* Hero */}
        <section className="border-b border-border section-blue-bg px-4 py-16 sm:px-6 sm:py-20">
          <div className="mx-auto max-w-5xl">
            <div className="text-center">
              <p className="text-sm font-semibold tracking-[0.14em] text-primary">产品中心</p>
              <h1 className="mx-auto mt-4 max-w-3xl text-3xl font-bold leading-[1.25] tracking-[0.01em] text-foreground sm:text-5xl">
                覆盖常见经营场景的<br className="hidden sm:block" />小程序产品
              </h1>
              <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
                从门店经营、商品交易到服务预约与教育培训，按实际业务选择合适的产品版本。
              </p>
            </div>

            <div className="mx-auto mt-8 flex max-w-3xl flex-wrap justify-center gap-2">
              {["门店经营", "私域商城", "服务预约", "教育培训"].map((scene) => (
                <span key={scene} className="rounded-full border border-blue-100 bg-white/75 px-4 py-2 text-sm font-medium text-slate-700 shadow-sm">
                  {scene}
                </span>
              ))}
            </div>

            <div className="mx-auto mt-8 grid max-w-4xl gap-5 rounded-2xl border border-blue-100 bg-white/80 p-5 shadow-sm sm:grid-cols-[150px_1fr] sm:p-6">
              <div>
                <p className="text-sm font-bold text-primary">标准化搭建</p>
                <p className="mt-1 text-xs leading-5 text-muted-foreground">模板配置 · 顾问协助</p>
              </div>
              <p className="text-sm leading-7 text-muted-foreground">
                标准版本可通过模板和后台配置完成，适合希望快速上线、后续自行调整的商家。源码交付、私有化部署、复杂接口及特殊业务流程需要单独确认是否支持。
              </p>
            </div>
          </div>
        </section>

        {/* Products */}
        <section className="py-16 px-4 sm:px-6 bg-background">
          <div className="max-w-7xl mx-auto">
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {products.map((product) => (
                <Card key={product.name} className="border-border card-hover flex h-full overflow-hidden">
                  <CardContent className="p-0">
                    <div className="flex h-full flex-col">
                      {/* Visual side */}
                      <div className={`flex items-center justify-center p-7 ${product.bg}`}>
                        <product.icon className={`size-12 ${product.color}`} />
                      </div>
                      {/* Content side */}
                      <div className="flex flex-1 flex-col gap-4 p-6">
                        <div className="flex flex-wrap items-center gap-2">
                          <h2 className="text-xl font-bold text-foreground">{product.name}</h2>
                          <Badge className="bg-accent text-accent-foreground text-xs">{product.badge}</Badge>
                        </div>
                        <p className="text-sm font-medium text-foreground">{product.tagline}</p>
                        <p className="text-sm leading-6 text-muted-foreground">{product.desc}</p>
                        <div className="flex flex-wrap gap-2">
                          {product.highlights.map((h) => (
                            <span key={h} className="text-sm bg-secondary text-secondary-foreground px-3 py-1 rounded-md">
                              {h}
                            </span>
                          ))}
                        </div>
                        <div className="mt-auto flex flex-col gap-4 border-t border-border pt-4">
                          <div>
                            <span className="text-xs text-muted-foreground">起售价</span>
                            <div className="flex items-baseline gap-1">
                              {product.priceFrom === "按需购买" ? (
                                <span className="text-lg font-bold text-foreground">按需购买</span>
                              ) : (
                                <>
                                  <span className="text-2xl font-bold text-primary">¥{product.priceFrom}</span>
                                  <span className="text-sm text-muted-foreground">/年起</span>
                                </>
                              )}
                            </div>
                          </div>
                          <div className="flex gap-3">
                            <Link href={product.href} className={cn(buttonVariants())}>
                              了解详情 <ArrowRight className="size-4 ml-1.5" />
                            </Link>
                            <ContactQrButton variant="outline">
                              免费咨询
                            </ContactQrButton>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-4 sm:px-6 hero-dark-bg">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">不确定选哪款产品？</h2>
            <p className="text-slate-300 mb-8">联系专属顾问，免费为您推荐最适合的解决方案</p>
            <ContactQrButton size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground h-12 px-10">
              免费顾问咨询 <ArrowRight className="size-4 ml-2" />
            </ContactQrButton>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
