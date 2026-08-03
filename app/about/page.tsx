import type { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { buttonVariants } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { cn } from "@/lib/utils"
import { defaultRegisterUrl } from "@/lib/product-links"
import { ArrowRight, Users, Target, Heart, Award, Mail, MapPin } from "lucide-react"

export const metadata: Metadata = {
  title: "关于维双云 - 专注企业数字化增长的 SaaS 服务商",
  description:
    "维双云深耕企业数字化领域，为 5 万+ 中小企业提供私域商城、企业官网、教育系统等一站式 SaaS 服务，专属顾问一对一服务，助力企业实现持续增长。",
  keywords: ["维双云", "关于我们", "企业介绍", "SaaS 服务商", "企业数字化"],
  alternates: { canonical: "https://weishuangyun.fkw.com/about" },
  openGraph: {
    url: "https://weishuangyun.fkw.com/about",
    title: "关于维双云 - 专注企业数字化增长的 SaaS 服务商",
    description: "5 万+ 企业信赖，专属顾问一对一服务，助力企业实现数字化转型。",
  },
}

const milestones = [
  { year: "2018", event: "维双云成立，聚焦中小企业数字化服务" },
  { year: "2019", event: "服务企业客户突破 5,000 家" },
  { year: "2020", event: "推出私域商城解决方案，帮助 1,000+ 商家转型" },
  { year: "2021", event: "教育系统上线，服务 200+ 教育机构" },
  { year: "2022", event: "服务企业累计突破 30,000 家" },
  { year: "2023", event: "推出 GEO 优化系统，布局 AI 搜索新赛道" },
  { year: "2024", event: "服务企业突破 50,000 家，覆盖全国 30+ 城市" },
]

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
              <h1 className="text-4xl sm:text-5xl font-bold text-white mb-5 text-balance">
                我们专注于帮助
                <br />
                <span className="text-blue-400">中小企业数字化增长</span>
              </h1>
              <p className="text-lg text-slate-300 leading-relaxed max-w-xl text-pretty">
                维双云成立于 2018 年，专注为中小企业提供数字化工具和顾问式交付服务。我们深信，每一家中小企业都值得拥有专业的数字化能力和贴心的服务支持，这是我们每天坚持的使命。
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
                  让每家中小企业都能享受专业级数字化服务
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  我们看到太多中小企业在数字化转型中迷路：要么因高昂费用望而却步，要么因缺乏专业指导白花了冤枉钱。维双云的存在，就是要打破这个困局。
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  基于成熟的 SaaS 技术底座，结合我们对本地市场的深度理解，我们为客户提供的不只是软件工具，更是从建设到运营的全程陪伴式服务。
                </p>
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

        {/* Timeline */}
        <section className="py-20 px-4 sm:px-6 section-blue-bg">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-3">发展历程</h2>
              <p className="text-muted-foreground">六年专注，持续成长</p>
            </div>
            <div className="flex flex-col gap-0">
              {milestones.map((m, i) => (
                <div key={m.year} className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="size-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-xs font-bold shrink-0">
                      {m.year.slice(2)}
                    </div>
                    {i < milestones.length - 1 && <div className="w-0.5 flex-1 bg-border mt-1 mb-1 min-h-8" />}
                  </div>
                  <div className="pb-8 pt-2">
                    <span className="text-sm font-semibold text-primary">{m.year}</span>
                    <p className="text-sm text-foreground mt-0.5 leading-relaxed">{m.event}</p>
                  </div>
                </div>
              ))}
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { icon: Mail, label: "邮件咨询", value: "hello@weishuangyun.com", sub: "24 小时内回复" },
                { icon: MapPin, label: "公司地址", value: "广州市天河区科技园", sub: "欢迎预约上门拜访" },
              ].map((contact) => (
                <Card key={contact.label} className="border-border">
                  <CardContent className="p-6 flex flex-col items-center text-center gap-3">
                    <div className="size-12 rounded-xl bg-accent flex items-center justify-center">
                      <contact.icon className="size-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground">{contact.label}</p>
                      <p className="text-base font-bold text-primary mt-1">{contact.value}</p>
                      <p className="text-xs text-muted-foreground mt-0.5">{contact.sub}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
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
