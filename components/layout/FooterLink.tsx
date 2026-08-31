import Link from "next/link";

export function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="group/link inline-block text-white/70 transition-colors duration-200 hover:text-white focus-visible:text-white"
    >
      <span className="relative">
        {children}
        {/* Animated underline: grows from 0 to full width on hover/focus.
            Pure CSS transition (not JS-driven), so it's automatically
            shortened by the prefers-reduced-motion override in globals.css. */}
        <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-[var(--color-orange-400)] transition-[width] duration-300 ease-out group-hover/link:w-full group-focus-visible/link:w-full" />
      </span>
    </Link>
  );
}
