
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { AdminLayout } from "@/components/admin/AdminLayout";
import { MetricCard } from "@/components/ui/metric-card";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { Area, AreaChart, ResponsiveContainer, XAxis, YAxis } from "recharts";
import { Progress } from "@/components/ui/progress";
import { ChartBar, Target, Gauge } from "lucide-react";

const performanceData = [
  { date: "1 Mart", value: 45 },
  { date: "2 Mart", value: 52 },
  { date: "3 Mart", value: 49 },
  { date: "4 Mart", value: 63 },
  { date: "5 Mart", value: 58 },
  { date: "6 Mart", value: 72 },
  { date: "7 Mart", value: 85 },
];

const chartConfig = {
  performance: {
    label: "Performans",
    theme: {
      light: "#33C3F0",
      dark: "#33C3F0",
    },
  },
};

export default function Dashboard() {
  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold">Komuta Merkezi</h1>
          <div className="flex gap-4">
            <Target className="w-6 h-6 text-primary" />
            <ChartBar className="w-6 h-6 text-secondary" />
            <Gauge className="w-6 h-6 text-accent" />
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <MetricCard
            title="Toplam Strateji Puanı"
            value="8,562"
            description="Geçen haftaya göre +12.5%"
            icon={<Target className="text-primary" />}
            trend="up"
          />
          <MetricCard
            title="Aktif Kullanıcı Gücü"
            value="1,234"
            description="Son 30 gündeki aktif kullanıcı sayısı"
            icon={<ChartBar className="text-secondary" />}
          />
          <MetricCard
            title="Sistem Verimliliği"
            value="92%"
            description="Optimum seviyeye yakın"
            icon={<Gauge className="text-accent" />}
            trend="up"
          />
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Performans Analizi</CardTitle>
              <CardDescription>Son 7 günlük sistem performansı</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[300px]">
                <ChartContainer config={chartConfig}>
                  <AreaChart data={performanceData}>
                    <XAxis dataKey="date" />
                    <YAxis />
                    <ChartTooltip>
                      <ChartTooltipContent />
                    </ChartTooltip>
                    <Area
                      type="monotone"
                      dataKey="value"
                      name="performance"
                      stroke="var(--color-performance)"
                      fill="var(--color-performance)"
                      fillOpacity={0.2}
                    />
                  </AreaChart>
                </ChartContainer>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Sistem Durum Göstergeleri</CardTitle>
              <CardDescription>Kritik kaynakların durumu</CardDescription>
            </CardHeader>
            <CardContent className="space-y-8">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="font-medium">CPU Kullanımı</div>
                  <div className="text-sm text-muted-foreground">72%</div>
                </div>
                <Progress value={72} />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="font-medium">Bellek Kullanımı</div>
                  <div className="text-sm text-muted-foreground">45%</div>
                </div>
                <Progress value={45} />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="font-medium">Ağ Kapasitesi</div>
                  <div className="text-sm text-muted-foreground">89%</div>
                </div>
                <Progress value={89} />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </AdminLayout>
  );
}
