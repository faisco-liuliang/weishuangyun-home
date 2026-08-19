"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import {
  ShoppingCart,
  Globe,
  GraduationCap,
  CalendarCheck,
  Store,
  ChevronDown,
  Menu,
  X,
} from "lucide-react"

const products = [
  {
    name: "私域商城",
    desc: "AI 营销商城，小程序+会员+分销闭环",
    href: "/products/mall",
    icon: ShoppingCart,
    color: "text-blue-600",
    bg: "bg-blue-50",
  },
  {
    name: "企业官网",
    desc: "AI 建站+SEO，官网内容持续增长",
    href: "/products/website",
    icon: Globe,
    color: "text-sky-600",
    bg: "bg-sky-50",
  },
  {
    name: "教育系统",
    desc: "AI 题库+直播课+知识付费",
    href: "/products/education",
    icon: GraduationCap,
    color: "text-violet-600",
    bg: "bg-violet-50",
  },
  {
    name: "轻应用",
    desc: "AI 表单/预约/内容发布小程序",
    href: "/products/booking",
    icon: CalendarCheck,
    color: "text-emerald-600",
    bg: "bg-emerald-50",
  },
  {
    name: "门店系统",
    desc: "AI 经营分析，多门店会员一体化",
    href: "/products/store",
    icon: Store,
    color: "text-orange-600",
    bg: "bg-orange-50",
  },
]

const navLinks = [
  { name: "首页", href: "/" },
  { name: "产品中心", href: "/products", hasDropdown: true },
  { name: "价格中心", href: "/pricing" },
  { name: "成功案例", href: "/cases" },
  { name: "博客", href: "/blog" },
  { name: "关于我们", href: "/about" },
]

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
    setDropdownOpen(false)
  }, [pathname])

  useEffect(() => {
    const onPointerDown = (event: PointerEvent) => {
      if (!dropdownRef.current?.contains(event.target as Node)) {
        setDropdownOpen(false)
      }
    }
    document.addEventListener("pointerdown", onPointerDown)
    return () => document.removeEventListener("pointerdown", onPointerDown)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/95 backdrop-blur-md border-b border-border shadow-sm"
          : "bg-white border-b border-border"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="relative flex items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <div className="size-8 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">维</span>
            </div>
            <span className="font-bold text-lg text-foreground tracking-tight">
              维双云
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex absolute left-1/2 -translate-x-1/2 items-center gap-1">
            {navLinks.map((link) =>
              link.hasDropdown ? (
                <div
                  key={link.name}
                  className="relative"
                  ref={dropdownRef}
                >
                  <button
                    type="button"
                    onClick={() => setDropdownOpen((open) => !open)}
                    aria-expanded={dropdownOpen}
                    className={cn(
                      "flex items-center gap-1 px-3 py-2 rounded-md text-sm font-medium transition-colors",
                      pathname.startsWith("/products")
                        ? "text-primary bg-accent"
                        : "text-foreground hover:text-primary hover:bg-accent"
                    )}
                  >
                    {link.name}
                    <ChevronDown
                      className={cn(
                        "size-3.5 transition-transform duration-200",
                        dropdownOpen && "rotate-180"
                      )}
                    />
                  </button>

                  {dropdownOpen && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1 w-[640px] bg-white border border-border rounded-xl shadow-xl p-4 grid grid-cols-2 gap-2">
                      {products.map((product) => (
                        <Link
                          key={product.name}
                          href={product.href}
                          className="flex items-start gap-3 p-3 rounded-lg hover:bg-accent transition-colors group"
                        >
                          <div className={cn("size-9 rounded-lg flex items-center justify-center shrink-0 mt-0.5", product.bg)}>
                            <product.icon className={cn("size-4", product.color)} />
                          </div>
                          <div>
                            <p className="flex flex-wrap items-center gap-2 text-sm font-semibold text-foreground transition-colors group-hover:text-primary">
                              {product.name}
                            </p>
                            <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed">
                              {product.desc}
                            </p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.name}
                  href={link.href}
                  className={cn(
                    "px-3 py-2 rounded-md text-sm font-medium transition-colors",
                    pathname === link.href
                      ? "text-primary bg-accent"
                      : "text-foreground hover:text-primary hover:bg-accent"
                  )}
                >
                  {link.name}
                </Link>
              )
            )}
          </nav>

          {/* Mobile menu toggle */}
          <button
            className="ml-auto lg:hidden p-2 rounded-md text-foreground hover:bg-accent"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "关闭菜单" : "打开菜单"}
          >
            {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-border">
          <nav className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "px-3 py-2.5 rounded-md text-sm font-medium transition-colors",
                  pathname === link.href || (link.hasDropdown && pathname.startsWith("/products"))
                    ? "text-primary bg-accent"
                    : "text-foreground hover:text-primary hover:bg-accent"
                )}
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
