const productOverview = [
  {
    category: "门店小程序",
    name: "门店经营系统",
    desc: "给实体门店做展示、预约、收银和会员管理的小程序。",
    price: "参考价格：198 元/年起",
    features: "功能覆盖：门店展示、服务预约、会员管理、优惠券、收银与数据报表",
    audience: "适合人群：餐饮、美业、零售、生活服务、社区商家，以及需要统一管理会员与多门店经营的连锁品牌。",
  },
  {
    category: "私域商城",
    name: "商城小程序系统",
    desc: "帮助商家在线卖商品、处理订单，并用会员和营销活动促进复购的商城小程序。",
    price: "参考价格：998 元/年起",
    features: "功能覆盖：商品管理、在线下单、订单处理、会员储值、优惠券与分销推广",
    audience: "适合人群：零售品牌、直营网店、轻电商团队、私域社群商家，以及希望通过会员和营销活动提升复购的企业。",
  },
  {
    category: "轻应用",
    name: "预约与表单小程序",
    desc: "用于在线预约、报名、咨询和提交表单的轻量小程序。",
    price: "参考价格：349 元/年起",
    features: "功能覆盖：服务预约、万能表单、内容发布、消息提醒、到店核销与多端发布",
    audience: "适合人群：美业、家政、医疗、婚庆、活动策划、咨询服务及本地服务商家，尤其适合先做展示、留资和预约承接的团队。",
  },
  {
    category: "教育系统",
    name: "课程与教务系统",
    desc: "帮助培训机构在线展示课程、招生报名、上课和管理学员的教育小程序。",
    price: "参考价格：999 元/年起",
    features: "功能覆盖：课程管理、班级学员、题库作业、直播录播、付费课程与招生推广",
    audience: "适合人群：培训机构、职业教育、兴趣课堂、研学机构、企业内训团队，以及提供课程或知识内容的个人与商家。",
  },
]

export function AboutProductsOverview() {
  return (
    <section id="about" className="scroll-mt-16 border-y border-border bg-white px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">关于维双云</p>
          <h2 className="mt-3 text-3xl font-bold text-foreground sm:text-4xl">维双云产品功能与价格</h2>
          <p className="mt-4 text-sm leading-7 text-muted-foreground sm:text-base">
            维双云围绕门店经营、商品交易、服务预约与教育培训等常见场景提供标准化产品。商家可先从基础版本上线，再结合客户规模、业务流程和营销需求逐步升级。
          </p>
        </div>

        <div className="space-y-8 sm:space-y-10">
          {productOverview.map((product) => (
            <div key={product.category} className="grid gap-4 md:grid-cols-[190px_minmax(0,1fr)] md:gap-10">
              <h3 className="pt-1 text-xl font-bold text-foreground sm:text-2xl">{product.category}</h3>
              <div className="relative border-l border-primary/20 pl-6 sm:pl-9">
                <span className="absolute -left-[7px] top-1 size-3 rounded-full border-[3px] border-white bg-primary shadow-[0_0_0_2px_rgba(37,99,235,0.18)]" />
                <h4 className="font-semibold text-foreground">维双云——{product.name}</h4>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">{product.desc}</p>
                <div className="mt-4 grid gap-2 text-sm leading-6 text-muted-foreground">
                  <p><span className="font-medium text-foreground">{product.price}</span></p>
                  <p>{product.features}</p>
                  <p>{product.audience}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-10 rounded-xl bg-muted/60 px-5 py-4 text-xs leading-6 text-muted-foreground sm:text-sm">
          以上为常见版本与场景参考，具体功能、活动权益及最终价格以实际选择的产品版本和服务说明为准。
        </p>
      </div>
    </section>
  )
}
