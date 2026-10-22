import type { Metadata } from "next"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Hero } from "@/components/home/hero"
import { ProductsGrid } from "@/components/home/products-grid"
import { TemplateRegistration } from "@/components/home/template-registration"
import { Advantages } from "@/components/home/advantages"
import { AboutProductsOverview } from "@/components/home/about-products-overview"
import { BlogPreview } from "@/components/home/blog-preview"
import { ContactSection } from "@/components/home/contact-section"
import { CTA } from "@/components/home/cta"

export const metadata: Metadata = {
  title: "维双云 - 凡科旗下轻量小程序品牌",
  description:
    "维双云是广州凡科互联网科技股份有限公司旗下的轻量子品牌，面向本地门店、家政、美业、教培和个体户，提供门店、预约与轻商城小程序。",
  alternates: { canonical: "https://wsy.fkw.com" },
  openGraph: {
    url: "https://wsy.fkw.com",
    title: "维双云 - 凡科旗下轻量小程序品牌",
    description: "维双云帮助本地商家低成本搭建门店、预约与轻商城小程序，具体功能、版本和活动权益以当期服务说明为准。",
  },
}

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TemplateRegistration />
        <ProductsGrid />
        <AboutProductsOverview />
        <Advantages />
        <BlogPreview />
        <ContactSection />
        <CTA />
      </main>
      <Footer />
    </>
  )
}
