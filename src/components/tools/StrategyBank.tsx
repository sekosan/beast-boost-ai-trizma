
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Book, BookOpen, Search } from "lucide-react";

interface Strategy {
  title: string;
  description: string;
  category: string;
  status: "published" | "draft";
}

const strategies: Strategy[] = [
  {
    title: "Thumbnail Optimizasyonu",
    description: "İnsan yüzü ve duygu ifadeleri kullanarak thumbnail'lerinizi optimize edin.",
    category: "İçerik",
    status: "published",
  },
  {
    title: "İzleyici Tutma Teknikleri",
    description: "3 dakika kuralı ve sürekli merak uyandırma teknikleriyle izleyicilerinizi tutun.",
    category: "İçerik",
    status: "published",
  },
  {
    title: "Viral İçerik Formülü",
    description: "MrBeast'in viral içerik oluşturma formülünü öğrenin ve uygulayın.",
    category: "Strateji",
    status: "published",
  },
];

export function StrategyBank() {
  return (
    <Card className="w-full">
      <CardHeader>
        <div className="flex items-center gap-2">
          <Book className="h-5 w-5" />
          <CardTitle>Strateji Bilgi Bankası</CardTitle>
        </div>
        <CardDescription>MrBeast'in başarılı içerik stratejilerini keşfedin</CardDescription>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[400px] pr-4">
          <div className="space-y-4">
            {strategies.map((strategy, index) => (
              <Card key={index} className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold">{strategy.title}</h3>
                  <span className="text-xs bg-beast-blue/10 text-beast-blue px-2 py-1 rounded-full">
                    {strategy.category}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground mb-4">{strategy.description}</p>
                <Button variant="outline" size="sm" className="w-full">
                  <BookOpen className="h-4 w-4 mr-2" />
                  Detayları Gör
                </Button>
              </Card>
            ))}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
}
