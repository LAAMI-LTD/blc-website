import Link from "next/link";
import Image from "next/image";
import { Languages, Monitor, Briefcase, HeartPulse, Sparkles, ArrowRight } from "lucide-react";
import { Department } from "@/types";

const icons = { Languages, Monitor, Briefcase, HeartPulse, Sparkles };

/**
 * Full-card imagery department card: the image (or, until real
 * institutional photography is supplied, a branded gradient + icon
 * treatment) covers the entire card. Name and CTA sit in a
 * high-contrast panel pinned to the bottom, over a gradient scrim so
 * they stay readable regardless of what's behind them.
 *
 * The whole card is a single <Link> (not a nested link inside a div)
 * so the entire surface — not just the "Explore Courses" text — is
 * clickable and keyboard-focusable, with one clear focus ring.
 */
export function DepartmentCard({ department }: { department: Department }) {
  const Icon = icons[department.iconName];

  return (
    <Link
      href={`/departments/${department.slug}`}
      className="group relative block aspect-[4/5] overflow-hidden rounded-[var(--radius-lg)] border border-[var(--color-line)] shadow-[var(--shadow-sm)] transition-shadow duration-200 hover:shadow-[var(--shadow-lg)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)]"
    >
      {department.hasImage && department.image ? (
        <Image
          src={`/departments/${department.image}`}
          alt=""
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
        />
      ) : (
        // Fallback: a branded gradient with a large, low-opacity icon —
        // deliberately not a fabricated "stock photo" of the institution.
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[var(--color-green-900)] to-[var(--color-green-950)]">
          <Icon size={96} className="text-white/10" aria-hidden="true" />
        </div>
      )}

      {/* Gradient scrim — ensures the name stays readable over any image. */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent"
      />

      <div className="absolute inset-x-0 bottom-0 flex flex-col gap-2 p-5">
        <div className="flex h-9 w-9 items-center justify-center rounded-[var(--radius-md)] bg-white/15 text-white backdrop-blur-sm">
          <Icon size={18} aria-hidden="true" />
        </div>
        <h3 className="text-lg font-semibold text-white">{department.name}</h3>
        <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--color-orange-400)] transition-all group-hover:gap-2.5">
          Explore Courses
          <ArrowRight size={16} aria-hidden="true" />
        </span>
      </div>
    </Link>
  );
}
