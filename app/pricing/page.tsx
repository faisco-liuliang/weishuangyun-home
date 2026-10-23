import type { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { buttonVariants } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { ContactQrButton } from "@/components/contact/contact-qr-button"
import { PricingHeroCarousel } from "@/components/pricing/pricing-hero-carousel"
import { OtherProductsMenu } from "@/components/products/other-products-menu"
import { cn } from "@/lib/utils"
import { productRegisterUrls } from "@/lib/product-links"
import {
  ArrowDown,
  ArrowRight,
  BadgeCheck,
  CalendarDays,
  CheckCircle,
  Clock3,
  GraduationCap,
  LayoutTemplate,
  ShieldCheck,
  ShoppingBag,
  Store,
} from "lucide-react"

export const metadata: Metadata = {
  title: "价格中心 - 维双云 AI 赋能全产品套餐",
  description:
    "维双云价格中心，覆盖 AI 建站、私域商城、门店系统、AI 题库教育系统、服务预约、AI 营销工具等产品套餐。",
  keywords: ["维双云价格", "AI 建站价格", "商城小程序价格", "企业官网套餐", "门店系统价格"],
  alternates: { canonical: "https://wsy.fkw.com/pricing" },
  openGraph: {
    url: "https://wsy.fkw.com/pricing",
    title: "价格中心 - 维双云 AI 赋能全产品套餐",
    description: "多产品线清晰报价，支持多年优惠与渠道特惠，适合 AI 建站、商城、门店、教育和营销增长场景。",
  },
}

const products = [
  {
    id: "website",
    name: "企业官网",
    icon: LayoutTemplate,
    summary: "快速搭建网站，AI 辅助与 SEO 配置以版本说明为准。",
    startPrice: "¥698/年起",
    bestFor: "品牌展示 / 百度收录 / 表单获客",
    promo: "买三年送三年",
    source: "渠道特惠价可叠加",
    plans: [
      {
        name: "维双云门店通内测版",
        originalPrice: "0",
        price: "198",
        priceLabel: "维双云专属内测版",
        priceNote: "仅限顾问确认资格的客户开通",
        note: "适合预算有限、先验证门店经营链路的客户",
        features: ["基础门店展示", "线上预约", "简单会员信息记录", "开单收银", "员工业绩统计", "不支持在线支付和多门店升级"],
      },
      {
        name: "网站标准版",
        originalPrice: "698",
        price: "698",
        note: "适合展示型官网快速上线",
        features: ["免费版全部功能", "支持 SEO", "不限流量", "第三方代码支持", "资源库 10G 空间", "电脑 + 手机 + 微网站"],
      },
      {
        name: "网站推广版",
        originalPrice: "1,198",
        price: "1,198",
        note: "适合百度收录与内容获客",
        popular: true,
        features: ["标准版全部功能", "百度优化系统", "百度不收录可协助复盘", "AI 智能写作", "多语言与网站统计", "资源库 50G 空间"],
      },
      {
        name: "网站皇冠版",
        originalPrice: "1,998",
        price: "1,998",
        note: "适合内容、支付和持续增长",
        features: ["推广版全部功能", "支持在线支付", "SEO 搜索优化", "知识付费系统", "AI 文章配图与 TDK", "资源库 2T 空间"],
      },
      {
        name: "网站平台版",
        originalPrice: "2,998",
        price: "2,998",
        note: "适合更高容量和平台型运营",
        features: ["商务版全部功能", "更高容量支持", "多端展示与内容管理", "企业官网和线索承接", "多语言能力以版本说明为准", "搜索配置不承诺固定收录"],
      },
    ],
  },
  {
    id: "mall",
    name: "私域商城",
    icon: ShoppingBag,
    summary: "单商户/多商户商城，交易、会员、分销和高阶营销玩法。",
    startPrice: "¥1,998/年起",
    bestFor: "商品销售 / 会员运营 / 分销活动",
    promo: "买2年送2年",
    source: "渠道特惠价可叠加",
    plans: [
      {
        name: "商城基础版",
        originalPrice: "1,998",
        price: "1,998",
        note: "适合品牌展示与核心交易",
        features: ["免费版全部功能", "品牌展示 + 核心交易", "多种支付方式", "物流信息跟踪", "会员/订单一体化管理", "10G 资源空间"],
      },
      {
        name: "商城旗舰版",
        originalPrice: "3,998",
        price: "3,998",
        note: "适合渠道拓展和社交营销",
        popular: true,
        features: ["基础版全部功能", "会员储值", "分销推广", "1.5T 超大容量", "砍价/拼团等社交玩法", "私域直播/短视频导购"],
      },
      {
        name: "商城至尊版",
        originalPrice: "5,998",
        price: "5,998",
        note: "适合一站 3 端和高阶玩法",
        features: ["旗舰版全部功能", "一站 3 端多端铺货", "推广获客/成交转化/复购", "N 元 M 件/礼品卡", "2T 资源空间", "AI 试衣/AI 销售按需扩展"],
      },
      {
        name: "多商户直营版",
        originalPrice: "6,998",
        price: "6,998",
        note: "适合多门店直营网点统一线上经营",
        features: ["总部统一管理", "门店推荐", "智能派单", "买2年送2年"],
      },
      {
        name: "多商户招商版",
        originalPrice: "9,998",
        price: "9,998",
        note: "适合商家入驻和平台运营",
        features: ["子商户独立管理", "统一对账", "商户页面展示", "买2年送2年"],
      },
      {
        name: "多商户至尊版",
        originalPrice: "14,998",
        price: "14,998",
        note: "适合同时做直营网和招商的平台型商家",
        features: ["多端经营", "独立收款", "配送", "裂变", "超大容量", "买2年送2年"],
      },
    ],
  },
  {
    id: "store",
    name: "门店系统",
    icon: Store,
    summary: "搭建门店小程序，门店会员、预约、收银能力以版本说明为准。",
    startPrice: "¥998/年起",
    bestFor: "门店收银 / 会员储值 / 连锁管理",
    promo: "买2年送2年",
    source: "渠道特惠价可叠加",
    plans: [
      {
        name: "门店免费版",
        originalPrice: "0",
        price: "0",
        note: "适合免费开通和基础体验",
        features: ["自定义店铺信息", "基础服务展示", "基础预约能力", "基础订单能力", "有限服务与产品数量", "具体额度以官方功能表为准"],
      },
      {
        name: "门店基础版",
        originalPrice: "998",
        price: "998",
        note: "适合基础收银、预约和会员沉淀",
        features: ["海量模板 3 分钟建店", "20 个产品/服务", "在线预约与销售", "进销存/开单收银/记账", "支持 2,000 位会员", "AI 店推助手"],
      },
      {
        name: "门店商业版",
        originalPrice: "2,998",
        price: "2,998",
        note: "适合会员营销和预约增长",
        popular: true,
        features: ["基础版全部功能", "会员数 5000 位", "日预约 1000 个", "会员标签 1000 个", "进店有礼/优惠券/发券宝", "微信通知触达员工和会员"],
      },
      {
        name: "门店旗舰版",
        originalPrice: "3,998",
        price: "3,998",
        note: "适合全域引流和私域裂变",
        features: ["商业版全部功能", "会员/商品/预约容量全开放", "抖音小程序/美团团购核销", "全民推广/员工分销/拼团", "付费券包/第二件半价", "AI 美业测评/换发型"],
      },
    ],
  },
  {
    id: "education",
    name: "教育系统",
    icon: GraduationCap,
    summary: "三站合一教育系统，课程、教务、题库、招生和直播教学。",
    startPrice: "¥1,998/年起",
    bestFor: "课程销售 / 学员管理 / 直播录播",
    promo: "买2年送2年",
    source: "渠道特惠价可叠加",
    plans: [
      {
        name: "教育标准版",
        originalPrice: "1,998",
        price: "1,998",
        note: "适合课程服务和基础教务",
        features: ["微官网 H5 + 微信小程序", "电脑端 + 百度 SEO + 独立域名", "知识付费 + 线下课程", "基础答题/作业/家校互评", "智能排课 + 扫码签到", "班级/学员/预约上课"],
      },
      {
        name: "教育专业版",
        originalPrice: "2,998",
        price: "2,998",
        note: "适合全渠道招生和助学互动",
        popular: true,
        features: ["标准版全部功能", "抖音小程序 + 百度小程序", "会员标签/等级/付费会员", "3 万题目 + 智能批量录入", "闯关打卡 + 证书颁发", "直播教学 + 推广员分销"],
      },
      {
        name: "教育旗舰版",
        originalPrice: "3,998",
        price: "3,998",
        note: "适合精细化运营和实物售卖",
        features: ["专业版全部功能", "老带新转介绍", "会员储值 + 赠送金额", "1T 容量/单文件 5G", "20 万题库 + 高级刷题", "学习积分/积分商城/实物商品"],
      },
      {
        name: "教育至尊版",
        originalPrice: "5,998",
        price: "5,998",
        note: "适合规模化增长和高容量运营",
        features: ["超高清课程", "题库", "商品", "空间和文件承载", "买2年送2年"],
      },
    ],
  },
  {
    id: "booking",
    name: "轻应用",
    icon: CalendarDays,
    summary: "搭建多端小程序，支持平台和发布范围以版本说明为准。",
    startPrice: "¥698/年起",
    bestFor: "预约排班 / 到店核销 / 服务订单",
    promo: "买2年送2年",
    source: "渠道特惠价可叠加",
    plans: [
      {
        name: "小程序标准版",
        originalPrice: "698",
        price: "698",
        note: "适合基础展示和信息收集",
        features: ["免费版全部功能", "微信/百度端", "访客不限", "服务预约", "万能表单", "资源空间 1G"],
      },
      {
        name: "小程序推广版",
        originalPrice: "1,198",
        price: "1,198",
        note: "适合品牌展示和流量加持",
        popular: true,
        features: ["标准版全部功能", "抖音/快手等 6 端合一", "隐藏制作信息", "24 种流量/商机转化", "视频号/抖音直播间跳转", "资源空间 100G"],
      },
      {
        name: "小程序商务版",
        originalPrice: "1,998",
        price: "1,998",
        note: "适合行业营销和支付预约",
        features: ["推广版全部功能", "会员等级", "微信支付（表单/服务预约）", "推广员", "集 Call/督学", "查询缴费/计算报价/1T 空间"],
      },
      {
        name: "小程序平台版",
        originalPrice: "2,998",
        price: "2,998",
        note: "适合同城信息和平台型运营",
        features: ["商务版全部功能", "同城/社区", "付费发布", "付费置顶", "内容订阅", "2T 资源空间"],
      },
    ],
  },
]

const productDisplayOrder = ["store", "mall", "booking", "education", "website"]
const orderedProducts = productDisplayOrder.map((id) => products.find((product) => product.id === id)!)
const primaryPricingProducts = orderedProducts.slice(0, 4)

const comparisonRows = [
  ["建站与装修", "模板装修", "高级页面", "定制页面/专题"],
  ["营销能力", "基础活动", "裂变活动", "组合活动策划"],
  ["数据分析", "基础报表", "经营看板", "专项复盘报告"],
  ["服务支持", "在线客服", "顾问协助上线", "专属实施与培训"],
  ["适合阶段", "刚上线", "稳定经营", "多团队增长"],
]

export default function PricingPage() {
  return (
    <>
      <Header />
      <main className="pt-16 bg-background">
        <section className="relative overflow-hidden border-b border-border bg-[#f7f9fd] px-4 py-7 sm:px-6 lg:py-10">
          <div className="absolute inset-x-0 top-0 h-[520px] bg-[radial-gradient(circle_at_76%_18%,rgba(77,139,255,0.18),transparent_29%),radial-gradient(circle_at_22%_30%,rgba(147,197,253,0.22),transparent_25%)]" />
          <div className="absolute left-1/2 top-24 size-96 -translate-x-1/2 rounded-full bg-blue-200/20 blur-3xl" />
          <div className="relative z-10 mx-auto grid max-w-7xl gap-5 lg:grid-cols-[252px_minmax(0,1fr)] lg:items-stretch">
            <aside className="hidden rounded-[26px] bg-slate-950 p-3 text-primary-foreground shadow-[0_24px_70px_-28px_rgba(15,23,42,0.65)] lg:block">
              <div className="rounded-[18px] border border-white/10 bg-white/[0.06] px-4 py-4">
                <p className="text-xs font-medium tracking-[0.16em] text-blue-300">PRICE GUIDE</p>
                <p className="mt-1.5 text-lg font-bold text-white">产品报价导航</p>
                <p className="mt-1 text-xs leading-5 text-slate-400">按产品快速查看套餐与活动权益</p>
              </div>
              <nav className="mt-3 grid gap-1">
                {primaryPricingProducts.map(({ id, name, summary, icon: Icon }) => (
                  <Link
                    key={id}
                    href={`#${id}`}
                    className="group flex items-start gap-3 rounded-2xl px-3 py-3 transition-all hover:bg-white/[0.1]"
                  >
                    <span className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-xl bg-white/[0.09] text-blue-200 transition-colors group-hover:bg-blue-500 group-hover:text-white">
                      <Icon className="size-4" />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-[15px] font-bold tracking-tight text-white">{name}</span>
                      <span className="mt-1 block text-[11px] font-medium leading-4 text-slate-400 transition-colors group-hover:text-slate-300">{summary}</span>
                    </span>
                  </Link>
                ))}
              </nav>
              <OtherProductsMenu />
              <div className="mx-2 mt-3 border-t border-white/10 pt-3 text-center text-[11px] text-slate-500">价格透明，顾问协助选对版本</div>
            </aside>

            <PricingHeroCarousel />
          </div>
        </section>

        <section id="pricing-quotes" className="scroll-mt-24 px-4 py-12 sm:px-6">
          <div className="mx-auto max-w-7xl">
            <div className="mb-8 rounded-xl border-2 border-primary/25 bg-[linear-gradient(135deg,#eff6ff_0%,#ffffff_58%,#f5f3ff_100%)] p-4 shadow-md shadow-primary/10 sm:p-5">
              <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-3">
                  <span className="flex size-8 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground shadow-sm">1</span>
                  <div>
                    <h2 className="font-bold text-foreground">选择产品，快速查看对应报价</h2>
                    <p className="mt-0.5 text-sm text-muted-foreground">点击下方产品，页面会自动跳转到该产品的套餐和价格。</p>
                  </div>
                </div>
                <div className="flex w-fit items-center gap-1.5 rounded-full border border-primary/15 bg-white px-3 py-1.5 text-xs font-semibold text-primary shadow-sm">
                  <ArrowDown className="size-3.5" />
                  共 {orderedProducts.length} 类产品
                </div>
              </div>
              <div className="flex flex-wrap gap-2.5">
                {orderedProducts.map(({ id, name, icon: Icon }) => (
                  <Link
                    key={id}
                    href={`#${id}`}
                    aria-label={`查看${name}套餐报价`}
                    className="inline-flex min-h-12 items-center gap-2 rounded-lg border border-slate-200 bg-white px-4 text-sm font-semibold text-slate-700 shadow-sm transition-all hover:-translate-y-0.5 hover:border-primary hover:bg-primary hover:text-primary-foreground hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                  >
                    <Icon className="size-4 shrink-0" />
                    {name}
                    <ArrowDown className="size-3.5 opacity-60" />
                  </Link>
                ))}
              </div>
            </div>

            <div className="space-y-12">
              {orderedProducts.map((product) => {
                const Icon = product.icon
                return (
                  <section key={product.id} id={product.id} className="scroll-mt-24">
                    <div className="mb-5 flex flex-col gap-4 rounded-lg border border-border bg-muted/40 p-5 sm:flex-row sm:items-center sm:justify-between">
                      <div className="flex items-start gap-3">
                        <div className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                          <Icon className="size-5" />
                        </div>
                        <div>
                          <h2 className="text-xl font-bold text-foreground">{product.name}</h2>
                          <p className="mt-1 text-sm leading-6 text-muted-foreground">{product.summary}</p>
                        </div>
                      </div>
                      <div className="rounded-lg border border-primary/15 bg-white px-4 py-3">
                        <p className="text-xs text-muted-foreground">起步价格</p>
                        <p className="mt-1 text-lg font-bold text-primary">{product.startPrice}</p>
                      </div>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                      {product.plans.map((plan) => (
                        <Card
                          key={plan.name}
                          className={cn(
                            "relative rounded-lg border-border bg-card shadow-sm",
                            plan.popular && "border-primary shadow-xl shadow-primary/10"
                          )}
                        >
                          {plan.popular && (
                            <div className="absolute right-4 top-4">
                              <Badge className="bg-primary text-primary-foreground">推荐</Badge>
                            </div>
                          )}
                          <CardHeader className="p-4 pb-2.5 pr-16">
                            <CardTitle className="text-base">{plan.name}</CardTitle>
                            <p className="text-sm text-muted-foreground">{plan.note}</p>
                          </CardHeader>
                          <CardContent className="flex flex-1 flex-col gap-3.5 p-4 pt-0">
                            <div>
                                <div className="flex items-end gap-1">
                                  <span className="text-3xl font-bold tracking-tight text-foreground">¥{plan.price}</span>
                                  <span className="pb-1 text-sm text-muted-foreground">/年</span>
                                </div>
                                <div className="mt-2 flex flex-wrap items-center gap-2 text-xs">
                                  <span className="rounded-full bg-primary/10 px-2 py-1 font-medium text-primary">买二送二活动价</span>
                                  {plan.originalPrice ? (
                                    <span className="text-muted-foreground">
                                      参考原价 <span className="line-through">¥{plan.originalPrice}/年</span>
                                    </span>
                                  ) : (
                                    <span className="text-muted-foreground">不参与买2年送2年</span>
                                  )}
                                </div>
                                <p className="mt-2.5 rounded-md bg-blue-50 px-3 py-1.5 text-xs font-medium leading-5 text-primary">
                                  {product.id === "mall" && !plan.originalPrice ? "不参与买2年送2年" : product.promo} · {product.source}
                                </p>
                            </div>
                            <Separator />
                            <ul className="flex flex-col gap-2">
                              {plan.features.map((feature) => (
                                <li key={feature} className="flex gap-2 text-[13px] leading-5 text-foreground">
                                  <CheckCircle className="mt-0.5 size-4 shrink-0 text-primary" />
                                  <span>{feature}</span>
                                </li>
                              ))}
                            </ul>
                            {product.id === "store" && plan.name === "门店入门版" ? (
                              <ContactQrButton
                                variant="outline"
                                qrSrc="/qr-198.png"
                                description="198元小程序为内测入门版本，无法直接购买，请添加客服咨询开通"
                                className={cn(buttonVariants({ variant: "outline" }), "mt-auto w-full")}
                              >
                                立即试用
                              </ContactQrButton>
                            ) : (
                              <a
                                href={productRegisterUrls[product.id as keyof typeof productRegisterUrls] ?? productRegisterUrls.website}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={cn(
                                  buttonVariants({ variant: plan.popular ? "default" : "outline" }),
                                  "mt-auto w-full"
                                )}
                              >
                                立即购买
                              </a>
                            )}
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </section>
                )
              })}
            </div>
          </div>
        </section>

        <section className="border-y border-border bg-white px-4 py-16 sm:px-6">
          <div className="mx-auto max-w-7xl">
            <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-sm font-semibold text-primary">版本权益</p>
                <h2 className="mt-2 text-2xl font-bold text-foreground sm:text-3xl">三档版本怎么选</h2>
              </div>
              <p className="max-w-xl text-sm leading-6 text-muted-foreground">
                大多数企业从中间档开始最稳：功能够用、活动完整、顾问能协助上线。
              </p>
            </div>
            <div className="overflow-x-auto rounded-lg border border-border">
              <div className="min-w-[720px]">
                <div className="grid grid-cols-4 bg-muted text-sm font-semibold text-foreground">
                  <div className="p-4">能力项</div>
                  <div className="p-4">基础档</div>
                  <div className="p-4">推荐档</div>
                  <div className="p-4">高级档</div>
                </div>
                {comparisonRows.map(([label, basic, pro, top]) => (
                  <div key={label} className="grid grid-cols-4 border-t border-border text-sm">
                    <div className="p-4 font-medium text-foreground">{label}</div>
                    <div className="p-4 text-muted-foreground">{basic}</div>
                    <div className="p-4 font-medium text-primary">{pro}</div>
                    <div className="p-4 text-muted-foreground">{top}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="px-4 py-16 sm:px-6">
          <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-3">
            {[
              { icon: ShieldCheck, title: "费用边界说明", text: "套餐内功能、第三方成本和增值服务以当期价格页、报价单及服务约定为准。" },
              { icon: Clock3, title: "上线有人带", text: "从资料整理、页面搭建到基础配置，顾问按步骤陪跑，不让你自己摸索。" },
              { icon: BadgeCheck, title: "可升级可续费", text: "业务增长后可升级版本，已付年限和活动权益会由顾问协助核算。" },
            ].map(({ icon: Icon, title, text }) => (
              <Card key={title} className="rounded-lg border-border bg-card">
                <CardContent className="p-6">
                  <Icon className="size-6 text-primary" />
                  <h3 className="mt-4 font-semibold text-foreground">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">{text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="hero-dark-bg px-4 py-16 sm:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <Badge className="mb-5 bg-white text-primary">顾问报价更准确</Badge>
            <h2 className="text-3xl font-bold text-white">不知道选哪个版本？</h2>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-slate-300">
              告诉我们你的业务类型、门店数量、是否需要商城/小程序/SEO，我们会给你推荐最合适的版本和活动年限。
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <ContactQrButton size="lg" className="h-12 bg-primary px-10 text-primary-foreground hover:bg-primary/90">
                免费获取方案
              </ContactQrButton>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
