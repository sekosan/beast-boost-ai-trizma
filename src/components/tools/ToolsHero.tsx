
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

export function ToolsHero() {
  return (
    <div className="text-center mb-12">
      <div className="inline-block mb-4 px-4 py-1 bg-beast-blue/10 text-beast-blue rounded-full text-sm font-medium">
        MrBeast Araçları
      </div>
      <h1 className="text-4xl font-bold tracking-tight mb-4 bg-gradient-to-r from-beast-blue to-beast-green text-transparent bg-clip-text">
        İçerik Stratejilerinizi Güçlendirin
      </h1>
      <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
        MrBeast stratejilerini kanalınıza uygulamanıza yardımcı olacak özel geliştirilen araçlarla etkileşim ve büyüme sağlayın.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button size="lg" className="bg-gradient-to-r from-beast-blue to-beast-green hover:from-beast-darkblue hover:to-beast-darkgreen text-white">
          Araçları Keşfet
        </Button>
        <Button size="lg" variant="outline" className="flex items-center gap-2">
          <Search className="h-4 w-4" />
          Arama Yap
        </Button>
      </div>
    </div>
  );
}
