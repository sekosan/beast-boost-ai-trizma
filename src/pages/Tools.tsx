
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MetricTracker } from "@/components/metrics/MetricTracker";
import { MetricVisualizer } from "@/components/metrics/MetricVisualizer";
import { ToolsHero } from "@/components/tools/ToolsHero";
import { ToolsGrid } from "@/components/tools/ToolsGrid";
import { StrategyBank } from "@/components/tools/StrategyBank";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Tools = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <div className="container py-12">
          <ToolsHero />

          <div className="space-y-8 mb-12">
            <MetricTracker />
            <MetricVisualizer />
          </div>

          <Tabs defaultValue="temel" className="mb-12">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="temel">Temel Araçlar</TabsTrigger>
              <TabsTrigger value="optimizasyon">Optimizasyon</TabsTrigger>
              <TabsTrigger value="analiz">Analiz</TabsTrigger>
            </TabsList>
            <TabsContent value="temel" className="mt-6">
              <div className="space-y-6">
                <MetricTracker />
                <ToolsGrid />
              </div>
            </TabsContent>
            <TabsContent value="optimizasyon">
              <StrategyBank />
            </TabsContent>
            <TabsContent value="analiz">
              <MetricVisualizer />
            </TabsContent>
          </Tabs>

          <div className="text-center bg-gradient-to-r from-beast-blue/10 to-beast-green/10 p-8 rounded-xl">
            <h2 className="text-2xl font-bold mb-4">Özel Araçlar İçin İletişime Geçin</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Kanalınızın özel ihtiyaçlarına yönelik geliştirilmiş araçlar ve stratejiler için bizimle iletişime geçin.
            </p>
            <Button size="lg" className="bg-gradient-to-r from-beast-blue to-beast-green hover:from-beast-darkblue hover:to-beast-darkgreen text-white">
              İletişime Geç
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Tools;
