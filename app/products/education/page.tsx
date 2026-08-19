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
import { ArrowRight, Video, BookOpen, CreditCard, Users, Bell, Star, Sparkles } from "lucide-react"

export const metadata: Metadata = {
  title: "教育系统 / AI 题库 + 知识付费平台",
  description:
    "维双云教育系统，整合 AI 题库导入、智能组卷、直播课堂、录播点播、报名缴费、学员管理，帮助教育机构快速搭建在线学校。",
  keywords: ["AI 题库", "知识付费", "在线教育系统", "直播上课", "教育 SaaS", "网络学校", "录播课程"],
}

const features = [
  { icon: Sparkles, title: "AI 题库导入", desc: "支持把 Word、Excel、扫描件题库整理为线上题库，减少人工录入和格式校对成本。" },
  { icon: BookOpen, title: "智能组卷纠错", desc: "按知识点、难度和题型智能组卷，辅助检查答案缺失、题型混淆、标号错乱等问题。" },
  { icon: Video, title: "直播课堂", desc: "稳定高清直播，互动弹幕、答题、抽奖，打造沉浸式在线课堂体验。" },
  { icon: BookOpen, title: "录播课程", desc: "上传视频课程，防录制防下载，学员随时回看，内容资产长期变现。" },
  { icon: CreditCard, title: "付费系统", desc: "课程单独定价、会员包月订阅、拼团特价，多种付费模式灵活配置。" },
  { icon: Users, title: "学员管理", desc: "学员档案、学习进度、作业批改、证书颁发，完整教务管理功能。" },
  { icon: Bell, title: "营销推广", desc: "邀请返佣、限时优惠、团购拼班，内置营销工具助力招生裂变。" },
  { icon: Star, title: "口碑系统", desc: "学员评价、学习成果展示、真实好评系统，提升课程可信度与转化率。" },
]

const plans = [
  { name: "教育标准版", originalPrice: "1,998", price: "999", note: "适合课程服务和基础教务", features: ["微官网 H5 + 微信小程序", "电脑端 + 百度 SEO + 独立域名", "知识付费 + 线下课程", "基础答题/作业/家校互评", "智能排课 + 扫码签到", "班级/学员/预约上课"] },
  { name: "教育专业版", originalPrice: "2,998", price: "1,499", popular: true, note: "适合全渠道招生和助学互动", features: ["标准版全部功能", "抖音小程序 + 百度小程序", "会员标签/等级/付费会员", "3 万题目 + 智能批量录入", "闯关打卡 + 证书颁发", "直播教学 + 推广员分销"] },
  { name: "教育旗舰版", originalPrice: "3,998", price: "1,999", note: "适合精细化运营和实物售卖", features: ["专业版全部功能", "老带新转介绍", "会员储值 + 赠送金额", "1T 容量/单文件 5G", "20 万题库 + 高级刷题", "学习积分/积分商城/实物商品"] },
  { name: "教育至尊版", originalPrice: "5,998", price: "2,999", note: "适合规模化增长和高容量运营", features: ["超高清课程", "题库", "商品", "空间和文件承载", "买2年送2年"] },
]

const detailCapabilities = [
  { title: "10分钟轻松搭建，3天快速上线", desc: "先完成课程、报名、题库、直播入口和学员管理配置，让教育机构快速跑通在线招生与交付。" },
  { title: "知识付费和课程售卖", desc: "图文、音频、视频、专栏和训练营都能包装成付费内容，适合把经验和课程资产产品化。" },
  { title: "直播、录播和学习记录", desc: "直播课堂负责交付和互动，录播课程负责长期复用，学习记录帮助机构跟进学员。" },
  { title: "报名约课和招生转化", desc: "把课程介绍、报名缴费、优惠活动、邀请返佣串起来，降低招生链路损耗。" },
  { title: "AI 题库和智能组卷", desc: "题库导入、组卷纠错、作业练习和考试测评，适合教培机构和知识类 IP 做标准化交付。" },
]

const detailScenarios = [
  { title: "教培机构线上化", desc: "线下机构希望把课程、题库、直播和学员管理放到统一系统。" },
  { title: "知识 IP 变现", desc: "专家、讲师、顾问把课程、专栏、社群和训练营做成可复购产品。" },
  { title: "企业内训和考试", desc: "适合企业把培训资料、题库测评、员工学习进度和证书管理做成在线流程。" },
]

