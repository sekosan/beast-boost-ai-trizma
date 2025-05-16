
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MetricTracker } from "@/components/metrics/MetricTracker";
import { MetricVisualizer } from "@/components/metrics/MetricVisualizer";
import { ToolsHero } from "@/components/tools/ToolsHero";
import { ToolsGrid } from "@/components/tools/ToolsGrid";
import { StrategyBank } from "@/components/tools/StrategyBank";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";
import { Search, Filter, ChevronRight } from "lucide-react";
import { Input } from "@/components/ui/input";

const Tools = () => {
  const [searchTerm, setSearchTerm] = useState("");
  
  const handleContactRequest = () => {
    toast({
      title: "İletişim Talebi Alındı",
      description: "Ekibimiz en kısa sürede sizinle iletişime geçecektir.",
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <div className="container py-12">
          <ToolsHero />
          
          {/* Arama çubuğu */}
          <div className="flex flex-col md:flex-row gap-4 mb-8 items-center">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input 
                placeholder="Araçlarda ara..." 
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <Button variant="outline" size="sm" className="flex items-center gap-2">
              <Filter className="h-4 w-4" />
              Filtrele
            </Button>
          </div>

          <Tabs defaultValue="temel" className="mb-12">
            <TabsList className="grid w-full grid-cols-3 mb-6">
              <TabsTrigger value="temel">Temel Araçlar</TabsTrigger>
              <TabsTrigger value="optimizasyon">Optimizasyon</TabsTrigger>
              <TabsTrigger value="analiz">Analiz</TabsTrigger>
            </TabsList>
            
            <TabsContent value="temel" className="mt-6 animate-fade-in">
              <div className="space-y-8">
                <ToolsGrid />
              </div>
            </TabsContent>
            
            <TabsContent value="optimizasyon" className="animate-fade-in">
              <div className="mb-8 p-4 bg-gradient-to-r from-beast-blue/5 to-beast-green/5 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">Optimizasyon Araçları</h3>
                <p className="text-muted-foreground">
                  Bu araçlar, kanalınızın performansını ve içerik stratejilerinizi optimize etmenize yardımcı olur.
                </p>
              </div>
              <StrategyBank />
            </TabsContent>
            
            <TabsContent value="analiz" className="space-y-6 animate-fade-in">
              <div className="mb-8 p-4 bg-gradient-to-r from-beast-blue/5 to-beast-green/5 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">Analiz Araçları</h3>
                <p className="text-muted-foreground">
                  İçeriklerinizin performansını derinlemesine analiz etmenizi sağlayan araçlar.
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <MetricTracker />
                <MetricVisualizer />
              </div>
            </TabsContent>
          </Tabs>

          {/* Popüler Araçlar Bölümü */}
          <div className="mb-12">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">Popüler Araçlar</h2>
              <Button variant="ghost" className="flex items-center gap-1">
                Tümünü Gör <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-beast-blue/10 to-beast-green/10 p-6 rounded-xl hover:shadow-md transition-all cursor-pointer hover:scale-[1.02]">
                <div className="bg-beast-blue p-2 rounded-md w-10 h-10 flex items-center justify-center mb-4">
                  <Search className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Thumbnail Analizi</h3>
                <p className="text-sm text-muted-foreground mb-4">Thumbnail'lerinizi analiz ederek etkileşim potansiyelini ölçün.</p>
                <Button variant="link" className="p-0 h-auto text-beast-blue" onClick={() => toast({ title: "Yakında", description: "Bu özellik yakında aktif olacaktır." })}>
                  Yakında
                </Button>
              </div>
              <div className="bg-gradient-to-br from-beast-blue/10 to-beast-green/10 p-6 rounded-xl hover:shadow-md transition-all cursor-pointer hover:scale-[1.02]">
                <div className="bg-beast-green p-2 rounded-md w-10 h-10 flex items-center justify-center mb-4">
                  <Filter className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">İçerik Filtreleme</h3>
                <p className="text-sm text-muted-foreground mb-4">En iyi performans gösteren içeriklerinizi filtreleyip analiz edin.</p>
                <Button variant="link" className="p-0 h-auto text-beast-green" onClick={() => toast({ title: "Yakında", description: "Bu özellik yakında aktif olacaktır." })}>
                  Yakında
                </Button>
              </div>
              <div className="bg-gradient-to-br from-beast-blue/10 to-beast-green/10 p-6 rounded-xl hover:shadow-md transition-all cursor-pointer hover:scale-[1.02]">
                <div className="bg-purple-500 p-2 rounded-md w-10 h-10 flex items-center justify-center mb-4">
                  <Search className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Trend Analizi</h3>
                <p className="text-sm text-muted-foreground mb-4">YouTube'daki güncel trendleri analiz edip içerik fırsatlarını keşfedin.</p>
                <Button variant="link" className="p-0 h-auto text-purple-500" onClick={() => toast({ title: "Yakında", description: "Bu özellik yakında aktif olacaktır." })}>
                  Yakında
                </Button>
              </div>
            </div>
          </div>

          <div className="text-center bg-gradient-to-r from-beast-blue/10 to-beast-green/10 p-8 rounded-xl">
            <h2 className="text-2xl font-bold mb-4">Özel Araçlar İçin İletişime Geçin</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Kanalınızın özel ihtiyaçlarına yönelik geliştirilmiş araçlar ve stratejiler için bizimle iletişime geçin.
            </p>
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-beast-blue to-beast-green hover:from-beast-darkblue hover:to-beast-darkgreen text-white"
              onClick={handleContactRequest}
            >
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
