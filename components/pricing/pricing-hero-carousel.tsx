"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowDown, ArrowLeft, ArrowRight } from "lucide-react"
import { buttonVariants } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

type PricingHeroSlide = {
  id: string
  label: string
  eyebrow: string
  title: string
  highlight: string
  subtitle: string
  description: string
  price: string
  priceLabel: string
  promotion: string
  registerUrl: string
}

const slides: PricingHeroSlide[] = [
  {
    id: "overview",
    label: "总览",
    eyebrow: "维双云门店通内测版 198 元/年 · 多产品线按版本计费",
    title: "价格中心",
    highlight: "透明可选",
    subtitle: "维双云门店通内测版 198 元/年，专属资格客户可开通",
    description: "多年优惠、渠道特惠价和顾问服务可叠加享受。按企业官网、商城小程序、门店系统、教育系统和轻应用拆分报价，版本功能清晰透明。",
    price: "¥198/年起",
    priceLabel: "维双云门店通内测版",
    promotion: "买2年送2年",
    registerUrl: "https://i.fkw.com/?_ta=9611",
  },
  {
    id: "store",
    label: "门店",
    eyebrow: "门店小程序 · 会员、预约、收银一体化",
    title: "门店系统",
    highlight: "轻松开店",
    subtitle: "线上门店快速上线，经营管理更省心",
    description: "适合实体店和连锁门店，覆盖商品服务展示、预约下单、会员储值、收银开单和经营数据管理。",
    price: "¥198/年起",
    priceLabel: "维双云门店通内测版",
    promotion: "买2年送2年",
    registerUrl: "https://yk.fkw.com/model/?_ta=9611",
  },
  {
    id: "mall",
    label: "商城",
    eyebrow: "商城小程序 · 交易、会员、分销一体化",
    title: "私域商城",
    highlight: "生意增长",
    subtitle: "把商品、会员和营销活动放进一个商城",
    description: "单商户、多商户均可使用，支持商品销售、订单处理、会员运营、分销推广和拼团等营销玩法。",
    price: "¥1,998/年起",
    priceLabel: "商城特惠版",
    promotion: "渠道特惠可叠加",
    registerUrl: "https://mall.fkw.com/model/1/?_ta=9611",
  },
  {
    id: "booking",
    label: "轻应用",
    eyebrow: "轻应用小程序 · 多端发布、预约表单更灵活",
    title: "轻应用",
    highlight: "快速上线",
    subtitle: "快速搭建小程序，服务预约和内容发布按版本配置",
    description: "适合美业、家政、医疗、活动和本地服务等场景，支持表单、预约、到店核销及微信、抖音等多端发布。",
    price: "¥698/年起",
    priceLabel: "小程序标准版",
    promotion: "买2年送2年",
    registerUrl: "https://qz.fkw.com/model/?_ta=9611",
  },
  {
    id: "education",
    label: "教育",
    eyebrow: "教育小程序 · 课程、教务、题库、直播教学",
    title: "教育系统",
    highlight: "招生提效",
    subtitle: "从课程展示到学员管理，一套系统承接教学经营",
    description: "适合培训机构与知识付费商家，覆盖课程售卖、报名约课、题库作业、直播录播、学员管理和招生推广。",
    price: "¥1,998/年起",
    priceLabel: "教育标准版",
    promotion: "买2年送2年",
    registerUrl: "https://edu.fkw.com/template/tf?_ta=9611",
  },
]

