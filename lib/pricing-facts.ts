export type PricingFact = {
  key: "store" | "mall" | "booking" | "education" | "website"
  name: string
  referencePrice: string
  activity: string
  scope: string
  boundary: string
  specialOffer?: string
}

/**
 * 官网价格事实底稿：只维护已确认的公开口径，具体成交以当期价格页、报价单和服务协议为准。
 */
export const pricingFacts: PricingFact[] = [
  {
    key: "store",
    name: "门店小程序",
    referencePrice: "998 元/年起（官方基础版）",
    activity: "基础版及以上买二送二",
    scope: "门店展示、预约、会员、收银、核销和基础经营管理",
    boundary: "多门店、复杂权限、深度库存、特殊履约和系统对接需按版本或方案确认",
    specialOffer: "198 元/年：维双云专属门店通内测版，仅限顾问确认资格的客户开通",
  },
  {
    key: "mall",
    name: "商城小程序",
    referencePrice: "1998 元/年起（商城特惠版）",
    activity: "官网版本从 3998 元/年起，部分版本买二送二",
    scope: "商品、订单、支付、会员、优惠券、分销和配送等商城能力",
    boundary: "复杂分账、多商户结算、特殊配送和独立部署需单独评估",
  },
  {
    key: "booking",
    name: "预约与表单小程序",
    referencePrice: "698 元/年起（标准版）",
    activity: "推广版 1198 元/年、商务版 1998 元/年、平台版 2998 元/年",
    scope: "展示、预约、报名、表单、消息提醒和部分支付能力",
    boundary: "复杂排班、特殊支付、平台型运营和深度接口需按版本确认",
  },
  {
    key: "education",
    name: "教育小程序",
    referencePrice: "1998 元/年起（标准版）",
    activity: "专业版 2998 元/年、旗舰版 3998 元/年、至尊版 5998 元/年；云托管费按表执行",
    scope: "课程、报名、班级学员、题库、直播录播和知识付费能力",
    boundary: "复杂教务、特殊结算、私有化和深度定制需单独评估",
  },
  {
    key: "website",
    name: "企业官网",
    referencePrice: "698 元/年/个（标准版）",
    activity: "推广版 1198 元/年、商务版 1998 元/年、平台版 2998 元/年；买断价按表执行",
    scope: "企业展示、产品内容、表单、预约和搜索基础配置",
    boundary: "设计、内容录入、域名、邮箱、翻译、投放和定制服务需按方案确认",
  },
]

export const pricingFactByKey = Object.fromEntries(
  pricingFacts.map((fact) => [fact.key, fact])
) as Record<PricingFact["key"], PricingFact>

export const pricingBoundaryNote =
  "价格为当前公开版本参考，具体功能、活动权益、第三方费用、实施服务和最终成交条件以当期价格页、报价单及服务协议为准。"
