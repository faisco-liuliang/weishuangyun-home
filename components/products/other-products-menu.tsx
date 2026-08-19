"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { Globe, X } from "lucide-react"

export function OtherProductsMenu() {
  const [open, setOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onPointerDown = (event: PointerEvent) => {
      if (!menuRef.current?.contains(event.target as Node)) setOpen(false)
    }
    document.addEventListener("pointerdown", onPointerDown)
    return () => document.removeEventListener("pointerdown", onPointerDown)
  }, [])

  return (
    <div ref={menuRef} className="relative mx-2 mt-3">
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="flex w-full items-center justify-between rounded-2xl border border-white/10 bg-white/[0.055] px-3 py-3 text-left transition-colors hover:bg-white/[0.11] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
        aria-haspopup="menu"
        aria-expanded={open}
      >
        <span>
          <span className="block text-sm font-bold text-white">其他产品</span>
          <span className="mt-1 block text-[11px] text-slate-400">查看更多产品方案</span>
        </span>
        <span className="text-lg leading-none text-blue-300">+</span>
      </button>

      {open && (
        <div className="absolute bottom-0 left-[calc(100%+18px)] z-[70] w-[320px] rounded-2xl border border-slate-100 bg-white p-3 shadow-[0_20px_45px_-16px_rgba(15,23,42,0.35)]" role="menu" aria-label="其他产品">
          <div className="mb-2 flex items-center justify-between px-2 pt-1">
            <p className="text-xs font-semibold tracking-[0.12em] text-slate-400">其他产品</p>
            <button type="button" onClick={() => setOpen(false)} className="rounded-lg p-1 text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-700" aria-label="关闭菜单">
              <X className="size-4" />
            </button>
          </div>
          <Link href="/products/website" onClick={() => setOpen(false)} role="menuitem" className="flex items-start gap-3 rounded-xl p-3 transition-colors hover:bg-sky-50">
            <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-sky-50 text-sky-600"><Globe className="size-5" /></span>
            <span>
              <span className="block text-[15px] font-bold text-slate-900">企业官网</span>
              <span className="mt-1 block text-xs leading-5 text-slate-500">AI 建站 + SEO，官网内容持续增长</span>
            </span>
          </Link>
        </div>
      )}
    </div>
  )
}
