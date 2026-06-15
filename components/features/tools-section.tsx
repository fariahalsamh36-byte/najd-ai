import {
  ClipboardList,
  Lightbulb,
  FileText,
  BarChart3,
  SearchCheck,
  Presentation,
  MessageSquareText,
  UserCog,
  Home,
} from "lucide-react"

const tools = [
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
    iconBg: "bg-green-500",
  },
  {
    title: "تحليل اداء الطلاب",
    desc: "تابع تقدم الطلاب بدقة و أحصل على تقارير ذكية لتحسين الأداء باستمرار",
    icon: BarChart3,
    iconBg: "bg-amber-400",
  },
  {
    title: "إنشاء معايير التقييم",
    desc: "توليد معايير تقييم للطلاب",
    icon: SearchCheck,
    iconBg: "bg-violet-500",
  },
  {
    title: "إنشاء عروض تقديمية",
    desc: "تحويل خطة الدرس إلى عروض جاهزة للاستخدام",
    icon: Presentation,
    iconBg: "bg-orange-500",
  },
  {
    title: "مراجعة و تحسين الكتابة",
    desc: "مراجعة النصوص و تصحيح الصياغة و الأخطاء اللغوية",
    icon: MessageSquareText,
    iconBg: "bg-red-500",
  },
  {
    title: "انشاء خطط تعليمية فردية IEP",
    desc: "انشاء خطط تعليمية مخصصة لكل طالب تلبي احتياجاته و تدعم تطوره",
    icon: UserCog,
    iconBg: "bg-green-500",
  },
  {
    title: "إنشاء الواجبات المنزلية",
    desc: "انشاء واجبات تفاعلية تتوافق مع الدرس و أهدافه",
    icon: Home,
    iconBg: "bg-sky-500",
  },
]

export function ToolsSection() {
  return (
    <section id="features" className="bg-background py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-balance text-3xl font-black text-primary md:text-5xl">أدوات نجد AI</h2>
          <p className="mx-auto mt-5 max-w-2xl text-base font-medium text-foreground/80 md:text-lg">
            نجد يقدم أدوات تساعد على انشاء المحتوى التعليمي و تطوير تجربة التعليم
          </p>
        </div>

        {/* Cards grid */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {tools.map((tool) => (
            <div
              key={tool.title}
              className="flex items-start gap-4 rounded-3xl bg-card p-6 text-right shadow-lg transition-transform hover:-translate-y-1"
            >
              <div className="flex-1">
                <h3 className="text-lg font-black text-card-foreground">{tool.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{tool.desc}</p>
              </div>
              <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${tool.iconBg}`}>
                <tool.icon className="h-6 w-6 text-white" />
              </div>
            </div>
          ))}
        </div>

        {/* Note band */}
        <div className="mt-12 rounded-3xl border border-lime/40 bg-gradient-to-l from-lime/25 to-lime/5 px-8 py-10 text-center md:py-12">
          <p className="text-pretty text-lg font-bold leading-relaxed text-primary md:text-xl">
            يتم العمل على تطوير المزيد من الأدوات لتسهيل العملية التعليمية
            <br className="hidden md:block" />
            بما يتناسب مع المعلمين و المعلمات و والجهات التعليمية
          </p>
        </div>
      </div>
    </section>
  )
}
