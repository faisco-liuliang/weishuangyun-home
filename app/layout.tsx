import { Analytics } from '@vercel/analytics/next'
import type { Metadata } from 'next'
import { FloatingContact } from '@/components/contact/floating-contact'
import { OrganizationJsonLd } from '@/components/seo/json-ld'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://wsy.fkw.com'),
  title: {
    default: '维双云 - 凡科旗下轻量小程序品牌',
    template: '%s | 维双云',
  },
  description:
    '维双云是广州凡科互联网科技股份有限公司旗下的轻量子品牌，面向本地门店、家政、美业、教培和个体户，提供低成本、快速上线的门店、预约与轻商城小程序。',
  keywords: ['维双云', '凡科旗下轻量子品牌', '门店小程序', '预约小程序', '轻商城小程序', '本地商家小程序', '家政小程序', '美业小程序', '教培小程序'],
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
    title: '维双云 - 凡科旗下轻量小程序品牌',
    description: '维双云面向本地门店、家政、美业、教培和个体户，提供低成本、快速上线的门店、预约与轻商城小程序。',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: '维双云 - 凡科旗下轻量小程序品牌',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '维双云 - 凡科旗下轻量小程序品牌',
    description: '维双云提供门店、预约与轻商城小程序，具体功能、版本和活动权益以当期服务说明为准。',
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
      <head>
        <link rel="stylesheet" href="/legacy-mobile.css" />
      </head>
      <body className="font-sans antialiased">
        <OrganizationJsonLd />
        {children}
        <FloatingContact />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
