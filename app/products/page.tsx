import type { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { buttonVariants } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { ContactQrButton } from "@/components/contact/contact-qr-button"
import { cn } from "@/lib/utils"
import { ArrowRight, ShoppingCart, Globe, GraduationCap, CalendarCheck, Store, Wrench } from "lucide-react"

export const metadata: Metadata = {
  title: "产品中心 - AI 赋能 6 大产品线，覆盖企业全业务场景",
  description:
    "维双云产品中心，提供 AI 建站、私域商城、教育系统、轻应用预约、门店管理、AI 营销内容工具等 6 大产品线，一站式满足中小企业数字化增长需求。",
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
    priceFrom: "998",
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
    priceFrom: "349",
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
    priceFrom: "999",
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
    priceFrom: "349",
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
    priceFrom: "99",
  },
  {
    name: "营销工具",
    tagline: "AI 海报、短视频、H5 活动工具",
    desc: "AI 海报、AI 短视频、H5 活动页、投票抽奖和问卷调查，低成本完成内容获客与活动裂变。",
    href: "/products/tools",
    icon: Wrench,
    color: "text-rose-600",
    bg: "bg-rose-50",
    badge: "多合一",
    highlights: ["AI 海报", "AI 短视频", "H5 活动页", "有奖投票"],
    priceFrom: "按需购买",
  },
]

export default function ProductsPage() {
  return (
    <>
      <Header />
      <main className="pt-16">
        {/* Hero */}
        <section className="py-20 px-4 sm:px-6 section-blue-bg border-b border-border">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-3">产品中心</p>
            <h1 className="text-4xl sm:text-5xl font-bold leading-[1.24] tracking-[0.015em] text-foreground mb-5 text-balance">
              AI 赋能 6 大产品线，覆盖企业全业务场景
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-[1.8] tracking-[0.01em]">
              无论您是实体门店、教育机构、电商品牌还是服务业，维双云都能把 AI 获客、线上交易、会员复购和经营管理串成一套完整体系。
            </p>
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
