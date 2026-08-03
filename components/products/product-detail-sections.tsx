import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { buttonVariants } from "@/components/ui/button"
import { ContactQrButton } from "@/components/contact/contact-qr-button"
import { cn } from "@/lib/utils"
import { defaultRegisterUrl } from "@/lib/product-links"
import { ArrowRight, BadgeCheck, CheckCircle, Clock3, Gift } from "lucide-react"

type SpecRow = {
  name: string
  values: string[]
  section?: boolean
}

type ProductPlan = {
  name: string
  price: string
  originalPrice?: string
  note?: string
  popular?: boolean
  highlight?: boolean
  features: string[]
}

type ProductDetailSectionsProps = {
  tone?: "blue" | "sky" | "emerald" | "violet" | "orange" | "amber" | "rose"
  eyebrow: string
  title: string
  description: string
  capabilities: Array<{ title: string; desc: string }>
  scenarios: Array<{ title: string; desc: string }>
  promoNote?: string
  promoTitle?: string
  specTitle?: string
  specDescription?: string
  specColumns?: string[]
  specs?: SpecRow[]
  plans?: ProductPlan[]
  registerUrl?: string
}

const toneClass = {
  blue: "text-blue-600 bg-blue-50 border-blue-100",
  sky: "text-sky-600 bg-sky-50 border-sky-100",
  emerald: "text-emerald-600 bg-emerald-50 border-emerald-100",
  violet: "text-violet-600 bg-violet-50 border-violet-100",
  orange: "text-orange-600 bg-orange-50 border-orange-100",
  amber: "text-amber-600 bg-amber-50 border-amber-100",
  rose: "text-rose-600 bg-rose-50 border-rose-100",
}

