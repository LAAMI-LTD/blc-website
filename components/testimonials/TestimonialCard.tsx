import Image from "next/image";
import { Quote, User } from "lucide-react";
import { Testimonial } from "@/types";
import { Badge } from "@/components/ui/Badge";

export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="flex h-full flex-col rounded-[var(--radius-lg)] border border-[var(--color-line)] bg-white p-6 shadow-[var(--shadow-sm)]">
      <Quote size={22} className="text-[var(--color-orange-500)]" />
      <p className="mt-4 flex-1 text-sm leading-relaxed text-[var(--color-ink)]">
        &ldquo;{testimonial.quote}&rdquo;
      </p>
      <div className="mt-5 flex items-center gap-3 border-t border-[var(--color-line)] pt-4">
        {testimonial.hasPhoto && testimonial.photoFile ? (
          <Image
            src={`/testimonials/${testimonial.photoFile}`}
            alt={testimonial.name}
            width={40}
            height={40}
            className="h-10 w-10 rounded-full object-cover"
          />
        ) : (
          <div
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--color-paper-dim)] text-muted-foreground"
            aria-hidden="true"
          >
            <User size={18} strokeWidth={1.5} />
          </div>
        )}
        <div className="flex-1">
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
