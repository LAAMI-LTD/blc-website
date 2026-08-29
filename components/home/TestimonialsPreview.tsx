import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { TestimonialCard } from "@/components/testimonials/TestimonialCard";
import { testimonials } from "@/data/testimonials";

export function TestimonialsPreview() {
  return (
    <section className="py-20 md:py-28">
      <Container>
        <SectionHeading
          eyebrow="Student Testimonials"
          title="What our students say"
          description="Real student feedback is coming soon — the samples below show how testimonials will appear once verified."
        />
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.slice(0, 3).map((t, i) => (
            <TestimonialCard key={`${t.name}-${i}`} testimonial={t} />
          ))}
        </div>
        <div className="mt-10 text-center">
          <Button href="/testimonials" variant="ghost" size="lg">
            View All Testimonials
          </Button>
        </div>
      </Container>
    </section>
  );
}