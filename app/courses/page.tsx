import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { DepartmentCard } from "@/components/departments/DepartmentCard";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { departments } from "@/data/departments";
import { institution } from "@/config/institution";

export const metadata: Metadata = {
  title: "Courses & Departments",
  description: `Explore courses at ${institution.name} (${institution.shortName}) across Languages, ICT, Business & Technical Studies, Health Sciences and Professional Short Courses.`,
  alternates: { canonical: "/courses" },
};

export default function CoursesPage() {
  return (
    <>
      <PageHero
        eyebrow="Courses"
        title="Five departments. One career-focused institute."
        description="Choose a department below to see courses, entry requirements, exam bodies and durations."
      />

      <section className="py-20 md:py-28">
        <Container>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {departments.map((department) => (
              <DepartmentCard key={department.slug} department={department} />
            ))}
          </div>
        </Container>
      </section>

      <FinalCTA
        title="Not sure which department is right for you?"
        description="Contact us and we'll help you choose the right department, course and format."
      />
    </>
  );
}
