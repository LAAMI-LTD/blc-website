import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { DepartmentCard } from "@/components/departments/DepartmentCard";
import { departments } from "@/data/departments";

export function DepartmentsOverview() {
  return (
    <section className="py-20 md:py-28">
      <Container>
        <SectionHeading
          eyebrow="Our Departments"
          title="Five departments, one career-focused institute"
          description="From languages to technical trades, every department follows the same standard: practical, industry-oriented training."
        />
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {departments.map((department) => (
            <DepartmentCard key={department.slug} department={department} />
          ))}
        </div>
      </Container>
    </section>
  );
}
