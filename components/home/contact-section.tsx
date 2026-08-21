import Image from "next/image"
import { MessageCircle, ShieldCheck, Clock3 } from "lucide-react"

export function ContactSection() {
  return (
    <section id="contact" className="scroll-mt-16 bg-muted/40 px-4 py-20 sm:px-6">
      <div className="mx-auto grid max-w-5xl gap-10 rounded-3xl border border-blue-100 bg-white p-6 shadow-sm sm:p-10 lg:grid-cols-[1fr_360px] lg:items-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">联系我们</p>
          <h2 className="mt-3 text-3xl font-bold text-foreground sm:text-4xl">有问题，直接联系专属顾问</h2>
          <p className="mt-4 max-w-xl text-sm leading-7 text-muted-foreground sm:text-base">
            无论您想了解产品功能、套餐价格，还是需要选择适合自己的方案，都可以扫码添加企业微信咨询。
          </p>
          <div className="mt-7 grid gap-4 sm:grid-cols-2">
            <div className="flex gap-3 rounded-xl bg-blue-50 p-4">
              <MessageCircle className="mt-0.5 size-5 shrink-0 text-primary" />
              <div><p className="font-semibold text-foreground">一对一咨询</p><p className="mt-1 text-xs leading-5 text-muted-foreground">按实际经营需求推荐产品与版本</p></div>
            </div>
            <div className="flex gap-3 rounded-xl bg-blue-50 p-4">
              <Clock3 className="mt-0.5 size-5 shrink-0 text-primary" />
              <div><p className="font-semibold text-foreground">及时响应</p><p className="mt-1 text-xs leading-5 text-muted-foreground">工作日 9:30–18:00，周末请留言</p></div>
            </div>
          </div>
          <div className="mt-4 flex items-center gap-2 text-sm text-muted-foreground"><ShieldCheck className="size-4 text-primary" /> 产品试用、购买和报价支持</div>
        </div>

        <div className="flex items-center justify-center rounded-2xl border border-slate-100 bg-slate-50 p-5">
          <Image src="/contact-qr.png" alt="维双云企业微信客服二维码" width={480} height={480} className="size-full max-h-[320px] max-w-[320px] rounded-xl bg-white object-contain" />
        </div>
      </div>
    </section>
  )
}
