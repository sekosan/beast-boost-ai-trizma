
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MetricCard } from "@/components/ui/metric-card";
import { ChartBar, Star, Users, Activity } from "lucide-react";
import { useState } from "react";
import { VideoMetrics, ChannelMetrics } from "@/types/metrics";

const mockChannelMetrics: ChannelMetrics = {
  totalViews: 1500000,
  totalSubscribers: 50000,
  averageCTR: 4.8,
  averageRetention: 45,
  lastUpdated: new Date().toISOString(),
};

export function MetricTracker() {
  const [activeTab, setActiveTab] = useState("channel");

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Temel Metrik İzleyici</CardTitle>
        <CardDescription>Kanalınızın performans metriklerini takip edin</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="channel" onValueChange={setActiveTab}>
          <TabsList className="mb-4">
            <TabsTrigger value="channel">Kanal Metrikleri</TabsTrigger>
            <TabsTrigger value="videos">Video Metrikleri</TabsTrigger>
          </TabsList>
          
          <TabsContent value="channel" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <MetricCard
                title="Toplam İzlenme"
                value={mockChannelMetrics.totalViews.toLocaleString()}
                icon={<ChartBar className="text-primary" />}
                description="Son 28 gün"
              />
              <MetricCard
                title="Toplam Abone"
                value={mockChannelMetrics.totalSubscribers.toLocaleString()}
                icon={<Users className="text-secondary" />}
                description="Aktif aboneler"
              />
              <MetricCard
                title="Ortalama CTR"
                value={`%${mockChannelMetrics.averageCTR}`}
                icon={<Star className="text-yellow-500" />}
                description="Tıklanma oranı"
              />
              <MetricCard
                title="Ortalama İzlenme Süresi"
                value={`%${mockChannelMetrics.averageRetention}`}
                icon={<Activity className="text-green-500" />}
                description="İzleyici tutma oranı"
              />
            </div>
          </TabsContent>

          <TabsContent value="videos">
            <div className="text-center p-8 text-muted-foreground">
              <p>Video metrikleri yakında eklenecek</p>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}
