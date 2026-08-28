import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { institution } from "@/config/institution";

// TODO(Phase 3): replace with data/departments.ts once the full
// department/course data model is built out.
const departmentPreview = [
  { name: "Languages", focus: "German, French, Chinese, Spanish, Finnish, English & more" },
  { name: "ICT", focus: "Computer packages, programming, design, networking" },
  { name: "Business & Technical Studies", focus: "Accountancy, HR, project management & more" },
  { name: "Health Sciences", focus: "Nurse assistant, community health, counselling" },
  { name: "Professional Short Courses", focus: "Digital marketing, CCTV, public speaking & more" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[var(--color-paper)]">
      <Container className="grid grid-cols-1 items-center gap-14 py-16 md:py-24 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="mb-5 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-orange-600)]">
            <span aria-hidden className="h-px w-8 bg-[var(--color-orange-500)]" />
            {institution.registration.label}: {institution.registration.number}
          </p>
          <h1 className="text-4xl font-bold leading-[1.08] text-[var(--color-green-950)] sm:text-5xl md:text-[3.2rem]">
            {institution.tagline}
          </h1>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground">
            {institution.name} ({institution.shortName}) offers practical,
            industry-oriented training across Languages, ICT, Business &amp;
            Technical Studies, Health Sciences and Professional Short
            Courses — preparing you for a real career, not just a
            certificate.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Button href="/courses" size="lg">
              Explore Courses
            </Button>
            <Button href="/contact" size="lg" variant="ghost">
              Contact / Enquire Now
            </Button>
          </div>
        </div>

        {/* Signature element: a departments "directory board" — echoes the
            wall directory of a real training institute, giving an
            immediate map of everything BBTI teaches. */}
        <div className="rounded-[var(--radius-lg)] border border-[var(--color-line)] bg-white shadow-[var(--shadow-lg)]">
          <div className="border-b border-[var(--color-line)] px-6 py-4">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-orange-600)]">
              Our Departments
            </p>
          </div>
          <ul className="divide-y divide-[var(--color-line)]">
            {departmentPreview.map((dept, i) => (
              <li key={dept.name} className="flex items-start gap-4 px-6 py-4">
                <span className="font-display text-sm text-[var(--color-orange-500)]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <p className="text-sm font-semibold text-[var(--color-green-950)]">
                    {dept.name}
                  </p>
                  <p className="mt-0.5 text-xs text-muted-foreground">{dept.focus}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
