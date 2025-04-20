
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";
import { VideoMetricsTable } from "./VideoMetricsTable";
import { ChannelMetricsGrid } from "./ChannelMetricsGrid";
import { mockChannelMetrics, mockVideoMetrics } from "@/data/mockMetrics";

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
            <ChannelMetricsGrid metrics={mockChannelMetrics} />
          </TabsContent>

          <TabsContent value="videos">
            <VideoMetricsTable metrics={mockVideoMetrics} />
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}
