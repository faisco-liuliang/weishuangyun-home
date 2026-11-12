import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { industrySolutions } from "@/lib/industry-solutions"

export function IndustrySolutions() {
  return (
    <section className="border-y border-border bg-secondary/35 px-4 py-16 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="mb-2 text-sm font-semibold text-primary">行业解决方案</p>
            <h2 className="text-3xl font-bold text-foreground">从线下经营场景开始选小程序</h2>
          </div>
          <Link href="/solutions" className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:text-primary/80">
            查看全部行业方案 <ArrowRight className="size-4" />
          </Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {industrySolutions.map((solution) => (
            <Link key={solution.slug} href={`/solutions/${solution.slug}`} className="rounded-xl border border-border bg-card p-5 transition-colors hover:border-primary/40 hover:bg-accent">
              <h3 className="mb-2 font-semibold text-foreground">{solution.name}</h3>
              <p className="text-sm leading-6 text-muted-foreground">{solution.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
