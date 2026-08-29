import { Quote } from "lucide-react";
import { Testimonial } from "@/types";
import { Badge } from "@/components/ui/Badge";

export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="flex h-full flex-col rounded-[var(--radius-lg)] border border-[var(--color-line)] bg-white p-6 shadow-[var(--shadow-sm)]">
      <Quote size={22} className="text-[var(--color-orange-500)]" />
      <p className="mt-4 flex-1 text-sm leading-relaxed text-[var(--color-ink)]">
        &ldquo;{testimonial.quote}&rdquo;
      </p>
      <div className="mt-5 flex items-center justify-between gap-3 border-t border-[var(--color-line)] pt-4">
        <div>
          <p className="text-sm font-semibold text-[var(--color-green-950)]">{testimonial.name}</p>
          <p className="text-xs text-muted-foreground">
            {testimonial.course}
            {testimonial.graduationYear ? ` · ${testimonial.graduationYear}` : ""}
          </p>
        </div>
        {testimonial.isSample && <Badge>Sample</Badge>}
      </div>
    </div>
  );
}
