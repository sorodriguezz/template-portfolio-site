"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/atoms";

interface BlogCardProps {
  title: string;
  excerpt: string;
  date: string;
  tags: string[];
  readTime: number;
  readMoreLabel: string;
  minReadLabel: string;
  slug: string;
  index: number;
  onReadMore: (slug: string) => void;
}

export function BlogCard({
  title,
  excerpt,
  date,
  tags,
  readTime,
  readMoreLabel,
  minReadLabel,
  slug,
  index,
  onReadMore,
}: BlogCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="bg-bg-card border border-border rounded-xl p-6 hover:border-primary/30 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,229,255,0.08)] card-shine group cursor-pointer"
      onClick={() => onReadMore(slug)}
    >
      {/* Date & Read Time */}
      <div className="flex items-center justify-between mb-3">
        <span className="text-xs font-mono text-text-secondary">{date}</span>
        <span className="text-xs font-mono text-primary">
          {readTime} {minReadLabel}
        </span>
      </div>

      {/* Title */}
      <h3 className="text-lg font-bold text-text-primary mb-3 group-hover:text-primary transition-colors line-clamp-2">
        {title}
      </h3>

      {/* Excerpt */}
      <p className="text-sm text-text-secondary mb-4 line-clamp-3">{excerpt}</p>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5 mb-4">
        {tags.map((tag) => (
          <Badge key={tag} text={tag} variant="tag" />
        ))}
      </div>

      {/* Read More */}
      <span className="text-xs font-mono text-primary group-hover:underline flex items-center gap-1">
        {readMoreLabel} →
      </span>
    </motion.article>
  );
}
