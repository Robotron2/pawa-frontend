import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/landing/Hero";
import { ProtocolOverview } from "@/components/landing/ProtocolOverview";
import { ProblemSolution } from "@/components/landing/ProblemSolution";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { FeatureSection } from "@/components/landing/FeatureSection";
import { DeveloperSection } from "@/components/landing/DeveloperSection";
import { FAQSection } from "@/components/landing/FAQSection";
import { CTASection } from "@/components/landing/CTASection";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <ProtocolOverview />
        <ProblemSolution />
        <HowItWorks />
        <FeatureSection />
        <DeveloperSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
