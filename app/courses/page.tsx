import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { courses } from "@/data/courses";

export const metadata: Metadata = {
  title: "Language Courses",
  description:
    "Explore German, French, Chinese, Finnish, Spanish and Arabic courses at Berlin Language Center — for individuals, students and businesses.",
};

export default function CoursesPage() {
  return (
    <>
      <PageHero
        eyebrow="Courses"
        title="Six languages. Every level. Every format."
        description="Choose a language below to see levels, who it's for, and how classes are structured."
      />

      <section className="py-20 md:py-28">
        <Container>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {courses.map((course) => (
              <Card key={course.slug} className="flex flex-col">
                <div className="flex items-center justify-between">
                  <span className="script-multilingual text-2xl font-medium text-[var(--color-navy-950)]">
                    {course.nativeGreeting}
                  </span>
                  <Badge tone="gold">
                    {course.levels[0]}–{course.levels[course.levels.length - 1]}
                  </Badge>
                </div>
                <h2 className="mt-4 text-xl font-semibold text-[var(--color-navy-950)]">
                  {course.language}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {course.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {course.format.map((f) => (
                    <Badge key={f}>{f}</Badge>
                  ))}
                </div>
                <Link
                  href={`/courses/${course.slug}`}
                  className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--color-gold-600)] transition-all hover:gap-2.5"
                >
                  View {course.language} course details
                  <ArrowRight size={16} />
                </Link>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <FinalCTA
        title="Not sure which language is right for you?"
        description="Book a free consultation and we'll help you choose the right course, level and format."
      />
    </>
  );
}