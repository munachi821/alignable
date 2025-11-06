import CTASection from "@/components/CTASection";
import DiscoverSection from "@/components/DiscoverSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import TestimonialSection from "@/components/TestimonialSection";

const page = () => {
  return (
    <div>
      <HeroSection />
      <DiscoverSection />
      <ServicesSection />
      <CTASection />
      <TestimonialSection />
      <FAQSection />
      <Footer />
    </div>
  );
};
export default page;
