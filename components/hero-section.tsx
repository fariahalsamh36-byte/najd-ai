export function HeroSection() {
  return (
    <section id="home" className="relative overflow-hidden">
      {/* Background image with green gradient overlay */}
      <div className="absolute inset-0">
        <img
          src="/hero-classroom.png"
          alt="معلم سعودي يساعد طلابه داخل الفصل الدراسي"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-primary/40 to-primary/90" />
      </div>

      {/* Content */}
      <div className="relative mx-auto flex min-h-[640px] max-w-5xl flex-col items-center justify-center px-6 pb-28 pt-40 text-center md:min-h-[760px] md:pt-44">
        <div className="w-full max-w-3xl rounded-[2rem] border border-white/40 bg-white/25 p-8 shadow-2xl backdrop-blur-md md:p-14">
          <h1 className="text-balance text-4xl font-black leading-tight text-primary md:text-6xl">
            مساعدك الذكي
            <br />
            في التعلــــيــــــم
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-pretty text-base font-medium leading-relaxed text-primary/90 md:text-lg">
            منصة مدعومة بالذكاء الاصطناعي مصممه خصيصًا للاحتياجات التعليمية .
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
