import { ChevronDown } from "lucide-react";

export function FooterAccordion({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="border-b border-white/10 sm:border-none">
      {/* Desktop / tablet: plain static column — a Server Component, no
          hydration cost, no risk of a client/server mismatch flash. */}
      <div className="hidden sm:block">
        <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-[var(--color-orange-400)]">
          {title}
        </h3>
        {children}
      </div>

      {/* Mobile: native <details>/<summary> accordion. Real accessibility
          win over a JS-driven accordion — keyboard operable and
          screen-reader announced via native semantics, no ARIA to get
          wrong, and it still works if JavaScript fails to load. */}
      <details className="group py-4 sm:hidden">
        <summary className="flex cursor-pointer list-none items-center justify-between text-sm font-semibold uppercase tracking-wide text-white [&::-webkit-details-marker]:hidden">
          <span className="text-[var(--color-orange-400)]">{title}</span>
          <ChevronDown
            size={16}
            className="text-white/60 transition-transform duration-200 group-open:rotate-180"
            aria-hidden="true"
          />
        </summary>
        <div className="mt-3">{children}</div>
      </details>
    </div>
  );
}
