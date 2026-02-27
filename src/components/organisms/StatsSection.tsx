"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { AnimatedCounter } from "@/components/atoms";
import { statsData } from "@/config/site";

export function StatsSection() {
  const { t } = useLanguage();

  return (
    <section className="py-12 sm:py-20 relative">
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-primary/3 to-transparent" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8">
          {statsData.map((stat, index) => (
            <motion.div
              key={stat.key}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <AnimatedCounter
                value={stat.value}
                label={t.stats[stat.key]}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
