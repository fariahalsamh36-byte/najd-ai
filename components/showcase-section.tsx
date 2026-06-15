import { ArrowLeft, ClipboardList, FileText, PlayCircle, Presentation, Puzzle, Send, Sparkles } from "lucide-react"

type StatusCardProps = {
  icon: React.ReactNode
  iconBg: string
  title: string
  lines: string[]
  badge: string
  badgeClass: string
  delay?: string
}

function StatusCard({ icon, iconBg, title, lines, badge, badgeClass, delay }: StatusCardProps) {
  return (
    <div
      className="animate-float rounded-2xl bg-card p-4 shadow-xl"
      style={delay ? { animationDelay: delay } : undefined}
    >
      <div className="flex items-start justify-between gap-3">
        <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${iconBg}`}>{icon}</div>
        <div className="text-right">
          <p className="font-bold text-card-foreground">{title}</p>
          {lines.map((l) => (
            <p key={l} className="text-sm text-muted-foreground">
              {l}
            </p>
          ))}
        </div>
      </div>
      <div className="mt-3 flex justify-end">
        <span className={`rounded-full px-3 py-1 text-xs font-semibold ${badgeClass}`}>{badge}</span>
      </div>
    </div>
  )
}

export function ShowcaseSection() {
  return (
    <section className="bg-background py-16 md:py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 lg:grid-cols-2">
        {/* Text column */}
        <div className="order-1 text-center lg:order-2 lg:text-right">
          <h2 className="text-balance text-3xl font-black leading-tight text-primary md:text-5xl">
            طور رحلـة التعليم
            <br />
            بالذكاء الأصطناعي
          </h2>
          <div className="mt-6 space-y-1 text-base font-medium text-foreground/80 md:text-lg">
            <p>انشئ خطط دروس ،انشطة ،اختبارات و عروض تقديمية</p>
            <p>خلال دقائق باستخدام نجد Ai</p>
          </div>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 lg:justify-end">
            <a
              href="#pricing"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 font-bold text-primary-foreground shadow-lg transition-transform hover:scale-105"
            >
              ابدأ بالتجربة المجانية
              <ArrowLeft className="h-4 w-4" />
            </a>
            <a
              href="#features"
              className="inline-flex items-center gap-2 rounded-full border-2 border-primary/40 bg-card px-7 py-3.5 font-bold text-primary shadow-sm transition-colors hover:border-primary"
            >
              <PlayCircle className="h-5 w-5" />
              شاهد العرض التوضيحي
            </a>
          </div>
        </div>

        {/* Cards composition */}
        <div className="relative order-2 lg:order-1">
          {/* Ambient green glow layers */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -inset-x-32 -inset-y-40 z-0 blur-3xl"
            style={{
              background:
                "radial-gradient(closest-side at 50% 50%, rgba(167, 230, 182, 0.85) 0%, rgba(199, 240, 210, 0.55) 45%, rgba(223, 247, 227, 0) 80%)",
            }}
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -inset-x-20 -inset-y-24 z-0 blur-3xl"
            style={{
              background:
                "radial-gradient(closest-side at 50% 50%, rgba(184, 236, 197, 0.95) 0%, rgba(223, 247, 227, 0) 75%)",
            }}
          />
          <div className="relative z-10 grid grid-cols-2 gap-4">
            <StatusCard
              icon={<Presentation className="h-5 w-5 text-white" />}
              iconBg="bg-orange-500"
              title="عرض تقديمي"
              lines={["الطاقة المتجددة", "15 شريحة"]}
              badge="تم انشاء"
              badgeClass="bg-orange-100 text-orange-600"
              delay="0s"
            />
            <StatusCard
              icon={<ClipboardList className="h-5 w-5 text-white" />}
              iconBg="bg-violet-500"
              title="اختبار"
              lines={["10 أسئلة متنوعة"]}
              badge="جاهز"
              badgeClass="bg-violet-100 text-violet-600"
              delay="0.6s"
            />
            <StatusCard
              icon={<FileText className="h-5 w-5 text-white" />}
              iconBg="bg-accent"
              title="خطة درس"
              lines={["رياضيات -", "الكسر العشري"]}
              badge="تم الإنشاء"
              badgeClass="bg-green-100 text-green-700"
              delay="1.2s"
            />
            <StatusCard
              icon={<Puzzle className="h-5 w-5 text-white" />}
              iconBg="bg-pink-500"
              title="نشاط تفاعلي"
              lines={["مطابقة"]}
              badge="جاهز"
              badgeClass="bg-pink-100 text-pink-600"
              delay="1.8s"
            />
          </div>

          {/* Chat card */}
          <div
            className="animate-float-subtle relative z-10 mt-4 overflow-hidden rounded-2xl bg-card shadow-xl"
            style={{ animationDelay: "0.9s" }}
          >
            <div className="flex items-center justify-between gap-3 bg-gradient-to-l from-violet-600 to-violet-500 px-5 py-4">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/20">
                <Sparkles className="h-5 w-5 text-white" />
              </div>
              <div className="text-right">
                <p className="font-bold text-white">نجد الذكي</p>
                <p className="text-xs text-white/80">مساعدك التعليمي</p>
              </div>
            </div>
            <div className="space-y-3 p-5">
              <div className="rounded-2xl bg-muted p-3 text-right text-sm text-foreground/80">
                <p className="font-semibold text-foreground">مرحبًا أ. فاطمة</p>
                <p>اسألني عن أي شيء يتعلق بالتدريس، التعلم، أو إدارة الصف.</p>
              </div>
              <div className="space-y-2">
                {["كيف يمكنني تحسين خطة الدرس؟", "اقترح انشطة تفاعلية للطلاب", "كيف اقيم اداء الطلاب بفعالية"].map(
                  (q) => (
                    <p
                      key={q}
                      className="rounded-xl border border-border bg-background px-3 py-2 text-right text-sm text-foreground/70"
                    >
                      {q}
                    </p>
                  ),
                )}
              </div>
              <div className="flex items-center gap-2 rounded-full border border-border bg-background px-2 py-2">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-violet-500 text-white">
                  <Send className="h-4 w-4" />
                </span>
                <span className="flex-1 text-right text-sm text-muted-foreground">اكتب ماتحتاجه هنا .....</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
