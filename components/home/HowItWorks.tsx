import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const steps = [
  {
    number: "01",
    title: "Book a consultation",
    description: "Tell us your goals, timeline and preferred language — we'll recommend the right course and format.",
  },
  {
    number: "02",
    title: "Get placed at your level",
    description: "New learners take a short placement conversation so classes start at the right CEFR level.",
  },
  {
    number: "03",
    title: "Start learning",
    description: "Join a group class, begin private lessons, or start a corporate training plan built for your team.",
  },
  {
    number: "04",
    title: "Track your progress",
    description: "Move through CEFR levels with regular feedback from your instructor.",
  },
];

export function HowItWorks() {
  return (
    <section className="py-20 md:py-28">
      <Container>
        <SectionHeading
          eyebrow="How It Works"
          title="From first enquiry to your first conversation"
        />
        <div className="mt-12 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div key={step.number} className="relative border-t-2 border-[var(--color-orange-500)] pt-5">
              <span className="font-display text-3xl text-[var(--color-orange-500)]">
                {step.number}
              </span>
              <h3 className="mt-3 text-base font-semibold text-[var(--color-green-950)]">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
