import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { team } from "@/data/team";
import { getDepartmentBySlug } from "@/data/departments";
import { institution } from "@/config/institution";

export const metadata: Metadata = {
  title: "Our Team",
  description: `Meet the Heads of Department at ${institution.name} (${institution.shortName}).`,
};

export default function TeamPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Team"
        title="Heads of Department"
        description="Profile details below are placeholders pending final Head of Department names, photos and bios — this structure is ready for real institutional content."
      />

      <section className="py-20 md:py-28">
        <Container>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((member) => {
              const department =
                member.department !== "leadership" ? getDepartmentBySlug(member.department) : undefined;
              return (
                <Card key={member.slug}>
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[var(--color-paper-dim)] text-xs font-medium text-muted-foreground">
                    Photo
                  </div>
                  <h3 className="text-lg font-semibold text-[var(--color-green-950)]">
                    {member.name}
                  </h3>
                  <p className="text-sm text-[var(--color-orange-600)]">{member.title}</p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {member.bio}
                  </p>
                  {department && (
                    <div className="mt-4">
                      <Badge>{department.name}</Badge>
                    </div>
                  )}
                </Card>
              );
            })}
          </div>
        </Container>
      </section>

      <FinalCTA />
    </>
  );
}