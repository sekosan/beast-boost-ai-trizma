
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { LineChart, BarChart, PieChart, Camera, Star, TrendingUp, Users, Zap, Settings, Compass, Lock } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { useToast } from "@/hooks/use-toast";

const basicTools = [
  {
    title: "Temel Metrik İzleyici",
    description: "Kanalınızın CTR, AVD ve AVP gibi temel metriklerini takip edin.",
    icon: <LineChart className="h-6 w-6 text-white" />,
    features: [
      "YouTube Analytics bağlantısı",
      "Metrik trend analizi",
      "Performans karşılaştırmaları",
      "Özelleştirilebilir panolar",
    ],
    status: "active" as const,
    bgColor: "bg-beast-blue",
  },
  {
    title: "Metrik Grafikleyici",
    description: "Metriklerinizi zaman içinde gösteren anlaşılır grafikler oluşturun.",
    icon: <BarChart className="h-6 w-6 text-white" />,
    features: [
      "İnteraktif zaman serisi grafikleri",
      "Çoklu metrik karşılaştırma",
      "İhraç edilebilir raporlar",
      "Özel zaman aralıkları",
    ],
    status: "active" as const,
    bgColor: "bg-beast-green",
  },
  {
    title: "Strateji Bilgi Bankası",
    description: "MrBeast stratejileri ve prensipleri hakkında kapsamlı bilgiler.",
    icon: <PieChart className="h-6 w-6 text-white" />,
    features: [
      "Detaylı strateji açıklamaları",
      "Uygulama adımları",
      "Örnek vaka analizleri",
      "İndirilebilir kılavuzlar",
    ],
    status: "active" as const,
    bgColor: "bg-purple-500",
  },
  {
    title: "Thumbnail Optimizasyonu",
    description: "Thumbnail'lerinizi MrBeast formülüne göre optimize edin.",
    icon: <Camera className="h-6 w-6 text-white" />,
    features: [
      "Thumbnail analizi",
      "A/B testi",
      "Renk ve kompozisyon önerileri",
      "Tıklama oranı tahminleri",
    ],
    status: "coming" as const,
    bgColor: "bg-amber-500",
  },
  {
    title: "İzleyici Sadakati Analizi",
    description: "İzleyicilerinizin ilgi ve sadakat seviyelerini ölçümleyin.",
    icon: <Users className="h-6 w-6 text-white" />,
    features: [
      "Seyretme alışkanlıkları analizi",
      "İzleyici segmentasyonu",
      "Kitle sadakat puanları",
      "Etkileşim tahminleri",
    ],
    status: "development" as const,
    bgColor: "bg-cyan-500",
  },
  {
    title: "Trend Analiz Aracı",
    description: "En güncel trendleri keşfedin ve içerik fikirleri oluşturun.",
    icon: <TrendingUp className="h-6 w-6 text-white" />,
    features: [
      "Gerçek zamanlı trend analizi",
      "Niş odaklı içerik önerileri",
      "Trend tahminleri",
      "Rakip trend analizi",
    ],
    status: "development" as const,
    bgColor: "bg-rose-500",
  },
];

interface ToolCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  features: string[];
  status: "active" | "coming" | "development";
  bgColor: string;
}

function ToolCard({ title, description, icon, features, status, bgColor }: ToolCardProps) {
  const { toast } = useToast();
  
  const handleToolAccess = () => {
    if (status === "active") {
      toast({
        title: "Araca Erişim Sağlandı",
        description: `${title} aracına erişim sağlandı.`
      });
    } else {
      toast({
        title: "Bu Araç Henüz Mevcut Değil",
        description: status === "coming" ? "Bu araç yakında kullanıma sunulacaktır." : "Bu araç şu anda geliştirme aşamasındadır.",
      });
    }
  };

  return (
    <Card className="overflow-hidden transition-all hover:shadow-md hover:border-beast-blue/20">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-center">
          <div className={`p-2 ${bgColor} rounded-md`}>
            {icon}
          </div>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Badge className={status === "active" ? "bg-green-500 hover:bg-green-600" : 
                              status === "coming" ? "bg-amber-500 hover:bg-amber-600" : 
                              "bg-blue-500 hover:bg-blue-600"}>
                  {status === "active" ? "Aktif" : status === "coming" ? "Yakında" : "Geliştirme"}
                </Badge>
              </TooltipTrigger>
              <TooltipContent>
                {status === "active" 
                  ? "Bu araç şu anda kullanılabilir" 
                  : status === "coming" 
                  ? "Bu araç yakında kullanıma sunulacaktır" 
                  : "Bu araç geliştirme aşamasındadır"}
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
        <CardTitle className="mt-4">{title}</CardTitle>
        <CardDescription>
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="text-sm text-muted-foreground">
          <ul className="space-y-2">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <span className="text-beast-blue mr-2">•</span> {feature}
              </li>
            ))}
          </ul>
        </div>
      </CardContent>
      <CardFooter>
        <Button 
          className={`w-full ${status === "active" 
            ? "bg-gradient-to-r from-beast-blue to-beast-green hover:from-beast-darkblue hover:to-beast-darkgreen text-white" 
            : "bg-muted"}`} 
          disabled={status !== "active"}
          onClick={handleToolAccess}
        >
          {status !== "active" && <Lock className="h-4 w-4 mr-2" />}
          {status === "active" ? "Araca Eriş" : status === "coming" ? "Yakında" : "Geliştiriliyor"}
        </Button>
      </CardFooter>
    </Card>
  );
}

export function ToolsGrid() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {basicTools.map((tool, index) => (
        <ToolCard key={index} {...tool} />
      ))}
    </div>
  );
}
