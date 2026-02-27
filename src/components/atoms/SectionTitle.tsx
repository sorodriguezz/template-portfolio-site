"use client";

import { motion } from "framer-motion";

interface SectionTitleProps {
  subtitle: string;
  title: string;
  centered?: boolean;
}

export function SectionTitle({ subtitle, title, centered = true }: SectionTitleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`mb-12 ${centered ? "text-center" : ""}`}
    >
      <span className="text-primary font-mono text-sm tracking-[0.3em] uppercase block mb-3">
        {subtitle}
      </span>
      <h2 className="text-3xl md:text-4xl font-bold text-text-primary">{title}</h2>
    </motion.div>
  );
}
