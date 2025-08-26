import { StockTicker } from "@/components/stock-ticker"
import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"
import { PricingSection } from "@/components/pricing-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div>
      <StockTicker />
      <HeroSection />
      <FeaturesSection />
      <PricingSection />
      <Footer />
    </div>
  )
}
