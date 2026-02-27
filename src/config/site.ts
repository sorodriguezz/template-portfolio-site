import { type SiteConfig } from "@/types";

export const siteConfig: SiteConfig = {
  name: "DEV.ARCHITECT",
  title: "Full Stack Developer & Software Architect",
  email: "hello@devarchitect.io",
  github: "https://github.com/usuario",
  linkedin: "https://linkedin.com/in/usuario",
  twitter: "https://twitter.com/usuario",
};

export const statsData = [
  { value: "8+", key: "experiencia" as const },
  { value: "50+", key: "proyectos" as const },
  { value: "100%", key: "satisfaccion" as const },
  { value: "24/7", key: "uptime" as const },
];

export const expertiseIcons = ["code", "cloud", "server", "shield"] as const;
