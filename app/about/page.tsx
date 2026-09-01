import type { Metadata } from "next";
import { ShieldCheck, Award, Flame, Users, Gauge } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Button } from "@/components/ui/Button";
import { headsOfDepartment } from "@/data/team";
import { institution } from "@/config/institution";

export const metadata: Metadata = {
  title: "About Us",
  description: `Learn about ${institution.name} (${institution.shortName})'s mission, vision and leadership — a career-focused, TVETA-accredited training institution in Kenya.`,
  alternates: { canonical: "/about" },
};

const coreValues = [
  { icon: ShieldCheck, title: "Integrity" },
  { icon: Award, title: "Excellence" },
  { icon: Flame, title: "Hard Work" },
  { icon: Users, title: "Networking" },
  { icon: Gauge, title: "Efficiency" },
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
        <Container className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Our Mission" title="Why we exist" />
            <p className="mt-6 text-base leading-relaxed text-[var(--color-ink)]">
              The mission of the Berlin Business Training Institute is to
              provide efficient education and training to empower community
              members to build successful careers both locally and overseas.
            </p>
          </div>
          <div>
            <SectionHeading eyebrow="Our Vision" title="Where we're headed" />
            <p className="mt-6 text-base leading-relaxed text-[var(--color-ink)]">
              At Berlin Business Training Institute, we envision a world
              where every professional is empowered to reach their highest
              potential. Through innovation and engaging business courses we
              aim to cultivate a collaborative community of lifelong
              learners who are ready to lead and inspire positive change in
              the global marketplace. Together, let us embrace
              opportunities, enhance growth, and transform the future of
              business.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-20 md:py-28">
        <Container>
          <SectionHeading eyebrow="Our Core Values" title="What guides every decision" align="center" />
          <div className="mt-12 grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-5">
            {coreValues.map((value) => (
              <div key={value.title} className="text-center">
                <div className="mx-auto mb-4 inline-flex h-11 w-11 items-center justify-center rounded-[var(--radius-md)] bg-[var(--color-green-900)] text-[var(--color-orange-400)]">
                  <value.icon size={20} />
                </div>
                <h3 className="text-sm font-semibold text-[var(--color-green-950)]">
                  {value.title}
                </h3>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-[var(--color-paper-dim)] py-20 md:py-28">
        <Container className="flex flex-col items-center gap-6 text-center">
          <SectionHeading
            eyebrow="Our Team"
            title="Meet the Director and Heads of Department"
            description={`Led by our Director, with ${headsOfDepartment.length} Heads of Department across every area of study.`}
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
