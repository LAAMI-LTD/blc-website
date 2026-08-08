import type { Metadata } from "next";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { ContactForm } from "@/components/forms/ContactForm";
import { contact, socialLinks } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Berlin Language Center to book a free consultation or ask about our German, French, Chinese, Finnish, Spanish and Arabic courses.",
};

const infoItems = [
  { icon: Phone, label: "Phone", value: contact.phone },
  { icon: Mail, label: "Email", value: contact.email },
  { icon: MapPin, label: "Location", value: contact.address },
  { icon: MessageCircle, label: "WhatsApp", value: contact.whatsapp },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's find your next language"
        description="Have a question about a course, level or schedule? Send us a message and we'll get back to you."
      />

      <section className="py-20 md:py-28">
        <Container className="grid grid-cols-1 gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <h2 className="text-2xl font-semibold text-[var(--color-navy-950)]">
              Get in Touch
            </h2>
            <ul className="mt-6 space-y-5">
              {infoItems.map((item) => (
                <li key={item.label} className="flex items-start gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[var(--radius-md)] bg-[var(--color-navy-900)] text-[var(--color-gold-400)]">
                    <item.icon size={18} />
                  </span>
                  <div>
                    <p className="text-xs uppercase tracking-wide text-muted-foreground">
                      {item.label}
                    </p>
                    <p className="text-sm font-medium text-[var(--color-ink)]">
                      {item.value}
                    </p>
                  </div>
                </li>
              ))}
            </ul>

            <h3 className="mt-10 text-sm font-semibold uppercase tracking-wide text-[var(--color-gold-600)]">
              Business Hours
            </h3>
            <dl className="mt-4 space-y-2 text-sm">
              {contact.hours.map((h) => (
                <div key={h.days} className="flex justify-between border-b border-[var(--color-line)] pb-2">
                  <dt className="text-muted-foreground">{h.days}</dt>
                  <dd className="font-medium text-[var(--color-ink)]">{h.time}</dd>
                </div>
              ))}
            </dl>

            <div className="mt-8 flex gap-5">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  className="text-sm font-medium text-[var(--color-gold-600)] underline underline-offset-4 hover:text-[var(--color-gold-500)]"
                >
                  {s.label}
                </a>
              ))}
            </div>

            <div
              aria-hidden
              className="mt-10 flex h-48 items-center justify-center rounded-[var(--radius-lg)] border border-dashed border-[var(--color-line)] bg-[var(--color-paper-dim)] text-sm text-muted-foreground"
            >
              Map placeholder — embed location once address is confirmed
            </div>
          </div>

          <div>
            <ContactForm />
          </div>
        </Container>
      </section>
    </>
  );
}