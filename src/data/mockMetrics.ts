
import { VideoMetrics, ChannelMetrics } from "@/types/metrics";

export const mockChannelMetrics: ChannelMetrics = {
  totalViews: 1500000,
  totalSubscribers: 50000,
  averageCTR: 4.8,
  averageRetention: 45,
  lastUpdated: new Date().toISOString(),
};

export const mockVideoMetrics: VideoMetrics[] = [
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
