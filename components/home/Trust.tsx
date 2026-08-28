import { Container } from "@/components/ui/Container";
import { branches, institution } from "@/config/institution";

const facts = [
  { label: "Departments", value: "5" },
  { label: "Branches Nationwide", value: String(branches.length + 1) },
  { label: "Accreditation", value: "TVETA Registered" },
  { label: "Based In", value: institution.country },
];

export function Trust() {
  return (
    <section className="border-y border-[var(--color-line)] bg-[var(--color-paper-dim)]">
      <Container className="grid grid-cols-2 gap-8 py-10 sm:grid-cols-4">
        {facts.map((fact) => (
          <div key={fact.label} className="text-center sm:text-left">
            <p className="font-display text-2xl font-semibold text-[var(--color-green-950)]">
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
