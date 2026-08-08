import { Course } from "@/types";

export const courses: Course[] = [
  {
    slug: "german",
    language: "German",
    nativeGreeting: "Hallo",
    flagRegion: "Germany",
    tagline: "Build everyday and professional fluency in Berlin's own language.",
    description:
      "Our German courses take learners from first words to confident, workplace-ready fluency, with a strong focus on the spoken German used across Berlin.",
    levels: ["A1", "A2", "B1", "B2", "C1", "C2"],
    audience: ["Adults & professionals", "Students & young learners", "Businesses & teams"],
    format: ["Group classes", "Private lessons", "Corporate training"],
    outcomes: [
      "Hold everyday conversations with confidence",
      "Navigate work, study and daily life in German",
      "Prepare for recognized CEFR-aligned proficiency levels",
    ],
    featured: true,
  },
  {
    slug: "french",
    language: "French",
    nativeGreeting: "Bonjour",
    flagRegion: "France",
    tagline: "Learn French for travel, culture and career.",
    description:
      "From foundational grammar to nuanced conversation, our French program balances structured learning with real spoken practice.",
    levels: ["A1", "A2", "B1", "B2", "C1"],
    audience: ["Adults & professionals", "Students & young learners"],
    format: ["Group classes", "Private lessons"],
    outcomes: [
      "Speak and understand conversational French",
      "Build a strong grammar and vocabulary foundation",
      "Progress along the CEFR framework at your own pace",
    ],
    featured: true,
  },
  {
    slug: "chinese",
    language: "Chinese",
    nativeGreeting: "你好",
    flagRegion: "China",
    tagline: "Mandarin Chinese for business and everyday communication.",
    description:
      "Our Chinese courses introduce Mandarin pronunciation, characters and conversation in a structured, beginner-friendly progression.",
    levels: ["A1", "A2", "B1", "B2"],
    audience: ["Adults & professionals", "Businesses & teams"],
    format: ["Group classes", "Private lessons", "Corporate training"],
    outcomes: [
      "Read and write foundational Chinese characters",
      "Communicate confidently in common business and social settings",
      "Build listening skills for spoken Mandarin",
    ],
    featured: true,
  },
  {
    slug: "finnish",
    language: "Finnish",
    nativeGreeting: "Hei",
    flagRegion: "Finland",
    tagline: "A steady, structured path into Finnish.",
    description:
      "Finnish is taught in small, focused groups that work through pronunciation, grammar and conversation step by step.",
    levels: ["A1", "A2", "B1"],
    audience: ["Adults & professionals", "Students & young learners"],
    format: ["Group classes", "Private lessons"],
    outcomes: [
      "Understand and use everyday Finnish phrases",
      "Build a working knowledge of Finnish grammar",
      "Gain confidence speaking in guided conversation practice",
    ],
    featured: true,
  },
  {
    slug: "spanish",
    language: "Spanish",
    nativeGreeting: "Hola",
    flagRegion: "Spain",
    tagline: "Conversational and career-focused Spanish.",
    description:
      "Our Spanish courses combine grammar fundamentals with lively conversation practice for learners of every level.",
    levels: ["A1", "A2", "B1", "B2", "C1"],
    audience: ["Adults & professionals", "Students & young learners", "Businesses & teams"],
    format: ["Group classes", "Private lessons", "Corporate training"],
    outcomes: [
      "Converse naturally in everyday and professional situations",
      "Strengthen grammar, vocabulary and listening skills",
      "Progress through CEFR-aligned proficiency levels",
    ],
    featured: true,
  },
  {
    slug: "arabic",
    language: "Arabic",
    nativeGreeting: "مرحبا",
    flagRegion: "Arabic-speaking world",
    tagline: "Modern Standard Arabic, taught from the ground up.",
    description:
      "Our Arabic courses introduce script, pronunciation and grammar alongside practical, everyday conversation.",
    levels: ["A1", "A2", "B1"],
    audience: ["Adults & professionals", "Businesses & teams"],
    format: ["Group classes", "Private lessons"],
    outcomes: [
      "Read and write Arabic script with confidence",
      "Hold basic to intermediate conversations",
      "Understand core grammar structures",
    ],
    featured: true,
  },
];

export function getCourseBySlug(slug: string) {
  return courses.find((c) => c.slug === slug);
}