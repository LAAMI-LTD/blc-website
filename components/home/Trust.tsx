import { Container } from "@/components/ui/Container";
import { courses } from "@/data/courses";
import { site } from "@/data/site";

const facts = [
  { label: "Languages Taught", value: String(courses.length) },
  { label: "Teaching Since", value: String(site.foundedYear) },
  { label: "Learning Formats", value: "Group · Private · Corporate" },
  { label: "Based In", value: "Berlin, Germany" },
];

export function Trust() {
  return (
    <section className="border-y border-[var(--color-line)] bg-[var(--color-paper-dim)]">
      <Container className="grid grid-cols-2 gap-8 py-10 sm:grid-cols-4">
        {facts.map((fact) => (
          <div key={fact.label} className="text-center sm:text-left">
            <p className="font-display text-2xl font-semibold text-[var(--color-navy-950)]">
              {fact.value}
            </p>
            <p className="mt-1 text-xs uppercase tracking-wide text-muted-foreground">
              {fact.label}
            </p>
          </div>
        ))}
      </Container>
    </section>
  );
}