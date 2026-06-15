import { CheckCircle2, Gift, School, Sparkles } from "lucide-react"

type Plan = {
  name: string
  audience: string
  price?: string
  pricePeriod?: string
  icon: React.ReactNode
  iconBg: string
  features: string[]
  cta: string
  ctaClass: string
  highlighted?: boolean
  checkColor: string
}

const plans: Plan[] = [
  {
    name: "اشتراكات مخصصة",
    audience: "للمدارس و الجهات التعليمية",
    icon: <School className="h-7 w-7 text-violet-600" />,
    iconBg: "bg-violet-100",
    features: ["عدد مستخدمين متعدد", "لوحة تحكم للإدارة", "تخصيص حسب احتياج الجهة", "دعم مخصص"],
    cta: "تواصل معنا",
    ctaClass: "border-2 border-violet-400 text-violet-600 hover:bg-violet-50",
    checkColor: "text-violet-500",
  },
  {
    name: "الباقة المميزة",
    audience: "للمعلمين و المعلمات المحترفين",
    price: "99",
    pricePeriod: "شهريًا",
    icon: <Sparkles className="h-7 w-7 text-green-600" />,
    iconBg: "bg-green-100",
    features: [
      "وصول كامل لجميع الأدوات",
      "إنشاء عروض و خطط و اختبارات غير محدودة",
      "حفظ سحابي غير محدود",
      "تحديثات و مزايا مستمرة",
    ],
    cta: "أشترك الأن",
    ctaClass: "bg-accent text-accent-foreground hover:brightness-95",
    highlighted: true,
    checkColor: "text-green-500",
  },
  {
    name: "التجربة المجانية",
    audience: "اكتشف جميع مزايا نجد AI",
    price: "0",
    pricePeriod: "لمدة 3 أيام",
    icon: <Gift className="h-7 w-7 text-violet-600" />,
    iconBg: "bg-violet-100",
    features: ["وصول كامل لجميع الأدوات", "إنشاء عروض و دروس و اختبارات", "تجربة كاملة لمدة ٣ أيام"],
    cta: "ابدأ مجانًا",
    ctaClass: "border-2 border-violet-400 text-violet-600 hover:bg-violet-50",
    checkColor: "text-violet-500",
  },
]

export function PricingSection() {
  return (
    <section id="pricing" className="bg-background py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <h2 className="text-balance text-3xl font-black text-primary md:text-5xl">
            اختر الباقة المناسبة لرحلتك التعليمية
          </h2>
          <p className="mt-4 text-base font-medium text-foreground/80 md:text-lg">
            ابدأ مجانًا أو فعل الباقة المناسبة لاحتياجاتك التعليمية
          </p>
        </div>

        <div className="mt-12 grid items-stretch gap-6 md:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`flex flex-col rounded-3xl bg-card p-7 text-center shadow-lg ${
                plan.highlighted ? "ring-2 ring-accent md:-translate-y-3" : ""
              }`}
            >
              <div className={`mx-auto flex h-16 w-16 items-center justify-center rounded-2xl ${plan.iconBg}`}>
                {plan.icon}
              </div>
              <h3 className="mt-5 text-xl font-black text-card-foreground">{plan.name}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{plan.audience}</p>

              {plan.price && (
                <div className="mt-5">
                  <div className="flex items-baseline justify-center gap-1">
                    <span
                      className={`text-5xl font-black ${plan.highlighted ? "text-green-600" : "text-violet-600"}`}
                    >
                      {plan.price}
                    </span>
                    <span className={`text-2xl font-bold ${plan.highlighted ? "text-green-600" : "text-violet-600"}`}>
                      ﷼
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-muted-foreground">{plan.pricePeriod}</p>
                </div>
              )}

              <ul className="mt-6 flex-1 space-y-3 text-right">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <CheckCircle2 className={`mt-0.5 h-5 w-5 shrink-0 ${plan.checkColor}`} />
                    <span className="text-sm text-foreground/80">{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`mt-7 inline-block rounded-full px-6 py-3 font-bold shadow-sm transition-all ${plan.ctaClass}`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
