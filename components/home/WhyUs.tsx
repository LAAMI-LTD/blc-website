import { Users2, Building2, GraduationCap, Globe2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const reasons = [
  {
    icon: Globe2,
    title: "Six languages under one roof",
    description:
      "German, French, Chinese, Finnish, Spanish and Arabic — plan a learning path without switching schools.",
  },
  {
    icon: Users2,
    title: "Courses built around you",
    description:
      "Group classes, private lessons or corporate training — choose the format that fits your schedule and goals.",
  },
  {
    icon: Building2,
    title: "Trusted by businesses",
    description:
      "We design corporate language training for teams that work across borders and cultures.",
  },
  {
    icon: GraduationCap,
    title: "Structured progression",
    description:
      "Every course maps to the CEFR framework, so your progress is clear from your first class onward.",
  },
];

export function WhyUs() {
  return (
    <section className="bg-[var(--color-paper-dim)] py-20 md:py-28">
      <Container>
        <SectionHeading
          eyebrow="Why Berlin Language Center"
          title="A language school built for real progress"
        />
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason) => (
            <div key={reason.title}>
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-[var(--radius-md)] bg-[var(--color-navy-900)] text-[var(--color-gold-400)]">
                <reason.icon size={20} />
              </div>
              <h3 className="text-base font-semibold text-[var(--color-navy-950)]">
                {reason.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}