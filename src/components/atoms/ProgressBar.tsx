"use client";

interface ProgressBarProps {
  value: number;
  color?: string;
  label: string;
  animated?: boolean;
}

export function ProgressBar({ value, color = "#00e5ff", label, animated = true }: ProgressBarProps) {
  return (
    <div className="mb-3">
      <div className="flex justify-between items-center mb-1">
        <span className="text-sm text-text-secondary">{label}</span>
        <span className="text-xs font-mono" style={{ color }}>
          {value}%
        </span>
      </div>
      <div className="w-full bg-border rounded-full h-1.5 overflow-hidden">
        <div
          className={`h-full rounded-full transition-all duration-1000 ease-out ${animated ? "animate-[grow_1.5s_ease-out]" : ""}`}
          style={{
            width: `${value}%`,
            backgroundColor: color,
            boxShadow: `0 0 10px ${color}40`,
          }}
        />
      </div>
    </div>
  );
}
