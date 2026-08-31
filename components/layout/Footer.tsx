import Link from "next/link";
import Image from "next/image";
import {
  navLinks,
  institution,
  contact,
  branches,
  businessHours,
  socialLinks,
} from "@/config/institution";
import { departments } from "@/data/departments";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { FooterLink } from "@/components/layout/FooterLink";
import { FooterAccordion } from "@/components/layout/FooterAccordion";
import { TrustSignals } from "@/components/layout/TrustSignals";
import { NewsletterForm } from "@/components/forms/NewsletterForm";
import { DeveloperCredit } from "@/components/layout/DeveloperCredit";

/**
 * UX DECISIONS — why this is "better" than a standard footer:
 *
 * 1. LAYOUT: an even 4-column grid treats every column as equally
 *    important, but they aren't — the brand/newsletter block is the most
 *    valuable real estate in the footer (it's the last conversion chance
 *    before someone leaves the site). The asymmetric `1.3fr / 0.9fr /
 *    0.9fr / 1fr` grid gives it more visual weight without resorting to a
 *    full mega-menu, which would be overkill for a 6-page site.
 *
 * 2. VISUAL DEPTH: a flat solid-color footer reads as an afterthought.
 *    The subtle diagonal gradient (green-950 → green-900) plus two
 *    blurred, low-opacity decorative shapes give the section depth
 *    without resorting to a busy background image — the content stays
 *    the focus.
 *
 * 3. CONVERSION: the newsletter signup is placed in its own full-width
 *    band ABOVE the link grid, not buried in a column below the fold of
 *    the footer itself. It's the first thing scanned when someone
 *    reaches the footer, which is exactly when they've decided to keep
 *    reading rather than leave.
 *
 * 4. TRUST: real, verifiable facts only (TVETA registration, department
 *    and branch counts, support channels) — deliberately no fabricated
 *    "as seen in" press logos or star ratings, since none were supplied.
 *    A trust signal that turns out to be fake does more damage than
 *    having none at all.
 *
 * 5. MOBILE UX: link columns collapse into native <details> accordions
 *    below `sm` instead of just stacking five full lists vertically —
 *    on a 320px phone, a fully-expanded 4-column footer is 15+ screens
 *    of scrolling. Accordions let visitors open only what they need.
 *
 * 6. MICRO-INTERACTIONS: every link gets an animated underline that
 *    grows from the left on hover/focus (see FooterLink) — a small,
 *    consistent signal of interactivity that a plain color change on
 *    hover doesn't give you. All motion respects `prefers-reduced-motion`
 *    (handled globally in globals.css and via next/motion's MotionConfig
 *    in the root layout).
 */
export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-[var(--color-green-950)] to-[var(--color-green-900)] text-white/80">
      {/* Decorative depth — subtle, blurred, aria-hidden. Never affects
          layout or reading order; purely a glassmorphism-adjacent visual
          cue that this section has dimension. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full bg-[var(--color-teal-500)]/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 -right-24 h-[28rem] w-[28rem] rounded-full bg-[var(--color-orange-500)]/10 blur-3xl"
      />

      <Container className="relative">
        {/* Newsletter band */}
        <Reveal>
          <div className="flex flex-col gap-6 border-b border-white/10 py-14 lg:flex-row lg:items-center lg:justify-between lg:gap-12">
            <div className="max-w-md">
              <h2 className="text-2xl font-semibold text-white md:text-3xl">
                Stay in the loop
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-white/60">
                Get updates on new intakes, courses and events at {institution.shortName}.
                No spam — unsubscribe anytime.
              </p>
            </div>
            <NewsletterForm />
          </div>
        </Reveal>

        {/* Trust signals */}
        <Reveal delay={0.05}>
          <TrustSignals />
        </Reveal>

        {/* Mega grid — asymmetric, brand column weighted heavier */}
        <div className="grid grid-cols-1 gap-x-10 py-4 sm:grid-cols-2 lg:grid-cols-[1.3fr_0.9fr_0.9fr_1fr] lg:gap-y-0 lg:py-14">
          <div className="col-span-full py-6 sm:col-span-2 sm:py-10 lg:col-span-1 lg:py-0">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/logo/bbti-logo.png"
                alt="Berlin Business Training Institute (BBTI) logo"
                width={48}
                height={48}
                className="h-12 w-12 object-contain"
              />
              <span className="font-display text-sm font-bold leading-tight text-white">
                Berlin Business
                <br />
                Training Institute
              </span>
            </Link>
            <p className="mt-4 text-sm italic text-[var(--color-orange-400)]">
              &ldquo;{institution.tagline}&rdquo;
            </p>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/60">
              {institution.description}
            </p>
            {socialLinks.length > 0 && (
              <div className="mt-5 flex gap-4">
                {socialLinks.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    className="text-xs text-white/60 underline underline-offset-4 transition-colors hover:text-white"
                  >
                    {s.label}
                  </a>
                ))}
              </div>
            )}
          </div>

          <FooterAccordion title="Quick Links">
            <ul className="space-y-2.5 text-sm">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <FooterLink href={link.href}>{link.label}</FooterLink>
                </li>
              ))}
            </ul>
          </FooterAccordion>

          <FooterAccordion title="Departments">
            <ul className="space-y-2.5 text-sm">
              {departments.map((d) => (
                <li key={d.slug}>
                  <FooterLink href={`/departments/${d.slug}`}>{d.name}</FooterLink>
                </li>
              ))}
            </ul>
          </FooterAccordion>

          <FooterAccordion title="Contact">
            <ul className="space-y-2.5 text-sm text-white/70">
              <li>{contact.phone}</li>
              <li>{contact.email}</li>
              <li>{contact.location}</li>
            </ul>
            <p className="mt-5 mb-2 text-xs font-semibold uppercase tracking-wide text-white/50">
              Branches
            </p>
            <p className="text-sm text-white/70">{branches.join(" · ")}</p>
            <p className="mt-5 mb-2 text-xs font-semibold uppercase tracking-wide text-white/50">
              Business Hours
            </p>
            <ul className="space-y-1 text-sm text-white/70">
              {businessHours.map((h) => (
                <li key={h.days} className="flex justify-between gap-4">
                  <span>{h.days}</span>
                  <span>{h.time}</span>
                </li>
              ))}
            </ul>
          </FooterAccordion>
        </div>
      </Container>

      <div className="relative border-t border-white/10 py-6">
        <Container className="flex flex-col items-center justify-between gap-3 text-xs text-white/50 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {institution.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <p>
              {institution.registration.label}: {institution.registration.number}
            </p>
            <span className="hidden h-3 w-px bg-white/20 sm:block" aria-hidden="true" />
            <DeveloperCredit />
          </div>
        </Container>
      </div>
    </footer>
  );
}
