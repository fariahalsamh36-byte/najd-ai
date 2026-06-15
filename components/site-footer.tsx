import { Instagram, Linkedin, Mail } from "lucide-react"
import { Logo } from "./logo"

const footerCols = [
  {
    title: "المنتج",
    links: ["المميزات", "الباقات", "العرض التوضيجي"],
  },
  {
    title: "الشركة",
    links: ["من نحن", "سياسة الخصوصية", "الشروط و الأحكام"],
  },
]

export function SiteFooter() {
  return (
    <footer id="about" className="relative">
      {/* CTA on light background */}
      <div className="bg-background px-6 pb-20 pt-8 text-center md:pb-28">
        <h2 className="text-balance text-3xl font-black text-primary md:text-5xl">نجد AI لتعليم أكثر ذكاءً</h2>
        <div className="mx-auto mt-6 max-w-2xl space-y-1 text-base font-medium text-foreground/80 md:text-lg">
          <p>وفر ساعات من إعداد الدروس و الأنشطة و الاختبارات</p>
          <p>باستخدام الذكاء الاصطناعي المصمم خصيصًا للتعليم.</p>
        </div>
      </div>

      {/* Wavy divider into green */}
      <div className="leading-[0]">
        <svg viewBox="0 0 1440 120" preserveAspectRatio="none" className="-mb-1 h-[70px] w-full md:h-[110px]">
          <path d="M0,60 C360,0 720,120 1080,80 C1260,60 1380,55 1440,60 L1440,120 L0,120 Z" fill="hsl(var(--primary))" />
        </svg>
      </div>

      {/* Dark green footer */}
      <div className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-6xl px-6 pb-10 pt-6">
          <div className="grid gap-10 text-right md:grid-cols-4">
            {/* Logo + tagline */}
            <div className="md:order-4">
              <Logo className="text-primary-foreground" />
              <p className="mt-2 text-xs text-primary-foreground/70">AI Educational Assistant</p>
              <p className="text-xs text-primary-foreground/70">Estd 2026</p>
            </div>

            {/* Link columns */}
            {footerCols.map((col) => (
              <div key={col.title} className="md:order-2">
                <h3 className="font-black">{col.title}</h3>
                <ul className="mt-4 space-y-2 text-sm text-primary-foreground/80">
                  {col.links.map((link) => (
                    <li key={link}>
                      <a href="#" className="transition-colors hover:text-primary-foreground">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Contact + socials */}
            <div className="md:order-1">
              <h3 className="font-black">تواصل معنا</h3>
              <div className="mt-4 flex justify-end gap-3">
                <a href="#" aria-label="انستجرام" className="text-primary-foreground/80 transition-colors hover:text-primary-foreground">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="#" aria-label="إكس" className="text-primary-foreground/80 transition-colors hover:text-primary-foreground">
                  <XIcon className="h-5 w-5" />
                </a>
                <a href="#" aria-label="لينكدإن" className="text-primary-foreground/80 transition-colors hover:text-primary-foreground">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href="#" aria-label="البريد الإلكتروني" className="text-primary-foreground/80 transition-colors hover:text-primary-foreground">
                  <Mail className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Supported by */}
          <div className="mt-12">
            <div className="flex items-center justify-center gap-4">
              <span className="h-px flex-1 bg-primary-foreground/20" />
              <span className="text-sm text-primary-foreground/80">بدعم من</span>
              <span className="h-px flex-1 bg-primary-foreground/20" />
            </div>
            <div className="mt-6 flex justify-center">
              <div className="flex items-center gap-4 rounded-2xl bg-background/95 px-6 py-4 text-primary shadow-md">
                <div className="text-right leading-tight">
                  <p className="text-sm font-black">مركز الابتكار</p>
                  <p className="text-xs text-muted-foreground">Innovation Center</p>
                </div>
                <span className="h-8 w-px bg-border" />
                <div className="text-right leading-tight">
                  <p className="text-base font-black text-sky-700">منشآت</p>
                  <p className="text-[10px] text-muted-foreground">monsha&apos;at</p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom */}
          <div className="mt-10 border-t border-primary-foreground/15 pt-6 text-center text-xs text-primary-foreground/70">
            <p>© 2025 NajdAI. جميع الحقوق محفوظة</p>
            <p className="mt-1">صنع بشغف لتطوير مستقبل التعليم في المملكة العربية السعودية</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

function XIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}
