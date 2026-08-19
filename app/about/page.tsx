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
                面向本地中小企业、个体户和门店，提供小程序、网站建设与线上经营工具，以更低门槛开启数字化经营。
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
