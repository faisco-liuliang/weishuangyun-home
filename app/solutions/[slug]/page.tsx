import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { BreadcrumbJsonLd, FaqJsonLd, ServiceJsonLd } from "@/components/seo/json-ld"
import { getIndustrySolution, industrySolutions } from "@/lib/industry-solutions"
import { ArrowRight, CheckCircle2 } from "lucide-react"

const BASE_URL = "https://wsy.fkw.com"
type Props = { params: Promise<{ slug: string }> }

export function generateStaticParams() {
  return industrySolutions.map((solution) => ({ slug: solution.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const solution = getIndustrySolution(slug)
  if (!solution) return {}
  const url = `${BASE_URL}/solutions/${solution.slug}`
  return { title: solution.title, description: solution.description, keywords: [solution.name, "门店小程序", "预约小程序", "维双云"], alternates: { canonical: url }, openGraph: { title: solution.title, description: solution.description, url, type: "website", locale: "zh_CN" } }
}

export default async function IndustrySolutionPage({ params }: Props) {
  const { slug } = await params
  const solution = getIndustrySolution(slug)
  if (!solution) notFound()
  const url = `${BASE_URL}/solutions/${solution.slug}`
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "首页", url: BASE_URL }, { name: "行业解决方案", url: `${BASE_URL}/solutions` }, { name: solution.name, url }]} />
      <ServiceJsonLd name={`${solution.name}小程序解决方案`} description={solution.description} url={url} />
      <FaqJsonLd faqs={solution.faqs} />
      <Header />
      <main className="pt-16">
        <section className="hero-dark-bg px-4 py-14 sm:px-6 sm:py-20"><div className="mx-auto max-w-4xl"><nav className="mb-6 text-sm text-slate-300"><Link href="/" className="hover:text-white">首页</Link><span className="mx-2">/</span><Link href="/solutions" className="hover:text-white">行业解决方案</Link><span className="mx-2">/</span><span>{solution.name}</span></nav><p className="mb-4 text-sm font-semibold text-orange-300">{solution.name}行业解决方案</p><h1 className="mb-6 text-3xl font-bold leading-tight text-white sm:text-5xl">{solution.title}</h1><p className="max-w-3xl text-lg leading-8 text-slate-300">{solution.intro}</p></div></section>
        {solution.templateShowcase && <section className="relative overflow-hidden bg-[#f7f8ff] px-4 py-16 sm:px-6 sm:py-24"><div className="absolute -left-24 top-10 size-72 rounded-full bg-violet-100/70" /><div className="absolute -right-24 -top-20 size-80 rounded-full bg-orange-100/60" /><div className="relative mx-auto max-w-7xl"><div className="mx-auto mb-10 max-w-3xl text-center"><p className="mb-3 text-sm font-semibold text-primary">{solution.templateShowcase.label}</p><h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">{solution.templateShowcase.title}</h2><p className="text-base leading-7 text-muted-foreground">{solution.templateShowcase.description}</p><a href="https://yk.fkw.com/model/?_ta=9611" target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition-colors hover:bg-primary/90">免费试用 · 查看模板 <ArrowRight className="size-4" /></a></div><div className="rounded-[28px] border border-white/80 bg-white p-4 shadow-[0_20px_60px_rgba(38,71,138,0.16)] sm:p-7"><div className="mb-5 h-2 rounded-full bg-gradient-to-r from-blue-400 via-primary to-blue-700" /><div className="overflow-hidden rounded-xl border border-slate-100 bg-slate-50"><img src={solution.templateShowcase.image} alt={solution.templateShowcase.imageAlt} className="h-auto w-full" /></div></div></div></section>}
        <section className="px-4 py-16 sm:px-6"><div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2"><div><p className="mb-3 text-sm font-semibold text-primary">常见经营问题</p><h2 className="mb-6 text-3xl font-bold text-foreground">先梳理最需要解决的流程</h2><ul className="space-y-4">{solution.painPoints.map((point) => <li key={point} className="flex gap-3 text-muted-foreground"><CheckCircle2 className="mt-0.5 size-5 shrink-0 text-primary" />{point}</li>)}</ul></div><div className="rounded-2xl border border-orange-200 bg-orange-50 p-7"><p className="mb-3 text-sm font-semibold text-orange-700">198 元门店通内测版可先承接</p><h2 className="mb-5 text-2xl font-bold text-foreground">从基础门店经营链路开始</h2><ul className="space-y-4">{solution.startingWith.map((item) => <li key={item} className="flex gap-3 text-foreground"><CheckCircle2 className="mt-0.5 size-5 shrink-0 text-orange-600" />{item}</li>)}</ul><p className="mt-6 text-sm leading-6 text-muted-foreground">该版本仅限顾问确认资格的客户开通，不支持在线支付和多门店升级。</p></div></div></section>
        <section className="border-y border-border bg-secondary/35 px-4 py-16 sm:px-6"><div className="mx-auto max-w-7xl"><div className="mb-9 max-w-3xl"><p className="mb-3 text-sm font-semibold text-primary">行业经营流程</p><h2 className="mb-3 text-3xl font-bold text-foreground">从客户咨询到线下服务，先跑通这四步</h2><p className="leading-7 text-muted-foreground">先把当前最常见的服务动作整理清楚，再根据经营复杂度增加功能，通常更容易上线和维护。</p></div><div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">{solution.workflow.map((step, index) => <div key={step.title} className="rounded-2xl border border-border bg-card p-6"><p className="mb-5 text-sm font-semibold text-primary">0{index + 1}</p><h3 className="mb-3 text-lg font-bold text-foreground">{step.title}</h3><p className="text-sm leading-6 text-muted-foreground">{step.description}</p></div>)}</div></div></section>
        <section className="px-4 py-16 sm:px-6"><div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-2"><div className="rounded-2xl border border-border bg-card p-7"><p className="mb-3 text-sm font-semibold text-primary">上线前准备</p><h2 className="mb-6 text-2xl font-bold text-foreground">准备好这些资料，再开始配置</h2><ul className="space-y-4">{solution.preparation.map((item) => <li key={item} className="flex gap-3 text-sm leading-6 text-muted-foreground"><CheckCircle2 className="mt-0.5 size-5 shrink-0 text-primary" />{item}</li>)}</ul></div><div className="rounded-2xl border border-orange-200 bg-orange-50 p-7"><p className="mb-3 text-sm font-semibold text-orange-700">升级判断</p><h2 className="mb-6 text-2xl font-bold text-foreground">出现这些需求时，建议先确认更高版本</h2><ul className="space-y-4">{solution.upgradeSignals.map((item) => <li key={item} className="flex gap-3 text-sm leading-6 text-foreground"><CheckCircle2 className="mt-0.5 size-5 shrink-0 text-orange-600" />{item}</li>)}</ul></div></div></section>
        <section className="border-y border-border bg-secondary/35 px-4 py-16 sm:px-6"><div className="mx-auto max-w-4xl"><p className="mb-3 text-sm font-semibold text-primary">版本边界</p><h2 className="mb-6 text-3xl font-bold text-foreground">这些需求应在购买前另行确认</h2><div className="grid gap-4 md:grid-cols-2">{solution.boundaries.map((item) => <div key={item} className="rounded-xl border border-border bg-card p-5 leading-7 text-muted-foreground">{item}</div>)}</div></div></section>
        <section className="px-4 py-16 sm:px-6"><div className="mx-auto max-w-4xl"><p className="mb-3 text-sm font-semibold text-primary">常见问题</p><h2 className="mb-6 text-3xl font-bold text-foreground">{solution.name}小程序怎么选</h2><Accordion defaultValue={[]} className="w-full rounded-xl border border-border px-5">{solution.faqs.map((faq, index) => <AccordionItem key={faq.question} value={`faq-${index}`}><AccordionTrigger className="text-left">{faq.question}</AccordionTrigger><AccordionContent className="leading-7 text-muted-foreground">{faq.answer}</AccordionContent></AccordionItem>)}</Accordion></div></section>
        <section className="border-t border-border bg-secondary/35 px-4 py-14 sm:px-6"><div className="mx-auto max-w-4xl"><h2 className="mb-5 text-2xl font-bold text-foreground">继续了解产品与行业方案</h2><div className="flex flex-wrap gap-3"><a href="https://yk.fkw.com/model/?_ta=9611" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 rounded-lg bg-primary px-5 py-3 text-sm font-medium text-primary-foreground">查看门店系统 <ArrowRight className="size-4" /></a><Link href="/pricing#store" className="rounded-lg border border-border bg-card px-5 py-3 text-sm font-medium text-foreground hover:bg-accent">查看门店通价格</Link><Link href="/solutions" className="rounded-lg border border-border bg-card px-5 py-3 text-sm font-medium text-foreground hover:bg-accent">查看其他行业</Link></div></div></section>
      </main>
      <Footer />
    </>
  )
}