const educationSpecs = [
  { name: "适用定位", values: ["课程服务和基础教务", "全渠道招生和助学互动", "精细化运营和实物售卖"] },
  { name: "学员端", values: [], section: true },
  { name: "学员端", values: ["H5 + 微信小程序 + 电脑端", "增加抖音小程序和百度小程序", "多端学习入口和运营组件"] },
  { name: "老师端/管理端", values: ["微信小程序 + 电脑端", "微信小程序 + 电脑端", "微信小程序 + 电脑端"] },
  { name: "线上课程/知识付费", values: [], section: true },
  { name: "图文/音视频课程", values: ["约 1000 个", "约 5000 个", "约 2 万个"] },
  { name: "系列课/训练营", values: ["约 10 个系列课", "约 100 个系列课", "约 2000 个系列课"] },
  { name: "单个系列课内容", values: ["约 100 个", "约 500 个", "约 2000 个"] },
  { name: "电子书/专栏", values: ["约 10 个", "约 500 个", "约 2000 个"] },
  { name: "线下课程与课外服务", values: [], section: true },
  { name: "线下课程", values: ["约 50 个课程", "约 500 个课程", "约 2000 个课程"] },
  { name: "招生报名表单", values: ["支持", "支持", "支持"] },
  { name: "课程在线预约/购买", values: ["支持", "支持", "支持"] },
  { name: "课外服务预约", values: ["支持", "支持", "支持"] },
  { name: "实物商城", values: [], section: true },
  { name: "实物商品", values: ["按需配置", "按需配置", "约 1 万个"] },
  { name: "物流查询/配送", values: ["按需配置", "按需配置", "支持"] },
  { name: "超级题库", values: [], section: true },
  { name: "题库考试", values: ["基础答题、作业、家校互评", "约 3 万题目、智能批量录入", "约 20 万题库、高级刷题方案"] },
  { name: "题库数量", values: ["约 5 个", "约 500 个", "约 2000 个"] },
  { name: "单题库题目数量", values: ["约 5000 题", "约 5 万题", "约 10 万题"] },
  { name: "练习/模拟考试", values: ["章节练习、随机练习", "模拟考试、历年真题", "高级刷题和测评"] },
  { name: "考试答题活动", values: ["约 10 个", "约 2000 个", "约 1 万个"] },
  { name: "招生营销", values: [], section: true },
  { name: "招生营销", values: ["报名表单、在线支付、智能名片", "优惠券、新人有礼、拼团、推广员", "老带新、买赠组合、会员储值"] },
  { name: "会员体系", values: ["基础会员", "标签、等级、付费会员", "储值、积分、精细化运营"] },
  { name: "视频直播", values: ["按需配置", "支持直播教学", "支持直播教学和回放运营"] },
  { name: "教务管理", values: [], section: true },
  { name: "教务管理", values: ["智能排课、扫码签到、班级管理", "直播教学、闯关打卡、证书", "学习积分、积分商城、实物商品"] },
  { name: "资源与容量", values: ["适合基础课程团队", "适合招生增长团队", "1T 空间、单文件 5G"] },
]

export default function EducationPage() {
  return (
    <>
      <Header />
      <main className="pt-16">
        <section className="hero-dark-bg py-24 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-3xl">
              <Badge className="mb-5 bg-violet-900/60 text-violet-300 border-violet-700/50">AI 题库 + 知识付费解决方案</Badge>
              <h1 className="text-4xl sm:text-5xl font-bold leading-[1.24] tracking-[0.015em] text-white mb-6 text-balance">
                教育系统 / AI 题库
                <br />
                <span className="text-violet-400">让教学资产持续变现</span>
              </h1>
              <p className="text-lg text-slate-300 mb-8 leading-[1.8] tracking-[0.01em] max-w-xl text-pretty">
                整合 AI 题库导入、智能组卷、直播课堂、录播点播、付费订阅和学员管理，帮助教育机构快速搭建可招生、可交付、可复购的在线学校。
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a href={productRegisterUrls.education} target="_blank" rel="noopener noreferrer" className={cn(buttonVariants({ size: "lg" }), "bg-primary hover:bg-primary/90 text-primary-foreground h-12 px-8")}>
                  免费试用 <ArrowRight className="size-4 ml-2" />
                </a>
                <Link href="/cases" className={cn(buttonVariants({ variant: "outline", size: "lg" }), "border-slate-600 text-slate-200 hover:bg-slate-800 bg-transparent h-12")}>
                  查看教育案例
                </Link>
              </div>
            </div>
          </div>
        </section>

        <ProductDetailSections
          tone="violet"
          eyebrow="教育系统活动"
          title="把课程、题库、直播和付费转化做成一套在线学校"
          description="教育系统把知识付费、直播上课、招生付费、题库、智能组卷和学员管理放在一起，帮助机构从内容交付走向持续经营。"
          capabilities={detailCapabilities}
          scenarios={detailScenarios}
          promoTitle="买2年送2年 + 渠道特惠"
          promoNote="教育系统可参与多年优惠和渠道特惠，若涉及直播并发、存储或专属实施，具体权益以顾问确认为准。"
          specColumns={["标准版", "专业版", "旗舰版"]}
          specs={educationSpecs}
          plans={plans}
          registerUrl={productRegisterUrls.education}
        />

        <section className="py-20 px-4 sm:px-6 bg-background">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-3 text-balance">AI 题库 + 教育 SaaS 功能矩阵</h2>
              <p className="text-muted-foreground text-lg max-w-xl mx-auto">从题库建设、招生转化到授课交付，全链路数字化管理</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((f) => (
                <Card key={f.title} className="border-border card-hover">
                  <CardContent className="p-6">
                    <div className="size-11 rounded-xl bg-violet-50 flex items-center justify-center mb-4">
                      <f.icon className="size-5 text-violet-600" />
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
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">开始搭建您的在线学校</h2>
            <p className="text-blue-100 mb-8">免费试用，0 技术门槛快速上线</p>
            <a href={productRegisterUrls.education} target="_blank" rel="noopener noreferrer" className={cn(buttonVariants({ size: "lg" }), "bg-white text-primary hover:bg-blue-50 h-12 px-10")}>
              免费试用 <ArrowRight className="size-4 ml-2" />
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
