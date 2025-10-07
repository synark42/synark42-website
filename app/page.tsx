import { Header } from "@/components/header";
import { HeroSection } from "@/components/sections/hero-section";
import { ValueProposition } from "@/components/value-proposition";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { ServicesSection } from "@/components/sections/services-section";
import { PortfolioSection } from "@/components/sections/portfolio-section";
import CircularGallery from "@/components/CircularGallery";
import { ProcessSection } from "@/components/sections/process-section";
import { AboutSection } from "@/components/sections/about-section";
import { CTASection } from "@/components/sections/cta-section";
import { PartneredSection } from "@/components/sections/PartneredSection";
import { ContactSection } from "@/components/sections/contact-section";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <PortfolioSection />
        <ServicesSection />
        <TestimonialsSection />
        <CTASection />
        <PartneredSection />
        <ContactSection />
        <Footer />
      </main>
    </div>
  );
}
