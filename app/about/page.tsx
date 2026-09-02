import type { Metadata } from "next";
import Image from "next/image";
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

      {/* Who We Are section with overlapping image */}
      <section className="relative py-20 md:py-28">
        <Container className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
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
          <div className="relative h-80 md:h-96 lg:h-[450px]">
            {/* Overlapping image with intentional offset */}
            <Image
              src="/departments/complab.png"
              alt="BBTI training facility and learning environment"
              fill
              className="rounded-[var(--radius-lg)] object-cover shadow-lg"
              priority
            />
          </div>
        </Container>
      </section>

      {/* Our Approach section */}
      <section className="bg-[var(--color-paper-dim)] py-20 md:py-28">
        <Container>
          <SectionHeading eyebrow="Our Approach" title="Skills you can use immediately" align="center" />
          <p className="mx-auto mt-6 max-w-2xl text-center text-base leading-relaxed text-muted-foreground">
            Courses across every department emphasize hands-on, practical
            skills alongside the certifications and entry requirements set
            by the relevant examination bodies (KNEC, CDACC, NITA and
            others, depending on the course). Instructors focus on
            preparing learners for real workplace demands.
          </p>
        </Container>
      </section>

      {/* Mission, Vision, and Core Values cards section */}
      <section className="py-20 md:py-28">
        <Container>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {/* Mission Card */}
            <div className="rounded-[var(--radius-lg)] border border-[var(--color-line)] bg-white p-8 shadow-[var(--shadow-sm)]">
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-orange-600)]">
                Our Mission
              </p>
              <h3 className="mb-4 text-2xl font-semibold text-[var(--color-green-950)]">
                Why we exist
              </h3>
              <p className="text-base leading-relaxed text-[var(--color-ink)]">
                The mission of the Berlin Business Training Institute is to
                provide efficient education and training to empower community
                members to build successful careers both locally and overseas.
              </p>
            </div>

            {/* Vision Card */}
            <div className="rounded-[var(--radius-lg)] border border-[var(--color-line)] bg-white p-8 shadow-[var(--shadow-sm)]">
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-orange-600)]">
                Our Vision
              </p>
              <h3 className="mb-4 text-2xl font-semibold text-[var(--color-green-950)]">
                Where we&rsquo;re headed
              </h3>
              <p className="text-base leading-relaxed text-[var(--color-ink)]">
                At Berlin Business Training Institute, we envision a world
                where every professional is empowered to reach their highest
                potential. Through innovation and engaging business courses we
                aim to cultivate a collaborative community of lifelong
                learners who are ready to lead and inspire positive change in
                the global marketplace.
              </p>
            </div>

            {/* Core Values Card */}
            <div className="rounded-[var(--radius-lg)] border border-[var(--color-line)] bg-white p-8 shadow-[var(--shadow-sm)]">
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-orange-600)]">
                Our Core Values
              </p>
              <h3 className="mb-6 text-2xl font-semibold text-[var(--color-green-950)]">
                What guides us
              </h3>
              <ul className="space-y-3">
                {coreValues.map((value) => (
                  <li key={value.title} className="flex items-center gap-3">
                    <value.icon size={18} className="shrink-0 text-[var(--color-green-900)]" />
                    <span className="text-sm font-medium text-[var(--color-ink)]">
                      {value.title}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* Our Team section */}
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
