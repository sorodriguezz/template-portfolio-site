"use client";

import { useLanguage } from "@/context/LanguageContext";
import { siteConfig } from "@/config/site";
import { Terminal, Github, Twitter, Linkedin } from "lucide-react";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-border py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
          <div className="flex items-center gap-2 text-primary font-bold font-mono text-sm">
            <Terminal size={16} />
            <span>{siteConfig.name}</span>
          </div>

          <p className="text-text-secondary text-xs font-mono">
            © {new Date().getFullYear()} {t.footer.derechos}
          </p>

          <div className="flex gap-4">
            <a
              href={siteConfig.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary hover:text-primary transition-colors"
            >
              <Github size={18} />
            </a>
            <a
              href={siteConfig.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary hover:text-primary transition-colors"
            >
              <Twitter size={18} />
            </a>
            <a
              href={siteConfig.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary hover:text-primary transition-colors"
            >
              <Linkedin size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
