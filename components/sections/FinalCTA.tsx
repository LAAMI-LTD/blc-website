import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function FinalCTA({
  title = "Ready to start speaking a new language?",
  description = "Book a free consultation and we'll help you find the right course, level and format.",
}: {
  title?: string;
  description?: string;
}) {
  return (
    <section className="bg-[var(--color-orange-100)] py-16 md:py-20">
      <Container className="flex flex-col items-center gap-6 text-center">
        <h2 className="max-w-2xl text-3xl font-semibold text-[var(--color-green-950)] md:text-4xl">
          {title}
        </h2>
        <p className="max-w-xl text-base text-[var(--color-ink-soft)]">
          {description}
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button href="/contact" size="lg">
            Book a Free Consultation
          </Button>
          <Button href="/courses" size="lg" variant="ghost">
            View Courses
          </Button>
        </div>
      </Container>
    </section>
  );
}