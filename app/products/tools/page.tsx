import type { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { buttonVariants } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { ContactQrButton } from "@/components/contact/contact-qr-button"
import { ProductDetailSections } from "@/components/products/product-detail-sections"
import { cn } from "@/lib/utils"
import { productRegisterUrls } from "@/lib/product-links"
import { ArrowRight, FileText, Vote, Megaphone, QrCode, ClipboardList, ImageIcon, Video, Sparkles } from "lucide-react"

export const metadata: Metadata = {
  title: "AI 营销工具 - AI 海报、短视频、H5 活动页等营销工具",
  description:
    "维双云 AI 营销工具箱，提供 AI 海报、AI 短视频、AI 抠图、H5 营销活动页、微传单、有奖投票、问卷调查等工具，低成本策划高转化活动。",
  keywords: ["AI 海报", "AI 短视频", "AI 抠图", "H5 营销", "微传单", "活动策划", "营销工具"],
}

const tools = [
  { icon: Sparkles, name: "AI 海报设计", desc: "输入活动主题、产品卖点和行业信息，快速生成促销海报、招生海报、门店宣传图。", badge: "AI", color: "text-blue-600", bg: "bg-blue-50" },
  { icon: Video, name: "AI 短视频", desc: "套用行业爆款模板，自动生成文案、配音和视频素材，适合同城获客和内容种草。", badge: "AI", color: "text-violet-600", bg: "bg-violet-50" },
  { icon: FileText, name: "H5 活动页", desc: "拖拽设计，支持动效、音乐、视频，一键分享微信朋友圈，快速传播。", badge: "热门", color: "text-blue-600", bg: "bg-blue-50" },
  { icon: ImageIcon, name: "AI 商品图处理", desc: "支持商品抠图、白底图、图片修复和尺寸调整，提升电商详情页与广告素材效率。", badge: "实用", color: "text-sky-600", bg: "bg-sky-50" },
  { icon: Vote, name: "有奖投票", desc: "微信投票活动，支持拉票、防刷票、奖品核销，简单有效的互动营销。", badge: "", color: "text-violet-600", bg: "bg-violet-50" },
  { icon: ClipboardList, name: "问卷调查", desc: "多题型问卷，满意度调研、市场调研、需求收集，数据自动汇总分析。", badge: "", color: "text-emerald-600", bg: "bg-emerald-50" },
  { icon: Megaphone, name: "抽奖活动", desc: "大转盘、刮刮卡、红包封面，节日营销、周年庆活动一键搞定。", badge: "新品", color: "text-orange-600", bg: "bg-orange-50" },
  { icon: QrCode, name: "活码管理", desc: "微信活码统一管理，渠道追踪、防封号、自动备份，私域引流必备工具。", badge: "", color: "text-rose-600", bg: "bg-rose-50" },
]

const detailCapabilities = [
  { title: "10分钟轻松搭建，3天快速上线", desc: "先搭好活动页、报名表、海报素材和客服承接入口，让营销活动更快从想法变成可转发页面。" },
  { title: "AI 素材生产", desc: "围绕节日、活动、商品和门店场景生成海报、短视频脚本、配音和推广素材。" },
  { title: "H5 活动和微传单", desc: "适合新品发布、门店开业、节日促销、招生推广和品牌传播，一键生成可分享页面。" },
  { title: "互动裂变工具", desc: "投票、抽奖、问卷、助力、渠道码等玩法，用低成本活动收集线索和提升转发。" },
  { title: "私域承接和追踪", desc: "活码、表单、标签和数据汇总，帮助团队知道线索来自哪里、哪些活动有效。" },
]

const detailScenarios = [
  { title: "节日和节点营销", desc: "适合每月都需要海报、短视频、活动页和朋友圈素材的门店或品牌。" },
  { title: "低成本线索收集", desc: "通过问卷、抽奖、报名表和优惠券，把流量沉淀到微信或客服线索池。" },
  { title: "团队缺设计和剪辑", desc: "用 AI 工具降低素材制作门槛，让销售、运营和门店员工也能快速出图出视频。" },
]

const toolSpecs = [
  { name: "AI 素材", values: ["海报、商品图、基础文案", "短视频脚本、配音、批量素材", "品牌素材库、活动模板和复用规范"] },
  { name: "活动页面", values: ["H5 活动页、微传单", "投票、抽奖、问卷、报名", "多活动并行、渠道追踪和数据复盘"] },
  { name: "私域承接", values: ["表单和客服线索", "活码、标签、渠道码", "多渠道留资和客户分层"] },
  { name: "适用频率", values: ["偶发活动", "每月活动和门店日常营销", "品牌长期活动矩阵"] },
  { name: "组合建议", values: ["单独开通工具", "搭配官网、商城或小程序", "搭配门店/教育/商城做全链路活动"] },
]

export default function ToolsPage() {
  return (
    <>
      <Header />
      <main className="pt-16">
        <section className="hero-dark-bg py-24 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-3xl">
              <Badge className="mb-5 bg-rose-900/60 text-rose-300 border-rose-700/50">AI 内容营销工具箱</Badge>
              <h1 className="text-4xl sm:text-5xl font-bold text-white mb-5 text-balance">
                AI 营销工具全家桶
                <br />
                <span className="text-rose-400">低成本高效营销</span>
              </h1>
              <p className="text-lg text-slate-300 mb-8 leading-relaxed max-w-xl text-pretty">
                AI 海报、AI 短视频、商品图处理、H5 活动页、投票活动、问卷调查……无需技术，快速创作，轻松实现品牌传播与线索收集。
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
          tone="rose"
          eyebrow="营销工具灵活开通"
          title="把营销素材、活动页面和线索收集做成日常工具箱"
          description="营销工具围绕弹幕互动、全景展示、朋友圈传播、品牌活动和获客拉新展开，并结合 AI 海报、AI 短视频、H5 活动页、问卷投票和活码管理，让团队能低成本连续做活动。"
          capabilities={detailCapabilities}
          scenarios={detailScenarios}
          promoTitle="按需开通 + 渠道特惠"
          promoNote="营销工具支持按需开通，也可与商城、官网、门店系统组合购买，活动优惠以顾问方案为准。"
          specColumns={["轻量工具", "活动套装", "品牌套装"]}
          specs={toolSpecs}
          registerUrl={productRegisterUrls.booking}
        />

        <section className="py-20 px-4 sm:px-6 bg-background">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-3 text-balance">AI 内容 + 活动工具，覆盖全场景需求</h2>
              <p className="text-muted-foreground text-lg max-w-xl mx-auto">从内容生产、商品素材到拉新留存，每个营销环节都有专业工具支持</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {tools.map((tool) => (
                <Card key={tool.name} className="border-border card-hover">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className={`size-11 rounded-xl flex items-center justify-center ${tool.bg}`}>
                        <tool.icon className={`size-5 ${tool.color}`} />
                      </div>
                      {tool.badge && (
                        <span className="text-xs font-medium bg-primary/10 text-primary px-2 py-0.5 rounded-full">
                          {tool.badge}
                        </span>
                      )}
                    </div>
                    <h3 className="font-bold text-foreground mb-2">{tool.name}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{tool.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 px-4 sm:px-6 bg-primary">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">开启您的营销工具之旅</h2>
            <p className="text-blue-100 mb-8">营销工具按需购买，无需整套购入，灵活实惠</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <ContactQrButton size="lg" className="bg-white text-primary hover:bg-blue-50 h-12 px-10">
                免费咨询 <ArrowRight className="size-4 ml-2" />
              </ContactQrButton>
              <Link href="/pricing" className={cn(buttonVariants({ variant: "outline", size: "lg" }), "border-white text-white hover:bg-white/10 bg-transparent h-12 px-8")}>
                查看完整价格
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
