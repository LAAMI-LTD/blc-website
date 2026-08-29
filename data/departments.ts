import { Department } from "@/types";

export const departments: Department[] = [
  {
    slug: "languages",
    name: "Languages",
    shortDescription:
      "German, French, Chinese, Finnish, Spanish, English (IELTS & PTE), Italian and Kiswahili — plus exam preparation and study/work-abroad pathways.",
    iconName: "Languages",
  },
  {
    slug: "ict",
    name: "ICT",
    shortDescription:
      "Basic computer packages through advanced programming, graphic design, data analysis, networking and computer maintenance.",
    iconName: "Monitor",
  },
  {
    slug: "business-technical",
    name: "Business & Technical Studies",
    shortDescription:
      "Business & management, hospitality & tourism, engineering, cosmetology & fashion, NITA trades, KASNEB programs and higher diplomas.",
    iconName: "Briefcase",
  },
  {
    slug: "health-sciences",
    name: "Health Sciences",
    shortDescription:
      "Nurse assistant, community health, counselling, health records, disaster management and related health & social science programs.",
    iconName: "HeartPulse",
  },
  {
    slug: "professional-courses",
    name: "Professional Short Courses",
    shortDescription:
      "Short, practical courses including digital marketing, project management, public speaking, CCTV installation and more.",
    iconName: "Sparkles",
  },
];

export function getDepartmentBySlug(slug: string) {
  return departments.find((d) => d.slug === slug);
}
