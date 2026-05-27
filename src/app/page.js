import { CTASection } from "@/components/ui/HomePage/CTASection/CTASection";
import { FAQ } from "@/components/ui/HomePage/FAQ/FAQ";
import { FeaturedCars } from "@/components/ui/HomePage/FeaturedCars/FeaturedCars";
import { Hero } from "@/components/ui/HomePage/Hero/Hero";
import { HowItWorks } from "@/components/ui/HomePage/HowItWorks/HowItWorks";
import { PlatformFeatures } from "@/components/ui/HomePage/PlatformFeatures/PlatformFeatures";
import { WhyChooseUs } from "@/components/ui/HomePage/WhyChooseUs/WhyChooseUs";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedCars />
      <WhyChooseUs />
      <PlatformFeatures />
      <HowItWorks />
      <FAQ />
      <CTASection />
    </>
  );
}
