/**
 * 全站通用 JSON-LD 结构化数据
 * 注入到 layout.tsx，对所有页面生效
 */
export function OrganizationJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://wsy.fkw.com/#organization",
        name: "维双云",
        url: "https://wsy.fkw.com",
        logo: {
          "@type": "ImageObject",
          url: "https://wsy.fkw.com/logo.png",
          width: 180,
          height: 60,
        },
        description:
          "维双云提供 AI 建站、私域商城、AI 题库教育系统、门店管理、GEO 优化、AI 营销工具等一站式企业数字化解决方案，助力中小企业快速搭建线上业务，实现业绩增长。",
        address: {
          "@type": "PostalAddress",
          addressCountry: "CN",
        },
        sameAs: [],
      },
      {
        "@type": "WebSite",
        "@id": "https://wsy.fkw.com/#website",
        url: "https://wsy.fkw.com",
        name: "维双云",
        description: "AI 时代一站式企业数字化建站与营销工具平台",
        publisher: {
          "@id": "https://wsy.fkw.com/#organization",
        },
        potentialAction: {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate: "https://wsy.fkw.com/blog?q={search_term_string}",
          },
          "query-input": "required name=search_term_string",
        },
        inLanguage: "zh-CN",
      },
      {
        "@type": "ItemList",
        name: "维双云产品列表",
        description: "维双云提供的 AI 赋能企业数字化解决方案产品系列",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "AI 营销私域商城",
            url: "https://wsy.fkw.com/products/mall",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "企业官网 AI 建站",
            url: "https://wsy.fkw.com/products/website",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "AI 题库教育系统",
            url: "https://wsy.fkw.com/products/education",
          },
          {
            "@type": "ListItem",
            position: 4,
            name: "AI 轻应用 / 服务预约",
            url: "https://wsy.fkw.com/products/booking",
          },
          {
            "@type": "ListItem",
            position: 5,
            name: "AI 辅助门店系统",
            url: "https://wsy.fkw.com/products/store",
          },
          {
            "@type": "ListItem",
            position: 6,
            name: "GEO 优化系统",
            url: "https://wsy.fkw.com/products/geo",
          },
        ],
      },
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}

/**
 * 面包屑 JSON-LD（按需在各页面使用）
 */
export function BreadcrumbJsonLd({
  items,
}: {
  items: { name: string; url: string }[]
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}

/**
 * 产品页 SoftwareApplication JSON-LD
 */
export function SoftwareProductJsonLd({
  name,
  description,
  url,
  category,
}: {
  name: string
  description: string
  url: string
  category: string
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name,
    description,
    url,
    applicationCategory: category,
    operatingSystem: "Web, iOS, Android",
    offers: {
      "@type": "Offer",
      priceCurrency: "CNY",
      availability: "https://schema.org/InStock",
      seller: {
        "@type": "Organization",
        name: "维双云",
        url: "https://wsy.fkw.com",
      },
    },
    provider: {
      "@type": "Organization",
      name: "维双云",
      url: "https://wsy.fkw.com",
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}

/**
 * FAQ 页 JSON-LD（首页、产品页按需使用）
 * 可让 Google 在搜索结果直接展示问答摘要
 */
export function FaqJsonLd({
  faqs,
}: {
  faqs: { question: string; answer: string }[]
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}
