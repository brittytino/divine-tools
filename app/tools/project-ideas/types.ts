export interface Domain {
  id: string;
  name: string;
  icon: string;
  description: string;
  trending: boolean;
  trendingMessage?: string;
}

export type Project = {
  title: string;
  description: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  domain: string;
  stack: string[];
  features?: string[];
  duration?: string;
  teamSize: number;
  complexity?: string;
  views: number;
  trending: boolean;
};

export interface Testimonial {
  name: string;
  text: string;
  college: string;
  rating: number;
  avatar: string;
  image?: string;
}

export interface DynamicStat {
  label: string;
  value: number;
  suffix?: string;
  icon: any;
}

export interface PopupMessage {
  text: string;
  type: 'tip' | 'success' | 'trending';
  icon: string;
}

export type SortOption = "trending" | "popular" | "Beginner" | "Advanced";
export type FilterOption = string[]; 