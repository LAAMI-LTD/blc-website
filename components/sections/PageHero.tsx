import { Container } from "@/components/ui/Container";

export function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <section className="border-b border-[var(--color-line)] bg-[var(--color-paper-dim)] py-16 md:py-20">
      <Container>
        <p className="mb-4 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-gold-600)]">
          <span aria-hidden className="h-px w-8 bg-[var(--color-gold-500)]" />
          {eyebrow}
        </p>
        <h1 className="max-w-2xl text-4xl font-semibold text-[var(--color-navy-950)] md:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
            {description}
          </p>
        )}
      </Container>
    </section>
  );
}