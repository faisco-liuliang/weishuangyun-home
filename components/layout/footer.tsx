import Link from "next/link"
import { Separator } from "@/components/ui/separator"
import {
  ShoppingCart,
  Globe,
  GraduationCap,
  CalendarCheck,
  Store,
} from "lucide-react"

const productLinks = [
  { name: "AI 营销私域商城", href: "/products/mall", icon: ShoppingCart },
  { name: "企业官网 AI 建站", href: "/products/website", icon: Globe },
  { name: "AI 题库 / 知识付费", href: "/products/education", icon: GraduationCap },
  { name: "AI 轻应用 / 服务预约", href: "/products/booking", icon: CalendarCheck },
  { name: "AI 辅助门店系统", href: "/products/store", icon: Store },
]

const supportLinks = [
  { name: "价格中心", href: "/pricing" },
  { name: "成功案例", href: "/cases" },
  { name: "帮助文档", href: "/docs" },
  { name: "博客资讯", href: "/blog" },
]

const aboutLinks = [
  { name: "关于维双云", href: "/about" },
  { name: "加入我们", href: "/about#join" },
  { name: "代理合作", href: "/about#partner" },
]

const seoKeywords = [
  { name: "网站建站", href: "/products/website" },
  { name: "企业网站建设", href: "/products/website" },
  { name: "营销型网站建设", href: "/products/website" },
  { name: "AI 建站", href: "/products/website" },
  { name: "SEO 建站", href: "/products/website" },
  { name: "小程序制作", href: "/products/booking" },
  { name: "小程序开发", href: "/products/booking" },
  { name: "小程序商城", href: "/products/mall" },
  { name: "商城小程序制作", href: "/products/mall" },
  { name: "私域商城系统", href: "/products/mall" },
  { name: "门店小程序", href: "/products/store" },
  { name: "门店管理系统", href: "/products/store" },
  { name: "教育小程序", href: "/products/education" },
  { name: "知识付费系统", href: "/products/education" },
  { name: "企业获客系统", href: "/" },
]

export function Footer() {
  return (
    <footer className="bg-foreground text-secondary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand column */}
          <div className="flex flex-col gap-5">
            <div>
              <Link href="/" className="flex items-center gap-2 mb-3">
                <div className="size-8 rounded-lg bg-primary flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-sm">立</span>
                </div>
                <span className="font-bold text-lg text-white">维双云</span>
              </Link>
              <p className="text-sm text-slate-400 leading-relaxed">
                专注 AI 时代企业数字化建站与营销工具，帮助中小企业快速搭建获客、转化、复购一体化增长体系。
              </p>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-semibold text-white mb-4 text-sm uppercase tracking-wide">
              产品中心
            </h3>
            <ul className="flex flex-col gap-2.5">
              {productLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors"
                  >
                    <link.icon className="size-3.5 shrink-0" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold text-white mb-4 text-sm uppercase tracking-wide">
              支持与资源
            </h3>
            <ul className="flex flex-col gap-2.5">
              {supportLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            <h3 className="font-semibold text-white mt-8 mb-4 text-sm uppercase tracking-wide">
              关于我们
            </h3>
            <ul className="flex flex-col gap-2.5">
              {aboutLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* QR / WeChat */}
          <div>
            <h3 className="font-semibold text-white mb-4 text-sm uppercase tracking-wide">
              扫码咨询
            </h3>
            <div className="size-32 rounded-xl bg-white p-2 flex items-center justify-center mb-3 shadow-sm">
              <img
                src="/contact-qr.png"
                alt="微信客服二维码"
                className="h-full w-full rounded-lg object-contain"
              />
            </div>
            <p className="text-xs text-slate-500 leading-relaxed">
              微信扫码，专属顾问<br />为您一对一解答
            </p>
          </div>
        </div>

        <Separator className="my-10 bg-slate-800" />

        <div className="mb-10">
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-white">热门搜索词</h3>
          <div className="flex flex-wrap gap-2">
            {seoKeywords.map((keyword) => (
              <Link
                key={keyword.name}
                href={keyword.href}
                className="rounded-md border border-slate-800 bg-slate-900/60 px-3 py-1.5 text-xs text-slate-400 transition-colors hover:border-slate-700 hover:text-white"
              >
                {keyword.name}
              </Link>
            ))}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2024 维双云. 广州凡科互联网科技股份有限公司旗下轻量子品牌。保留所有权利.</p>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="hover:text-slate-300 transition-colors">
              隐私政策
            </Link>
            <Link href="/terms" className="hover:text-slate-300 transition-colors">
              服务条款
            </Link>
            <Link href="/sitemap.xml" className="hover:text-slate-300 transition-colors">
              网站地图
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
