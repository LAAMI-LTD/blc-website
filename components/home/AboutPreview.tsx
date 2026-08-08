import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function AboutPreview() {
  return (
    <section className="bg-[var(--color-navy-950)] py-20 text-white md:py-28">
      <Container className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
        <div className="flex justify-center lg:justify-start">
          <Image
            src="/logo/blc-logo.jpeg"
            alt="Berlin Language Center emblem"
            width={280}
            height={280}
            className="h-56 w-56 rounded-full object-cover shadow-[var(--shadow-lg)] md:h-72 md:w-72"
          />
        </div>
        <div>
          <p className="mb-4 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-gold-400)]">
            <span aria-hidden className="h-px w-8 bg-[var(--color-gold-500)]" />
            About Berlin Language Center
          </p>
          <h2 className="text-3xl font-semibold md:text-4xl">
            Teaching languages in Berlin since 2015.
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-white/70">
            Berlin Language Center brings together instruction in German,
            French, Chinese, Finnish, Spanish and Arabic for adults,
            students and businesses. Our courses are built around real
            communication, structured progress, and the needs of learners
            living and working in Berlin.
          </p>
          <Button href="/about" variant="primary" size="lg" className="mt-8">
            Learn More About Us
          </Button>
        </div>
      </Container>
    </section>
  );
}