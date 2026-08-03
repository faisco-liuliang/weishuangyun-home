import Link from "next/link"
import { buttonVariants } from "@/components/ui/button"
import { ContactQrButton } from "@/components/contact/contact-qr-button"
import { cn } from "@/lib/utils"
import {
  ArrowRight,
  BadgeCheck,
  BarChart3,
  Calendar,
  Globe,
  GraduationCap,
  Layers3,
  Share2,
  ShoppingBag,
  Sparkles,
  Store,
  Users,
} from "lucide-react"

const productLinks = [
  {
    href: "/products/mall",
    icon: ShoppingBag,
    title: "私域商城",
    tags: "AI 营销商城，小程序+会员+分销闭环",
  },
  {
    href: "/products/website",
    icon: Globe,
    title: "企业官网",
    tags: "AI 建站+SEO/GEO，官网内容自动增长",
  },
  {
    href: "/products/booking",
    icon: Calendar,
    title: "轻应用",
    tags: "AI 表单/预约/内容发布小程序",
  },
  {
    href: "/products/education",
    icon: GraduationCap,
    title: "教育系统",
    tags: "AI 题库+直播课+知识付费",
  },
  {
    href: "/products/store",
    icon: Store,
    title: "门店系统",
    tags: "AI 经营分析，多门店会员一体化",
  },
  {
    href: "/products/geo",
    icon: Sparkles,
    title: "GEO 优化系统",
    tags: "让 DeepSeek、豆包等大模型推荐品牌",
    badge: "新品上线",
  },
]

const serviceProofs = [
  {
    icon: BadgeCheck,
    title: "顾问式梳理",
    desc: "先梳理业务、关键词和转化路径",
  },
  {
    icon: BarChart3,
    title: "搜索与 AI 曝光",
    desc: "兼顾百度收录和 AI 问答引用",
  },
  {
    icon: Layers3,
    title: "获客闭环",
    desc: "官网、小程序、内容和咨询承接",
  },
]

