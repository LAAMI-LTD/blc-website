import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Check } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { languageCourses } from "@/data/courses";

// This route only ever renders the pre-generated language course pages —
// other departments are listed on /departments/[slug] instead, since the
// source material doesn't supply enough per-course detail for a full page.
export const dynamicParams = false;

function getLanguageCourse(slug: string) {
  return languageCourses.find((c) => c.slug === slug);
}

export function generateStaticParams() {
  return languageCourses.map((course) => ({ slug: course.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const course = getLanguageCourse(slug);
  if (!course) return {};
  return {
    title: `${course.language} Courses`,
    description: course.description,
  };
}

export default async function CourseDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const course = getLanguageCourse(slug);
  if (!course) notFound();

  return (
    <>
      <section className="border-b border-[var(--color-line)] bg-[var(--color-paper-dim)] py-16 md:py-20">
        <Container className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="mb-4 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-orange-600)]">
              <span aria-hidden className="h-px w-8 bg-[var(--color-orange-500)]" />
              Languages Department
            </p>
            <div className="flex items-center gap-4">
              <span className="script-multilingual text-4xl font-medium text-[var(--color-green-950)]">
                {course.nativeGreeting}
              </span>
              <h1 className="text-4xl font-semibold text-[var(--color-green-950)] md:text-5xl">
                {course.language}
              </h1>
            </div>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
              {course.tagline}
            </p>
          </div>
          <Button href="/contact" size="lg">
            Enquire About {course.language}
          </Button>
        </Container>
      </section>

      <section className="py-20 md:py-28">
        <Container className="grid grid-cols-1 gap-14 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <h2 className="text-2xl font-semibold text-[var(--color-green-950)]">Overview</h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              {course.description}
            </p>

            {course.outcomes && (
              <>
                <h2 className="mt-12 text-2xl font-semibold text-[var(--color-green-950)]">
                  What You&apos;ll Be Able To Do
                </h2>
                <ul className="mt-4 space-y-3">
                  {course.outcomes.map((outcome) => (
                    <li key={outcome} className="flex items-start gap-3 text-sm text-[var(--color-ink)]">
                      <Check size={18} className="mt-0.5 shrink-0 text-[var(--color-orange-500)]" />
                      {outcome}
                    </li>
                  ))}
                </ul>
              </>
            )}

            {course.audience && (
              <>
                <h2 className="mt-12 text-2xl font-semibold text-[var(--color-green-950)]">Who It&apos;s For</h2>
                <div className="mt-4 flex flex-wrap gap-2">
                  {course.audience.map((a) => (
                    <Badge key={a}>{a}</Badge>
                  ))}
                </div>
              </>
            )}
          </div>

          <aside className="h-fit rounded-[var(--radius-lg)] border border-[var(--color-line)] bg-white p-6 shadow-[var(--shadow-sm)]">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-[var(--color-orange-600)]">
              Course Details
            </h3>
            <dl className="mt-5 space-y-5 text-sm">
              {course.levels && (
                <div>
                  <dt className="text-muted-foreground">Levels Offered</dt>
                  <dd className="mt-1.5 flex flex-wrap gap-2">
                    {course.levels.map((l) => (
                      <Badge key={l} tone="primary">{l}</Badge>
                    ))}
                  </dd>
                </div>
              )}
              {course.examBody && (
                <div>
                  <dt className="text-muted-foreground">Exam Body</dt>
                  <dd className="mt-1.5 text-[var(--color-ink)]">{course.examBody}</dd>
                </div>
              )}
              {course.format && (
                <div>
                  <dt className="text-muted-foreground">Format</dt>
                  <dd className="mt-1.5 flex flex-wrap gap-2">
                    {course.format.map((f) => (
                      <Badge key={f}>{f}</Badge>
                    ))}
                  </dd>
                </div>
              )}
              <div>
                <dt className="text-muted-foreground">Pricing</dt>
                <dd className="mt-1.5 text-[var(--color-ink)]">[Course Pricing — contact us]</dd>
              </div>
            </dl>
            <Button href="/contact" className="mt-6 w-full">
              Enquire Now
            </Button>
          </aside>
        </Container>
      </section>

      <FinalCTA
        title={`Ready to start learning ${course.language}?`}
        description="Contact us and we'll help you find the right level and format."
      />
    </>
  );
}
