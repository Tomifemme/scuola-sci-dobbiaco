import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import WelcomeSection from "@/components/WelcomeSection";
import ServicesSection from "@/components/ServicesSection";
import WeatherSection from "@/components/WeatherSection";
import QuickLinksSection from "@/components/QuickLinksSection";
import ReviewsSection from "@/components/ReviewsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <WelcomeSection />
      <ServicesSection />
      <WeatherSection />
      <QuickLinksSection />
      <ReviewsSection />
      <Footer />
    </div>
  );
};

export default Index;
