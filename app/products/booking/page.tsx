import type { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { buttonVariants } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { ProductDetailSections } from "@/components/products/product-detail-sections"
import { cn } from "@/lib/utils"
import { productRegisterUrls } from "@/lib/product-links"
import { ArrowRight, CalendarCheck, Clock, Bell, Star, Map, MessageSquare, Sparkles } from "lucide-react"

export const metadata: Metadata = {
  title: "轻应用 / AI 表单与服务预约系统",
  description:
    "维双云轻应用服务预约系统，支持 AI 表单、服务预约、内容发布、服务管理、会员体系和评价系统，适合美业、医疗、教培、家政等服务行业。",
  keywords: ["AI 表单", "服务预约系统", "在线预约", "轻应用", "美业预约", "预约管理", "服务管理系统"],
}

const features = [
  { icon: Sparkles, title: "AI 表单生成", desc: "根据行业和业务目标，快速生成报名、咨询、报价、预约等表单字段和提示文案。" },
  { icon: CalendarCheck, title: "服务预约", desc: "客户手机扫码即可预约，服务时间、项目、人员一键选择，适合门诊、美业、家政和咨询排期。" },
  { icon: Clock, title: "智能排班", desc: "员工排班管理、服务时段配置、超额自动拒绝，轻松应对高峰期预约压力。" },
  { icon: Bell, title: "自动提醒", desc: "预约成功、到店前 1 小时、服务完成后自动发送微信提醒，减少爽约率。" },
  { icon: Map, title: "多端发布", desc: "支持微信、百度、抖音、头条、支付宝、快手等多端小程序场景，内容一次配置多端展示。" },
  { icon: Star, title: "服务评价", desc: "服务完成后自动触发评价邀请，好评展示增强信任，差评及时内部处理。" },
  { icon: MessageSquare, title: "内容与支付", desc: "支持内容展示、表单收集、在线支付、内容付费和流量主广告，兼顾展示与转化。" },
]

const plans = [
  { name: "小程序标准版", originalPrice: "698", price: "349", note: "适合基础展示和信息收集", features: ["免费版全部功能", "微信/百度端", "访客不限", "服务预约", "万能表单", "资源空间 1G"] },
  { name: "小程序推广版", originalPrice: "1,198", price: "599", popular: true, note: "适合品牌展示和流量加持", features: ["标准版全部功能", "抖音/快手等 6 端合一", "隐藏制作信息", "24 种流量/商机转化", "视频号/抖音直播间跳转", "资源空间 100G"] },
  { name: "小程序商务版", originalPrice: "1,998", price: "999", note: "适合行业营销和支付预约", features: ["推广版全部功能", "会员等级", "微信支付（表单/服务预约）", "推广员", "查询缴费/计算报价", "资源空间 1T"] },
  { name: "小程序平台版", originalPrice: "2,998", price: "1,499", note: "适合同城信息和平台型运营", features: ["商务版全部功能", "同城/社区", "付费发布", "付费置顶", "内容订阅", "资源空间 2T"] },
]

const detailCapabilities = [
  { title: "10分钟轻松搭建，3天快速上线", desc: "先完成服务项目、预约时段、表单字段和多端发布配置，服务型团队不用复杂开发也能上线。" },
  { title: "多端发布小程序", desc: "内容一次配置，可覆盖微信、百度、抖音、头条、支付宝、快手等多端小程序场景。" },
  { title: "服务预约和排班", desc: "服务项目、人员、时段、门店和提醒统一配置，减少人工排班和反复沟通。" },
  { title: "万能表单和在线支付", desc: "报名、咨询、报价、预约、信息收集和在线支付都能通过轻应用快速完成。" },
  { title: "内容付费与流量变现", desc: "支持内容展示、知识付费、同城信息发布和流量主广告，适合服务型企业做轻量变现。" },
]

const detailScenarios = [
  { title: "预约型服务", desc: "美业、口腔、体检、家政、维修、摄影、咨询等需要客户选择时间和项目的业务。" },
  { title: "活动报名和线索收集", desc: "招生报名、展会预约、资料领取、报价计算、需求调研等轻量获客场景。" },
  { title: "内容展示型小程序", desc: "适合想快速做品牌介绍、案例展示、服务说明和内容付费的小团队。" },
]

const bookingSpecs = [
  { name: "适用定位", values: ["基础展示和信息收集", "品牌展示和多端获客", "行业营销和支付预约", "同城信息和平台型运营"] },
  { name: "终端", values: [], section: true },
  { name: "发布端口", values: ["微信/百度端", "微信、百度、抖音、头条、支付宝、快手", "多端发布 + 支付能力", "多端发布 + 同城社区"] },
  { name: "微信小程序", values: ["支持", "支持", "支持", "支持"] },
  { name: "百度小程序", values: ["支持", "支持", "支持", "支持"] },
  { name: "抖音/头条/快手", values: ["按需配置", "支持", "支持", "支持"] },
  { name: "基础系统", values: [], section: true },
  { name: "自定义页面", values: ["约 100 个", "约 1000 个", "约 2000 个", "约 5000 个"] },
  { name: "自定义模块", values: ["约 1000 个", "约 1 万个", "约 3 万个", "约 3 万个"] },
  { name: "资源空间", values: ["1G", "100G", "1T", "2T"] },
  { name: "文件数量", values: ["约 1000 个", "约 10 万个", "约 20 万个", "约 30 万个"] },
  { name: "单个文件大小", values: ["约 50M", "约 100M", "约 500M", "约 1G"] },
  { name: "服务预约", values: [], section: true },
  { name: "服务预约", values: ["约 100 个服务", "约 500 个服务", "约 1 万个服务", "约 2 万个服务"] },
  { name: "预约订单数", values: ["约 1 万个", "不限", "不限", "不限"] },
  { name: "预约项类型", values: ["支持多种预约项", "支持多种预约项", "支持多种预约项", "支持多种预约项"] },
  { name: "服务分类/协议/限购", values: ["支持", "支持", "支持", "支持"] },
  { name: "访客/管理员通知", values: ["短信/邮件按需", "短信/邮件按需", "短信/邮件按需", "短信/邮件按需"] },
  { name: "内容与表单", values: [], section: true },
  { name: "表单能力", values: ["万能表单、报名咨询", "高级表单和数据导出", "表单支付、查询缴费、计算报价", "信息发布、付费置顶、内容订阅"] },
  { name: "文章数量", values: ["约 100 篇", "约 1 万篇", "约 10 万篇", "约 20 万篇"] },
  { name: "文章分类", values: ["约 10 个", "约 100 个", "约 1000 个", "约 5000 个"] },
  { name: "信息库/信息发布", values: ["基础展示", "支持", "支持", "支持同城/社区"] },
  { name: "查询系统/计算报价", values: ["按需配置", "支持", "支持", "支持"] },
  { name: "会员与营销", values: [], section: true },
  { name: "会员与营销", values: ["基础会员档案", "智能名片、商机雷达", "会员等级、推广员、集 Call", "同城社区、付费发布、更多容量"] },
  { name: "智能名片数量", values: ["约 100 个", "约 1000 个", "不限", "不限"] },
  { name: "会员标签/收藏", values: ["基础档案", "支持标签和收藏", "等级会员/付费会员", "平台型会员运营"] },
  { name: "支付能力", values: ["按需配置", "按需配置", "表单/服务预约支付", "付费发布/置顶/订阅"] },
  { name: "流量转化", values: ["基础咨询", "视频号/直播间跳转", "推广员和行业营销", "同城信息和平台运营"] },
  { name: "数据与服务", values: [], section: true },
  { name: "数据统计", values: ["基础数据", "流量/商机转化统计", "订单与会员统计", "平台数据和内容统计"] },
  { name: "适用团队", values: ["单店或小团队", "服务门店和获客团队", "预约、缴费、报名类业务", "同城平台和信息发布业务"] },
]

export default function BookingPage() {
  return (
    <>
      <Header />
      <main className="pt-16">
        <section className="hero-dark-bg px-4 py-14 sm:px-6 sm:py-24">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-3xl">
              <Badge className="mb-5 bg-emerald-900/60 text-emerald-300 border-emerald-700/50">10分钟轻松做小程序 · AI 表单 + 服务预约</Badge>
              <h1 className="text-3xl sm:text-5xl font-bold leading-[1.24] tracking-[0.015em] text-white mb-6 text-balance">
                10分钟轻松做小程序
                <br />
                <span className="text-emerald-400">让预约、表单和内容发布更简单</span>
              </h1>
              <p className="text-lg text-slate-300 mb-8 leading-[1.8] tracking-[0.01em] max-w-xl text-pretty">
                专为美业、医疗、教培、家政等服务行业设计，AI 表单、在线预约、智能排班、自动提醒和线索摘要，帮助服务型企业快速制作小程序并提升运营效率。
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a href={productRegisterUrls.booking} target="_blank" rel="noopener noreferrer" className={cn(buttonVariants({ size: "lg" }), "bg-primary hover:bg-primary/90 text-primary-foreground h-12 px-8")}>
                  免费试用 <ArrowRight className="size-4 ml-2" />
                </a>
                <Link href="/pricing" className={cn(buttonVariants({ variant: "outline", size: "lg" }), "border-slate-600 text-slate-200 hover:bg-slate-800 bg-transparent h-12")}>
                  查看价格
                </Link>
              </div>
            </div>
          </div>
        </section>

        <ProductDetailSections
          tone="emerald"
          eyebrow="轻应用限时体验"
          title="10分钟轻松做小程序，不做复杂开发也能上线"
          description="轻应用的重点不是重商城，而是用更低门槛完成展示、预约、表单、支付和内容发布。适合服务行业先跑通小程序获客流程，再逐步升级到商城或门店系统。"
          capabilities={detailCapabilities}
          scenarios={detailScenarios}
          promoTitle="买2年送2年 + 渠道特惠"
          promoNote="轻应用可先体验再选版本，可参与多年优惠和渠道特惠，最终版本权益以顾问确认为准。"
          specColumns={["标准版", "推广版", "商务版", "平台版"]}
          specs={bookingSpecs}
          plans={plans}
          registerUrl={productRegisterUrls.booking}
        />

        <section className="py-20 px-4 sm:px-6 bg-background">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-3 text-balance">AI 表单 + 服务预约，提升运营效率</h2>
              <p className="text-muted-foreground text-lg max-w-xl mx-auto">从咨询留资、预约排班到回访复购，完整管理服务生命周期</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((f) => (
                <Card key={f.title} className="border-border card-hover">
                  <CardContent className="p-6">
                    <div className="size-11 rounded-xl bg-emerald-50 flex items-center justify-center mb-4">
                      <f.icon className="size-5 text-emerald-600" />
                    </div>
                    <h3 className="font-bold text-foreground mb-2">{f.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 px-4 sm:px-6 bg-primary">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">让服务预约更专业</h2>
            <p className="text-blue-100 mb-8">免费试用，无需技术背景即可上线</p>
            <a href={productRegisterUrls.booking} target="_blank" rel="noopener noreferrer" className={cn(buttonVariants({ size: "lg" }), "bg-white text-primary hover:bg-blue-50 h-12 px-10")}>
              免费试用 <ArrowRight className="size-4 ml-2" />
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
