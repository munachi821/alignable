import CTASection from "@/components/CTASection";
import DiscoverSection from "@/components/DiscoverSection";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";

const page = () => {
  return (
    <div>
      <HeroSection />
      <DiscoverSection />
      <ServicesSection />
      <CTASection />
    </div>
  );
};
export default page;
