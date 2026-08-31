import type { Metadata } from "next";
import { Briefcase, Target, Eye, Award } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Button } from "@/components/ui/Button";
import { team } from "@/data/team";
import { institution } from "@/config/institution";

export const metadata: Metadata = {
  title: "About Us",
  description: `Learn about ${institution.name} (${institution.shortName}) — a career-focused, TVETA-accredited training institution in Kenya.`,
  alternates: { canonical: "/about" },
};

const values = [
  {
    icon: Briefcase,
    title: "Practical, career-focused training",
    description: "Every course is built around real, employable skills — not just theory.",
  },
  {
    icon: Target,
    title: "Mission",
    description:
      "[Editable placeholder — final mission statement pending institutional approval.]",
  },
  {
    icon: Eye,
    title: "Vision",
    description:
      "[Editable placeholder — final vision statement pending institutional approval.]",
  },
  {
    icon: Award,
    title: institution.registration.label,
    description: `Registered under ${institution.registration.number}.`,
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title={`About ${institution.name}`}
        description={institution.description}
      />

      <section className="py-20 md:py-28">
        <Container className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Who We Are" title="Career-focused, practical training" />
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              {institution.shortName} is a career-focused training
              institution offering practical, professional and
              industry-oriented education across Languages, ICT, Business
              &amp; Technical Studies, Health Sciences and Professional
              Short Courses. Our positioning is simple:{" "}
              <em>{institution.tagline}</em>.
            </p>
          </div>
          <div>
            <SectionHeading eyebrow="Our Approach" title="Skills you can use immediately" />
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              Courses across every department emphasize hands-on, practical
              skills alongside the certifications and entry requirements set
              by the relevant examination bodies (KNEC, CDACC, NITA and
              others, depending on the course). Instructors focus on
              preparing learners for real workplace demands.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-[var(--color-paper-dim)] py-20 md:py-28">
        <Container>
          <SectionHeading eyebrow="Mission, Vision & Accreditation" title="What guides us" align="center" />
          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <div key={value.title} className="text-center">
                <div className="mx-auto mb-4 inline-flex h-11 w-11 items-center justify-center rounded-[var(--radius-md)] bg-[var(--color-green-900)] text-[var(--color-orange-400)]">
                  <value.icon size={20} />
                </div>
                <h3 className="text-base font-semibold text-[var(--color-green-950)]">{value.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 md:py-28">
        <Container className="flex flex-col items-center gap-6 text-center">
          <SectionHeading
            eyebrow="Our Team"
            title="Meet the Heads of Department"
            description={`${team.length} department profiles — final names, photos and bios pending institutional approval.`}
            align="center"
          />
          <Button href="/team" variant="ghost" size="lg">
            Meet the Team
          </Button>
        </Container>
      </section>

      <FinalCTA />
    </>
  );
}
