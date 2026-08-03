"use client"

import { useState } from "react"
import { X } from "lucide-react"
import { Button, buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

type ContactQrButtonProps = {
  children: React.ReactNode
  className?: string
  variant?: "default" | "outline" | "secondary" | "ghost" | "destructive" | "link"
  size?: "default" | "xs" | "sm" | "lg" | "icon" | "icon-xs" | "icon-sm" | "icon-lg"
}

export function ContactQrButton({ children, className, variant = "default", size = "default" }: ContactQrButtonProps) {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Button type="button" variant={variant} size={size} className={className} onClick={() => setOpen(true)}>
        {children}
      </Button>
      {open && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/55 px-4 backdrop-blur-sm" role="dialog" aria-modal="true">
          <div className="relative w-full max-w-sm rounded-lg bg-white p-6 text-center shadow-2xl">
            <button
              type="button"
              className="absolute right-3 top-3 rounded-md p-2 text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-700"
              onClick={() => setOpen(false)}
              aria-label="关闭客服二维码"
            >
              <X className="size-4" />
            </button>
            <p className="text-lg font-bold text-slate-950">扫码添加客服</p>
            <p className="mt-2 text-sm leading-6 text-slate-500">添加企业微信顾问，获取产品试用、购买和报价支持。</p>
            <div className="mx-auto mt-5 size-56 rounded-lg border border-slate-200 bg-white p-2 shadow-sm">
              <img src="/contact-qr.png" alt="企业微信客服二维码" className="h-full w-full rounded-md object-contain" />
            </div>
            <button
              type="button"
              className={cn(buttonVariants({ variant: "outline" }), "mt-5 w-full")}
              onClick={() => setOpen(false)}
            >
              我知道了
            </button>
          </div>
        </div>
      )}
    </>
  )
}
