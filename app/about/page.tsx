import type { Metadata } from "next";
import { BookOpen, MessageCircle, Globe, PenLine } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Button } from "@/components/ui/Button";
import { team } from "@/data/team";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Berlin Language Center's mission, teaching approach and the languages we've taught in Berlin since 2015.",
};

const values = [
  {
    icon: MessageCircle,
    title: "Speak from day one",
    description: "Classes prioritize real conversation over rote memorization.",
  },
  {
    icon: BookOpen,
    title: "Structured progress",
    description: "Every course maps to the CEFR framework, so growth is visible and measurable.",
  },
  {
    icon: Globe,
    title: "Six languages, one standard",
    description: "German, French, Chinese, Finnish, Spanish and Arabic are all taught with the same rigor.",
  },
  {
    icon: PenLine,
    title: "Learning that fits your life",
    description: "Group classes, private lessons and corporate training, built around your schedule.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="A Berlin language school built around real communication"
        description="Berlin Language Center has taught German, French, Chinese, Finnish, Spanish and Arabic to adults, students and businesses since 2015."
      />

      <section className="py-20 md:py-28">
        <Container className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Our Mission" title="Language learning that leads to real conversations" />
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              We started Berlin Language Center to give learners in Berlin a
              single place to study the languages that matter most to their
              lives and careers. Whether you&apos;re preparing to work abroad,
              settling into life in Berlin, or building a team that
              communicates across borders, our courses are designed to get
              you speaking with confidence.
            </p>
          </div>
          <div>
            <SectionHeading eyebrow="Our Approach" title="Structured, conversational, and level-appropriate" />
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              Every course follows the CEFR framework (A1 through C2, where
              offered), so you always know where you stand and what&apos;s next.
              Instructors balance grammar and vocabulary fundamentals with
              guided conversation practice, so learning translates directly
              into real-world use.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-[var(--color-paper-dim)] py-20 md:py-28">
        <Container>
          <SectionHeading eyebrow="What We Value" title="The principles behind every course" align="center" />
          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <div key={value.title} className="text-center">
                <div className="mx-auto mb-4 inline-flex h-11 w-11 items-center justify-center rounded-[var(--radius-md)] bg-[var(--color-navy-900)] text-[var(--color-gold-400)]">
                  <value.icon size={20} />
                </div>
                <h3 className="text-base font-semibold text-[var(--color-navy-950)]">{value.title}</h3>
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
            title="Meet the instructors"
            description={`${team.length} language instructors teach across our six languages.`}
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