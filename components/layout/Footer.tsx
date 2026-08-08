import Link from "next/link";
import Image from "next/image";
import { navLinks, site, contact, socialLinks } from "@/data/site";
import { courses } from "@/data/courses";
import { Container } from "@/components/ui/Container";

export function Footer() {
  return (
    <footer className="border-t border-[var(--color-line)] bg-[var(--color-navy-950)] text-white/80">
      <Container className="grid grid-cols-1 gap-10 py-16 md:grid-cols-4">
        <div>
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/logo/blc-logo.jpeg"
              alt="Berlin Language Center logo"
              width={40}
              height={40}
              className="h-10 w-10 rounded-full object-cover"
            />
            <span className="font-display text-base font-semibold text-white">
              Berlin Language Center
            </span>
          </Link>
          <p className="mt-4 text-sm leading-relaxed text-white/60">
            {site.description}
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-[var(--color-gold-400)]">
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
          <h3 className="text-sm font-semibold uppercase tracking-wide text-[var(--color-gold-400)]">
            Languages
          </h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {courses.map((c) => (
              <li key={c.slug}>
                <Link href={`/courses/${c.slug}`} className="text-white/70 hover:text-white">
                  {c.language}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-[var(--color-gold-400)]">
            Contact
          </h3>
          <ul className="mt-4 space-y-2.5 text-sm text-white/70">
            <li>{contact.phone}</li>
            <li>{contact.email}</li>
            <li>{contact.address}</li>
          </ul>
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
        </div>
      </Container>

      <div className="border-t border-white/10 py-6">
        <Container className="flex flex-col items-center justify-between gap-3 text-xs text-white/50 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <p>Est. {site.foundedYear} · Berlin, Germany</p>
        </Container>
      </div>
    </footer>
  );
}