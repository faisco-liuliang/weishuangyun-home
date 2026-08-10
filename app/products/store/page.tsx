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
import { ArrowRight, Store, Users, CreditCard, BarChart3, Gift, Smartphone, Sparkles } from "lucide-react"

export const metadata: Metadata = {
  title: "门店系统 - AI 辅助经营，多门店会员体系一体化",
  description:
    "维双云门店管理系统，支持 AI 经营分析、连锁多门店统一管理、会员积分、储值卡、优惠券核销、数据报表，帮助连锁企业提升运营效率。",
  keywords: ["AI 门店经营", "门店管理系统", "多门店管理", "会员系统", "连锁管理", "收银系统", "储值卡管理"],
}

const features = [
  { icon: Sparkles, title: "AI 经营分析", desc: "自动解读营收、客单价、复购率和会员增长变化，帮老板更快发现经营问题。" },
  { icon: Store, title: "多门店管理", desc: "总部统一配置，各门店独立运营，实时数据汇总，轻松管理 1~100 家连锁门店。" },
  { icon: Users, title: "会员分层运营", desc: "按消费频次、客单价、活跃度自动分层，配合积分、生日权益和专属优惠提升复购。" },
  { icon: CreditCard, title: "储值核销", desc: "储值充值、余额消费、跨店通用，支持微信/支付宝/现金多种收款方式。" },
  { icon: Gift, title: "智能活动建议", desc: "结合门店库存、节日节点和会员画像，推荐满减、折扣、储值赠送等活动方案。" },
  { icon: BarChart3, title: "经营报表", desc: "门店营收、会员增长、商品销量多维度数据看板，实时掌握经营健康度。" },
  { icon: Smartphone, title: "员工管理", desc: "员工账号权限分级、提成核算、考勤记录，高效管理门店人员团队。" },
]

const plans = [
  { name: "门店入门版", originalPrice: "198", price: "99", note: "适合低成本上线门店小程序", features: ["基础门店小程序", "产品/服务展示", "在线预约与销售", "基础会员档案", "基础表单留资", "支持买2年送2年"] },
  { name: "门店基础版", originalPrice: "998", price: "499", note: "适合基础收银、预约和会员沉淀", features: ["海量模板 3 分钟建店", "20 个产品/服务", "在线预约与销售", "进销存/开单收银/记账", "支持 10 位会员", "AI 店推助手"] },
  { name: "门店商业版", originalPrice: "2,998", price: "1,499", popular: true, note: "适合会员营销和预约增长", features: ["基础版全部功能", "会员数 5000 位", "日预约 1000 个", "会员标签 1000 个", "进店有礼/优惠券/发券宝", "微信通知触达员工和会员"] },
  { name: "门店旗舰版", originalPrice: "3,998", price: "1,999", note: "适合全域引流和私域裂变", features: ["商业版全部功能", "会员/商品/预约容量全开放", "抖音小程序/美团团购核销", "全民推广/员工分销/拼团", "付费券包/第二件半价", "AI 美业测评/换发型"] },
]

const detailCapabilities = [
  { title: "10分钟轻松搭建，3天快速上线", desc: "先上线门店展示、预约留资、会员档案和基础活动，帮助门店快速拥有自己的小程序入口。" },
  { title: "多门店统一管理", desc: "总部统一商品、员工、会员和活动配置，各门店独立运营，总部实时看数据。" },
  { title: "会员储值和跨店核销", desc: "储值卡、次卡、积分、优惠券和跨店核销，帮助门店把客户沉淀到自己的会员体系。" },
  { title: "经营报表和 AI 分析", desc: "围绕营收、客单价、复购率、会员增长和商品销量做经营解读，帮助老板更快决策。" },
  { title: "线上预约和到店转化", desc: "与轻应用/预约能力组合，完成线上留资、预约、到店核销和二次复购。" },
]

const detailScenarios = [
  { title: "单店数字化起步", desc: "适合先解决会员、储值、核销、活动和基础报表问题。" },
  { title: "多门店统一运营", desc: "适合美业、餐饮、零售、生活服务等需要总部管控和门店执行的连锁品牌。" },
  { title: "线下转私域", desc: "适合有线下客流，但客户信息分散、复购触达弱的门店。" },
]

