import { Check, X, ShieldCheck } from "lucide-react"

const najdPoints = [
  "مبني على المناهج التعليمية",
  "مصمم خصيصًا للتعليم و المعلمين",
  "لا يحتاج لكتابة أوامر تقنية او لخبرة تقنية",
  "مخرجات تعليمية من المنهج",
  "مخرجات جاهزة للاستخدام",
  "منصة واحدة تجمع جميع الاحتياجات",
  "يوفر ساعات من العمل اليومي",
]

const generalPoints = [
  "عام وغير مخصص للتعليم",
  "تحتاج لكتابة أوامر تقنية متقدمة للوصول للنتيجة",
  "إجابات عامة",
  "يحتاج تعديلات يدوية كثيره",
  "يستهلك وقت و جهد أكبر",
]

export function ComparisonSection() {
  return (
    <section className="bg-background py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-balance text-3xl font-black text-primary md:text-5xl">لماذا تختار نجد AI</h2>
          <p className="mx-auto mt-5 max-w-2xl text-base font-medium text-foreground/80 md:text-lg">
            الفرق بين مميزات نجد و باقي أدوات الذكاء الاصطناعي
          </p>
        </div>

        {/* Two columns */}
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {/* General AI tools */}
          <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-lg">
            <div className="border-b border-border bg-muted/40 px-6 py-6 text-center">
              <h3 className="text-2xl font-black text-card-foreground md:text-3xl">أدوات الذكاء الاصطناعي العامة</h3>
              <p className="mt-1 text-sm font-medium text-muted-foreground">مثل Open AI &amp; ChatGPT</p>
            </div>
            <ul className="space-y-5 px-6 py-8">
              {generalPoints.map((point) => (
                <li key={point} className="flex items-center justify-end gap-3 text-right">
                  <span className="text-base font-medium text-foreground/90">{point}</span>
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-muted-foreground/40 text-muted-foreground">
                    <X className="h-3.5 w-3.5" />
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Najd AI */}
          <div className="relative overflow-hidden rounded-3xl border-2 border-lime bg-card shadow-xl">
            <div className="absolute left-6 top-6">
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-lime shadow-md">
                <ShieldCheck className="h-7 w-7 text-primary" />
              </span>
            </div>
            <div className="border-b border-border bg-lime/15 px-6 py-6 text-center">
              <h3 className="text-2xl font-black text-primary md:text-3xl">نجد AI</h3>
            </div>
            <ul className="space-y-5 px-6 py-8">
              {najdPoints.map((point) => (
                <li key={point} className="flex items-center justify-end gap-3 text-right">
                  <span className="text-base font-medium text-foreground/90">{point}</span>
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-primary/40 text-primary">
                    <Check className="h-3.5 w-3.5" />
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Real difference band */}
        <div className="mt-10 rounded-3xl border border-lime/40 bg-gradient-to-l from-lime/25 to-lime/5 p-8 md:p-12">
          <div className="text-right">
            <h3 className="text-2xl font-black text-primary md:text-3xl">الفرق الحقيقي</h3>
            <p className="mt-4 text-base font-medium text-foreground/80 md:text-lg">
              أدوات الذكاء الاصطناعي العامة تعطيك أجابات
            </p>
            <p className="mt-2 text-lg font-black leading-relaxed text-primary md:text-xl">
              نجد AI مصمم خصيصًا للبيئة التعليمية و يعطيك مخرجات
              <br />
              تعليمية مبنية على المنهج وجاهزة للاستخدام
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
