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
import { ArrowRight, ShoppingCart, Users, TrendingUp, Smartphone, Share2, BarChart3, Sparkles } from "lucide-react"

export const metadata: Metadata = {
  title: "私域商城 - AI 营销商城，小程序+微商城一体化解决方案",
  description:
    "维双云 AI 私域商城系统，集小程序、微商城、AI 商品文案、智能活动建议、分销裂变、直播带货于一体，帮助企业搭建私域电商闭环。",
  keywords: ["私域商城", "AI 商城", "小程序商城", "微商城", "分销系统", "私域电商"],
}

const features = [
  {
    icon: Sparkles,
    title: "AI 商品文案",
    desc: "根据商品卖点、目标人群和活动主题生成标题、详情页文案、直播话术和朋友圈素材。",
  },
  {
    icon: ShoppingCart,
    title: "1 站 3 端商城",
    desc: "小程序商城、手机微商城、电脑商城统一管理，多渠道流量铺货，消费者随时随地下单。",
  },
  {
    icon: Share2,
    title: "分销裂变",
    desc: "推广员、分销商、社群团购、拼团砍价、邀请有礼，利用老客带新客，低成本获客。",
  },
  {
    icon: Users,
    title: "会员运营",
    desc: "积分商城、等级会员、优惠券、专属价格，精细化运营提升 LTV。",
  },
  {
    icon: Smartphone,
    title: "直播与短视频导购",
    desc: "直播电商、短视频导购和社交活动组合引流，边种草边转化，提升成交效率。",
  },
  {
    icon: TrendingUp,
    title: "智能活动建议",
    desc: "结合商品、客单价和会员数据，推荐秒杀、满减、拼团、优惠券等更适合的促销玩法。",
  },
  {
    icon: BarChart3,
    title: "数据分析",
    desc: "订单、用户、商品多维度数据报表，实时掌握店铺经营状况。",
  },
]

const plans = [
  {
    name: "商城基础版",
    originalPrice: "1,998",
    price: "999",
    note: "适合品牌展示与核心交易",
    features: ["免费版全部功能", "品牌展示 + 核心交易", "多种支付方式", "物流信息跟踪", "会员/订单一体化管理", "10G 资源空间"],
  },
  {
    name: "商城旗舰版",
    originalPrice: "3,998",
    price: "1,999",
    popular: true,
    features: ["基础版全部功能", "会员储值", "分销推广", "1.5T 超大容量", "砍价/拼团等社交玩法", "私域直播/短视频导购"],
    note: "适合渠道拓展和社交营销",
  },
  {
    name: "商城至尊版",
    originalPrice: "5,998",
    price: "2,999",
    note: "适合一站 3 端和高阶玩法",
    features: ["旗舰版全部功能", "一站 3 端多端铺货", "推广获客/成交转化/复购", "N 元 M 件/礼品卡", "2T 资源空间", "AI 试衣/AI 销售按需扩展"],
  },
]

const detailCapabilities = [
  { title: "10分钟轻松搭建，3天快速上线", desc: "先完成商品、会员、支付、配送和基础活动配置，适合中小商家低成本启动私域商城。" },
  { title: "小程序 + 微商城 + PC", desc: "商品、订单、会员、活动和页面统一管理，覆盖微信私域、移动端分享和电脑端搜索访问。" },
  { title: "直播电商和短视频导购", desc: "适合新品种草、节日促销和爆品转化，把内容流量直接导向商品、优惠券和会员沉淀。" },
  { title: "拼团、砍价和社群团购", desc: "拼团、秒杀、砍价、优惠券、积分商城组合使用，让老客户、社群和门店员工参与获客。" },
  { title: "会员储值和复购经营", desc: "等级会员、储值卡、积分、专属价格和复购提醒，帮助商家把一次购买变成长期复购。" },
  { title: "分销商城和多商户入驻", desc: "支持推广员、分销商、跨店分销和商户入驻，适合品牌扩渠道、区域代理和平台型业务。" },
  { title: "新零售线上线下一体", desc: "可与门店、核销、到店自提和同城配送组合，打通线下客流、线上下单和私域复购。" },
]

