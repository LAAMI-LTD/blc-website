import { Hero } from "@/components/home/Hero";
import { Trust } from "@/components/home/Trust";
import { CoursesGrid } from "@/components/home/CoursesGrid";
import { WhyUs } from "@/components/home/WhyUs";
import { HowItWorks } from "@/components/home/HowItWorks";
import { AboutPreview } from "@/components/home/AboutPreview";
import { FinalCTA } from "@/components/sections/FinalCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Trust />
      <CoursesGrid />
      <WhyUs />
      <HowItWorks />
      <AboutPreview />
      <FinalCTA />
    </>
  );
}