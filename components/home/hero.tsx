"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { buttonVariants } from "@/components/ui/button"
import { ContactQrButton } from "@/components/contact/contact-qr-button"
import { OtherProductsMenu } from "@/components/products/other-products-menu"
import { cn } from "@/lib/utils"
import {
  ArrowRight,
  BadgeCheck,
  Calendar,
  GraduationCap,
  Layers3,
  Share2,
  ShoppingBag,
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
]

const primaryProductLinks = ["门店系统", "私域商城", "轻应用", "教育系统"].map(
  (title) => productLinks.find((product) => product.title === title)!
)

const heroSlides = [
  {
    eyebrow: "轻应用小程序 · 预约、表单、内容发布多端同步",
    title: "轻应用",
    accent: "服务更好成交",
    subtitle: "10分钟做小程序，把预约、留资和服务展示放在一起",
    desc: "适合美业、家政、医疗、活动和本地服务商家，支持服务预约、万能表单、到店核销及微信、抖音等多端发布。",
    primary: "咨询轻应用方案",
    secondary: "点击注册",
    href: "/contact",
    secondaryHref: "/products/booking",
    proofs: [
      { icon: Calendar, title: "预约表单", desc: "预约报名、咨询留资一次完成" },
      { icon: Layers3, title: "多端发布", desc: "微信、百度、抖音、快手多端覆盖" },
      { icon: BadgeCheck, title: "到店核销", desc: "服务订单和到店体验更好管理" },
    ],
  },
  {
    eyebrow: "198 元/年做小程序 · 买2年送2年",
    title: "198 元/年做小程序",
    accent: "低成本上线",
    subtitle: "10分钟轻松做小程序，门店、预约、表单、会员都能低成本上线",
    desc: "适合先把门店展示、预约留资、服务项目和基础会员沉淀起来。入门版 198 元/年起，支持买2年送2年，再叠加渠道特惠更划算。",
    primary: "领取 198 元方案",
    secondary: "点击注册",
    href: "/contact",
    secondaryHref: "/products/store",
    proofs: [
      { icon: Calendar, title: "预约表单", desc: "服务预约、报名咨询、线索收集" },
      { icon: Store, title: "门店展示", desc: "项目、地址、活动一页展示" },
      { icon: BadgeCheck, title: "买2年送2年", desc: "4 年使用期，年均更低" },
    ],
  },
  {
    eyebrow: "教育小程序 · 课程、教务、题库、直播教学",
    title: "教育系统",
    accent: "招生教学一体化",
    subtitle: "从课程展示到学员管理，用一套系统承接教学经营",
    desc: "适合培训机构与知识付费商家，支持课程售卖、报名约课、题库作业、直播录播、学员管理和招生推广。",
    primary: "咨询教育方案",
    secondary: "点击注册",
    href: "/contact",
    secondaryHref: "/products/education",
    proofs: [
      { icon: GraduationCap, title: "课程教务", desc: "课程、班级、学员和排课统一管理" },
      { icon: Users, title: "招生转化", desc: "报名约课、会员和推广员协同招生" },
      { icon: BadgeCheck, title: "直播题库", desc: "直播录播、作业答题和知识付费" },
    ],
  },
  {
    eyebrow: "商城小程序 · 会员分销 · 私域复购",
    title: "私域商城",
    accent: "买2年送2年",
    subtitle: "把商品、会员、直播和分销放进同一套系统",
    desc: "适合有商品、有复购、有社群资源的商家，用商城小程序承接内容流量，再通过会员、优惠券、拼团和分销持续转化。",
    primary: "咨询商城方案",
    secondary: "点击注册",
    href: "/contact",
    secondaryHref: "/products/mall",
    proofs: [
      { icon: ShoppingBag, title: "一站多端", desc: "小程序、微商城、PC 统一管理" },
      { icon: Users, title: "会员复购", desc: "积分、储值、等级和优惠券" },
      { icon: Share2, title: "分销裂变", desc: "推广员、拼团、社群团购" },
    ],
  },
]

const orderedHeroSlides = [heroSlides[1], heroSlides[0], ...heroSlides.slice(2)]

