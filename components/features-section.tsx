import {
  BarChart3,
  ChevronLeft,
  ClipboardList,
  FileText,
  Lightbulb,
  PieChart,
  Presentation,
  SearchCheck,
  Sparkles,
} from "lucide-react"

const steps = [
  { label: "التخطيط", icon: ClipboardList, color: "text-primary" },
  { label: "الإنشاء", icon: Sparkles, color: "text-violet-600" },
  { label: "التقييم", icon: SearchCheck, color: "text-green-600" },
  { label: "التحليل", icon: BarChart3, color: "text-orange-500" },
]

const features = [
  {
    title: "إنشاء الاختبارات",
    desc: "بناء اختبارات و أسئلة متنوعة بسرعة ودقة",
    icon: ClipboardList,
    iconBg: "bg-violet-500",
  },
  {
    title: "إنشاء أنشطة تفاعلية",
    desc: "أنشطة و أساليب تعليم حديثة لرفع التفاعل داخل الفصل",
    icon: Lightbulb,
    iconBg: "bg-fuchsia-500",
  },
  {
    title: "إنشاء خطط الدروس",
    desc: "إنشاء خطط دراسية متوافقة مع الأهداف التعليمية خلال ثوان",
    icon: FileText,
    iconBg: "bg-accent",
  },
  {
    title: "تحليل اداء الطلاب",
    desc: "تحليل ذكي لأداء ونتائج الطلاب",
    icon: BarChart3,
    iconBg: "bg-amber-400",
  },
  {
    title: "تقييم ذكي",
    desc: "تحليل وتقييم أداء الطلاب باستخدام الذكاء الاصطناعي",
    icon: PieChart,
    iconBg: "bg-violet-500",
  },
  {
    title: "إنشاء عروض تقديمية",
    desc: "تحويل خطة الدرس إلى عروض جاهزة للاستخدام",
    icon: Presentation,
    iconBg: "bg-orange-500",
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="bg-background py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-balance text-3xl font-black text-primary md:text-5xl">
            كل مايحتاجه المعلم في منصة واحدة
          </h2>
          <div className="mx-auto mt-5 max-w-2xl space-y-1 text-base font-medium text-foreground/80 md:text-lg">
            <p>أدوات ذكية مصممه خصيصًا لتساعدك على:</p>
            <p>التخطيط ، الإنشاء ، التقييم ، التحليل خلال دقائق .</p>
          </div>
        </div>

        {/* Process chips */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
          {steps.map((step, i) => (
            <div key={step.label} className="flex items-center gap-2">
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-bold shadow-sm">
                <step.icon className={`h-4 w-4 ${step.color}`} />
                <span className="text-card-foreground">{step.label}</span>
              </span>
              {i < steps.length - 1 && <ChevronLeft className="h-4 w-4 text-muted-foreground" />}
            </div>
          ))}
        </div>

        {/* Cards grid */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div
              key={f.title}
              className="flex items-start gap-4 rounded-3xl bg-card p-6 text-right shadow-lg transition-transform hover:-translate-y-1"
            >
              <div className="flex-1">
                <h3 className="text-lg font-black text-card-foreground">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.desc}</p>
              </div>
              <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${f.iconBg}`}>
                <f.icon className="h-6 w-6 text-white" />
              </div>
            </div>
          ))}
        </div>

        {/* More tools */}
        <p className="mt-12 text-center text-2xl font-black text-primary md:text-3xl">و المزيد من الأدوات الذكية...</p>
      </div>
    </section>
  )
}
