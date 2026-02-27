"use client";

interface AnimatedCounterProps {
  value: string;
  label: string;
}

export function AnimatedCounter({ value, label }: AnimatedCounterProps) {
  return (
    <div className="text-center">
      <div className="text-4xl md:text-5xl font-bold text-text-primary mb-2 font-mono glow-text">
        {value}
      </div>
      <div className="text-xs md:text-sm text-text-secondary font-mono uppercase tracking-widest">
        {label}
      </div>
    </div>
  );
}
