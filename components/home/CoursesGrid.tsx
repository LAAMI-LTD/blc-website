import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { courses } from "@/data/courses";

export function CoursesGrid() {
  return (
    <section className="py-20 md:py-28">
      <Container>
        <SectionHeading
          eyebrow="Our Courses"
          title="Six languages, taught the same rigorous way"
          description="Every course follows the CEFR framework and adapts to how you learn best — in a group, one-to-one, or as part of a company program."
        />
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => (
            <Card key={course.slug} className="flex flex-col">
              <div className="flex items-center justify-between">
                <span className="script-multilingual text-2xl font-medium text-[var(--color-navy-950)]">
                  {course.nativeGreeting}
                </span>
                <Badge tone="gold">{course.levels[0]}–{course.levels[course.levels.length - 1]}</Badge>
              </div>
              <h3 className="mt-4 text-xl font-semibold text-[var(--color-navy-950)]">
                {course.language}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {course.tagline}
              </p>
              <Link
                href={`/courses/${course.slug}`}
                className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--color-gold-600)] hover:gap-2.5 transition-all"
              >
                Explore {course.language}
                <ArrowRight size={16} />
              </Link>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}