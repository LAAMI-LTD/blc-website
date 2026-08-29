import { Briefcase, Building2, GraduationCap, MapPinned } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { institution } from "@/config/institution";

const reasons = [
  {
    icon: GraduationCap,
    title: "Five departments, one institute",
    description:
      "Languages, ICT, Business & Technical Studies, Health Sciences and Professional Short Courses — plan a career path without switching schools.",
  },
  {
    icon: Briefcase,
    title: "Career-focused training",
    description:
      "Courses are built around practical, industry-oriented skills — not just theory.",
  },
  {
    icon: MapPinned,
    title: "Accessible across Kenya",
    description: "Study at our main location or one of our regional branches.",
  },
  {
    icon: Building2,
    title: `${institution.registration.label}`,
    description: `Registered under ${institution.registration.number}.`,
  },
];

export function WhyUs() {
  return (
    <section className="bg-[var(--color-paper-dim)] py-20 md:py-28">
      <Container>
        <SectionHeading
          eyebrow={`Why ${institution.shortName}`}
          title="A training institute built for real careers"
        />
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason, i) => (
            <Reveal key={reason.title} delay={i * 0.06}>
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-[var(--radius-md)] bg-[var(--color-green-900)] text-[var(--color-orange-400)]">
                <reason.icon size={20} />
              </div>
              <h3 className="text-base font-semibold text-[var(--color-green-950)]">
                {reason.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {reason.description}
              </p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
