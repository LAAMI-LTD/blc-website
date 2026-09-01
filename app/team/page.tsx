import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { DirectorCard } from "@/components/team/DirectorCard";
import { HodCard } from "@/components/team/HodCard";
import { director, headsOfDepartment } from "@/data/team";
import { institution } from "@/config/institution";

export const metadata: Metadata = {
  title: "Our Team",
  description: `Meet the Director and Heads of Department at ${institution.name} (${institution.shortName}).`,
  alternates: { canonical: "/team" },
};

export default function TeamPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Team"
        title="Leadership & Heads of Department"
        description="The people leading BBTI's departments and setting the standard for practical, career-focused training."
      />

      <section className="py-20 md:py-28">
        <Container className="flex flex-col gap-16">
          {director && <DirectorCard director={director} />}

          <div>
            <h2 className="text-center text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-orange-600)]">
              Department Heads
            </h2>
            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {headsOfDepartment.map((member) => (
                <HodCard key={member.slug} member={member} />
              ))}
            </div>
          </div>
        </Container>
      </section>

      <FinalCTA />
    </>
  );
}
