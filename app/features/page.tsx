import type { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { HeroSection } from "@/components/hero-section"
import { ComparisonSection } from "@/components/features/comparison-section"
import { ToolsSection } from "@/components/features/tools-section"
import { FeaturesCtaSection } from "@/components/features/features-cta-section"
import { SiteFooter } from "@/components/site-footer"

export const metadata: Metadata = {
  title: "المميزات | نجد AI",
  description: "كل احتياجات التعليم في منصة واحدة - أدوات ذكية تساعد على إنشاء المحتوى التعليمي وتطوير التعليم باستخدام الذكاء الاصطناعي.",
}

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <HeroSection
          titleTop="كل احتياجات التعليم"
          titleBottom="في مــنـصـــة واحــــدة"
          accentBottom
          subtitle="أدوات ذكية تساعد على إنشاء المحتوى التعليمي و تطوير التعليم باستخدام الذكاء الاصطناعي."
        />
        <ComparisonSection />
        <ToolsSection />
        <FeaturesCtaSection />
      </main>
      <SiteFooter />
    </div>
  )
}
