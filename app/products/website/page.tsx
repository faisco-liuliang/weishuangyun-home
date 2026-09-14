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
import { ArrowRight, Search, Globe, FileText, BarChart3, Link2, Smartphone, Sparkles } from "lucide-react"

export const metadata: Metadata = {
  title: "企业官网 AI 建站 - SEO 搜索优化获客官网",
  description:
    "维双云企业官网 AI 建站服务，支持 AI 辅助生成页面、栏目和内容，内置 SEO 优化工具，帮助企业官网获得搜索流量和更多曝光。",
  keywords: ["企业官网", "AI 建站", "SEO 建站", "网站建设", "百度优化", "企业网站"],
}

const features = [
  { icon: Sparkles, title: "AI 建站与写作", desc: "支持 AI 建站、AI 智能写作、批量写作和文章配图，降低官网内容生产成本。" },
  { icon: Search, title: "AI 生成 TDK", desc: "可围绕全站、页面、文章、产品和图册生成标题、描述和关键词，提升搜索理解效率。" },
  { icon: Globe, title: "SEO 搜索优化", desc: "兼顾百度收录、关键词布局和内容更新，让官网更容易被客户找到。" },
  { icon: FileText, title: "内容与文章系统", desc: "支持新闻、案例、服务介绍和问答内容沉淀，适合持续做行业关键词和长尾内容。" },
  { icon: Link2, title: "表单与线索收集", desc: "留言板、表单、在线查询和预约支付等能力，把官网访问转成可跟进的客户线索。" },
  { icon: BarChart3, title: "统计与经营看板", desc: "跟踪访问来源、页面表现和线索转化，方便持续判断哪些内容真正带来客户。" },
  { icon: Smartphone, title: "多端与安全适配", desc: "一键覆盖 PC、手机和微网站，支持 SSL、IPv6、安全防护和多语言扩展。" },
]

const plans = [
  {
    name: "网站标准版",
    originalPrice: "698",
    price: "349",
    note: "适合展示型官网快速上线",
    features: ["免费版全部功能", "支持 SEO", "不限流量", "第三方代码支持", "资源库 10G 空间", "电脑 + 手机 + 微网站"],
  },
  {
    name: "网站推广版",
    originalPrice: "998",
    price: "499",
    popular: true,
    note: "适合百度收录与内容获客",
    features: ["标准版全部功能", "百度优化系统", "百度不收录可协助复盘", "AI 智能写作", "多语言与网站统计", "资源库 50G 空间"],
  },
  {
    name: "网站皇冠版",
    originalPrice: "1,498",
    price: "749",
    note: "适合内容、支付和持续增长",
    features: ["推广版全部功能", "支持在线支付", "SEO 搜索优化", "知识付费系统", "AI 文章配图与 TDK", "资源库 2T 空间"],
  },
  {
    name: "网站海外版",
    originalPrice: "2,998",
    price: "1,499",
    note: "适合外贸展示和跨境询盘",
    features: ["皇冠版全部功能", "全球 CDN 动态加速", "50 种语言版本", "AI 翻译 10 万 AI 豆", "PayPal 支付/产品询盘", "保证谷歌收录"],
  },
  {
    name: "网站海外旗舰版",
    originalPrice: "4,998",
    price: "2,499",
    note: "适合海外分销和长期经营增长",
    features: ["海外版全部功能", "海外多语言和多区域运营", "品牌独立站增长支持", "精品线路加速", "邮件营销", "更高容量支持"],
  },
]

