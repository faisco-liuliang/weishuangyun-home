import { ContactQrButton } from "@/components/contact/contact-qr-button"
import { ArrowRight } from "lucide-react"

export function CTA() {
  return (
    <section className="py-24 px-4 sm:px-6 hero-dark-bg">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5 text-balance">
          让您的官网和小程序成为
          <span className="text-blue-400">AI 时代的获客入口</span>
        </h2>
        <p className="text-lg text-slate-300 mb-10 max-w-xl mx-auto text-pretty leading-relaxed">
          从官网建设、小程序搭建到 SEO/GEO 内容布局，专属顾问帮您梳理可落地的获客闭环。
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <ContactQrButton size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground text-base px-8 h-12 shadow-lg shadow-blue-500/25 w-full sm:w-auto">
            规划获客方案
            <ArrowRight className="size-4 ml-2" />
          </ContactQrButton>
        </div>

      </div>
    </section>
  )
}
