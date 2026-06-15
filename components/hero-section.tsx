type HeroSectionProps = {
  titleTop?: string
  titleBottom?: string
  /** Render the bottom title line in the lime accent color */
  accentBottom?: boolean
  subtitle?: string
}

export function HeroSection({
  titleTop = "مساعدك الذكي",
  titleBottom = "في التعلــــيــــــم",
  accentBottom = false,
  subtitle = "منصة مدعومة بالذكاء الاصطناعي مصممه خصيصًا للاحتياجات التعليمية .",
}: HeroSectionProps) {
  return (
    <section id="home" className="relative overflow-hidden">
      {/* Background image with green gradient overlay */}
      <div className="absolute inset-0">
        <img
          src="/hero-classroom.png"
          alt="معلم سعودي يساعد طلابه داخل الفصل الدراسي"
          className="h-full w-full object-cover"
        />
        {/* Dark green panel on the left fading into the photo on the right */}
        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-primary/85 to-primary" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-transparent to-transparent" />
      </div>

      {/* Content — anchored to the start (right in RTL) inside the green area */}
      <div className="relative mx-auto flex min-h-[560px] max-w-7xl flex-col items-end justify-center px-6 pb-28 pt-32 text-right md:min-h-[680px] md:px-12 md:pt-36 lg:px-16">
        <div className="max-w-md">
          <h1 className="text-balance text-3xl font-black leading-tight text-primary-foreground md:text-[2.75rem] lg:text-5xl">
            {titleTop}
            <br />
            <span className={accentBottom ? "text-lime" : "text-lime"}>{titleBottom}</span>
          </h1>
          <p className="mt-5 max-w-sm text-pretty text-sm font-medium leading-relaxed text-primary-foreground/90 md:text-base">
            {subtitle}
          </p>
        </div>
      </div>

      {/* Wavy divider */}
      <div className="absolute bottom-0 left-0 right-0 leading-[0]">
        <svg viewBox="0 0 1440 120" preserveAspectRatio="none" className="h-[80px] w-full md:h-[120px]">
          <path
            d="M0,40 C360,120 720,0 1080,50 C1260,75 1380,70 1440,55 L1440,120 L0,120 Z"
            fill="hsl(var(--background))"
          />
          <path
            d="M0,40 C360,120 720,0 1080,50 C1260,75 1380,70 1440,55"
            fill="none"
            stroke="hsl(var(--lime))"
            strokeWidth="2"
          />
        </svg>
      </div>
    </section>
  )
}
