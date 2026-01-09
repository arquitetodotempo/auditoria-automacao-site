import { HeroSection } from "@/components/sections/HeroSection";
import { TargetAudienceSection } from "@/components/sections/TargetAudienceSection";
import { WhatIsSection } from "@/components/sections/WhatIsSection";
import { IncludedSection } from "@/components/sections/IncludedSection";
import { ResultsSection } from "@/components/sections/ResultsSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { BonusSection } from "@/components/sections/BonusSection";
import { PricingSection } from "@/components/sections/PricingSection";
import { HowItWorksSection } from "@/components/sections/HowItWorksSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { FinalCTASection } from "@/components/sections/FinalCTASection";
import { FooterSection } from "@/components/sections/FooterSection";

const Index = () => {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <HeroSection />
      <TargetAudienceSection />
      <WhatIsSection />
      <IncludedSection />
      <ResultsSection />
      <AboutSection />
      <BonusSection />
      <PricingSection />
      <HowItWorksSection />
      <FAQSection />
      <FinalCTASection />
      <FooterSection />
    </main>
  );
};

export default Index;
