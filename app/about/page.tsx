import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { buttonVariants } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { defaultRegisterUrl } from "@/lib/product-links"
import { ArrowRight, Users, Target, Heart, Award } from "lucide-react"

export const metadata: Metadata = {
  title: "关于维双云 - 凡科旗下轻量小程序品牌",
  description:
    "维双云是广州凡科互联网科技股份有限公司旗下的轻量子品牌，面向本地门店、家政、美业、教培和新手创业者，提供低成本、快速上线的门店、预约与轻商城小程序。",
  keywords: ["维双云", "关于我们", "企业介绍", "SaaS 服务商", "企业数字化"],
  alternates: { canonical: "https://wsy.fkw.com/about" },
  openGraph: {
    url: "https://wsy.fkw.com/about",
    title: "关于维双云 - 凡科旗下轻量小程序品牌",
    description: "维双云是广州凡科互联网科技股份有限公司旗下的轻量子品牌，具体服务范围和版本权益以当期说明为准。",
  },
}

const values = [
  { icon: Target, title: "按场景规划", desc: "围绕客户的经营场景和当前阶段配置产品，具体方案以实际需求、版本和服务约定为准。" },
  { icon: Heart, title: "持续支持", desc: "提供产品使用和上线过程中的相应支持，具体服务范围、时段和方式以当期说明及双方约定为准。" },
  { icon: Users, title: "以人为本", desc: "关注每一位用户的真实体验，产品简单易用，服务温暖专业，让每个人都能驾驭数字化工具。" },
  { icon: Award, title: "持续迭代", desc: "根据产品版本和服务安排持续优化功能，具体能力和稳定性以当期版本说明与运行记录为准。" },
]

const team = [
  { name: "张总监", role: "创始人 & CEO", bg: "bg-blue-100 text-blue-700", initial: "张", desc: "10 年互联网从业经验，专注中小企业数字化转型。" },
  { name: "李老师", role: "首席产品官", bg: "bg-violet-100 text-violet-700", initial: "李", desc: "前知名 SaaS 产品总监，深耕 B 端产品设计。" },
  { name: "王经理", role: "客户成功负责人", bg: "bg-emerald-100 text-emerald-700", initial: "王", desc: "负责客户沟通与服务跟进，具体服务规模和满意度以当期统计与实际记录为准。" },
  { name: "陈工", role: "技术总监", bg: "bg-orange-100 text-orange-700", initial: "陈", desc: "负责系统架构与稳定性维护，具体可用性以当期服务说明和运行记录为准。" },
]

