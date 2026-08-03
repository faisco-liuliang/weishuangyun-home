import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, ShoppingCart, Globe, GraduationCap, CalendarCheck, Store, Zap } from "lucide-react"

const products = [
  {
    name: "私域商城",
    tagline: "商城小程序 + 私域复购",
    desc: "用商城小程序承接内容流量，再通过会员、优惠券、拼团和分销把一次成交变成持续复购。",
    href: "/products/mall",
    icon: ShoppingCart,
    iconColor: "text-blue-600",
    iconBg: "bg-blue-50",
    badge: "热门",
    badgeColor: "bg-blue-100 text-blue-700",
    features: ["AI 商品文案", "小程序商城", "分销体系", "私域运营"],
  },
  {
    name: "企业官网",
    tagline: "营销型官网 + SEO/GEO",
    desc: "不只搭建页面，而是围绕关键词、案例、FAQ 和表单转化，做一个能被搜索和 AI 理解的获客入口。",
    href: "/products/website",
    icon: Globe,
    iconColor: "text-sky-600",
    iconBg: "bg-sky-50",
    badge: "SEO 必备",
    badgeColor: "bg-sky-100 text-sky-700",
    features: ["AI 建站", "SEO 优化", "GEO 内容", "表单线索"],
  },
  {
    name: "教育系统",
    tagline: "AI 题库 + 知识付费",
    desc: "AI 题库导入、智能组卷、直播录播和知识付费，快速搭建可招生、可交付的在线学校。",
    href: "/products/education",
    icon: GraduationCap,
    iconColor: "text-violet-600",
    iconBg: "bg-violet-50",
    badge: "新品",
    badgeColor: "bg-violet-100 text-violet-700",
    features: ["AI 题库", "直播课堂", "付费课程", "学员管理"],
  },
  {
    name: "轻应用",
    tagline: "低成本小程序入口",
    desc: "适合门诊、美业、家政、本地服务快速上线预约、表单和服务说明，先把线索承接起来。",
    href: "/products/booking",
    icon: CalendarCheck,
    iconColor: "text-emerald-600",
    iconBg: "bg-emerald-50",
    badge: "灵活定制",
    badgeColor: "bg-emerald-100 text-emerald-700",
    features: ["AI 表单", "在线预约", "服务管理", "消息提醒"],
  },
  {
    name: "门店系统",
    tagline: "门店会员 + 到店转化",
    desc: "把门店展示、预约、会员、核销和活动放到同一套小程序里，让本地流量能被承接和复购。",
    href: "/products/store",
    icon: Store,
    iconColor: "text-orange-600",
    iconBg: "bg-orange-50",
    badge: "连锁推荐",
    badgeColor: "bg-orange-100 text-orange-700",
    features: ["AI 经营分析", "多门店管理", "会员体系", "数据报表"],
  },
  {
    name: "GEO 优化系统",
    tagline: "AI 搜索品牌曝光",
    desc: "围绕豆包、元宝、DeepSeek 等 AI 问答场景布局品牌内容，让企业更容易被模型理解和推荐。",
    href: "/products/geo",
    icon: Zap,
    iconColor: "text-amber-600",
    iconBg: "bg-amber-50",
    badge: "新品上线",
    badgeColor: "bg-amber-100 text-amber-700",
    features: ["AI 可见度", "品牌智库", "内容创作", "竞品监控"],
  },
]

export function ProductsGrid() {
  return (
    <section className="py-24 px-4 sm:px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-3">
            产品中心
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">
            官网、小程序与 GEO 内容布局，形成线上获客闭环
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty">
            企业不只是需要一个网站，更需要一个能被客户找到、被 AI 理解、能承接咨询的线上入口。
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {products.map((product) => (
            <Link key={product.name} href={product.href}>
              <Card className="h-full border-border hover:border-primary/30 card-hover cursor-pointer bg-card">
                <CardContent className="p-5 flex flex-col gap-4 h-full">
                  <div className="flex items-start justify-between">
                    <div className={`size-11 rounded-xl flex items-center justify-center ${product.iconBg}`}>
                      <product.icon className={`size-5 ${product.iconColor}`} />
                    </div>
                    <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${product.badgeColor}`}>
                      {product.badge}
                    </span>
                  </div>

                  <div>
                    <h3 className="font-bold text-foreground text-base">{product.name}</h3>
                    <p className="text-xs text-muted-foreground mt-0.5">{product.tagline}</p>
                  </div>

                  <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                    {product.desc}
                  </p>

                  <div className="flex flex-wrap gap-1.5">
                    {product.features.map((f) => (
                      <span
                        key={f}
                        className="text-xs bg-secondary text-secondary-foreground px-2 py-0.5 rounded-md"
                      >
                        {f}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center text-sm font-medium text-primary gap-1 mt-auto pt-1">
                    了解详情
                    <ArrowRight className="size-3.5" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}

          {/* "View all" card for larger layout balance */}
          <div className="sm:col-span-2 lg:col-span-3 xl:col-span-1 hidden xl:flex">
            <Link href="/pricing" className="flex-1">
              <Card className="h-full border-dashed border-primary/30 bg-accent/40 hover:bg-accent card-hover cursor-pointer flex items-center justify-center">
                <CardContent className="p-5 flex flex-col items-center text-center gap-3">
                  <div className="size-11 rounded-xl bg-primary/10 flex items-center justify-center">
                    <ArrowRight className="size-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-bold text-foreground">查看全部套餐</p>
                    <p className="text-xs text-muted-foreground mt-1">各产品详细定价方案</p>
                  </div>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
