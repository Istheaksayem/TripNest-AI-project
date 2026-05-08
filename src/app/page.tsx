import { Navbar } from "@/components/shared/navbar";
import { Footer } from "@/components/shared/footer";
import { HeroSection } from "@/components/sections/hero-section";
import { DestinationsSection } from "@/components/sections/destinations-section";
import { FeaturesSection } from "@/components/sections/features-section";
import { AIPlannerSection } from "@/components/sections/ai-planner-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { FAQSection } from "@/components/sections/faq-section";
import { NewsletterSection } from "@/components/sections/newsletter-section";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <DestinationsSection />
        <FeaturesSection />
        <AIPlannerSection />
        <TestimonialsSection />
        <FAQSection />
        <NewsletterSection />
      </main>
      <Footer />
    </div>
  );
}
