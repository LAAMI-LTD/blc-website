import { Hero } from "@/components/home/Hero";
import { Trust } from "@/components/home/Trust";
import { DepartmentsOverview } from "@/components/home/DepartmentsOverview";
import { WhyUs } from "@/components/home/WhyUs";
import { HowItWorks } from "@/components/home/HowItWorks";
import { HostelSection } from "@/components/home/HostelSection";
import { TestimonialsPreview } from "@/components/home/TestimonialsPreview";
import { AboutPreview } from "@/components/home/AboutPreview";
import { FinalCTA } from "@/components/sections/FinalCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Trust />
      <DepartmentsOverview />
      <WhyUs />
      <HowItWorks />
      <HostelSection />
      <TestimonialsPreview />
      <AboutPreview />
      <FinalCTA />
    </>
  );
}