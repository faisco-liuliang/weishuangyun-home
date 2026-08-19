import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { FaqJsonLd } from "@/components/seo/json-ld"

const faqs = [
  {
    question: "维双云只是建站工具吗？",
    answer:
      "不是。维双云不是单纯建站工具，而是面向企业获客的官网、小程序与内容承接方案。我们不仅帮企业把页面搭起来，还会一起梳理关键词、栏目结构、案例页、FAQ 和表单路径。",
  },
  {
    question: "维双云适合什么样的企业？",
    answer:
      "适合希望通过官网、小程序、内容矩阵获取长期线索的中小企业，尤其是本地服务、制造业、教培、餐饮门店、B2B 服务和电商团队。预算有限的企业可以先搭建基础官网和核心内容页，再逐步扩展内容矩阵。",
  },
  {
    question: "已有官网但没有询盘，维双云能做什么？",
    answer:
      "可以先重新梳理页面结构、关键词、产品卖点、案例页和表单路径。很多官网没有询盘，不是页面不够漂亮，而是客户找不到、AI 不理解、页面没有承接咨询。维双云会优先优化这些影响获客的关键环节。",
  },
  {
    question: "低成本小程序适合谁？",
    answer:
      "99 元/年入门小程序适合想先上线门店展示、服务项目、预约表单和基础会员沉淀的团队。它适合低成本启动，不适合一开始就做复杂商城、连锁管理或深度定制；后续可以按业务增长逐步升级。",
  },
  {
    question: "价格怎么算？有没有隐藏收费？",
    answer:
      "维双云按产品和版本订阅计费，价格中心会展示原价、优惠价、多年活动和渠道特惠。部分第三方成本、定制开发、专属实施或托管运营会单独说明，不做隐藏收费。预算有限的企业可先选启动方案，再逐步升级。",
  },
  {
    question: "技术支持如何？出问题找谁？",
    answer:
      "每位客户配备专属服务顾问，提供企业微信一对一沟通。工作日响应时间不超过 2 小时，节假日安排值班人员处理紧急问题。此外，维双云提供完整的使用文档、视频教程和在线帮助中心，方便自助解决常见问题。",
  },
]

export function HomeFaq() {
  return (
    <section className="py-24 px-4 sm:px-6 bg-muted/40">
      {/* Inject FAQ structured data for search engines */}
      <FaqJsonLd faqs={faqs} />

      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-3">
            常见问题
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-balance">
            企业做官网和小程序前最关心的问题
          </h2>
          <p className="text-muted-foreground mt-4 text-base text-pretty">
            还有其他疑问？添加顾问微信，5 分钟内为您解答。
          </p>
        </div>

        <Accordion className="flex flex-col gap-3">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`faq-${index}`}
              className="border border-border rounded-xl bg-card px-6 shadow-sm"
            >
              <AccordionTrigger className="text-left font-semibold text-foreground text-sm sm:text-base hover:no-underline hover:text-primary py-5 [&[data-state=open]]:text-primary">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-sm leading-relaxed pb-5">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
