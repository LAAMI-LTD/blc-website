import { cn } from "@/lib/utils";

export function Badge({
  children,
  className,
  tone = "neutral",
}: {
  children: React.ReactNode;
  className?: string;
  tone?: "neutral" | "gold" | "navy";
}) {
  const tones = {
    neutral: "bg-[var(--color-paper-dim)] text-[var(--color-ink-soft)] border-[var(--color-line)]",
    gold: "bg-[var(--color-gold-100)] text-[var(--color-gold-600)] border-[var(--color-gold-300)]",
    navy: "bg-[var(--color-navy-900)] text-white border-[var(--color-navy-900)]",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium",
        tones[tone],
        className
      )}
    >
      {children}
    </span>
  );
}