import { ArrowLeft, Play } from "lucide-react"

export function FeaturesCtaSection() {
  return (
    <section className="bg-background py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        {/* Note band with floating squares */}
        <div className="relative overflow-hidden rounded-3xl border border-lime/40 bg-gradient-to-l from-lime/25 to-lime/5 px-8 py-10 md:py-12">
          <div className="relative z-10 max-w-2xl text-right">
            <p className="text-pretty text-lg font-bold leading-relaxed text-primary md:text-xl">
              يتم العمل على تطوير المزيد من الأدوات خاصة بالطلاب و الأهالي ....
            </p>
          </div>

          {/* Decorative floating squares */}
          <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 left-6 hidden items-center gap-3 md:flex">
            <span className="h-10 w-10 rounded-lg bg-lime/70" />
            <span className="h-10 w-10 rounded-lg bg-lime/30" />
            <span className="h-12 w-12 rounded-lg bg-lime/80" />
            <span className="h-12 w-12 rotate-45 rounded-lg bg-accent/60" />
            <span className="h-10 w-10 rounded-lg bg-card shadow" />
          </div>
        </div>

        {/* Action buttons */}
        <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="/#contact"
            className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-primary bg-card px-8 py-4 text-base font-bold text-primary shadow-md transition-transform hover:scale-105"
          >
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground">
              <Play className="h-3 w-3 fill-current" />
            </span>
            شاهد العرض التوضيحي
          </a>
          <a
            href="/#contact"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 text-base font-bold text-primary-foreground shadow-md transition-transform hover:scale-105"
          >
            ابدأ بالتجربة المجانية
            <ArrowLeft className="h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  )
}
