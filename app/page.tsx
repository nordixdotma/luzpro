import Header from "@/components/homepage/header"
import HeroSection from "@/components/homepage/hero-section"
import TrustedSection from "@/components/homepage/trusted-section"
import CTASection from "@/components/homepage/cta-section"
import PriceSection from "@/components/homepage/price-section"
import Footer from "@/components/homepage/footer"

export default function Home() {
  return (
    <main className="w-full">
      <Header />
      <HeroSection />
      <TrustedSection />
      <CTASection />
      <PriceSection />
      <Footer />
    </main>
  )
}
