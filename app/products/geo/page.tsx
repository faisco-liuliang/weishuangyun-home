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
import { ArrowRight, Zap, Bot, Globe, TrendingUp, Search, Eye } from "lucide-react"

export const metadata: Metadata = {
  title: "GEO 优化系统 - AI 搜索时代的品牌曝光优化",
  description:
    "维双云 GEO（生成式引擎优化）系统，深度适配 DeepSeek、豆包、通义千问、百度 AI 等主流大模型，帮助品牌抢占 AI 推荐位，实现 AI 时代的流量增长。",
  keywords: ["GEO 优化", "生成式引擎优化", "AI 搜索优化", "DeepSeek 曝光", "豆包推荐", "AI 品牌优化"],
}

const features = [
  { icon: Bot, title: "AI 可见度诊断", desc: "输入品牌、产品或企业名称，诊断在 DeepSeek、豆包、元宝、通义、百度 AI 等平台的声量表现。" },
  { icon: Search, title: "提问词挖掘", desc: "深挖用户高频提问词，围绕购买决策、行业痛点和竞品对比布局品牌答案。" },
  { icon: Globe, title: "专属品牌智库", desc: "整合企业文档、官网内容、案例和竞品素材，沉淀可供 AI 引用的品牌知识资产。" },
  { icon: Eye, title: "品牌监控", desc: "定期追踪品牌提及率、首推率、呈现方式和竞品差距，及时发现 AI 搜索曝光波动。" },
  { icon: TrendingUp, title: "AI 内容创作", desc: "贴合主流大模型内容偏好，生成问答、专题页、案例和科普文章，提升推荐概率。" },
  { icon: Zap, title: "智能信源布局", desc: "拆解大模型回答信源，围绕高权重平台布局内容，让品牌信息更容易被引用。" },
]

const plans = [
  { name: "GEO 基础版", originalPrice: "3,996", price: "1,998", note: "适合精准布局 AI 回答关键位", features: ["20 万点数/年", "最多 50 份可见度报告", "每份报告 30 个提问词", "1 个品牌监控", "最多创作 5000 篇文章", "20 个自媒体账号"] },
  { name: "GEO 专业版", originalPrice: "7,996", price: "3,998", popular: true, note: "适合全域覆盖品牌 AI 竞争力", features: ["40 万点数/年", "最多 100 份可见度报告", "每份报告 50 个提问词", "3 个品牌监控", "最多创作 10000 篇文章", "50 个自媒体账号"] },
  { name: "GEO 旗舰版", originalPrice: "10,996", price: "5,998", note: "适合锁定品牌 AI 声量领先位", features: ["80 万点数/年", "最多 200 份可见度报告", "最多 5 个品牌监控", "竞品追踪最多 20 个", "最多创作 20000 篇文章", "200 个自媒体账号"] },
]

const detailCapabilities = [
  { title: "AI 搜索可见度诊断", desc: "围绕品牌词、产品词、场景词采样主流大模型回答，判断提及率、首推率和竞品差距。" },
  { title: "用户提问词挖掘", desc: "把用户在 AI 搜索里可能问的问题拆成购买决策、竞品对比、行业痛点和解决方案。" },
  { title: "品牌知识资产建设", desc: "把官网、案例、问答、百科、专题页整理成模型更容易理解和引用的品牌内容。" },
  { title: "持续监控和复盘", desc: "按月追踪品牌在 DeepSeek、豆包、元宝、通义、百度 AI 等平台里的回答变化。" },
]

const detailScenarios = [
  { title: "新品牌想被 AI 推荐", desc: "适合搜索量不大但客单价高，希望在 AI 问答场景里提前占位的品牌。" },
  { title: "竞品已经被频繁提到", desc: "通过竞品问答采样找到缺口，补齐官网、问答、案例和权威内容。" },
  { title: "已有 SEO 内容基础", desc: "把原来的 SEO 文章升级成更适合大模型引用的结构化问答和专题内容。" },
]

const geoSpecs = [
  { name: "适用定位", values: ["精准布局 AI 回答关键位", "全域覆盖品牌 AI 竞争力", "锁定品牌 AI 声量领先位"] },
  { name: "点数与诊断", values: [], section: true },
  { name: "年度点数", values: ["20 万点数/年", "40 万点数/年", "80 万点数/年"] },
  { name: "可见度报告", values: ["最多 50 份", "最多 100 份", "最多 200 份"] },
  { name: "单份报告提问词", values: ["30 个", "50 个", "50 个"] },
  { name: "诊断能力", values: ["品牌提及、排名分析、信源反查、提问词解析", "品牌提及、排名分析、信源反查、提问词解析", "品牌提及、排名分析、信源反查、提问词解析"] },
  { name: "品牌监控", values: [], section: true },
  { name: "同时监控数量", values: ["1 个", "3 个", "5 个"] },
  { name: "更新频率", values: ["每周/双周/月度", "每周/双周/月度", "每周/双周/月度"] },
  { name: "竞品追踪", values: ["最多 5 个", "最多 10 个", "最多 20 个"] },
  { name: "定制提问词", values: ["最多 50 个", "最多 80 个", "最多 80 个"] },
  { name: "内容创作", values: [], section: true },
  { name: "内容创作额度", values: ["最多 5000 篇", "最多 10000 篇", "最多 20000 篇"] },
  { name: "品牌智库", values: ["支持", "支持", "支持"] },
  { name: "自动发文", values: ["支持", "支持", "支持"] },
  { name: "自媒体账号", values: ["最多 20 个", "最多 50 个", "最多 200 个"] },
  { name: "多平台发布", values: ["支持", "支持", "支持"] },
  { name: "媒体投稿", values: [], section: true },
  { name: "媒体资源", values: ["权威媒体投稿按需充值", "权威媒体投稿按需充值", "权威媒体投稿按需充值"] },
  { name: "云存储空间", values: ["10G", "500G", "1T"] },
  { name: "成员协作", values: ["最多 20 个成员", "最多 50 个成员", "最多 200 个成员"] },
  { name: "适用阶段", values: ["先判断现状", "开始做 AI 搜索增长", "需要长期托管和持续曝光"] },
]

