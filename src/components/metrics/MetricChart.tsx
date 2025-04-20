
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartContainer, ChartTooltip } from "@/components/ui/chart";
import { Line, LineChart, ResponsiveContainer, XAxis, YAxis } from "recharts";
import { VideoMetrics } from "@/types/metrics";

interface MetricChartProps {
  metrics: VideoMetrics[];
  metric: "views" | "ctr" | "retentionRate";
  title: string;
  description: string;
}

export function MetricChart({ metrics, metric, title, description }: MetricChartProps) {
  const data = metrics.map((video) => ({
    name: video.title.substring(0, 20) + "...",
    value: video[metric],
  }));

  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <XAxis dataKey="name" />
              <YAxis />
              <ChartTooltip />
              <Line type="monotone" dataKey="value" stroke="#2563eb" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
