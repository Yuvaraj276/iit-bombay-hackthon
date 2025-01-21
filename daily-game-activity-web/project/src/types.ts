export interface GameSession {
  startTime: Date;
  duration: number;
  breaks: number;
  genre: string;
}

export interface DailyStats {
  totalPlayTime: number;
  breaksCount: number;
  focusScore: number;
}

export interface GameAnalytics {
  dailyStats: DailyStats[];
  weeklyPlaytime: number;
  recommendedBreaks: number;
}