export function Hero() {
  const [activeSlide, setActiveSlide] = useState(0)

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % orderedHeroSlides.length)
    }, 6000)

    return () => window.clearInterval(timer)
  }, [])

  return (
    <section className="relative overflow-hidden bg-[#f7f9fd] pt-16">
      <div className="absolute inset-x-0 top-0 h-[520px] bg-[radial-gradient(circle_at_76%_18%,rgba(77,139,255,0.18),transparent_29%),radial-gradient(circle_at_22%_30%,rgba(147,197,253,0.22),transparent_25%)]" />
      <div className="absolute left-1/2 top-24 size-96 -translate-x-1/2 rounded-full bg-blue-200/20 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-7 sm:px-6 lg:py-10">
        <div className="mb-4 text-center">
          <span className="inline-flex w-full max-w-3xl justify-center rounded-2xl border border-blue-100 bg-white/80 px-6 py-3 text-base font-bold tracking-[0.03em] text-primary shadow-sm backdrop-blur-sm sm:text-lg">
            面向中小商家的 198 元/年起高性价比小程序平台
          </span>
        </div>
        <div className="grid gap-5 lg:grid-cols-[252px_minmax(0,1fr)] lg:items-stretch">
          <aside className="hidden rounded-[26px] bg-slate-950 p-3 text-primary-foreground shadow-[0_24px_70px_-28px_rgba(15,23,42,0.65)] lg:block">
            <div className="rounded-[18px] border border-white/10 bg-white/[0.06] px-4 py-4">
              <p className="text-xs font-medium tracking-[0.16em] text-blue-300">PRODUCT SUITE</p>
              <p className="mt-1.5 text-lg font-bold text-white">一站式增长工具</p>
              <p className="mt-1 text-xs leading-5 text-slate-400">从获客到复购，匹配每个业务阶段</p>
            </div>
              <nav className="mt-3 grid gap-1">
              {primaryProductLinks.map(({ href, icon: Icon, title, tags }) => (
                <Link
                  key={title}
                  href={href}
                  className="group flex items-start gap-3 rounded-2xl px-3 py-3 transition-all hover:bg-white/[0.1]"
                >
                  <span className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-xl bg-white/[0.09] text-blue-200 transition-colors group-hover:bg-blue-500 group-hover:text-white">
                    <Icon className="size-4" />
                  </span>
                  <span className="min-w-0">
                    <span className="flex flex-wrap items-center gap-1.5 text-[15px] font-bold tracking-tight text-white">
                      {title}
                    </span>
                    <span className="mt-1 block text-[11px] font-medium leading-4 text-slate-400 transition-colors group-hover:text-slate-300">{tags}</span>
                  </span>
                </Link>
              ))}
            </nav>
            <OtherProductsMenu />
            <div className="mx-2 mt-3 border-t border-white/10 pt-3 text-center text-[11px] text-slate-500">专业顾问，陪您从 0 到 1 搭建</div>
          </aside>

          <div className="relative overflow-hidden rounded-[26px] bg-white shadow-[0_24px_65px_-30px_rgba(30,64,175,0.35)] ring-1 ring-slate-200/80">
            <div className="absolute right-0 top-0 h-72 w-2/3 bg-[radial-gradient(ellipse_at_top_right,rgba(219,234,254,0.92),transparent_70%)]" />
            <div className="absolute bottom-0 right-8 size-40 rounded-full border-[22px] border-blue-50/80" />
            <div className="h-full">
              <div className="relative flex flex-col justify-center px-6 py-9 sm:px-10 lg:px-14">
                <div className="relative min-h-[500px] sm:min-h-[470px] lg:min-h-[510px]">
                  {orderedHeroSlides.map((slide, index) => (
                    <div
                      key={slide.eyebrow}
                      className={cn(
                        "absolute inset-0 flex flex-col justify-center transition-all duration-500 ease-out",
                        index === activeSlide ? "pointer-events-auto translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0"
                      )}
                    >
                      <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-blue-100 bg-blue-50/80 px-3.5 py-2 text-xs font-semibold text-primary shadow-sm">
                        <span className="size-1.5 rounded-full bg-primary shadow-[0_0_0_4px_rgba(37,99,235,0.1)]" />
                        {slide.eyebrow}
                      </div>

                      <h1 className="max-w-4xl text-4xl font-bold leading-[1.24] tracking-[0.015em] text-slate-950 sm:text-5xl xl:text-[58px]">
                        {slide.title}
                        <span className="bg-gradient-to-r from-blue-600 to-[#4f8cff] bg-clip-text text-transparent"> {slide.accent}</span>
                      </h1>
                      <p className="mt-5 text-lg font-semibold leading-[1.4] tracking-[0.01em] text-slate-600 sm:text-xl">{slide.subtitle}</p>
                      <p className="mt-5 max-w-[680px] text-[15px] leading-7 text-slate-500 sm:text-base">{slide.desc}</p>

                      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                        {slide.href === "/contact" ? (
                          <ContactQrButton size="lg" className="h-12 rounded-xl bg-primary px-7 text-primary-foreground shadow-lg shadow-blue-600/20 hover:bg-primary/90">
                            {slide.primary}
                            <ArrowRight className="ml-2 size-5" />
                          </ContactQrButton>
                        ) : (
                          <Link
                            href={slide.href}
                            className={cn(buttonVariants({ size: "lg" }), "h-12 rounded-xl bg-primary px-7 text-primary-foreground shadow-lg shadow-blue-600/20 hover:bg-primary/90")}
                          >
                            {slide.primary}
                            <ArrowRight className="ml-2 size-5" />
                          </Link>
                        )}
                        <Link
                          href={slide.secondaryHref}
                          className={cn(buttonVariants({ variant: "outline", size: "lg" }), "h-12 rounded-xl border-slate-200 bg-white/80 px-7 text-slate-700 hover:border-blue-200 hover:bg-blue-50 hover:text-primary")}
                        >
                          {slide.secondary}
                        </Link>
                      </div>

                      <div className="mt-10 mb-10 grid gap-3 sm:grid-cols-3">
                        {slide.proofs.map(({ icon: Icon, title, desc }) => (
                          <div key={title} className="flex gap-3 rounded-2xl border border-slate-100 bg-white/85 p-3.5 shadow-[0_8px_20px_-18px_rgba(15,23,42,0.55)]">
                            <div className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-primary">
                              <Icon className="size-4" />
                            </div>
                            <div>
                              <p className="text-sm font-semibold text-slate-900">{title}</p>
                              <p className="mt-0.5 text-xs leading-5 text-slate-500">{desc}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                  <div className="absolute bottom-0 left-0 flex items-center gap-2">
                    <span className="mr-1 text-[10px] font-semibold tracking-[0.14em] text-slate-400">FEATURED</span>
                    {orderedHeroSlides.map((slide, index) => (
                      <button
                        key={slide.eyebrow}
                        type="button"
                        onClick={() => setActiveSlide(index)}
                        aria-label={`切换到第 ${index + 1} 张轮播图`}
                        aria-current={index === activeSlide}
                        className={cn(
                          "h-1.5 rounded-full bg-slate-200 transition-all hover:bg-primary/60",
                          index === activeSlide ? "w-9 bg-primary" : "w-4"
                        )}
                      />
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
