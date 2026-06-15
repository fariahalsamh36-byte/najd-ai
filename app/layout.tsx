import type { Metadata } from "next"
import { Tajawal } from "next/font/google"
import "./globals.css"

const tajawal = Tajawal({
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "700", "800", "900"],
  variable: "--font-tajawal",
})

export const metadata: Metadata = {
  title: "نجد AI | مساعدك الذكي في التعليم",
  description:
    "منصة مدعومة بالذكاء الاصطناعي مصممة خصيصًا للاحتياجات التعليمية. أنشئ خطط دروس وأنشطة واختبارات وعروض تقديمية خلال دقائق.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl" className={`${tajawal.variable} bg-background`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
