"use client";

import { motion } from "framer-motion";
import { type ReactNode } from "react";

interface GlowCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  hoverScale?: boolean;
}

export function GlowCard({ children, className = "", delay = 0, hoverScale = true }: GlowCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={hoverScale ? { scale: 1.02, y: -5 } : undefined}
      className={`bg-bg-card border border-border rounded-xl p-6 transition-all duration-300 hover:border-primary/30 hover:shadow-[0_0_30px_rgba(0,229,255,0.08)] card-shine ${className}`}
    >
      {children}
    </motion.div>
  );
}
