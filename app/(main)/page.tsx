import CTASection from "@/components/LandingPage/CTASection";
import DiscoverSection from "@/components/LandingPage/DiscoverSection";
import FAQSection from "@/components/LandingPage/FAQSection";
import Footer from "@/components/LandingPage/Footer";
import HeroSection from "@/components/LandingPage/HeroSection";
import ServicesSection from "@/components/LandingPage/ServicesSection";
import TestimonialSection from "@/components/LandingPage/TestimonialSection";

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