const detailCapabilities = [
  { title: "10分钟轻松搭建，3天快速上线", desc: "先搭好首页、栏目、产品案例、表单和基础 SEO，让企业官网更快成为可访问、可咨询的线上入口。" },
  { title: "AI 建站与全站 TDK", desc: "围绕行业、产品和关键词生成页面结构、文章标题描述和产品 TDK，降低内容初始化成本。" },
  { title: "PC + 手机 + 微网站", desc: "官网一次搭建，多端自适应，适合企业展示、案例沉淀、服务介绍和线索收集。" },
  { title: "SEO 内容增长", desc: "围绕百度收录、关键词布局、问答内容和案例素材，持续提升官网的搜索表现。" },
  { title: "表单、留言和在线查询", desc: "把官网从展示页升级成获客工具，咨询、报价、预约、资料下载都能沉淀为线索。" },
]

const detailScenarios = [
  { title: "刚起步的本地服务商", desc: "需要快速上线官网、绑定域名、做基础 SEO，让客户搜索时能找到可靠入口。" },
  { title: "想做内容获客的企业", desc: "适合持续发布案例、行业知识、解决方案，用文章和问答覆盖长尾搜索需求。" },
  { title: "需要持续搜索曝光的品牌", desc: "通过稳定更新案例、服务介绍和常见问答，让客户更容易了解品牌与业务能力。" },
]

const websiteSpecs = [
  { name: "适用定位", values: ["展示型官网快速上线", "搜索收录与内容获客", "内容、支付和持续增长", "外贸展示和跨境询盘"] },
  { name: "版本信息", values: [], section: true },
  { name: "建站端口", values: ["电脑站 + 手机站 + 微网站", "电脑站 + 手机站 + 微网站", "多端官网 + 知识付费", "多端官网 + 外贸端能力"] },
  { name: "访客流量", values: ["不限", "不限", "不限", "不限"] },
  { name: "隐藏制作信息", values: ["支持", "支持", "支持", "支持"] },
  { name: "赠送权益", values: ["域名/SSL 等按活动确认", "域名/SSL/短信等按活动确认", "域名/SSL/短信等按活动确认", "域名/SSL/短信等按活动确认"] },
  { name: "基础系统", values: [], section: true },
  { name: "资源空间", values: ["10G", "50G", "2T", "3T"] },
  { name: "文件数量", values: ["约 10 万个", "约 10 万个", "约 30 万个", "约 30 万个"] },
  { name: "单个文件大小", values: ["约 50M", "约 500M", "约 1G", "约 1G"] },
  { name: "图册数量", values: ["约 500 个", "约 1000 个", "约 1 万个", "约 1 万个"] },
  { name: "电脑网站栏目", values: ["约 500 个", "约 1000 个", "约 1 万个", "约 1 万个"] },
  { name: "手机网站页面", values: ["约 500 个", "约 1000 个", "约 1 万个", "约 1 万个"] },
  { name: "自定义模块", values: ["约 1000 个", "约 5000 个", "约 5 万个", "约 5 万个"] },
  { name: "产品系统", values: [], section: true },
  { name: "产品数量", values: ["约 5000 个", "约 1 万个", "约 20 万个", "约 20 万个"] },
  { name: "产品咨询/评论", values: ["支持", "支持", "支持", "支持"] },
  { name: "表单提交/询价", values: ["支持", "支持", "支持在线支付", "支持外贸询盘"] },
  { name: "知识付费", values: ["按需配置", "按需配置", "支持", "支持"] },
  { name: "文章与内容", values: [], section: true },
  { name: "文章系统", values: ["新闻/案例/服务内容", "内容获客和统计", "问答/专题/知识付费", "多语言内容和外贸文章"] },
  { name: "AI 能力", values: ["AI 页面初稿", "AI 写作、TDK、文章标题", "AI 配图、批量内容建议", "AI 翻译与多语言内容"] },
  { name: "获客组件", values: ["留言表单、在线咨询", "表单、预约、资料下载", "表单、支付、知识付费", "产品询盘、PayPal 支付"] },
  { name: "搜索与营销", values: [], section: true },
  { name: "SEO", values: ["基础 SEO 设置", "搜索收录优化与统计", "SEO 搜索优化与内容运营", "海外搜索收录与多语言优化"] },
  { name: "多语言", values: ["按需配置", "支持", "支持", "50 种语言版本"] },
  { name: "网站统计", values: ["基础统计", "高级统计", "高级统计 + 转化复盘", "海外访问与询盘分析"] },
  { name: "安全与服务", values: [], section: true },
  { name: "SSL/安全", values: ["SSL 按活动确认", "SSL 按活动确认", "SSL 按活动确认", "SSL 按活动确认"] },
  { name: "第三方代码", values: ["支持", "支持", "支持", "支持"] },
  { name: "交付服务", values: ["基础上线指导", "顾问协助上线", "内容规划、搜索诊断和复盘", "外贸站上线和询盘链路建议"] },
]

