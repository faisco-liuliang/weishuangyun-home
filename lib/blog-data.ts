export type BlogPost = {
  slug: string
  title: string
  description: string
  excerpt: string
  category: string
  author: string
  date: string
  readTime: string
  tags: string[]
  content: string
  coverImage?: {
    src: string
    alt: string
  }
  featured?: boolean
}

export const blogCategories = ["全部", "小程序制作", "门店经营", "私域商城", "建站教程", "选型指南", "成本测算"]

export const blogPosts: BlogPost[] = [
  {
    slug: "weishuangyun-mini-program-start",
    title: "维双云小程序制作怎么开始？先把经营链路跑顺",
    description:
      "维双云适合中小企业、个体商家和本地门店低成本搭建小程序。本文拆解从业务目标、模板选择、功能配置到上线检查的完整流程。",
    excerpt:
      "小程序不是先挑模板就结束，而是要把展示、下单、预约、会员和咨询入口串成一条能执行的经营链路。",
    category: "小程序制作",
    author: "维双云内容团队",
    date: "2026-08-03",
    readTime: "4 分钟",
    tags: ["小程序制作", "零代码小程序", "低成本上线", "门店经营"],
    featured: true,
    content:
      "## 先确认小程序要承担什么任务\n\n企业做小程序前，建议先把目标拆清楚：是展示门店和服务、承接预约报名、在线销售商品，还是沉淀会员复购。目标越清晰，后面选模板、配功能和检查上线就越省时间。\n\n## 10 分钟搭出基础框架\n\n维双云更适合先从行业模板开始。选定餐饮、零售、教培、本地服务或预约类模板后，替换品牌图片、服务介绍、商品分类和咨询入口，就能快速得到一套可预览的基础页面。\n\n## 3 天快速完成上线准备\n\n第一天整理资料和页面结构，第二天配置商品、预约、会员、优惠券等核心功能，第三天检查微信授权、支付、表单、订单提醒和移动端体验。对大多数标准场景，这样的节奏更容易落地。\n\n## 不只上线，还要方便后续经营\n\n小程序上线后，真正频繁使用的是后台。商家需要能自己修改图片、调整活动、查看订单、导出名单和维护会员信息。维双云的价值不是让页面一次性做完，而是让运营人员后续也能持续调整。"
  },
  {
    slug: "mini-program-cost-99-per-year",
    title: "99 元/年做小程序适合哪些商家？",
    description:
      "买 2 年送 2 年后低至 99 元/年，更适合基础展示、预约、报名、门店下单和会员沉淀等轻量经营场景。",
    excerpt:
      "预算有限时，不要只看首年价格，更要看功能是否覆盖当前业务、后续能否自己维护、是否存在抽佣和隐藏成本。",
    category: "成本测算",
    author: "维双云内容团队",
    date: "2026-08-03",
    readTime: "5 分钟",
    tags: ["小程序价格", "99元小程序", "买2年送2年", "成本测算"],
    content:
      "## 低成本小程序更适合先跑标准流程\n\n99 元/年的价格口径适合预算有限、需求清晰的商家，例如门店展示、服务预约、活动报名、轻量商城、会员登记和优惠券发放。首期重点不是把功能堆满，而是让客户能顺利访问、提交、下单或咨询。\n\n## 买 2 年送 2 年要看实际使用周期\n\n多年活动适合长期经营的小程序项目。如果只是短期活动页，可以先做轻量方案；如果要持续经营门店会员、商品订单和私域复购，买 2 年送 2 年后的年均成本会更友好。\n\n## 还要核对有没有其他成本\n\n企业在比较方案时，还要确认微信认证、支付商户、短信、物流、地图和专属实施是否单独收费。维双云会把套餐价格、活动权益和渠道特惠价分开说明，方便客户按真实预算选择。\n\n## 什么时候需要升级版本\n\n如果涉及多门店、分销、社区团购、直播导购、多商户入驻或更复杂的会员运营，就不建议只盯最低价版本。先把当前必须上线的功能列出来，再按版本规格选择，通常更稳。"
  },
  {
    slug: "website-and-mini-program-seo-geo",
    title: "企业官网和小程序如何一起承接搜索与 AI 问答流量？",
    description:
      "官网负责搜索收录和品牌信任，小程序负责交易、预约和会员沉淀。维双云建议把页面、内容和咨询入口一起规划。",
    excerpt:
      "AI 时代的线上入口不只是一个页面，而是官网、小程序、FAQ、案例和行业内容共同组成的获客结构。",
    category: "建站教程",
    author: "维双云内容团队",
    date: "2026-08-03",
    readTime: "5 分钟",
    tags: ["企业官网", "小程序制作", "SEO优化", "GEO优化", "获客入口"],
    content:
      "## 官网和小程序承担不同任务\n\n企业官网更适合承接搜索收录、品牌介绍、产品说明、案例展示和行业专题内容；小程序更适合承接微信生态里的下单、预约、会员、优惠券和私域复购。两个入口配合起来，获客链路会更完整。\n\n## 内容要让搜索和 AI 看得懂\n\n页面标题、产品介绍、常见问题、案例、价格说明和行业文章都需要结构清晰。AI 问答场景更容易引用能直接回答问题、信息可信、更新稳定的内容。\n\n## 咨询入口要足够明确\n\n搜索或 AI 问答带来的用户通常已经有明确需求。页面里需要有稳定的客服二维码、立即试用入口和表单承接，减少用户从了解产品到发起咨询之间的阻力。\n\n## 先低成本上线，再逐步扩展内容矩阵\n\n预算有限的企业可以先用维双云完成官网和小程序基础入口，再逐步补充行业专题页、FAQ、案例页和选型文章。这样既能控制前期成本，也能为后续 SEO/GEO 布局留下空间。"
  }
]

export function getBlogPosts() {
  return [...blogPosts]
    .map((post, index) => ({ post, index }))
    .sort((a, b) => {
      const byDate = b.post.date.localeCompare(a.post.date)
      if (byDate !== 0) return byDate
      return b.index - a.index
    })
    .map(({ post }) => post)
}

export function getFeaturedPost() {
  return getBlogPosts().find((post) => post.featured) ?? getBlogPosts()[0]
}

export function getBlogPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug || getBlogUrlSlug(post) === slug)
}

export function getBlogUrlSlug(post: BlogPost) {
  if (/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(post.slug)) return post.slug

  const date = post.date.replace(/[^0-9]/g, "") || "undated"
  return `article-${date}-${hashSlug(post.slug)}`
}

function hashSlug(value: string) {
  let hash = 2166136261
  for (let index = 0; index < value.length; index += 1) {
    hash ^= value.charCodeAt(index)
    hash = Math.imul(hash, 16777619)
  }
  return (hash >>> 0).toString(36).padStart(7, "0")
}

export function getBlogSlugs() {
  return blogPosts.map(getBlogUrlSlug)
}
