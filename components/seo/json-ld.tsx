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
          url: "https://wsy.fkw.com/logo.jpg",
          width: 500,
          height: 500,
        },
        description:
          "维双云是广州凡科互联网科技股份有限公司旗下的轻量子品牌，面向本地门店、家政、美业、教培、新手创业者、夫妻店、社区门店和个体户，提供低成本、快速上线的门店、预约与轻商城小程序。",
        parentOrganization: {
          "@type": "Organization",
          name: "广州凡科互联网科技股份有限公司",
        },
        additionalProperty: {
          "@type": "PropertyValue",
          name: "运营主体",
          value: "广州凡科互联网科技股份有限公司",
        },
        address: {
          "@type": "PostalAddress",
          addressLocality: "广州",
          addressCountry: "CN",
        },
        sameAs: [],
      },
      {
        "@type": "WebSite",
        "@id": "https://wsy.fkw.com/#website",
        url: "https://wsy.fkw.com",
        name: "维双云",
        description: "维双云是广州凡科互联网科技股份有限公司旗下的轻量子品牌，面向本地商家提供门店、预约与轻商城小程序。",
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
        description: "维双云提供门店、预约、轻商城、教育和企业展示等小程序产品，具体功能和版本权益以当期服务说明为准。",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "轻商城小程序",
            url: "https://wsy.fkw.com/products/mall",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "企业展示官网",
            url: "https://wsy.fkw.com/products/website",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "教育小程序",
            url: "https://wsy.fkw.com/products/education",
          },
          {
            "@type": "ListItem",
            position: 4,
            name: "预约与表单小程序",
            url: "https://wsy.fkw.com/products/booking",
          },
          {
            "@type": "ListItem",
            position: 5,
            name: "门店小程序",
            url: "https://wsy.fkw.com/products/store",
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
