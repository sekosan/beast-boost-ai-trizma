
import { ChannelMetrics } from "@/types/metrics";
import { MetricCard } from "@/components/ui/metric-card";
import { ChartBar, Star, Users, Activity } from "lucide-react";

interface ChannelMetricsGridProps {
  metrics: ChannelMetrics;
}

export function ChannelMetricsGrid({ metrics }: ChannelMetricsGridProps) {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <MetricCard
        title="Toplam İzlenme"
        value={metrics.totalViews.toLocaleString()}
        icon={<ChartBar className="text-primary" />}
        description="Son 28 gün"
      />
      <MetricCard
        title="Toplam Abone"
        value={metrics.totalSubscribers.toLocaleString()}
        icon={<Users className="text-secondary" />}
        description="Aktif aboneler"
      />
      <MetricCard
        title="Ortalama CTR"
        value={`%${metrics.averageCTR}`}
        icon={<Star className="text-yellow-500" />}
        description="Tıklanma oranı"
      />
      <MetricCard
        title="Ortalama İzlenme Süresi"
        value={`%${metrics.averageRetention}`}
        icon={<Activity className="text-green-500" />}
        description="İzleyici tutma oranı"
      />
    </div>
  );
}