const storeSpecs = [
  { name: "适用定位", values: ["低成本上线门店小程序", "基础收银、预约和会员沉淀", "会员营销和预约增长", "全域引流和私域裂变"] },
  { name: "基础经营", values: [], section: true },
  { name: "门店数量", values: ["单店小程序", "单店体验", "多门店连锁", "区域/集团扩展"] },
  { name: "产品/服务数量", values: ["基础展示", "约 20 个", "适合多服务项目", "容量开放，按方案确认"] },
  { name: "在线预约", values: ["基础预约", "基础预约", "日预约约 1000 个", "高频预约和活动预约"] },
  { name: "开单收银/记账", values: ["按需升级", "支持", "支持", "支持"] },
  { name: "进销存", values: ["按需升级", "基础进销存", "多门店库存", "集团库存和数据看板"] },
  { name: "会员", values: [], section: true },
  { name: "会员数量", values: ["基础会员档案", "约 10 位体验", "约 5000 位", "容量开放，按方案确认"] },
  { name: "会员能力", values: ["基础档案", "会员导入、基础标签", "会员分层、储值、积分", "跨区域会员和精细化权益"] },
  { name: "会员标签", values: ["基础标签", "基础标签", "约 1000 个标签", "多维标签和分层运营"] },
  { name: "储值/次卡/积分", values: ["按需升级", "基础配置", "支持", "支持并可组合活动"] },
  { name: "营销", values: [], section: true },
  { name: "优惠券/发券", values: ["按需升级", "基础优惠券", "进店有礼、优惠券、发券宝", "付费券包、第二件半价"] },
  { name: "推广裂变", values: ["基础留资", "按需配置", "员工推广/活动配置", "全民推广、员工分销、拼团"] },
  { name: "平台核销", values: ["到店核销", "到店核销", "多门店核销", "抖音小程序/团购核销按需"] },
  { name: "AI 能力", values: ["AI 文案按需", "AI 店推助手", "AI 经营分析", "AI 测评/换发型等行业工具按需"] },
  { name: "数据与权限", values: [], section: true },
  { name: "经营分析", values: ["基础数据", "基础营业报表", "总部数据汇总、门店对比", "AI 经营分析、专项看板"] },
  { name: "员工权限", values: ["基础账号", "基础员工账号", "门店角色、操作权限", "区域权限、管理审批"] },
  { name: "通知触达", values: ["基础通知", "基础通知", "微信通知员工和会员", "多角色通知和活动提醒"] },
  { name: "交付服务", values: ["上线指导", "上线指导", "数据迁移和活动配置", "专属实施、培训和运营复盘"] },
]

export default function StorePage() {
  return (
    <>
      <Header />
      <main className="pt-16">
        <section className="hero-dark-bg py-24 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-3xl">
              <Badge className="mb-5 bg-orange-900/60 text-orange-300 border-orange-700/50">AI 辅助门店经营解决方案</Badge>
              <h1 className="text-4xl sm:text-5xl font-bold text-white mb-5 text-balance">
                门店系统 / AI 经营
                <br />
                <span className="text-orange-400">统一管理，高效运营</span>
              </h1>
              <p className="text-lg text-slate-300 mb-8 leading-relaxed max-w-xl text-pretty">
                专为连锁零售和服务企业设计，AI 经营分析、多门店统一管理、会员分层、储值核销和数据实时汇总，帮助连锁品牌提升运营效率和客户粘性。
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a href={productRegisterUrls.store} target="_blank" rel="noopener noreferrer" className={cn(buttonVariants({ size: "lg" }), "bg-primary hover:bg-primary/90 text-primary-foreground h-12 px-8")}>
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
          tone="orange"
          eyebrow="门店系统活动"
          title="先统一会员和门店数据，再做储值、复购和连锁管理"
          description="门店系统的重点是把线下经营动作数字化：会员沉淀、储值核销、员工权限、门店活动、总部报表和 AI 经营分析，适合线下门店从单店走向连锁。"
          capabilities={detailCapabilities}
          scenarios={detailScenarios}
          promoTitle="买2年送2年 + 渠道特惠"
          promoNote="门店系统可参与多年优惠和渠道特惠，数据迁移、门店数量和实施范围以实际方案确认为准。"
          specColumns={["入门版", "基础版", "商业版", "旗舰版"]}
          specs={storeSpecs}
          plans={plans}
          registerUrl={productRegisterUrls.store}
        />

        <section className="py-20 px-4 sm:px-6 bg-background">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-3 text-balance">AI 经营分析 + 连锁管理，开箱即用</h2>
              <p className="text-muted-foreground text-lg max-w-xl mx-auto">从单店到集团，可扩展、可复盘的门店数字化管理平台</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((f) => (
                <Card key={f.title} className="border-border card-hover">
                  <CardContent className="p-6">
                    <div className="size-11 rounded-xl bg-orange-50 flex items-center justify-center mb-4">
                      <f.icon className="size-5 text-orange-600" />
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
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">开始管理您的连锁门店</h2>
            <p className="text-blue-100 mb-8">免费数据迁移，7 天快速上线</p>
            <a href={productRegisterUrls.store} target="_blank" rel="noopener noreferrer" className={cn(buttonVariants({ size: "lg" }), "bg-white text-primary hover:bg-blue-50 h-12 px-10")}>
              免费试用 <ArrowRight className="size-4 ml-2" />
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
