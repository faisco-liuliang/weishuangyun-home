import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Quote } from "lucide-react"

const cases = [
  {
    company: "某连锁餐饮品牌",
    industry: "餐饮连锁",
    product: "门店系统",
    result: "3 个月会员数破 10 万，复购率提升 45%",
    quote: "维双云帮我们把线下 20 家门店的会员体系全部打通，运营效率翻了两倍。",
    logo: "餐",
    logoColor: "bg-orange-100 text-orange-600",
  },
  {
    company: "某在线教育机构",
    industry: "K12 教育",
    product: "教育系统",
    result: "上线首月学员报名突破 2,000 人",
    quote: "从搭建到招生的周期取决于资料准备、版本选择和上线安排，实际效果以项目记录为准。",
    logo: "教",
    logoColor: "bg-violet-100 text-violet-600",
  },
  {
    company: "某精品电商品牌",
    industry: "美妆个护",
    product: "私域商城",
    result: "私域月 GMV 突破 80 万元",
    quote: "微商城的分销功能让我们的老客带新客效果非常好，裂变速度超出预期。",
    logo: "美",
    logoColor: "bg-rose-100 text-rose-600",
  },
  {
    company: "某律师事务所",
    industry: "法律服务",
    product: "企业官网",
    result: "百度自然搜索流量增长 320%",
    quote: "建站 3 个月后，搜索关键词排名持续上升，每月新增线索量稳步增长。",
    logo: "律",
    logoColor: "bg-sky-100 text-sky-600",
  },
]

export function CasesPreview() {
  return (
    <section className="py-24 px-4 sm:px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-14 gap-4">
          <div>
            <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-3">
              成功案例
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-balance">
              服务规模与案例以当期公开资料为准
            </h2>
          </div>
          <Link
            href="/cases"
            className="flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors shrink-0"
          >
            查看全部案例
            <ArrowRight className="size-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {cases.map((c) => (
            <Card key={c.company} className="border-border bg-card card-hover overflow-hidden">
              <CardContent className="p-6 flex flex-col gap-4">
                <div className="flex items-start gap-4">
                  <div className={`size-12 rounded-xl flex items-center justify-center text-lg font-bold shrink-0 ${c.logoColor}`}>
                    {c.logo}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="font-bold text-foreground text-sm">{c.company}</h3>
                      <Badge variant="secondary" className="text-xs shrink-0">
                        {c.industry}
                      </Badge>
                      <Badge className="text-xs bg-accent text-accent-foreground shrink-0">
                        {c.product}
                      </Badge>
                    </div>
                    <p className="text-sm font-semibold text-primary mt-1">{c.result}</p>
                  </div>
                </div>

                <div className="border-l-2 border-primary/20 pl-4">
                  <Quote className="size-4 text-muted-foreground/40 mb-1" />
                  <p className="text-sm text-muted-foreground italic leading-relaxed">
                    {c.quote}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
