import { Hero } from "@/components/ui/HomePage/Hero/Hero";
import { PlatformFeatures } from "@/components/ui/HomePage/PlatformFeatures/PlatformFeatures";
import { WhyChooseUs } from "@/components/ui/HomePage/WhyChooseUs/WhyChooseUs";

export default function Home() {
  return (
    <>
      <Hero />
      <WhyChooseUs />
      <PlatformFeatures />
    </>
  );
}
