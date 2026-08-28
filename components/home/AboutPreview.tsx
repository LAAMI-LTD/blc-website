import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { institution } from "@/config/institution";

export function AboutPreview() {
  return (
    <section className="bg-[var(--color-green-950)] py-20 text-white md:py-28">
      <Container className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
        <div className="flex justify-center lg:justify-start">
          <Image
            src="/logo/bbti-logo.png"
            alt="Berlin Business Training Institute (BBTI) emblem"
            width={280}
            height={280}
            className="h-56 w-56 object-contain md:h-72 md:w-72"
          />
        </div>
        <div>
          <p className="mb-4 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-orange-400)]">
            <span aria-hidden className="h-px w-8 bg-[var(--color-orange-500)]" />
            About {institution.shortName}
          </p>
          <h2 className="text-3xl font-semibold md:text-4xl">
            {institution.tagline}
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-white/70">
            {institution.description}
          </p>
          <Button href="/about" variant="primary" size="lg" className="mt-8">
            Learn More About Us
          </Button>
        </div>
      </Container>
    </section>
  );
}
