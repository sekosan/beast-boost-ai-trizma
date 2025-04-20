
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MetricCard } from "@/components/ui/metric-card";
import { ChartBar, Star, Users, Activity, TrendingUp } from "lucide-react";
import { useState } from "react";
import { VideoMetrics, ChannelMetrics } from "@/types/metrics";

const mockChannelMetrics: ChannelMetrics = {
  totalViews: 1500000,
  totalSubscribers: 50000,
  averageCTR: 4.8,
  averageRetention: 45,
  lastUpdated: new Date().toISOString(),
};

const mockVideoMetrics: VideoMetrics[] = [
  {
    id: "1",
    title: "Influencer'lara 100.000 TL Dağıttım!",
    views: 850000,
    ctr: 6.2,
    averageViewDuration: 8.5,
    retentionRate: 52,
    likes: 45000,
    comments: 3200,
    publishDate: "2024-04-15",
  },
  {
    id: "2",
    title: "24 Saat Boyunca Yemek Yaptım",
    views: 620000,
    ctr: 5.8,
    averageViewDuration: 7.2,
    retentionRate: 48,
    likes: 32000,
    comments: 2800,
    publishDate: "2024-04-10",
  },
];

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
            <div className="rounded-md border">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b bg-muted/50">
                    <th className="py-3 px-4 text-left">Video Başlığı</th>
                    <th className="py-3 px-4 text-left">İzlenme</th>
                    <th className="py-3 px-4 text-left">CTR</th>
                    <th className="py-3 px-4 text-left">Ort. İzlenme</th>
                    <th className="py-3 px-4 text-left">İzleyici Tutma</th>
                    <th className="py-3 px-4 text-left">Beğeni</th>
                    <th className="py-3 px-4 text-left">Yorum</th>
                  </tr>
                </thead>
                <tbody>
                  {mockVideoMetrics.map((video) => (
                    <tr key={video.id} className="border-b">
                      <td className="py-3 px-4 font-medium">{video.title}</td>
                      <td className="py-3 px-4">{video.views.toLocaleString()}</td>
                      <td className="py-3 px-4">%{video.ctr}</td>
                      <td className="py-3 px-4">{video.averageViewDuration} dk</td>
                      <td className="py-3 px-4">%{video.retentionRate}</td>
                      <td className="py-3 px-4">{video.likes.toLocaleString()}</td>
                      <td className="py-3 px-4">{video.comments.toLocaleString()}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}
