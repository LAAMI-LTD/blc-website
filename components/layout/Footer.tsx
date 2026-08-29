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

export function Footer() {
  return (
    <footer className="border-t border-[var(--color-line)] bg-[var(--color-green-950)] text-white/80">
      <Container className="grid grid-cols-1 gap-10 py-16 md:grid-cols-4">
        <div>
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
          <p className="mt-3 text-sm leading-relaxed text-white/60">
            {institution.description}
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-[var(--color-orange-400)]">
            Quick Links
          </h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-white/70 hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-[var(--color-orange-400)]">
            Departments
          </h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {departments.map((d) => (
              <li key={d.slug}>
                <Link href={`/departments/${d.slug}`} className="text-white/70 hover:text-white">
                  {d.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-[var(--color-orange-400)]">
            Contact
          </h3>
          <ul className="mt-4 space-y-2.5 text-sm text-white/70">
            <li>{contact.phone}</li>
            <li>{contact.email}</li>
            <li>{contact.location}</li>
          </ul>

          <h3 className="mt-6 text-sm font-semibold uppercase tracking-wide text-[var(--color-orange-400)]">
            Branches
          </h3>
          <p className="mt-3 text-sm text-white/70">{branches.join(" · ")}</p>

          <h3 className="mt-6 text-sm font-semibold uppercase tracking-wide text-[var(--color-orange-400)]">
            Business Hours
          </h3>
          <ul className="mt-3 space-y-1 text-sm text-white/70">
            {businessHours.map((h) => (
              <li key={h.days} className="flex justify-between gap-4">
                <span>{h.days}</span>
                <span>{h.time}</span>
              </li>
            ))}
          </ul>

          {socialLinks.length > 0 && (
            <div className="mt-5 flex gap-4">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  className="text-xs text-white/60 underline underline-offset-4 hover:text-white"
                >
                  {s.label}
                </a>
              ))}
            </div>
          )}
        </div>
      </Container>

      <div className="border-t border-white/10 py-6">
        <Container className="flex flex-col items-center justify-between gap-3 text-xs text-white/50 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {institution.name}. All rights reserved.
          </p>
          <p>
            {institution.registration.label}: {institution.registration.number}
          </p>
        </Container>
      </div>
    </footer>
  );
}
