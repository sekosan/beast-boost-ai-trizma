
import { LineChart, BarChart3, PieChart, Percent, Clock, Eye } from "lucide-react";
import { MetricCard } from "@/components/ui/metric-card";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function MetricsSection() {
  return (
    <section className="py-16">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-beast-blue px-3 py-1 text-sm text-white">
              YouTube Metrikleri
            </div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
              Temel Performans Göstergeleri
            </h2>
            <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              MrBeast'in dikkatle takip ettiği en önemli YouTube metriklerini tanıyın.
            </p>
          </div>
        </div>

        <div className="mx-auto grid max-w-5xl grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <MetricCard
            title="Tıklanma Oranı (CTR)"
            value="8.4%"
            description="Son 28 günde %2.1 artış"
            icon={<Percent className="h-4 w-4" />}
            trend="up"
          />
          <MetricCard
            title="Ortalama İzlenme Süresi (AVD)"
            value="4:32"
            description="Son 28 günde 0:45 artış"
            icon={<Clock className="h-4 w-4" />}
            trend="up"
          />
          <MetricCard
            title="Ortalama İzlenme Yüzdesi (AVP)"
            value="42%"
            description="Son 28 günde %5 düşüş"
            icon={<Eye className="h-4 w-4" />}
            trend="down"
          />
        </div>

        <Card className="mx-auto max-w-5xl mt-8">
          <CardHeader>
            <CardTitle>Metrik Grafikleri</CardTitle>
            <CardDescription>
              Temel metriklerinizin zaman içindeki performansını izleyin
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="ctr" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="ctr">Tıklanma Oranı</TabsTrigger>
                <TabsTrigger value="avd">İzlenme Süresi</TabsTrigger>
                <TabsTrigger value="avp">İzlenme Yüzdesi</TabsTrigger>
              </TabsList>
              <TabsContent value="ctr">
                <div className="h-[300px] flex items-center justify-center p-6 bg-muted/20 rounded-lg mt-4">
                  <div className="text-center space-y-2">
                    <LineChart className="h-16 w-16 mx-auto text-beast-blue" />
                    <p className="text-sm text-muted-foreground">Tıklanma oranı grafiği burada görüntülenecek</p>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="avd">
                <div className="h-[300px] flex items-center justify-center p-6 bg-muted/20 rounded-lg mt-4">
                  <div className="text-center space-y-2">
                    <BarChart3 className="h-16 w-16 mx-auto text-beast-green" />
                    <p className="text-sm text-muted-foreground">İzlenme süresi grafiği burada görüntülenecek</p>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="avp">
                <div className="h-[300px] flex items-center justify-center p-6 bg-muted/20 rounded-lg mt-4">
                  <div className="text-center space-y-2">
                    <PieChart className="h-16 w-16 mx-auto text-beast-yellow" />
                    <p className="text-sm text-muted-foreground">İzlenme yüzdesi grafiği burada görüntülenecek</p>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
