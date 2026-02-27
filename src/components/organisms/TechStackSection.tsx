"use client";

import { useLanguage } from "@/context/LanguageContext";
import { SectionTitle } from "@/components/atoms";
import { TechCategoryCard } from "@/components/molecules";
import { techStackData } from "@/config/techStack";

export function TechStackSection() {
  const { t } = useLanguage();

  return (
    <section id="tech-stack" className="py-12 sm:py-20 relative">
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-secondary/3 to-transparent" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <SectionTitle subtitle={t.techStack.subtitle} title={t.techStack.title} />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {techStackData.map((category, index) => (
            <TechCategoryCard key={category.id} category={category} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