export default function GeoPage() {
  return (
    <>
      <Header />
      <main className="pt-16">
        <section className="hero-dark-bg py-24 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-3xl">
              <Badge className="mb-5 bg-amber-900/60 text-amber-300 border-amber-700/50">
                <span className="inline-block size-1.5 rounded-full bg-amber-400 mr-2 animate-pulse" />
                新品上线 · AI 搜索品牌增长系统
              </Badge>
              <h1 className="text-4xl sm:text-5xl font-bold text-white mb-5 text-balance">
                GEO 优化系统
                <br />
                <span className="text-amber-400">抢占 AI 推荐位</span>
              </h1>
              <p className="text-lg text-slate-300 mb-8 leading-relaxed max-w-xl text-pretty">
                当用户问 DeepSeek、豆包、元宝、通义、百度 AI 时，您的品牌会被推荐吗？GEO（生成式引擎优化）是 SEO 之后最重要的流量机会，维双云帮您提前布局。
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <ContactQrButton size="lg" className="bg-amber-500 hover:bg-amber-600 text-white h-12 px-8">
                  免费 GEO 诊断 <ArrowRight className="size-4 ml-2" />
                </ContactQrButton>
                <Link href="/blog" className={cn(buttonVariants({ variant: "outline", size: "lg" }), "border-slate-600 text-slate-200 hover:bg-slate-800 bg-transparent h-12")}>
                  了解 GEO 趋势
                </Link>
              </div>
            </div>
          </div>
        </section>

        <ProductDetailSections
          tone="amber"
          eyebrow="GEO 免费诊断"
          title="从搜索排名走向 AI 推荐，先诊断再持续优化"
          description="GEO 围绕品牌在豆包、元宝、DeepSeek 等 AI 搜索里的提及和推荐表现展开，通过诊断、提问词、品牌智库、内容优化和持续监控，帮助企业提前布局 AI 流量。"
          capabilities={detailCapabilities}
          scenarios={detailScenarios}
          promoTitle="诊断优惠 + 渠道特惠"
          promoNote="GEO 产品含免费现状诊断，后续增长版/托管版会按关键词、内容量和平台范围确定具体服务。"
          specColumns={["基础版", "专业版", "旗舰版"]}
          specs={geoSpecs}
          plans={plans}
          registerUrl={productRegisterUrls.geo}
        />

        {/* What is GEO */}
        <section className="py-16 px-4 sm:px-6 bg-background">
          <div className="max-w-4xl mx-auto">
            <div className="bg-amber-50 border border-amber-100 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">什么是 GEO（生成式引擎优化）？</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                传统 SEO 让您的网站出现在谷歌、百度的搜索结果页面。而 <strong className="text-foreground">GEO（Generative Engine Optimization）</strong> 则是优化您的品牌内容，让 DeepSeek、豆包、通义千问、百度 AI 等大模型在回答用户问题时，主动推荐和引用您的品牌。
              </p>
              <p className="text-muted-foreground leading-relaxed">
                随着 AI 搜索使用率快速增长，越来越多的用户开始直接向 AI 提问而非传统搜索引擎。<strong className="text-foreground">提前布局 GEO，就是抢占未来的流量入口。</strong>
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 px-4 sm:px-6 bg-background">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-3 text-balance">GEO 优化系统核心功能</h2>
              <p className="text-muted-foreground text-lg max-w-xl mx-auto">全方位提升品牌在 AI 搜索引擎中的曝光度</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((f) => (
                <Card key={f.title} className="border-border card-hover">
                  <CardContent className="p-6">
                    <div className="size-11 rounded-xl bg-amber-50 flex items-center justify-center mb-4">
                      <f.icon className="size-5 text-amber-600" />
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
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">立即开始您的 GEO 布局</h2>
            <p className="text-blue-100 mb-8">免费诊断您的品牌在 AI 搜索中的现状，制定专属优化策略</p>
            <ContactQrButton size="lg" className="bg-white text-primary hover:bg-blue-50 h-12 px-10">
              免费 GEO 诊断 <ArrowRight className="size-4 ml-2" />
            </ContactQrButton>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
