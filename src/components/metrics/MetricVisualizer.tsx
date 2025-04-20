
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MetricChart } from "./MetricChart";
import { mockVideoMetrics } from "@/data/mockMetrics";
import { useState } from "react";

export function MetricVisualizer() {
  const [activeTab, setActiveTab] = useState("views");

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Metrik Grafikleyici</CardTitle>
        <CardDescription>Metriklerinizi görsel olarak analiz edin</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="views" onValueChange={setActiveTab}>
          <TabsList className="mb-4">
            <TabsTrigger value="views">İzlenme</TabsTrigger>
            <TabsTrigger value="ctr">CTR</TabsTrigger>
            <TabsTrigger value="retention">İzleyici Tutma</TabsTrigger>
          </TabsList>
          
          <TabsContent value="views">
            <MetricChart 
              metrics={mockVideoMetrics}
              metric="views"
              title="Video İzlenmeleri"
              description="Videolarınızın toplam izlenme sayıları"
            />
          </TabsContent>

          <TabsContent value="ctr">
            <MetricChart 
              metrics={mockVideoMetrics}
              metric="ctr"
              title="Tıklama Oranı (CTR)"
              description="Videolarınızın tıklanma oranları"
            />
          </TabsContent>

          <TabsContent value="retention">
            <MetricChart 
              metrics={mockVideoMetrics}
              metric="retentionRate"
              title="İzleyici Tutma Oranı"
              description="Videolarınızın izleyici tutma oranları"
            />
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}
