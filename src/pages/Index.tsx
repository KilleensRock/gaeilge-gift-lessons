import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StPatricksOffer from "@/components/StPatricksOffer";
import FeaturesSection from "@/components/FeaturesSection";
import LessonPreviewSection from "@/components/LessonPreviewSection";
import PricingSection from "@/components/PricingSection";
import GiftSection from "@/components/GiftSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <StPatricksOffer />
      <FeaturesSection />
      <LessonPreviewSection />
      <PricingSection />
      <GiftSection />
      <Footer />
    </main>
  );
};

export default Index;
