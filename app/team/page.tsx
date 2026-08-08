import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { team } from "@/data/team";

export const metadata: Metadata = {
  title: "Our Team",
  description: "Meet the language instructors at Berlin Language Center.",
};

export default function TeamPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Team"
        title="The instructors behind every course"
        description="Each of our six languages is taught by a dedicated instructor. Profile details below are placeholders pending final content."
      />

      <section className="py-20 md:py-28">
        <Container>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((member) => (
              <Card key={member.slug}>
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[var(--color-paper-dim)] text-xs font-medium text-muted-foreground">
                  Photo
                </div>
                <h3 className="text-lg font-semibold text-[var(--color-navy-950)]">
                  {member.name}
                </h3>
                <p className="text-sm text-[var(--color-gold-600)]">{member.role}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {member.bio}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {member.languages.map((l) => (
                    <Badge key={l}>{l}</Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <FinalCTA />
    </>
  );
}