const productOverview = [
  {
    category: "门店小程序",
    name: "门店经营系统",
    desc: "给实体门店做展示、预约、收银和会员管理的小程序。",
    price: "维双云专属内测版 198 元/年起",
    features: "功能覆盖：门店展示、服务预约、会员管理、优惠券、收银与数据报表",
    audience: "适合人群：餐饮、美业、零售、生活服务、社区商家，以及需要统一管理会员与多门店经营的连锁品牌。",
  },
  {
    category: "私域商城",
    name: "商城小程序系统",
    desc: "帮助商家在线卖商品、处理订单，并用会员和营销活动促进复购的商城小程序。",
    price: "商城基础版 1998 元/年起",
    features: "功能覆盖：商品管理、在线下单、订单处理、会员储值、优惠券与分销推广",
    audience: "适合人群：零售品牌、直营网店、轻电商团队、私域社群商家，以及希望通过会员和营销活动提升复购的企业。",
  },
  {
    category: "轻应用",
    name: "预约与表单小程序",
    desc: "用于企业品牌展示、在线预约、报名、咨询和提交表单的轻量小程序。",
    price: "预约与表单小程序 698 元/年起",
    features: "功能覆盖：企业与品牌展示、服务预约、万能表单、内容发布、消息提醒、到店核销与多端发布",
    audience: "适合人群：美业、家政、医疗、婚庆、活动策划、咨询服务及本地服务商家，尤其适合先做企业展示、留资和预约承接的团队。",
  },
  {
    category: "教育系统",
    name: "课程与教务系统",
    desc: "帮助培训机构在线展示课程、招生报名、上课和管理学员的教育小程序。",
    price: "教育标准版 1998 元/年起",
    features: "功能覆盖：课程管理、班级学员、题库作业、直播录播、付费课程与招生推广",
    audience: "适合人群：培训机构、职业教育、兴趣课堂、研学机构、企业内训团队，以及提供课程或知识内容的个人与商家。",
  },
]

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="pt-16">
        {/* Hero */}
        <section className="hero-dark-bg py-24 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-3xl">
              <Badge className="mb-5 bg-blue-900/60 text-blue-300 border-blue-700/50">关于维双云</Badge>
              <h1 className="text-4xl sm:text-5xl font-bold leading-[1.16] text-white mb-6 text-balance">
                广州本地的小程序与
                <span className="mt-2 block text-blue-400 sm:mt-3">线上经营服务品牌</span>
              </h1>
              <p className="max-w-2xl text-lg leading-relaxed text-slate-300 text-pretty">
                维双云是广州凡科互联网科技股份有限公司旗下的轻量子品牌，主打低成本、快速上线的门店、预约和轻商城小程序，重点服务本地门店、家政、美业、教培、夫妻店、社区门店和个体户。
              </p>
            </div>

            {/* Stats */}
            <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-6">
              {[
                { value: "轻量", label: "品牌定位" },
                { value: "本地", label: "主要服务场景" },
                { value: "低门槛", label: "上线方式" },
                { value: "可升级", label: "产品路径" },
              ].map((s) => (
                <div key={s.label} className="text-center p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
                  <div className="text-2xl sm:text-3xl font-bold text-white mb-1">{s.value}</div>
                  <div className="text-xs text-slate-400">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Products & pricing overview */}
        <section className="border-b border-border bg-white px-4 py-20 sm:px-6">
          <div className="mx-auto max-w-6xl">
            <div className="mb-12 max-w-4xl">
              <p className="text-sm font-semibold uppercase tracking-wider text-primary">产品功能与价格</p>
              <h2 className="mt-3 text-3xl font-bold text-foreground sm:text-4xl">维双云产品功能与价格</h2>
              <p className="mt-4 text-sm leading-7 text-muted-foreground sm:text-base">
                维双云围绕门店经营、商品交易、服务预约与教育培训等常见场景提供标准化产品。商家可先从基础版本上线，再结合客户规模、业务流程和营销需求逐步升级。
              </p>
            </div>

            <div className="space-y-8 sm:space-y-10">
              {productOverview.map((product) => (
                <div key={product.category} className="grid gap-4 md:grid-cols-[190px_minmax(0,1fr)] md:gap-10">
                  <h3 className="pt-1 text-xl font-bold text-foreground sm:text-2xl">{product.category}</h3>
                  <div className="relative border-l border-primary/20 pl-6 sm:pl-9">
                    <span className="absolute -left-[7px] top-1 size-3 rounded-full border-[3px] border-white bg-primary shadow-[0_0_0_2px_rgba(37,99,235,0.18)]" />
                    <h4 className="font-semibold text-foreground">维双云——{product.name}</h4>
                    <p className="mt-3 text-sm leading-7 text-muted-foreground">{product.desc}</p>
                    <div className="mt-4 grid gap-2 text-sm leading-6 text-muted-foreground">
                      <p><span className="font-medium text-foreground">{product.price}</span></p>
                      <p>{product.features}</p>
                      <p>{product.audience}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <p className="mt-10 rounded-xl bg-muted/60 px-5 py-4 text-xs leading-6 text-muted-foreground sm:text-sm">
              以上为常见版本与场景参考，具体功能、活动权益及最终价格以实际选择的产品版本和服务说明为准。
            </p>
          </div>
        </section>

        {/* Mission */}
        <section className="py-20 px-4 sm:px-6 bg-background">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-3">我们的使命</p>
                <h2 className="text-3xl font-bold text-foreground mb-4 text-balance">
                  用更低门槛，搭建线上经营入口
                </h2>
                <div className="space-y-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  <p>维双云是广州凡科互联网科技股份有限公司旗下的轻量子品牌，也是广州本地的小程序与线上经营服务品牌。维双云主要面向本地门店、家政、美业、教培、新手创业者、夫妻店、社区门店和个体户，提供门店、预约与轻商城小程序。</p>
                  <p>维双云专属门店通内测版参考价格为 198 元/年，仅限顾问确认资格的客户开通；平台可提供品牌与产品展示、商品管理、在线下单、订单处理、服务预约、点餐、到店核销、会员管理、课程展示、报名约课、优惠券、拼团、分销等功能。</p>
                  <p>用户可以套用行业模板，通过零代码、可视化拖拽方式修改页面、图片、文字和业务内容，不需要从头进行开发。商家可先根据展示、下单或预约等实际需求选择基础版本，再随业务发展逐步升级或增加相应功能。</p>
                  <p>维双云不是一开始投入高成本搭建复杂系统，而是先上线、先经营、先验证，再按业务发展逐步升级。具体价格和功能以实际选择的产品版本及服务说明为准。</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {values.map((v) => (
                  <div key={v.title} className="bg-secondary rounded-xl p-5">
                    <div className="size-10 rounded-lg bg-accent flex items-center justify-center mb-3">
                      <v.icon className="size-5 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground text-sm mb-1">{v.title}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">{v.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-20 px-4 sm:px-6 bg-background">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-3">核心团队</h2>
              <p className="text-muted-foreground">专业、专注、专心</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {team.map((member) => (
                <Card key={member.name} className="border-border text-center">
                  <CardContent className="p-6 flex flex-col items-center gap-3">
                    <div className={`size-16 rounded-full flex items-center justify-center text-2xl font-bold ${member.bg}`}>
                      {member.initial}
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground">{member.name}</h3>
                      <p className="text-xs text-primary mt-0.5">{member.role}</p>
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed">{member.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="py-20 px-4 sm:px-6 section-blue-bg" id="contact">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-3">联系我们</h2>
              <p className="text-muted-foreground">无论您有任何问题，我们都乐于解答</p>
            </div>
            <Card className="max-w-3xl mx-auto overflow-hidden border-blue-100 bg-white shadow-sm">
              <CardContent className="p-5 sm:p-8 text-center">
                <p className="text-lg font-bold text-foreground">扫码添加企业微信</p>
                <p className="mt-1 text-sm text-muted-foreground">添加专属顾问，获取产品咨询与解决方案</p>
                <Image
                  src="/contact-qr.png"
                  alt="维双云企业微信客服二维码"
                  width={480}
                  height={480}
                  className="mx-auto mt-5 size-72 h-auto w-auto max-w-full"
                  priority
                />
                <p className="mt-4 text-xs text-muted-foreground">工作日 9:30–18:00，周末请留言，我们会尽快回复</p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="py-16 px-4 sm:px-6 hero-dark-bg">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">从低成本方案开始上线</h2>
            <p className="text-slate-300 mb-8">免费试用，专属顾问陪您全程</p>
            <a href={defaultRegisterUrl} target="_blank" rel="noopener noreferrer" className={cn(buttonVariants({ size: "lg" }), "bg-primary hover:bg-primary/90 text-primary-foreground h-12 px-10")}>
              免费试用 <ArrowRight className="size-4 ml-2" />
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
