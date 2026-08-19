import Image from "next/image"
import { ArrowRight, MessageCircle, Sparkles } from "lucide-react"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const templateUrl = "https://qz.fkw.com/model/?_ta=9611"

export function TemplateRegistration() {
  return (
    <section className="border-b border-slate-100 bg-[linear-gradient(180deg,#f8fbff_0%,#ffffff_100%)] px-4 py-14 sm:px-6 sm:py-18">
      <div className="mx-auto max-w-7xl">
        <div className="overflow-hidden rounded-3xl border border-blue-100 bg-white shadow-xl shadow-blue-950/5">
          <div>
            <div className="p-6 sm:p-8 lg:p-10">
              <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <div className="mb-3 flex w-fit items-center gap-2 rounded-full bg-primary/10 px-3 py-1.5 text-xs font-semibold text-primary">
                    <Sparkles className="size-3.5" />
                    免费模板库
                  </div>
                  <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">免费注册，挑选适合你的模板</h2>
                  <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600 sm:text-base">覆盖展示、预约、门店与服务等常用场景，注册后即可在线查看模板并开始搭建。</p>
                </div>
                <a
                  href={templateUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(buttonVariants({ size: "lg" }), "shrink-0 rounded-full px-6")}
                >
                  免费注册看模板
                  <ArrowRight className="ml-2 size-4" />
                </a>
              </div>

              <a
                href={templateUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative mt-7 block overflow-hidden rounded-2xl border border-blue-100 bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                aria-label="免费注册并查看小程序模板库"
              >
                <Image
                  src="/home-template-registration.png"
                  alt="小程序模板库预览，点击免费注册"
                  width={1600}
                  height={1300}
                  className="h-auto w-full transition-transform duration-500 group-hover:scale-[1.015]"
                />
                <span className="absolute bottom-4 left-1/2 inline-flex -translate-x-1/2 items-center gap-2 whitespace-nowrap rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/30 transition-transform group-hover:-translate-y-1">
                  点击图片，立即免费注册
                  <ArrowRight className="size-4" />
                </span>
              </a>
            </div>

            <aside className="border-t border-blue-100 bg-[linear-gradient(160deg,#eef5ff_0%,#f7f2ff_100%)] px-6 py-10 text-center sm:px-8">
              <div className="flex justify-center gap-2 text-sm font-semibold text-primary">
                <MessageCircle className="size-4" />
                专属顾问咨询
              </div>
              <h3 className="mt-3 text-xl font-bold text-slate-900">选模板或开通有疑问？</h3>
              <p className="mx-auto mt-2 max-w-xl text-sm leading-6 text-slate-600">扫码添加客服，获取模板建议、套餐说明和上线协助。</p>
              <div className="mx-auto mt-6 max-w-[720px] overflow-hidden rounded-2xl border border-white bg-white p-3 shadow-lg shadow-blue-950/10">
                <Image src="/home-service-qr.jpg" alt="客服二维码，扫码咨询详情" width={1030} height={576} className="h-auto w-full" />
              </div>
              <p className="mt-3 text-center text-xs text-slate-500">工作日 9:30–18:00，周末请留言</p>
            </aside>
          </div>
        </div>
      </div>
    </section>
  )
}