const heroSlides = [
  {
    eyebrow: "官网 + 小程序 + GEO 获客解决方案",
    title: "维双云",
    accent: "让企业官网和小程序成为 AI 时代的获客入口",
    subtitle: "不只搭建页面，更帮企业被搜索、被 AI 推荐、被客户找到",
    desc: "维双云为中小企业提供官网建设、小程序搭建、SEO/GEO 内容布局和私域转化方案，帮助品牌在百度、豆包、元宝、DeepSeek 等搜索与 AI 问答场景中获得更多曝光。",
    primary: "规划获客入口",
    secondary: "查看 GEO 方案",
    href: "/contact",
    secondaryHref: "/products/geo",
    proofs: serviceProofs,
  },
  {
    eyebrow: "99 元/年做小程序 · 买2年送2年",
    title: "99 元/年做小程序",
    accent: "低成本上线",
    subtitle: "10分钟轻松做小程序，门店、预约、表单、会员都能低成本上线",
    desc: "适合先把门店展示、预约留资、服务项目和基础会员沉淀起来。入门版 99 元/年起，支持买2年送2年，再叠加渠道特惠更划算。",
    primary: "领取 99 元方案",
    secondary: "查看小程序价格",
    href: "/contact",
    secondaryHref: "/pricing#store",
    proofs: [
      { icon: Calendar, title: "预约表单", desc: "服务预约、报名咨询、线索收集" },
      { icon: Store, title: "门店展示", desc: "项目、地址、活动一页展示" },
      { icon: BadgeCheck, title: "买2年送2年", desc: "4 年使用期，年均更低" },
    ],
  },
  {
    eyebrow: "10分钟轻松做网站 · 30 天启动 GEO 内容布局",
    title: "官网建设",
    accent: "从上线到持续获客",
    subtitle: "10分钟轻松做网站，先搭建能承接咨询的官网",
    desc: "适合预算有限但希望长期获客的企业：先上线基础官网、核心产品页、案例页和 FAQ，再围绕行业关键词持续布局 GEO 文章和专题内容。",
    primary: "获取官网方案",
    secondary: "查看官网产品",
    href: "/contact",
    secondaryHref: "/products/website",
    proofs: [
      { icon: Globe, title: "营销型官网", desc: "产品页、案例页、FAQ 和表单承接" },
      { icon: BarChart3, title: "内容布局", desc: "关键词、专题页和 GEO 文章规划" },
      { icon: BadgeCheck, title: "30 天启动", desc: "从上线到内容曝光逐步推进" },
    ],
  },
  {
    eyebrow: "商城小程序 · 会员分销 · 私域复购",
    title: "私域商城",
    accent: "买2年送2年",
    subtitle: "把商品、会员、直播和分销放进同一套系统",
    desc: "适合有商品、有复购、有社群资源的商家，用商城小程序承接内容流量，再通过会员、优惠券、拼团和分销持续转化。",
    primary: "咨询商城方案",
    secondary: "查看商城功能",
    href: "/contact",
    secondaryHref: "/products/mall",
    proofs: [
      { icon: ShoppingBag, title: "一站多端", desc: "小程序、微商城、PC 统一管理" },
      { icon: Users, title: "会员复购", desc: "积分、储值、等级和优惠券" },
      { icon: Share2, title: "分销裂变", desc: "推广员、拼团、社群团购" },
    ],
  },
]

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(180deg,#f8fbff_0%,#eef5ff_100%)] pt-16">
      <style>
        {`
          @keyframes weishuangyunHeroSlide {
            0%, 21% { opacity: 1; transform: translateY(0); pointer-events: auto; }
            25%, 96% { opacity: 0; transform: translateY(14px); pointer-events: none; }
            100% { opacity: 1; transform: translateY(0); pointer-events: auto; }
          }
        `}
      </style>
      <div
        className="absolute inset-0 opacity-60"
        style={{
          backgroundImage:
            "linear-gradient(rgba(37,99,235,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(37,99,235,0.08) 1px, transparent 1px)",
          backgroundSize: "54px 54px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:py-8">
        <div className="grid gap-5 lg:grid-cols-[280px_minmax(0,1fr)] lg:items-stretch">
          <aside className="rounded-lg bg-primary p-4 text-primary-foreground shadow-xl shadow-primary/15">
            <nav className="grid gap-1.5 sm:grid-cols-2 lg:grid-cols-1">
              {productLinks.map(({ href, icon: Icon, title, tags, badge }) => (
                <Link
                  key={title}
                  href={href}
                  className="group flex items-start gap-3 rounded-md px-3 py-2.5 transition-colors hover:bg-white/12"
                >
                  <Icon className="mt-0.5 size-4 shrink-0 text-white" />
                  <span className="min-w-0">
                    <span className="flex flex-wrap items-center gap-2 text-base font-bold tracking-tight">
                      {title}
                      {badge && <span className="rounded-full bg-white/18 px-2 py-0.5 text-[10px] font-semibold text-white">{badge}</span>}
                    </span>
                    <span className="mt-0.5 block text-xs font-medium leading-5 text-blue-100/85">{tags}</span>
                  </span>
                </Link>
              ))}
            </nav>
          </aside>

          <div className="relative overflow-hidden rounded-lg bg-white/80 shadow-sm ring-1 ring-blue-100 backdrop-blur">
            <div className="h-full">
              <div className="flex flex-col justify-center px-6 py-10 sm:px-10 lg:px-16">
                <div className="relative min-h-[560px] sm:min-h-[520px]">
                  {heroSlides.map((slide, index) => (
                    <div
                      key={slide.eyebrow}
                      className="absolute inset-0 flex flex-col justify-center opacity-0"
                      style={{ animation: "weishuangyunHeroSlide 20s infinite", animationDelay: `${index * 5}s` }}
                    >
                      <div className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-primary/15 bg-white px-4 py-2 text-sm font-semibold text-primary shadow-sm">
                        <span className="size-2 rounded-full bg-primary" />
                        {slide.eyebrow}
                      </div>

                      <h1 className="max-w-4xl text-4xl font-bold leading-tight tracking-tight text-slate-950 sm:text-5xl xl:text-[56px]">
                        {slide.title}
                        <span className="text-primary"> {slide.accent}</span>
                      </h1>
                      <p className="mt-3 text-xl font-semibold text-slate-500 sm:text-2xl">{slide.subtitle}</p>
                      <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">{slide.desc}</p>

                      <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                        {slide.href === "/contact" ? (
                          <ContactQrButton size="lg" className="h-12 rounded-full bg-primary px-8 text-primary-foreground hover:bg-primary/90">
                            {slide.primary}
                            <ArrowRight className="ml-2 size-5" />
                          </ContactQrButton>
                        ) : (
                          <Link
                            href={slide.href}
                            className={cn(buttonVariants({ size: "lg" }), "h-12 rounded-full bg-primary px-8 text-primary-foreground hover:bg-primary/90")}
                          >
                            {slide.primary}
                            <ArrowRight className="ml-2 size-5" />
                          </Link>
                        )}
                        <Link
                          href={slide.secondaryHref}
                          className={cn(buttonVariants({ variant: "outline", size: "lg" }), "h-12 rounded-full border-primary/30 bg-white px-8 text-primary hover:bg-primary/5")}
                        >
                          {slide.secondary}
                        </Link>
                      </div>

                      <div className="mt-10 grid gap-3 sm:grid-cols-3">
                        {slide.proofs.map(({ icon: Icon, title, desc }) => (
                          <div key={title} className="flex gap-3 rounded-lg bg-white/65 p-3 ring-1 ring-blue-100">
                            <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-primary">
                              <Icon className="size-4" />
                            </div>
                            <div>
                              <p className="font-semibold text-slate-900">{title}</p>
                              <p className="mt-1 text-sm leading-5 text-slate-500">{desc}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                  <div className="absolute bottom-0 left-0 flex gap-2">
                    {heroSlides.map((slide, index) => (
                      <span key={slide.eyebrow} className={cn("h-1.5 rounded-full bg-primary/25", index === 0 ? "w-10 bg-primary" : "w-5")} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