const detailScenarios = [
  { title: "线下门店想做线上下单", desc: "适合餐饮、烘焙、生鲜、茶叶、酒旅、农特产品等需要小程序成交和到店核销的商家。" },
  { title: "有老客户但复购弱", desc: "通过会员、储值、优惠券和社群活动，提高回购频次和客单价。" },
  { title: "想做分销裂变", desc: "适合有标准化商品、毛利空间和达人/员工/老客资源的品牌。" },
  { title: "想做直播或短视频承接", desc: "适合已经在视频号、抖音、快手、小红书等渠道种草，需要私域商城承接成交的团队。" },
]

const mallSpecs = [
  { name: "适用定位", values: ["品牌展示 + 核心交易", "渠道拓展 + 社交营销", "一站多端 + 高阶玩法"] },
  { name: "商城基础", values: [], section: true },
  { name: "经营终端", values: ["小程序/微商城/电脑商城任选", "支持多端同时经营", "小程序 + 微商城 + PC 全终端"] },
  { name: "访客流量", values: ["不限", "不限", "不限"] },
  { name: "营业时间", values: ["支持", "支持", "支持"] },
  { name: "首次购买权益", values: ["域名/SSL 等权益按活动确认", "域名/SSL 等权益按活动确认", "域名/SSL 等权益按活动确认"] },
  { name: "会员", values: [], section: true },
  { name: "会员数量", values: ["约 10000 个", "不限", "不限"] },
  { name: "会员卡", values: ["支持", "支持", "支持"] },
  { name: "会员储值", values: ["基础储值", "支持", "支持"] },
  { name: "会员等级", values: ["约 10 个等级", "约 20 个等级", "约 20 个等级"] },
  { name: "会员分组", values: ["约 30 个分组", "约 30 个分组", "约 90 个分组"] },
  { name: "会员积分", values: ["支持", "支持", "支持"] },
  { name: "产品", values: [], section: true },
  { name: "产品数量", values: ["约 5000 个", "不限", "不限"] },
  { name: "手机实时管理产品", values: ["支持", "支持", "支持"] },
  { name: "产品库/产品编码", values: ["支持", "支持", "支持"] },
  { name: "产品评论/保证", values: ["支持", "支持", "支持"] },
  { name: "产品规格值", values: ["约 60 个规格值", "约 100 个规格值", "约 100 个规格值"] },
  { name: "主图视频/详情页投放", values: ["按需配置", "支持", "支持"] },
  { name: "商城设计", values: [], section: true },
  { name: "自定义页面", values: ["约 1000 个", "约 1 万个", "约 1 万个"] },
  { name: "模块数量", values: ["约 5000 个", "约 5 万个", "约 5 万个"] },
  { name: "资源空间", values: ["10G", "1.5T", "2T"] },
  { name: "多语言/繁体", values: ["按需配置", "支持", "支持"] },
  { name: "订单与配送", values: [], section: true },
  { name: "订单与配送", values: ["支付、订单、物流跟踪", "到店自提、同城配送、订单导出", "多端铺货、复杂配送和高频订单"] },
  { name: "订单管理", values: ["手机处理订单、新订单提醒", "导出订单/汇总表、批量发货", "高频订单和多渠道承接"] },
  { name: "支付能力", values: ["微信支付、当面付", "订单代付、代客下单", "复杂交易与多渠道支付"] },
  { name: "配送方式", values: ["快递发货、物流跟踪", "到店自提、同城配送", "第三方配送按需接入"] },
  { name: "自提点/地址", values: ["约 200 个自提点", "约 300 个自提点/1000 个地址", "约 300 个自提点/1000 个地址"] },
  { name: "营销与推广", values: [], section: true },
  { name: "营销玩法", values: ["优惠券、限时促销、新客有礼", "秒杀、拼团、砍价、预售、直播", "N 元 M 件、礼品卡、组合购、满赠"] },
  { name: "分销与推广", values: ["基础推广员", "分销商、团队推广、社群团购", "跨店分销、多渠道协同"] },
  { name: "私域直播", values: ["按需开通", "支持，直播流量按需", "支持，适合活动矩阵"] },
  { name: "短视频导购", values: ["按需配置", "支持", "支持"] },
  { name: "批发/互动", values: ["文章、表单、投票、留言", "倍数订货、常购清单按需", "批发、互动和营销组合"] },
  { name: "AI 能力", values: ["AI 商品文案", "AI 销售/试衣按需扩展", "AI 销售、AI 试衣和活动建议按需扩展"] },
  { name: "数据与服务", values: [], section: true },
  { name: "经营分析", values: ["商城概况、交易分析", "商品分析、渠道统计", "多场景报表和运营复盘"] },
  { name: "消息通知", values: ["订单/会员基础通知", "营销和订单通知", "多角色通知和顾问配置"] },
  { name: "交付服务", values: ["基础上线指导", "顾问配置和活动建议", "专属培训、运营陪跑和复盘"] },
]

