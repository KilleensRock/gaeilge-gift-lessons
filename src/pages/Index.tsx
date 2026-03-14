import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import LessonPreviewSection from "@/components/LessonPreviewSection";
import PricingSection from "@/components/PricingSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <LessonPreviewSection />
      <PricingSection />
      <Footer />
    </main>
  );
};

export default Index;