export function PricingHeroCarousel() {
  const [activeIndex, setActiveIndex] = useState(0)
  const slide = slides[activeIndex]

  const move = (step: number) => {
    setActiveIndex((current) => (current + step + slides.length) % slides.length)
  }

  return (
    <div className="relative overflow-hidden rounded-[26px] bg-white shadow-[0_24px_65px_-30px_rgba(30,64,175,0.35)] ring-1 ring-slate-200/80">
      <div className="absolute right-0 top-0 h-72 w-2/3 bg-[radial-gradient(ellipse_at_top_right,rgba(219,234,254,0.92),transparent_70%)]" />
      <div className="absolute bottom-0 right-8 size-40 rounded-full border-[22px] border-blue-50/80" />
      <div className="relative flex min-h-[unset] flex-col justify-center px-5 py-8 sm:min-h-[510px] sm:px-10 sm:py-9 lg:px-14">
        <Badge className="mb-5 w-fit border-blue-100 bg-blue-50/80 px-3 py-1.5 text-xs text-primary shadow-sm sm:mb-6 sm:px-3.5 sm:py-2">
          <span className="size-1.5 rounded-full bg-primary shadow-[0_0_0_4px_rgba(37,99,235,0.1)]" />
          {slide.eyebrow}
        </Badge>
        <h1 className="max-w-4xl text-3xl font-bold leading-[1.28] tracking-[0.01em] text-slate-950 sm:text-5xl sm:leading-[1.24] sm:tracking-[0.015em] xl:text-[58px]">
          {slide.title} <span className="bg-gradient-to-r from-blue-600 to-[#4f8cff] bg-clip-text text-transparent">{slide.highlight}</span>
        </h1>
        <p className="mt-4 text-base font-semibold leading-[1.5] tracking-[0.01em] text-slate-600 sm:mt-5 sm:text-xl sm:leading-[1.4]">{slide.subtitle}</p>
        <p className="mt-4 max-w-[680px] text-sm leading-6 text-slate-500 sm:mt-5 sm:text-base sm:leading-7">{slide.description}</p>
        <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row">
          <Link href={slide.id === "overview" ? "#pricing-quotes" : `#${slide.id}`} className={cn(buttonVariants({ size: "lg" }), "h-12 rounded-xl bg-primary px-7 text-primary-foreground shadow-lg shadow-blue-600/20 hover:bg-primary/90")}>
            下拉查看报价 <ArrowDown className="ml-2 size-4" />
          </Link>
          <a href={slide.registerUrl} target="_blank" rel="noopener noreferrer" className={cn(buttonVariants({ variant: "outline", size: "lg" }), "h-12 rounded-xl border-slate-200 bg-white/80 px-7 text-slate-700 hover:border-blue-200 hover:bg-blue-50 hover:text-primary")}>
            免费试用 <ArrowRight className="ml-2 size-4" />
          </a>
        </div>
        <div className="mt-7 grid grid-cols-3 gap-2 sm:mt-10 sm:gap-3">
          <div className="rounded-xl border border-slate-100 bg-white/85 p-3 shadow-[0_8px_20px_-18px_rgba(15,23,42,0.55)] sm:rounded-2xl sm:p-4"><p className="text-[11px] text-slate-500 sm:text-xs">{slide.priceLabel}</p><p className="mt-1 text-xs font-semibold text-slate-900 sm:text-sm">{slide.price}</p></div>
          <div className="rounded-xl border border-slate-100 bg-white/85 p-3 shadow-[0_8px_20px_-18px_rgba(15,23,42,0.55)] sm:rounded-2xl sm:p-4"><p className="text-[11px] text-slate-500 sm:text-xs">年度活动</p><p className="mt-1 text-xs font-semibold text-slate-900 sm:text-sm">{slide.promotion}</p></div>
          <div className="rounded-xl border border-slate-100 bg-white/85 p-3 shadow-[0_8px_20px_-18px_rgba(15,23,42,0.55)] sm:rounded-2xl sm:p-4"><p className="text-[11px] text-slate-500 sm:text-xs">顾问服务</p><p className="mt-1 text-xs font-semibold text-slate-900 sm:text-sm">协助选择版本</p></div>
        </div>
        <div className="mt-8 flex flex-wrap items-center gap-2" aria-label="价格产品横幅切换">
          <span className="mr-2 text-[10px] font-semibold tracking-[0.14em] text-slate-400">PRICE GUIDE</span>
          {slides.map((item, index) => (
            <button key={item.id} type="button" onClick={() => setActiveIndex(index)} aria-label={`查看${item.label}横幅`} aria-current={activeIndex === index ? "true" : undefined} className={cn("h-7 rounded-full px-2.5 text-xs font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2", activeIndex === index ? "bg-primary text-primary-foreground shadow-sm" : "bg-slate-200 text-slate-500 hover:bg-blue-100 hover:text-primary")}>
              {item.label}
            </button>
          ))}
          <button type="button" onClick={() => move(-1)} aria-label="上一张横幅" className="ml-1 rounded-full p-1.5 text-slate-500 hover:bg-slate-100 hover:text-primary"><ArrowLeft className="size-4" /></button>
          <button type="button" onClick={() => move(1)} aria-label="下一张横幅" className="rounded-full p-1.5 text-slate-500 hover:bg-slate-100 hover:text-primary"><ArrowRight className="size-4" /></button>
        </div>
      </div>
    </div>
  )
}