export default function MallPage() {
  return (
    <>
      <Header />
      <main className="pt-16">
        {/* Hero */}
        <section className="hero-dark-bg py-24 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-3xl">
              <Badge className="mb-5 bg-blue-900/60 text-blue-300 border-blue-700/50">
                私域电商解决方案
              </Badge>
              <h1 className="text-4xl sm:text-5xl font-bold text-white mb-5 text-balance">
                AI 私域商城系统
                <br />
                <span className="text-blue-400">从获客到复购</span>
              </h1>
              <p className="text-lg text-slate-300 mb-8 leading-relaxed max-w-xl text-pretty">
                整合 AI 商品文案、小程序商城、会员运营、分销裂变和直播带货，打造属于企业自己的私域电商阵地，让每一位用户都成为增长引擎。
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a href={productRegisterUrls.mall} target="_blank" rel="noopener noreferrer" className={cn(buttonVariants({ size: "lg" }), "bg-primary hover:bg-primary/90 text-primary-foreground h-12 px-8")}>
                  免费试用 <ArrowRight className="size-4 ml-2" />
                </a>
                <Link href="/cases" className={cn(buttonVariants({ variant: "outline", size: "lg" }), "border-slate-600 text-slate-200 hover:bg-slate-800 bg-transparent h-12")}>
                  查看案例
                </Link>
              </div>
            </div>
          </div>
        </section>

        <ProductDetailSections
          tone="blue"
          eyebrow="商城买2年送2年"
          title="把商城、会员、分销和直播放进同一套私域系统"
          description="私域商城适合有商品、有复购、有社群资源的企业。页面围绕小程序、微商城、PC 商城、直播电商、短视频导购、拼团砍价、会员储值、多商户和分销能力做套餐化，帮助商家从上架商品走到持续复购。"
          capabilities={detailCapabilities}
          scenarios={detailScenarios}
          promoTitle="买2年送2年 + 渠道特惠"
          promoNote="商城产品可参与买2年送2年活动，同时可叠加渠道特惠价；例如豪华版按 2 年付费可获得 4 年使用期，具体权益以顾问确认为准。"
          specColumns={["基础版", "旗舰版", "至尊版"]}
          specs={mallSpecs}
          plans={plans}
          registerUrl={productRegisterUrls.mall}
        />

        {/* Features */}
        <section className="py-20 px-4 sm:px-6 bg-background">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-3 text-balance">AI 赋能私域电商，开箱即用</h2>
              <p className="text-muted-foreground text-lg max-w-xl mx-auto">从商品上架、内容种草到活动转化，每个环节都有专业工具支撑</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((f) => (
                <Card key={f.title} className="border-border card-hover">
                  <CardContent className="p-6">
                    <div className="size-11 rounded-xl bg-blue-50 flex items-center justify-center mb-4">
                      <f.icon className="size-5 text-blue-600" />
                    </div>
                    <h3 className="font-bold text-foreground mb-2">{f.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-4 sm:px-6 bg-primary">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 text-balance">
              立即开启您的私域商城之旅
            </h2>
            <p className="text-blue-100 mb-8">免费试用，专属顾问全程陪跑</p>
            <a href={productRegisterUrls.mall} target="_blank" rel="noopener noreferrer" className={cn(buttonVariants({ size: "lg" }), "bg-white text-primary hover:bg-blue-50 h-12 px-10")}>
              免费试用 <ArrowRight className="size-4 ml-2" />
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
