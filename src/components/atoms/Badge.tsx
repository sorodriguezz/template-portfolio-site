"use client";

import { type ProjectStatus } from "@/types";

interface BadgeProps {
  text: string;
  variant?: "tech" | "status" | "tag";
  status?: ProjectStatus;
  color?: string;
}

const statusColors: Record<ProjectStatus, string> = {
  deployed: "text-green-400 border-green-500/40",
  stable: "text-blue-400 border-blue-500/40",
  legacy: "text-gray-400 border-gray-500/40",
  development: "text-yellow-400 border-yellow-500/40",
};

export function Badge({ text, variant = "tech", status, color }: BadgeProps) {
  if (variant === "status" && status) {
    return (
      <span
        className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-mono font-bold border uppercase tracking-widest bg-bg-dark/90 backdrop-blur-xl shadow-2xl ${statusColors[status]}`}
      >
        <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse shadow-[0_0_8px_currentColor]" />
        {text}
      </span>
    );
  }

  if (variant === "tag") {
    return (
      <span className="inline-block px-3 py-1 rounded-full text-[10px] font-mono bg-primary/10 text-primary border border-primary/20 backdrop-blur-xs">
        {text}
      </span>
    );
  }

  return (
    <span
      className="inline-block px-2.5 py-1 rounded text-[10px] font-mono font-bold tracking-wider backdrop-blur-xs border border-white/5"
      style={{
        backgroundColor: color ? `${color}20` : "rgba(0, 229, 255, 0.15)",
        color: color || "#00e5ff",
      }}
    >
      {text}
    </span>
  );
}
