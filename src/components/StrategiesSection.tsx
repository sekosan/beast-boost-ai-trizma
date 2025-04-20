
import { BarChart3, Camera, LineChart, Settings, Star, TrendingUp, Users, PieChart, Zap, BarChart, Compass, Eye } from "lucide-react";
import { StrategyCard } from "@/components/ui/strategy-card";

export function StrategiesSection() {
  const strategies = [
    {
      title: "Temel Metriklerin Takibi ve Analizi",
      description: "Tıklanma oranı (CTR), ortalama izlenme süresi (AVD) ve ortalama izlenme yüzdesi (AVP) gibi temel metrikleri takip edin.",
      icon: <LineChart className="h-6 w-6" />,
      category: "Analiz",
      to: "/stratejiler/metrik-takibi"
    },
    {
      title: "Thumbnail Analizi",
      description: "Thumbnail'lerinizi insan yüzü, duygusal ifadeler ve mobil uyumluluk gibi prensipler üzerinden analiz edin.",
      icon: <Camera className="h-6 w-6" />,
      category: "Optimizasyon",
      to: "/stratejiler/thumbnail-analizi"
    },
    {
      title: "Başlık Optimizasyonu",
      description: "Dikkat çekici kelime seçimleri ve merak uyandıran ifadeler ile başlıklarınızı optimize edin.",
      icon: <Star className="h-6 w-6" />,
      category: "Optimizasyon",
      to: "/stratejiler/baslik-optimizasyonu"
    },
    {
      title: "İzleyici Davranışı Analizi",
      description: "İzleyici düşüş noktalarını belirleyin ve 3 dakikada yeniden etkileşim kurma taktiğini kullanın.",
      icon: <Eye className="h-6 w-6" />,
      category: "Analiz",
      to: "/stratejiler/izleyici-davranisi"
    },
    {
      title: "Gelişmiş Thumbnail A/B Testi",
      description: "Farklı hedef kitle segmentleri için thumbnail'leri test edin ve optimize edilmiş tasarımları otomatik olarak uygulayın.",
      icon: <BarChart className="h-6 w-6" />,
      category: "Test",
      to: "/stratejiler/ab-testi"
    },
    {
      title: "Viral Trend Analizi",
      description: "Para, tepki, şaka, meydan okuma, drama ve işbirlikleri gibi viral temaları analiz edin.",
      icon: <TrendingUp className="h-6 w-6" />,
      category: "Trend",
      to: "/stratejiler/viral-trendler"
    },
    {
      title: "Ekip Yönetimi ve İşbirliği",
      description: "'Sadece A takım oyuncuları istiyorum' prensibi doğrultusunda ekibinizi yönetin.",
      icon: <Users className="h-6 w-6" />,
      category: "Yönetim",
      to: "/stratejiler/ekip-yonetimi"
    },
    {
      title: "Yapay Zeka Destekli Optimizasyon",
      description: "Daha yüksek tıklanma potansiyeline sahip thumbnail ve başlık önerileri alın.",
      icon: <Zap className="h-6 w-6" />,
      category: "AI",
      to: "/stratejiler/ai-optimizasyon"
    },
    {
      title: "Kişiselleştirilmiş Stratejiler",
      description: "Kanalınızın mevcut performans verilerine göre özel olarak uyarlanmış stratejik öneriler alın.",
      icon: <Settings className="h-6 w-6" />,
      category: "Strateji",
      to: "/stratejiler/kisisel-stratejiler"
    },
    {
      title: "Rakip Analizi",
      description: "Rakiplerinizin performans metriklerini ve stratejilerini analiz ederek rekabet avantajı sağlayın.",
      icon: <Compass className="h-6 w-6" />,
      category: "Analiz",
      to: "/stratejiler/rakip-analizi"
    },
  ];

  return (
    <section className="py-16 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-beast-yellow px-3 py-1 text-sm">
              MrBeast'in Sırları
            </div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
              Başarıya Götüren Stratejiler
            </h2>
            <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Fazıl İşler'in analizleriyle şekillenen MrBeast stratejilerini keşfedin ve uygulayın.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-8">
          {strategies.map((strategy, index) => (
            <StrategyCard 
              key={index}
              title={strategy.title}
              description={strategy.description}
              icon={strategy.icon}
              category={strategy.category}
              to={strategy.to}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
