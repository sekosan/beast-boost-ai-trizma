
import { VideoMetrics } from "@/types/metrics";

interface VideoMetricsTableProps {
  metrics: VideoMetrics[];
}

export function VideoMetricsTable({ metrics }: VideoMetricsTableProps) {
  return (
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
          {metrics.map((video) => (
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
  );
}
