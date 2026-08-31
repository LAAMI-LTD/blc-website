import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { CourseTable } from "@/components/departments/CourseTable";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { departments, getDepartmentBySlug } from "@/data/departments";
import { getCoursesByDepartment, languageCourses } from "@/data/courses";
import { institution } from "@/config/institution";

export const dynamicParams = false;

export function generateStaticParams() {
  return departments.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const department = getDepartmentBySlug(slug);
  if (!department) return {};
  return {
    title: department.name,
    description: `${department.shortDescription} — part of ${institution.name} (${institution.shortName}).`,
    alternates: { canonical: `/departments/${department.slug}` },
  };
}

export default async function DepartmentDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const department = getDepartmentBySlug(slug);
  if (!department) notFound();

  const isLanguages = department.slug === "languages";
  const courses = getCoursesByDepartment(department.slug);

  // Group by category so the page mirrors the structure of the source
  // marketing material rather than one long undifferentiated list.
  const categories = Array.from(new Set(courses.map((c) => c.category)));

  return (
    <>
      <PageHero
        eyebrow="Department"
        title={department.name}
        description={department.shortDescription}
      />

      <section className="py-20 md:py-28">
        <Container className="flex flex-col gap-10">
          {isLanguages ? (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {languageCourses.map((course) => (
                <Card key={course.slug} className="flex flex-col">
                  <div className="flex items-center justify-between">
                    <span className="script-multilingual text-2xl font-medium text-[var(--color-green-950)]">
                      {course.nativeGreeting}
                    </span>
                    {course.levels && (
                      <Badge tone="accent">
                        {course.levels[0]}–{course.levels[course.levels.length - 1]}
                      </Badge>
                    )}
                  </div>
                  <h2 className="mt-4 text-xl font-semibold text-[var(--color-green-950)]">
                    {course.language}
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {course.description}
                  </p>
                  <Link
                    href={`/courses/${course.slug}`}
                    className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--color-orange-600)] transition-all hover:gap-2.5"
                  >
                    View {course.language} course details
                    <ArrowRight size={16} />
                  </Link>
                </Card>
              ))}
            </div>
          ) : (
            categories.map((category) => (
              <CourseTable
                key={category}
                title={category}
                courses={courses.filter((c) => c.category === category)}
              />
            ))
          )}
        </Container>
      </section>

      <FinalCTA
        title={`Interested in a ${department.name} course?`}
        description="Contact us and we'll help you find the right course and format."
      />
    </>
  );
}