export default function WebsitePage() {
  return (
    <>
      <Header />
      <main className="pt-16">
        <section className="hero-dark-bg px-4 py-14 sm:px-6 sm:py-24">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-3xl">
              <Badge className="mb-5 bg-sky-900/60 text-sky-300 border-sky-700/50">10分钟轻松做网站 · AI 建站 + SEO</Badge>
              <h1 className="text-3xl sm:text-5xl font-bold leading-[1.24] tracking-[0.015em] text-white mb-6 text-balance">
                10分钟轻松做网站
                <br />
                <span className="text-sky-400">让企业官网成为获客入口</span>
              </h1>
              <p className="text-lg text-slate-300 mb-8 leading-[1.8] tracking-[0.01em] max-w-xl text-pretty">
                AI 辅助生成页面、栏目和内容，小白也能快速搭建企业网站；内置专业 SEO 优化工具，帮助企业官网稳步提升搜索排名与内容曝光。
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <ContactQrButton size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground h-12 px-8">
                  免费建站咨询 <ArrowRight className="size-4 ml-2" />
                </ContactQrButton>
                <Link href="/cases" className={cn(buttonVariants({ variant: "outline", size: "lg" }), "border-slate-600 text-slate-200 hover:bg-slate-800 bg-transparent h-12")}>
                  查看 SEO 案例
                </Link>
              </div>
            </div>
          </div>
        </section>

        <ProductDetailSections
          tone="sky"
          eyebrow="官网建站活动"
          title="10分钟轻松做网站，先把官网做成获客入口"
          description="官网产品页不只讲建站，而是把页面结构、内容生产、搜索收录、AI 引用和线索转化连起来。基础版本适合快速上线企业网站，推广/商务版本更适合持续做内容和搜索获客。"
          capabilities={detailCapabilities}
          scenarios={detailScenarios}
          promoTitle="买三年送三年 + 渠道特惠"
          promoNote="企业官网可参与买三年送三年活动，同时可叠加渠道特惠价；域名、邮箱、设计和内容权益以顾问最终确认为准。"
          specColumns={["标准版", "推广版", "皇冠版", "海外版"]}
          specs={websiteSpecs}
          plans={plans}
          registerUrl={productRegisterUrls.website}
        />

        <section className="py-20 px-4 sm:px-6 bg-background">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-3 text-balance">AI 建站 + SEO，全面提升搜索可见度</h2>
              <p className="text-muted-foreground text-lg max-w-xl mx-auto">从页面结构、内容生产到线索转化，每一个建站细节都围绕获客设计</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((f) => (
                <Card key={f.title} className="border-border card-hover">
                  <CardContent className="p-6">
                    <div className="size-11 rounded-xl bg-sky-50 flex items-center justify-center mb-4">
                      <f.icon className="size-5 text-sky-600" />
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
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 text-balance">开始打造您的 AI 获客官网</h2>
            <p className="text-blue-100 mb-8">免费 SEO 诊断，专属顾问为您制定建站方案</p>
            <ContactQrButton size="lg" className="bg-white text-primary hover:bg-blue-50 h-12 px-10">
              免费 SEO 诊断 <ArrowRight className="size-4 ml-2" />
            </ContactQrButton>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
