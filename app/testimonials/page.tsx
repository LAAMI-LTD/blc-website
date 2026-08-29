import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { TestimonialCard } from "@/components/testimonials/TestimonialCard";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { testimonials } from "@/data/testimonials";
import { institution } from "@/config/institution";

export const metadata: Metadata = {
  title: "Student Testimonials",
  description: `Read what students say about ${institution.name} (${institution.shortName}).`,
};

export default function TestimonialsPage() {
  return (
    <>
      <PageHero
        eyebrow="Testimonials"
        title="Student Testimonials"
        description="The testimonials below are clearly marked samples until verified student feedback is supplied and approved."
      />

      <section className="py-20 md:py-28">
        <Container>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t, i) => (
              <TestimonialCard key={`${t.name}-${i}`} testimonial={t} />
            ))}
          </div>
        </Container>
      </section>

      <FinalCTA />
    </>
  );
}
