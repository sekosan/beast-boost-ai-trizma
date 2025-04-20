
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { LineChart, BarChart, PieChart, Camera, Star, TrendingUp, Users, Zap, Settings, Compass, Lock } from "lucide-react";

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
  },
];

interface ToolCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  features: string[];
  status: "active" | "coming" | "development";
}

function ToolCard({ title, description, icon, features, status }: ToolCardProps) {
  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between items-center">
          <div className="p-2 bg-beast-blue rounded-md">
            {icon}
          </div>
          <Badge>{status === "active" ? "Aktif" : status === "coming" ? "Yakında" : "Geliştirme"}</Badge>
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
              <li key={index}>• {feature}</li>
            ))}
          </ul>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full" disabled={status !== "active"}>
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
