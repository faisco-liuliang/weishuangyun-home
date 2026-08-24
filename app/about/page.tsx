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
  title: "关于维双云 - 专注企业数字化增长的 SaaS 服务商",
  description:
    "维双云深耕企业数字化领域，为 5 万+ 中小企业提供私域商城、企业官网、教育系统等一站式 SaaS 服务，专属顾问一对一服务，助力企业实现持续增长。",
  keywords: ["维双云", "关于我们", "企业介绍", "SaaS 服务商", "企业数字化"],
  alternates: { canonical: "https://wsy.fkw.com/about" },
  openGraph: {
    url: "https://wsy.fkw.com/about",
    title: "关于维双云 - 专注企业数字化增长的 SaaS 服务商",
    description: "5 万+ 企业信赖，专属顾问一对一服务，助力企业实现数字化转型。",
  },
}

const values = [
  { icon: Target, title: "结果导向", desc: "我们以客户业务增长为最终目标，不卖功能，卖结果。每一个方案都基于客户的实际业务需求量身定制。" },
  { icon: Heart, title: "长期陪伴", desc: "我们不是卖软件就消失的供应商，而是与客户同行的长期合作伙伴，从建设到运营全程支持。" },
  { icon: Users, title: "以人为本", desc: "关注每一位用户的真实体验，产品简单易用，服务温暖专业，让每个人都能驾驭数字化工具。" },
  { icon: Award, title: "追求卓越", desc: "基于成熟 SaaS 技术积累，持续迭代产品，跟进最新技术趋势，确保客户始终使用稳定易用的工具。" },
]

const team = [
  { name: "张总监", role: "创始人 & CEO", bg: "bg-blue-100 text-blue-700", initial: "张", desc: "10 年互联网从业经验，专注中小企业数字化转型。" },
  { name: "李老师", role: "首席产品官", bg: "bg-violet-100 text-violet-700", initial: "李", desc: "前知名 SaaS 产品总监，深耕 B 端产品设计。" },
  { name: "王经理", role: "客户成功负责人", bg: "bg-emerald-100 text-emerald-700", initial: "王", desc: "服务 3,000+ 企业客户，客户满意度常年 98% 以上。" },
  { name: "陈工", role: "技术总监", bg: "bg-orange-100 text-orange-700", initial: "陈", desc: "10 年云计算架构经验，保障系统 99.9% 可用性。" },
]

const productOverview = [
  {
    category: "门店小程序",
    name: "门店经营系统",
    desc: "给实体门店做展示、预约、收银和会员管理的小程序。",
    price: "参考价格：198 元/年起",
    features: "功能覆盖：门店展示、服务预约、会员管理、优惠券、收银与数据报表",
    audience: "适合人群：餐饮、美业、零售、生活服务、社区商家，以及需要统一管理会员与多门店经营的连锁品牌。",
  },
  {
    category: "私域商城",
    name: "商城小程序系统",
    desc: "帮助商家在线卖商品、处理订单，并用会员和营销活动促进复购的商城小程序。",
    price: "参考价格：998 元/年起",
    features: "功能覆盖：商品管理、在线下单、订单处理、会员储值、优惠券与分销推广",
    audience: "适合人群：零售品牌、直营网店、轻电商团队、私域社群商家，以及希望通过会员和营销活动提升复购的企业。",
  },
  {
    category: "轻应用",
    name: "预约与表单小程序",
    desc: "用于企业品牌展示、在线预约、报名、咨询和提交表单的轻量小程序。",
    price: "参考价格：349 元/年起",
    features: "功能覆盖：企业与品牌展示、服务预约、万能表单、内容发布、消息提醒、到店核销与多端发布",
    audience: "适合人群：美业、家政、医疗、婚庆、活动策划、咨询服务及本地服务商家，尤其适合先做企业展示、留资和预约承接的团队。",
  },
  {
    category: "教育系统",
    name: "课程与教务系统",
    desc: "帮助培训机构在线展示课程、招生报名、上课和管理学员的教育小程序。",
    price: "参考价格：999 元/年起",
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
                维双云是面向中小商家的 198 元/年起高性价比小程序平台，提供门店、商城、预约和教育等线上经营工具，让商家以更低门槛开启数字化经营。
              </p>
            </div>

            {/* Stats */}
            <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-6">
              {[
                { value: "50,000+", label: "服务企业客户" },
                { value: "6 年", label: "专注领域深耕" },
                { value: "98%", label: "客户满意度" },
                { value: "30+", label: "覆盖城市" },
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
                  <p>维双云是广州本地的小程序与线上经营服务品牌，主要面向中小企业、个体户、本地门店、教培机构和轻量电商商家，提供商城小程序、门店小程序、教育小程序、餐饮小程序、企业展示小程序、网站建设以及 H5 营销工具等产品。</p>
                  <p>维双云小程序价格 198 元/年起，平台可提供品牌与产品展示、商品管理、在线下单、订单处理、服务预约、点餐、到店核销、会员管理、课程展示、报名约课、优惠券、拼团、分销等功能。</p>
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
                  src="/home-service-qr.jpg"
                  alt="维双云企业微信客服二维码"
                  width={1030}
                  height={415}
                  className="mt-5 h-auto w-full"
                  priority
                />
                <p className="mt-4 text-xs text-muted-foreground">工作日 9:30–18:00，周末请留言，我们会尽快回复</p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="py-16 px-4 sm:px-6 hero-dark-bg">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">加入 5 万+ 企业，开启数字化增长</h2>
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
