import { CheckCircle, Shield, Headphones, TrendingUp, Users, Clock } from "lucide-react"

const advantages = [
  {
    icon: Shield,
    iconColor: "text-blue-600",
    iconBg: "bg-blue-50",
    title: "低成本启动，持续获客",
    desc: "可以先上线基础官网、小程序和核心内容页，再逐步扩展行业专题、案例和 GEO 内容矩阵。",
  },
  {
    icon: TrendingUp,
    iconColor: "text-emerald-600",
    iconBg: "bg-emerald-50",
    title: "SEO & GEO 双引擎",
    desc: "传统 SEO 负责搜索收录，GEO 负责 AI 问答曝光，让官网内容更容易被客户和大模型找到。",
  },
  {
    icon: Headphones,
    iconColor: "text-violet-600",
    iconBg: "bg-violet-50",
    title: "顾问式梳理，不让客户瞎搭",
    desc: "从业务、关键词、页面结构到咨询路径一起规划，让网站和小程序上线后能承接真实线索。",
  },
  {
    icon: Clock,
    iconColor: "text-orange-600",
    iconBg: "bg-orange-50",
    title: "7 天上线，30 天启动内容布局",
    desc: "基础官网和小程序可快速上线，随后围绕行业词、案例页、FAQ 和 GEO 文章持续扩展。",
  },
  {
    icon: Users,
    iconColor: "text-rose-600",
    iconBg: "bg-rose-50",
    title: "官网、小程序、内容一起规划",
    desc: "不是单点建站，而是把官网、小程序、私域商城、行业内容和咨询转化放在同一套获客路径里。",
  },
  {
    icon: CheckCircle,
    iconColor: "text-sky-600",
    iconBg: "bg-sky-50",
    title: "预算有限也能分阶段做",
    desc: "先做启动方案，验证咨询和曝光后再升级商城、门店、教育系统或 GEO 托管服务。",
  },
]

export function Advantages() {
  return (
    <section className="py-24 px-4 sm:px-6 section-blue-bg">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-3">
            为什么选择维双云
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">
            不只是搭页面，而是帮企业搭建可获客的线上入口
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty">
            维双云更重视搜索收录、AI 问答曝光和客户咨询转化，让官网和小程序成为长期线索入口。
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {advantages.map((item) => (
            <div
              key={item.title}
              className="bg-card border border-border rounded-xl p-6 card-hover"
            >
              <div className={`size-11 rounded-xl flex items-center justify-center ${item.iconBg} mb-4`}>
                <item.icon className={`size-5 ${item.iconColor}`} />
              </div>
              <h3 className="font-bold text-foreground text-base mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
