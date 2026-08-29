import { Course } from "@/types";
import { Badge } from "@/components/ui/Badge";

function CourseFields({ course, showLabels }: { course: Course; showLabels?: boolean }) {
  return (
    <>
      {course.entryRequirement && (
        <div className="flex items-baseline justify-between gap-3 text-sm">
          {showLabels && <dt className="text-xs uppercase tracking-wide text-muted-foreground">Min. Entry Level</dt>}
          <dd className="text-[var(--color-ink)]">{course.entryRequirement}</dd>
        </div>
      )}
      {course.examBody && (
        <div className="flex items-baseline justify-between gap-3 text-sm">
          {showLabels && <dt className="text-xs uppercase tracking-wide text-muted-foreground">Exam Body</dt>}
          <dd>
            <Badge>{course.examBody}</Badge>
          </dd>
        </div>
      )}
      {course.duration && (
        <div className="flex items-baseline justify-between gap-3 text-sm">
          {showLabels && <dt className="text-xs uppercase tracking-wide text-muted-foreground">Duration</dt>}
          <dd className="text-[var(--color-ink)]">{course.duration}</dd>
        </div>
      )}
      {course.price && (
        <div className="flex items-baseline justify-between gap-3 text-sm">
          {showLabels && <dt className="text-xs uppercase tracking-wide text-muted-foreground">Price</dt>}
          <dd className="font-medium text-[var(--color-orange-600)]">{course.price}</dd>
        </div>
      )}
    </>
  );
}

export function CourseTable({ title, courses }: { title: string; courses: Course[] }) {
  const hasEntryRequirement = courses.some((c) => c.entryRequirement);
  const hasExamBody = courses.some((c) => c.examBody);
  const hasDuration = courses.some((c) => c.duration);
  const hasPrice = courses.some((c) => c.price);

  return (
    <div className="overflow-hidden rounded-[var(--radius-lg)] border border-[var(--color-line)] bg-white">
      <div className="border-b border-[var(--color-line)] bg-[var(--color-paper-dim)] px-5 py-3">
        <h3 className="text-sm font-semibold text-[var(--color-green-950)]">{title}</h3>
      </div>

      {/* Mobile: stacked cards — no horizontal scrolling required. */}
      <dl className="divide-y divide-[var(--color-line)] sm:hidden">
        {courses.map((course) => (
          <div key={course.slug} className="space-y-1.5 px-5 py-4">
            <dt className="font-medium text-[var(--color-ink)]">{course.name}</dt>
            <div className="space-y-1">
              <CourseFields course={course} showLabels />
            </div>
          </div>
        ))}
      </dl>

      {/* sm and up: full table. */}
      <div className="hidden sm:block sm:overflow-x-auto">
        <table className="w-full min-w-[520px] text-left text-sm">
          <thead>
            <tr className="border-b border-[var(--color-line)] text-xs uppercase tracking-wide text-muted-foreground">
              <th scope="col" className="px-5 py-3 font-medium">
                Course
              </th>
              {hasEntryRequirement && (
                <th scope="col" className="px-5 py-3 font-medium">
                  Min. Entry Level
                </th>
              )}
              {hasExamBody && (
                <th scope="col" className="px-5 py-3 font-medium">
                  Exam Body
                </th>
              )}
              {hasDuration && (
                <th scope="col" className="px-5 py-3 font-medium">
                  Duration
                </th>
              )}
              {hasPrice && (
                <th scope="col" className="px-5 py-3 font-medium">
                  Price
                </th>
              )}
            </tr>
          </thead>
          <tbody className="divide-y divide-[var(--color-line)]">
            {courses.map((course) => (
              <tr key={course.slug}>
                <td className="px-5 py-3 font-medium text-[var(--color-ink)]">{course.name}</td>
                {hasEntryRequirement && (
                  <td className="px-5 py-3 text-muted-foreground">
                    {course.entryRequirement ?? "—"}
                  </td>
                )}
                {hasExamBody && (
                  <td className="px-5 py-3 text-muted-foreground">
                    {course.examBody ? <Badge>{course.examBody}</Badge> : "—"}
                  </td>
                )}
                {hasDuration && (
                  <td className="px-5 py-3 text-muted-foreground">{course.duration ?? "—"}</td>
                )}
                {hasPrice && (
                  <td className="px-5 py-3 font-medium text-[var(--color-orange-600)]">
                    {course.price ?? "Contact for pricing"}
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
