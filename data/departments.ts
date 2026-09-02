import { Department } from "@/types";

export const departments: Department[] = [
  {
    slug: "languages",
    name: "Languages",
    shortDescription:
      "German, French, Chinese, Finnish, Spanish, English (IELTS & PTE), Italian and Kiswahili — plus exam preparation and study/work-abroad pathways.",
    iconName: "Languages",
    image: "languages.jpg", 
    hasImage:true,
  },
  {
    slug: "ict",
    name: "ICT",
    shortDescription:
      "Basic computer packages through advanced programming, graphic design, data analysis, networking and computer maintenance.",
    iconName: "Monitor",
    // The organization's supplied asset list names complab.jpg/computer.jpg
    // for this department, but the actual files haven't been supplied to
    // this project yet — hasImage stays false until they are.
    image: "complab.png",
    hasImage: true,
  },
  {
    slug: "business-technical",
    name: "Business & Technical Studies",
    shortDescription:
      "Business & management, hospitality & tourism, engineering, cosmetology & fashion, NITA trades, KASNEB programs and higher diplomas.",
    iconName: "Briefcase",
    image: "technical.png",
    hasImage: true,
  },
  {
    slug: "health-sciences",
    name: "Health Sciences",
    shortDescription:
      "Nurse assistant, community health, counselling, health records, disaster management and related health & social science programs.",
    iconName: "HeartPulse",
    image: "health.png",
    hasImage: true,
  },
  {
    slug: "professional-courses",
    name: "Professional Short Courses",
    shortDescription:
      "Short, practical courses including digital marketing, project management, public speaking, CCTV installation and more.",
    iconName: "Sparkles",
    image: "short.png",
    hasImage: true,
  },
];

export function getDepartmentBySlug(slug: string) {
  return departments.find((d) => d.slug === slug);
}
