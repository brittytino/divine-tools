export type Domain = "web" | "mobile" | "ai" | "iot" | "cybersec" | "cloud" | "data" | "backend";

export type FilterOption = Domain[];

export type SortOption = "trending" | "views" | "random";

export interface Project {
  title: string;
  description: string;
  stack: string[];
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  teamSize: number;
  views: number;
  trending: boolean;
  domain: Domain;
  duration?: string;
  complexity?: string;
  features?: string[];
}

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  image: string;
  text: string;
}

export interface DynamicStat {
  icon: any;
  label: string;
  value: string;
}

export interface PopupMessage {
  type: "success" | "error" | "info";
  message: string;
} 