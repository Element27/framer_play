import Hero from "@/components/Hero";
import ParallaxSection from "@/components/ParallaxSection";
import BentoGrid from "@/components/BentoGrid";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <ParallaxSection />
      <BentoGrid />
      <Footer />
    </div>
  );
};

export default Index;
