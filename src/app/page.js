import Bottom from "@/components/custom/bottom";
import { FeaturesSection } from "@/components/custom/features";
import { HeroSection } from "@/components/custom/hero";
import { HowItWorksSection } from "@/components/custom/howItWorks";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <Bottom />
    </div>
  );
}
