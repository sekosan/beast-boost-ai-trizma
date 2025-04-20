
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { StrategiesSection } from "@/components/StrategiesSection";

const Strategies = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <div className="container py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold tracking-tight mb-4">MrBeast Stratejileri</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Fazıl İşler'in analiz ettiği, MrBeast'in YouTube'da olağanüstü başarı elde etmesini sağlayan kanıtlanmış stratejiler.
            </p>
          </div>
          <StrategiesSection />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Strategies;
