import { type Language } from "@/config/translations";

export interface LocalizedString {
  es: string;
  en: string;
}

export interface LocalizedStringArray {
  es: string[];
  en: string[];
}

export type ProjectStatus = "deployed" | "stable" | "legacy" | "development";

export interface ProjectData {
  id: string;
  name: string;
  version: string;
  architecture: LocalizedString;
  architectureDetail: LocalizedString;
  techStack: string[];
  status: ProjectStatus;
  lastUpdate: LocalizedString;
  image: string;
  description: LocalizedString;
  fullDescription: LocalizedString;
  features: LocalizedStringArray;
  challenges: LocalizedStringArray;
  githubUrl: string;
  demoUrl?: string;
  icon: string;
  color: string;
}

export interface TechItem {
  name: string;
  level: number;
}

export interface TechCategory {
  id: string;
  icon: string;
  color: string;
  items: TechItem[];
}

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  tags: string[];
  readTime: number;
  image?: string;
  content: string;
  language: Language;
}

export interface SiteConfig {
  name: string;
  title: string;
  email: string;
  github: string;
  linkedin: string;
  twitter: string;
}