export function ProductDetailSections({
  tone = "blue",
  eyebrow,
  title,
  description,
  capabilities,
  scenarios,
  promoNote = "限时活动：开通 2 年送 2 年，部分基础版本是否参与以顾问确认为准。",
  promoTitle = "买2年送2年",
  specTitle = "规格介绍",
  specDescription = "按常用版本整理核心规格，具体开通范围、赠送权益和实施内容以顾问方案确认为准。",
  specColumns = [],
  specs = [],
  plans = [],
  registerUrl = defaultRegisterUrl,
}: ProductDetailSectionsProps) {
  const columns = specColumns.length ? specColumns : ["基础版", "推荐版", "高阶版"]
  const tableTemplate = `minmax(160px, 0.9fr) repeat(${columns.length}, minmax(150px, 1fr))`

  return (
    <section className="border-b border-border bg-white px-4 py-16 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 grid gap-5 lg:grid-cols-[1fr_360px] lg:items-stretch">
          <div className="rounded-lg border border-border bg-muted/30 p-6 sm:p-8">
            <Badge className={cn("mb-5 border", toneClass[tone])}>
              <Gift className="size-3" />
              {eyebrow}
            </Badge>
            <h2 className="text-2xl font-bold text-foreground sm:text-3xl">{title}</h2>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-muted-foreground sm:text-base">{description}</p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <ContactQrButton className="bg-primary text-primary-foreground hover:bg-primary/90">
                领取活动方案
                <ArrowRight className="ml-2 size-4" />
              </ContactQrButton>
              <Link href="/pricing" className={cn(buttonVariants({ variant: "outline" }))}>
                查看价格中心
              </Link>
            </div>
          </div>

          <div className="rounded-lg border border-primary/15 bg-primary p-6 text-primary-foreground">
            <div className="flex items-center gap-3">
              <div className="flex size-11 items-center justify-center rounded-lg bg-white/15">
                <BadgeCheck className="size-5" />
              </div>
              <div>
                <p className="text-sm text-white/70">当前促销</p>
                <p className="text-2xl font-bold">{promoTitle}</p>
              </div>
            </div>
            <p className="mt-5 text-sm leading-6 text-white/78">{promoNote}</p>
            <div className="mt-5 grid gap-3">
              {[
                ["7 天体验", "先试用，再决定版本"],
                ["顾问陪跑", "从资料整理到上线配置"],
                ["价格透明", "功能、活动和第三方成本提前说明"],
              ].map(([label, text]) => (
                <div key={label} className="flex gap-3 rounded-lg bg-white/10 p-3">
                  <Clock3 className="mt-0.5 size-4 shrink-0 text-white" />
                  <p className="text-sm leading-5">
                    <span className="font-semibold">{label}</span>
                    <span className="text-white/70"> · {text}</span>
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1fr_0.85fr]">
          <div>
            <div className="mb-5">
              <p className="text-sm font-semibold text-primary">核心功能</p>
              <h3 className="mt-2 text-2xl font-bold text-foreground">把产品能力拆成可落地的经营动作</h3>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {capabilities.map((item) => (
                <Card key={item.title} className="rounded-lg border-border bg-card">
                  <CardContent className="p-5">
                    <div className="mb-3 flex items-center gap-2">
                      <CheckCircle className="size-4 text-primary" />
                      <h4 className="font-semibold text-foreground">{item.title}</h4>
                    </div>
                    <p className="text-sm leading-6 text-muted-foreground">{item.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <div className="mb-5">
              <p className="text-sm font-semibold text-primary">适用场景</p>
              <h3 className="mt-2 text-2xl font-bold text-foreground">哪些企业适合优先上</h3>
            </div>
            <div className="grid gap-4">
              {scenarios.map((item) => (
                <div key={item.title} className="rounded-lg border border-border bg-white p-5">
                  <h4 className="font-semibold text-foreground">{item.title}</h4>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {plans.length > 0 && (
          <div className="mt-12">
            <div className={cn("grid gap-4", plans.length > 3 ? "lg:grid-cols-2 xl:grid-cols-4" : "lg:grid-cols-3")}>
              {plans.map((plan) => {
                const emphasized = plan.popular ?? plan.highlight
                return (
                  <Card key={plan.name} className={cn("relative rounded-lg border-border bg-card", emphasized && "border-primary shadow-xl shadow-primary/10")}>
                    {emphasized && (
                      <div className="absolute right-4 top-4">
                        <Badge className="bg-primary text-primary-foreground">推荐</Badge>
                      </div>
                    )}
                    <CardContent className="flex h-full flex-col gap-4 p-5">
                      <div className="pr-16">
                        <h4 className="text-base font-bold text-foreground">{plan.name}</h4>
                        {plan.note && <p className="mt-1 text-sm leading-5 text-muted-foreground">{plan.note}</p>}
                      </div>
                      <div>
                        <div className="flex items-end gap-1">
                          <span className="text-3xl font-bold tracking-tight text-foreground">¥{plan.price}</span>
                          <span className="pb-1 text-sm text-muted-foreground">/年</span>
                        </div>
                        <div className="mt-2 flex flex-wrap items-center gap-2 text-xs">
                          <span className="rounded-full bg-primary/10 px-2 py-1 font-medium text-primary">优惠价</span>
                          {plan.originalPrice && plan.originalPrice !== "0" ? (
                            <span className="text-muted-foreground">
                              原价 <span className="line-through">¥{plan.originalPrice}/年</span>
                            </span>
                          ) : (
                            <span className="text-muted-foreground">免费起步</span>
                          )}
                        </div>
                      </div>
                      <div className="rounded-md bg-blue-50 px-3 py-2 text-xs font-medium leading-5 text-primary">
                        {promoTitle} · 渠道特惠可叠加
                      </div>
                      <ul className="mt-auto grid gap-2">
                        {plan.features.slice(0, 6).map((feature) => (
                          <li key={feature} className="flex gap-2 text-sm leading-5 text-foreground">
                            <CheckCircle className="mt-0.5 size-4 shrink-0 text-primary" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <a
                        href={registerUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={cn(
                          buttonVariants({ variant: emphasized ? "default" : "outline" }),
                          "mt-2 w-full"
                        )}
                      >
                        立即试用
                        <ArrowRight className="ml-2 size-4" />
                      </a>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        )}

        {specs.length > 0 && (
          <div className="mt-12">
            <div className="mb-5 flex flex-col justify-between gap-3 md:flex-row md:items-end">
              <div>
                <p className="text-sm font-semibold text-primary">版本规格</p>
                <h3 className="mt-2 text-2xl font-bold text-foreground">{specTitle}</h3>
              </div>
              <div className="flex max-w-2xl flex-col gap-3 md:items-end">
                <p className="text-sm leading-6 text-muted-foreground">{specDescription}</p>
                <a href={registerUrl} target="_blank" rel="noopener noreferrer" className={cn(buttonVariants({ size: "sm" }), "w-fit")}>
                  立即试用
                  <ArrowRight className="ml-2 size-4" />
                </a>
              </div>
            </div>
            <div className="overflow-x-auto rounded-lg border border-border bg-white shadow-sm">
              <div className="min-w-[760px]">
                <div
                  className="grid border-b border-border bg-muted/50 text-sm font-semibold text-foreground"
                  style={{ gridTemplateColumns: tableTemplate }}
                >
                  <div className="p-4">规格项</div>
                  {columns.map((column) => (
                    <div key={column} className="p-4">
                      {column}
                    </div>
                  ))}
                </div>
                {specs.map((row) =>
                  row.section ? (
                    <div key={row.name} className="border-b border-border bg-primary/5 px-4 py-3 text-sm font-bold text-primary">
                      {row.name}
                    </div>
                  ) : (
                    <div
                      key={row.name}
                      className="grid border-b border-border last:border-b-0"
                      style={{ gridTemplateColumns: tableTemplate }}
                    >
                      <div className="bg-muted/25 p-4 text-sm font-medium text-foreground">{row.name}</div>
                      {columns.map((column, index) => (
                        <div key={`${row.name}-${column}`} className="p-4 text-sm leading-6 text-muted-foreground">
                          {row.values[index] ?? "-"}
                        </div>
                      ))}
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
