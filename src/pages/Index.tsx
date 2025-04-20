
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { StrategiesSection } from "@/components/StrategiesSection";
import { MetricsSection } from "@/components/MetricsSection";
import { ByteRulesSection } from "@/components/ByteRulesSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <StrategiesSection />
        <MetricsSection />
        <ByteRulesSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
