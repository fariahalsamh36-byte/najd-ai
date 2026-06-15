export function ContactSection() {
  return (
    <section id="contact" className="bg-background pb-16 md:pb-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="rounded-3xl bg-card p-8 shadow-lg md:p-12">
          <div className="text-right">
            <h2 className="text-balance text-2xl font-black text-primary md:text-4xl">
              هل تمثل مدرسة أو جهة تعليمية؟
            </h2>
            <p className="mt-3 text-base font-medium text-foreground/80 md:text-lg">
              تواصل معنا للحصول على عرض مخصص يناسب احتياج الجهة التعليمية
            </p>
          </div>

          <form className="mt-8 flex flex-col gap-4">
            <div className="grid gap-4 md:grid-cols-3">
              <input
                type="text"
                placeholder="الاسم"
                aria-label="الاسم"
                className="rounded-full border border-border bg-background px-5 py-3 text-right text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-violet-400"
              />
              <input
                type="text"
                placeholder="اسم الجهة التعليمية"
                aria-label="اسم الجهة التعليمية"
                className="rounded-full border border-border bg-background px-5 py-3 text-right text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-violet-400"
              />
              <input
                type="email"
                placeholder="البريد الإلكتروني"
                aria-label="البريد الإلكتروني"
                className="rounded-full border border-border bg-background px-5 py-3 text-right text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-violet-400"
              />
            </div>
            <div className="flex justify-start">
              <button
                type="submit"
                className="rounded-full bg-violet-600 px-8 py-3.5 font-bold text-white shadow-md transition-transform hover:scale-105"
              >
                إرسال طلبك للتواصل
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
