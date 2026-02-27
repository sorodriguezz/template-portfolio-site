"use client";

import { GlowCard, ProgressBar } from "@/components/atoms";
import { Monitor, Server, Cloud, Triangle, Database, Wrench, type LucideIcon } from "lucide-react";
import { type TechCategory } from "@/types";
import { useLanguage } from "@/context/LanguageContext";

const iconMap: Record<string, LucideIcon> = {
  Monitor,
  Server,
  Cloud,
  Triangle,
  Database,
  Wrench,
};

interface TechCategoryCardProps {
  category: TechCategory;
  index: number;
}

export function TechCategoryCard({ category, index }: TechCategoryCardProps) {
  const { t } = useLanguage();
  const Icon = iconMap[category.icon] || Monitor;
  const titleKey = category.id as keyof typeof t.techStack;
  const title = t.techStack[titleKey] || category.id;

  return (
    <GlowCard delay={index * 0.1}>
      <div className="flex items-center gap-3 mb-5">
        <div
          className="w-10 h-10 rounded-lg flex items-center justify-center"
          style={{ backgroundColor: `${category.color}20` }}
        >
          <Icon size={20} style={{ color: category.color }} />
        </div>
        <h3 className="text-lg font-bold text-text-primary">{title}</h3>
      </div>

      <div className="space-y-1">
        {category.items.map((item) => (
          <ProgressBar
            key={item.name}
            label={item.name}
            value={item.level}
            color={category.color}
          />
        ))}
      </div>
    </GlowCard>
  );
}
