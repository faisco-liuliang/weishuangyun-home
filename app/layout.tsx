import { Analytics } from '@vercel/analytics/next'
import type { Metadata } from 'next'
import { FloatingContact } from '@/components/contact/floating-contact'
import { OrganizationJsonLd } from '@/components/seo/json-ld'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://wsy.fkw.com'),
  title: {
    default: '维双云 - AI 时代企业数字化建站与营销工具平台',
    template: '%s | 维双云',
  },
  description:
    '维双云提供 AI 建站、私域商城、AI 题库教育系统、门店管理、服务预约、GEO 优化、AI 营销工具等一站式企业数字化解决方案。',
  keywords: ['维双云', 'AI建站', '企业建站', '私域商城', '小程序建站', 'SEO建站', 'AI题库', '门店管理系统', 'GEO优化', '企业数字化'],
  authors: [{ name: '维双云', url: 'https://wsy.fkw.com' }],
  creator: '维双云',
  publisher: '维双云',
  icons: {
    icon: [
      { url: '/icon.svg', type: 'image/svg+xml' },
      { url: '/icon-light-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [{ url: '/apple-icon.png', sizes: '180x180', type: 'image/png' }],
  },
  alternates: {
    canonical: 'https://wsy.fkw.com',
  },
  openGraph: {
    type: 'website',
    locale: 'zh_CN',
    url: 'https://wsy.fkw.com',
    siteName: '维双云',
    title: '维双云 - AI 时代企业数字化建站与营销工具平台',
    description: '一站式 AI 企业数字化解决方案，AI 建站、私域商城、教育系统、门店管理、GEO 优化，助力中小企业高速增长。',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: '维双云 - AI 企业数字化首选平台',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '维双云 - AI 时代企业数字化建站与营销工具平台',
    description: '一站式 AI 企业数字化解决方案，助力中小企业快速上线。',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="zh-CN" className="bg-background">
      <body className="font-sans antialiased">
        <OrganizationJsonLd />
        {children}
        <FloatingContact />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
