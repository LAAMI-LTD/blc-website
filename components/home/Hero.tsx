import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { courses } from "@/data/courses";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[var(--color-paper)]">
      <Container className="grid grid-cols-1 items-center gap-14 py-16 md:py-24 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="mb-5 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-gold-600)]">
            <span aria-hidden className="h-px w-8 bg-[var(--color-gold-500)]" />
            Language School · Berlin · Since 2015
          </p>
          <h1 className="text-4xl font-semibold leading-[1.08] text-[var(--color-navy-950)] sm:text-5xl md:text-[3.4rem]">
            Six languages.
            <br />
            One city to learn them in.
          </h1>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground">
            Berlin Language Center teaches German, French, Chinese, Finnish,
            Spanish and Arabic to professionals, students and businesses —
            in small groups, private lessons, or as part of a corporate
            training program.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Button href="/contact" size="lg">
              Book a Free Consultation
            </Button>
            <Button href="/courses" size="lg" variant="ghost">
              View Courses
            </Button>
          </div>
        </div>

        {/* Signature element: a language "directory board" — each taught
            language greets the visitor in its own script, echoing how a
            real language school signposts its classrooms. */}
        <div className="rounded-[var(--radius-lg)] border border-[var(--color-line)] bg-white shadow-[var(--shadow-lg)]">
          <div className="border-b border-[var(--color-line)] px-6 py-4">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-gold-600)]">
              Say Hello, In Six Languages
            </p>
          </div>
          <ul className="divide-y divide-[var(--color-line)]">
            {courses.map((course, i) => (
              <li
                key={course.slug}
                className="flex items-center justify-between px-6 py-4"
              >
                <div className="flex items-center gap-4">
                  <span className="font-display text-sm text-[var(--color-gold-500)]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="script-multilingual text-xl font-medium text-[var(--color-navy-950)]">
                    {course.nativeGreeting}
                  </span>
                </div>
                <span className="text-sm text-muted-foreground">
                  {course.language}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}