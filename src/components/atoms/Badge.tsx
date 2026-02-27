"use client";

import { type ProjectStatus } from "@/types";

interface BadgeProps {
  text: string;
  variant?: "tech" | "status" | "tag";
  status?: ProjectStatus;
  color?: string;
}

const statusColors: Record<ProjectStatus, string> = {
  deployed: "bg-green-500/20 text-green-400 border-green-500/30",
  stable: "bg-blue-500/20 text-blue-400 border-blue-500/30",
  legacy: "bg-gray-500/20 text-gray-400 border-gray-500/30",
  development: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
};

export function Badge({ text, variant = "tech", status, color }: BadgeProps) {
  if (variant === "status" && status) {
    return (
      <span
        className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold border uppercase tracking-wider ${statusColors[status]}`}
      >
        <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
        {text}
      </span>
    );
  }

  if (variant === "tag") {
    return (
      <span className="inline-block px-3 py-1 rounded-full text-xs font-mono bg-primary/10 text-primary border border-primary/20">
        {text}
      </span>
    );
  }

  return (
    <span
      className="inline-block px-2.5 py-1 rounded text-xs font-mono font-bold tracking-wider"
      style={{
        backgroundColor: color ? `${color}20` : "rgba(0, 229, 255, 0.15)",
        color: color || "#00e5ff",
      }}
    >
      {text}
    </span>
  );
}
