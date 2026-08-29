import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

const steps = [
  {
    number: "01",
    title: "Book a consultation",
    description: "Tell us your goals, timeline and department of interest — we'll recommend the right course and format.",
  },
  {
    number: "02",
    title: "Confirm entry requirements",
    description: "We'll check your entry level against the course's requirements and exam body before enrollment.",
  },
  {
    number: "03",
    title: "Start learning",
    description: "Join a group class, begin private lessons, or start a corporate training plan built for your team.",
  },
  {
    number: "04",
    title: "Track your progress",
    description: "Move through your course with regular feedback from your instructor.",
  },
];

export function HowItWorks() {
  return (
    <section className="py-20 md:py-28">
      <Container>
        <SectionHeading
          eyebrow="How It Works"
          title="From first enquiry to your first class"
        />
        <div className="mt-12 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <Reveal key={step.number} delay={i * 0.06}>
              <div className="relative border-t-2 border-[var(--color-orange-500)] pt-5">
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
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
