
export type VideoMetrics = {
  id: string;
  title: string;
  views: number;
  ctr: number;
  averageViewDuration: number;
  retentionRate: number;
  likes: number;
  comments: number;
  publishDate: string;
};

export type ChannelMetrics = {
  totalViews: number;
  totalSubscribers: number;
  averageCTR: number;
  averageRetention: number;
  lastUpdated: string;
};
