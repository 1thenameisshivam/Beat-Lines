import { FeaturesSection } from "@/components/custom/features";
import { Footer } from "@/components/custom/footer";
import { HeroSection } from "@/components/custom/hero";
import { HowItWorksSection } from "@/components/custom/howItWorks";
import Showcase from "@/components/custom/showcase";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <Showcase />
      <Footer />
    </div>
  );
}
