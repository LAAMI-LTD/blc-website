import { cn } from "@/lib/utils";

export function Badge({
  children,
  className,
  tone = "neutral",
}: {
  children: React.ReactNode;
  className?: string;
  tone?: "neutral" | "accent" | "primary";
}) {
  const tones = {
    neutral: "bg-[var(--color-paper-dim)] text-[var(--color-ink-soft)] border-[var(--color-line)]",
    accent: "bg-[var(--color-orange-100)] text-[var(--color-orange-600)] border-[var(--color-orange-400)]",
    primary: "bg-[var(--color-green-900)] text-white border-[var(--color-green-900)]",
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