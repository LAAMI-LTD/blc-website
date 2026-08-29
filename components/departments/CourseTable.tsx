import { Course } from "@/types";
import { Badge } from "@/components/ui/Badge";

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
      <div className="overflow-x-auto">
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