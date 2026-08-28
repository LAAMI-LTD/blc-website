"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { navLinks, institution } from "@/config/institution";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const [lastPathname, setLastPathname] = useState(pathname);
  if (pathname !== lastPathname) {
    setLastPathname(pathname);
    setOpen(false);
  }

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b transition-all duration-200",
        scrolled
          ? "border-[var(--color-line)] bg-[var(--color-paper)]/95 shadow-sm backdrop-blur-sm"
          : "border-transparent bg-[var(--color-paper)]/80 backdrop-blur-sm"
      )}
    >
      <Container className="flex h-18 items-center justify-between py-3">
        <Link
          href="/"
          className="flex items-center gap-3"
          aria-label={`${institution.name} — Home`}
        >
          <Image
            src="/logo/bbti-logo.png"
            alt="Berlin Business Training Institute (BBTI) logo"
            width={48}
            height={48}
            className="h-12 w-12 object-contain"
            priority
          />
          <span className="hidden font-display text-base font-bold leading-tight text-[var(--color-green-950)] sm:block">
            Berlin Business
            <br />
            Training Institute
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm font-medium text-[var(--color-ink)] transition-colors hover:text-[var(--color-orange-600)]",
                pathname === link.href && "text-[var(--color-orange-600)]"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button href="/contact" size="md">
            Enquire Now
          </Button>
        </div>

        <button
          className="inline-flex items-center justify-center rounded-md p-2 text-[var(--color-green-950)] md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </Container>

      {open && (
        <div className="border-t border-[var(--color-line)] bg-[var(--color-paper)] md:hidden">
          <Container className="flex flex-col gap-1 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "rounded-md px-3 py-3 text-base font-medium text-[var(--color-ink)] hover:bg-[var(--color-paper-dim)]",
                  pathname === link.href && "text-[var(--color-orange-600)]"
                )}
              >
                {link.label}
              </Link>
            ))}
            <Button href="/contact" size="md" className="mt-3 w-full">
              Enquire Now
            </Button>
          </Container>
        </div>
      )}
    </header>
  );
}
