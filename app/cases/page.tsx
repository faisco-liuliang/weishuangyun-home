import type { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { buttonVariants } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { defaultRegisterUrl } from "@/lib/product-links"
import { ArrowRight, Quote } from "lucide-react"

export const metadata: Metadata = {
  title: "成功案例 - 5 万+ 企业客户的数字化增长故事",
  description:
    "查看维双云服务的真实客户案例，涵盖餐饮连锁、在线教育、电商零售、专业服务等行业，了解企业如何借助维双云实现数字化转型与业绩增长。",
  keywords: ["维双云案例", "建站案例", "私域商城案例", "企业官网案例", "客户案例"],
  alternates: { canonical: "https://wsy.fkw.com/cases" },
  openGraph: {
    url: "https://wsy.fkw.com/cases",
    title: "成功案例 - 维双云 5 万+ 企业客户的数字化增长故事",
    description: "餐饮、教育、零售、服务业真实案例，看企业如何通过维双云实现业绩增长。",
  },
}

const industries = ["全部", "电商零售", "餐饮连锁", "在线教育", "专业服务", "美业健康", "制造企业"]

const cases = [
  {
    company: "某连锁餐饮品牌",
    industry: "餐饮连锁",
    product: "门店系统",
    result: "会员数破 10 万，复购率提升 45%",
    duration: "3 个月",
    quote: "维双云帮我们把线下 20 家门店的会员体系全部打通，运营效率翻了两倍，以前需要 5 个人管理的工作，现在 2 个人就能搞定。",
    metrics: [
      { label: "会员增长", value: "10 万+" },
      { label: "复购率提升", value: "+45%" },
      { label: "管理人效", value: "+150%" },
    ],
    logo: "餐",
    logoColor: "bg-orange-100 text-orange-600",
  },
  {
    company: "某 K12 在线教育机构",
    industry: "在线教育",
    product: "教育系统",
    result: "上线首月学员报名突破 2,000 人",
    duration: "5 天上线",
    quote: "从决定做在线课程到正式招生只用了 5 天，直播功能非常稳定，家长和老师都很满意，第一个月就回本了。",
    metrics: [
      { label: "报名学员", value: "2,000+" },
      { label: "上线周期", value: "5 天" },
      { label: "首月回本", value: "100%" },
    ],
    logo: "教",
    logoColor: "bg-violet-100 text-violet-600",
  },
  {
    company: "某美妆品牌",
    industry: "电商零售",
    product: "私域商城",
    result: "私域月 GMV 突破 80 万元",
    duration: "6 个月",
    quote: "微商城的分销功能让我们的老客带新客效果非常好，裂变速度超出预期，6 个月内粉丝从 3000 增长到 5 万。",
    metrics: [
      { label: "月 GMV", value: "80 万+" },
      { label: "粉丝增长", value: "16 倍" },
      { label: "分销佣金", value: "节省 30%" },
    ],
    logo: "美",
    logoColor: "bg-rose-100 text-rose-600",
  },
  {
    company: "某律师事务所",
    industry: "专业服务",
    product: "企业官网",
    result: "百度搜索流量增长 320%",
    duration: "3 个月",
    quote: "建站 3 个月后，核心关键词排名持续上升，每月新增线索量从个位数增长到 50+ 条，转化质量很高。",
    metrics: [
      { label: "搜索流量", value: "+320%" },
      { label: "月新增线索", value: "50+" },
      { label: "关键词排名", value: "首页" },
    ],
    logo: "律",
    logoColor: "bg-sky-100 text-sky-600",
  },
  {
    company: "某连锁美发品牌",
    industry: "美业健康",
    product: "轻应用",
    result: "线上预约率达到 85%，爽约率降低 60%",
    duration: "1 个月",
    quote: "之前客户预约全靠人工记录，经常有记错时间的情况。上线预约系统后，顾客自己选时间，自动提醒，爽约率直接降了 60%。",
    metrics: [
      { label: "线上预约率", value: "85%" },
      { label: "爽约率降低", value: "-60%" },
      { label: "客服工作量", value: "-70%" },
    ],
    logo: "发",
    logoColor: "bg-emerald-100 text-emerald-600",
  },
]

export default function CasesPage() {
  return (
    <>
      <Header />
      <main className="pt-16">
        {/* Hero */}
        <section className="py-20 px-4 sm:px-6 section-blue-bg border-b border-border">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-3">成功案例</p>
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 text-balance">
              5 万+ 企业的增长故事
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto text-pretty leading-relaxed">
              从餐饮连锁到在线教育，从电商零售到专业服务，各行业企业都在用维双云实现数字化增长。
            </p>
            <a
              href="https://www.fkw.com/excellentCase.html?_ta=9611"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(buttonVariants({ size: "lg" }), "mt-8 h-11 px-7")}
            >
              查看更多 <ArrowRight className="size-4 ml-2" />
            </a>
          </div>
        </section>

        {/* Cases Grid */}
        <section className="py-16 px-4 sm:px-6 bg-background">
          <div className="max-w-7xl mx-auto">
            {/* Industry Filter */}
            <div className="flex flex-wrap gap-2 mb-10">
              {industries.map((ind) => (
                <span
                  key={ind}
                  className={`text-sm px-4 py-1.5 rounded-full cursor-pointer transition-colors ${
                    ind === "全部"
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-secondary-foreground hover:bg-accent hover:text-accent-foreground"
                  }`}
                >
                  {ind}
                </span>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {cases.map((c) => (
                <Card key={c.company} className="border-border card-hover overflow-hidden">
                  <CardContent className="p-6 flex flex-col gap-5">
                    {/* Header */}
                    <div className="flex items-start gap-4">
                      <div className={`size-14 rounded-xl flex items-center justify-center text-xl font-bold shrink-0 ${c.logoColor}`}>
                        {c.logo}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-wrap items-center gap-2 mb-1">
                          <h3 className="font-bold text-foreground">{c.company}</h3>
                          <Badge variant="secondary" className="text-xs">{c.industry}</Badge>
                          <Badge className="text-xs bg-accent text-accent-foreground">{c.product}</Badge>
                        </div>
                        <p className="text-sm font-semibold text-primary">{c.result}</p>
                        <p className="text-xs text-muted-foreground mt-0.5">上线周期：{c.duration}</p>
                      </div>
                    </div>

                    {/* Metrics */}
                    <div className="grid grid-cols-3 gap-3">
                      {c.metrics.map((m) => (
                        <div key={m.label} className="text-center bg-secondary rounded-lg p-3">
                          <div className="text-lg font-bold text-primary">{m.value}</div>
                          <div className="text-xs text-muted-foreground mt-0.5">{m.label}</div>
                        </div>
                      ))}
                    </div>

                    {/* Quote */}
                    <div className="border-l-2 border-primary/20 pl-4">
                      <Quote className="size-4 text-muted-foreground/30 mb-1" />
                      <p className="text-sm text-muted-foreground italic leading-relaxed">{c.quote}</p>
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
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">让维双云也成为您的增长故事</h2>
            <p className="text-slate-300 mb-8">免费试用，专属顾问为您量身定制方案</p>
            <a href={defaultRegisterUrl} target="_blank" rel="noopener noreferrer" className={cn(buttonVariants({ size: "lg" }), "bg-primary hover:bg-primary/90 text-primary-foreground h-12 px-10")}>
              免费试用 <ArrowRight className="size-4 ml-2" />
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
