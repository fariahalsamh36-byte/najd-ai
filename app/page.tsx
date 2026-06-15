import { SiteHeader } from "@/components/site-header"
import { HeroSection } from "@/components/hero-section"
import { ShowcaseSection } from "@/components/showcase-section"
import { FeaturesSection } from "@/components/features-section"
import { PricingSection } from "@/components/pricing-section"
import { ContactSection } from "@/components/contact-section"
import { SiteFooter } from "@/components/site-footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <HeroSection />
        <ShowcaseSection />
        <FeaturesSection />
        <PricingSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </div>
  )
}
