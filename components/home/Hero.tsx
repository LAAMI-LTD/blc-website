import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { institution } from "@/config/institution";
import { cn } from "@/lib/utils";

// The organization has confirmed a hero video (Bbti.mp4) and poster image
// (bbti.jpg) are coming, but the actual media files haven't been supplied
// to this project yet. Rather than reference files that don't exist (which
// would silently 404 in production), the video background stays disabled
// until both assets are added at the paths below — then flip this to true.
// Everything else in this component (copy, CTAs, department panel) is
// unchanged either way, so enabling the video is a two-line change plus
// dropping in the two files, not a redesign.
const HAS_HERO_VIDEO = true;
const HERO_VIDEO_SRC = "/hero/bbti.mp4";
const HERO_POSTER_SRC = "/hero/bbti.jpg";

const departmentPreview = [
  { name: "Languages", focus: "German, French, Chinese, Spanish, Finnish, English & more" },
  { name: "ICT", focus: "Computer packages, programming, design, networking" },
  { name: "Business & Technical Studies", focus: "Accountancy, HR, project management & more" },
  { name: "Health Sciences", focus: "Nurse assistant, community health, counselling" },
  { name: "Professional Short Courses", focus: "Digital marketing, CCTV, public speaking & more" },
];

export function Hero() {
  return (
    <section
      className={cn(
        "relative overflow-hidden",
        HAS_HERO_VIDEO ? "text-white" : "bg-[var(--color-paper)]"
      )}
    >
      {HAS_HERO_VIDEO && (
        <>
          <video
            className="absolute inset-0 h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            poster={HERO_POSTER_SRC}
            aria-hidden="true"
          >
            <source src={HERO_VIDEO_SRC} type="video/mp4" />
          </video>
          {/* Scrim — keeps hero text readable regardless of video content. */}
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70"
          />
        </>
      )}

      <Container className="relative grid grid-cols-1 items-center gap-14 py-16 md:py-24 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p
            className={cn(
              "mb-5 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em]",
              HAS_HERO_VIDEO ? "text-[var(--color-orange-400)]" : "text-[var(--color-orange-600)]"
            )}
          >
            <span aria-hidden className="h-px w-8 bg-[var(--color-orange-500)]" />
            {institution.registration.label}: {institution.registration.number}
          </p>
          <h1
            className={cn(
              "text-4xl font-bold leading-[1.08] sm:text-5xl md:text-[3.2rem]",
              HAS_HERO_VIDEO ? "text-white" : "text-[var(--color-green-950)]"
            )}
          >
            {institution.tagline}
          </h1>
          <p
            className={cn(
              "mt-6 max-w-lg text-lg leading-relaxed",
              HAS_HERO_VIDEO ? "text-white/80" : "text-muted-foreground"
            )}
          >
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
            <Button
              href="/contact"
              size="lg"
              variant="ghost"
              className={HAS_HERO_VIDEO ? "border-white/40 text-white hover:bg-white/10" : undefined}
            >
              Contact / Enquire Now
            </Button>
          </div>
        </div>

        {/* Signature element: a departments "directory board" — echoes the
            wall directory of a real training institute, giving an
            immediate map of everything BBTI teaches. Rendered as a glass
            panel over video, solid white otherwise. */}
        <div
          className={cn(
            "rounded-[var(--radius-lg)] border shadow-[var(--shadow-lg)]",
            HAS_HERO_VIDEO
              ? "border-white/20 bg-white/10 backdrop-blur-md"
              : "border-[var(--color-line)] bg-white"
          )}
        >
          <div
            className={cn(
              "border-b px-6 py-4",
              HAS_HERO_VIDEO ? "border-white/20" : "border-[var(--color-line)]"
            )}
          >
            <p
              className={cn(
                "text-xs font-semibold uppercase tracking-[0.16em]",
                HAS_HERO_VIDEO ? "text-[var(--color-orange-400)]" : "text-[var(--color-orange-600)]"
              )}
            >
              Our Departments
            </p>
          </div>
          <ul className={cn("divide-y", HAS_HERO_VIDEO ? "divide-white/10" : "divide-[var(--color-line)]")}>
            {departmentPreview.map((dept, i) => (
              <li key={dept.name} className="flex items-start gap-4 px-6 py-4">
                <span className="font-display text-sm text-[var(--color-orange-500)]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <p
                    className={cn(
                      "text-sm font-semibold",
                      HAS_HERO_VIDEO ? "text-white" : "text-[var(--color-green-950)]"
                    )}
                  >
                    {dept.name}
                  </p>
                  <p className={cn("mt-0.5 text-xs", HAS_HERO_VIDEO ? "text-white/70" : "text-muted-foreground")}>
                    {dept.focus}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}