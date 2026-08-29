export type NavLink = {
  label: string;
  href: string;
};

export type SocialLink = {
  label: string;
  href: string;
};

export type DepartmentSlug =
  | "languages"
  | "ict"
  | "business-technical"
  | "health-sciences"
  | "professional-courses";

export type Department = {
  slug: DepartmentSlug;
  name: string;
  shortDescription: string;
  iconName: "Languages" | "Monitor" | "Briefcase" | "HeartPulse" | "Sparkles";
};

// A single, unified Course model shared across every department.
// Languages courses (the original, richer content) use the optional
// "language-specific" fields below; every other department's courses
// use the "brochure-derived" fields. All fields beyond slug/name/department
// are optional because the source marketing material doesn't supply the
// same level of detail for every course line — we never invent what's missing.
export type Course = {
  slug: string;
  name: string;
  department: DepartmentSlug;
  category: string; // sub-group within a department, e.g. "Engineering", "NITA Courses"
  description?: string;
  duration?: string;
  entryRequirement?: string;
  examBody?: string;
  price?: string; // only ever populated when the source material states a price
  featured?: boolean;
  cta?: string;

  // Language-department-specific fields (used by /courses/[slug])
  language?: string;
  nativeGreeting?: string;
  flagRegion?: string;
  tagline?: string;
  levels?: string[];
  audience?: string[];
  format?: string[];
  outcomes?: string[];
};

export type TeamMember = {
  slug: string;
  name: string;
  title: string;
  department: DepartmentSlug | "leadership";
  bio: string;
};

export type Testimonial = {
  name: string;
  course: string;
  quote: string;
  graduationYear?: string;
  isSample: boolean;
};