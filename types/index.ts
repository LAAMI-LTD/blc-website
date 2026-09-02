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
  // Optional full-card image. Left unset (hasImage: false) until the
  // organization supplies real institutional photography — DepartmentCard
  // falls back to a branded gradient + icon treatment rather than
  // inventing a photo. `image` records the expected filename so adding
  // the real asset later is a one-line change.
  image?: string;
  hasImage?: boolean;
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
  isDirector?: boolean;
  // Expected photo filename supplied by the organization (e.g. "director.jpg").
  // The actual image file hasn't been supplied yet, so `hasPhoto` stays false
  // and the UI shows a placeholder — flip it to true once the real file is
  // added at /public/team/<photoFile>.
  photoFile?: string;
  hasPhoto?: boolean;
};

export type Branch = {
  name: string;
  address?: string;
  phone?: string;
};

export type Testimonial = {
  name: string;
  course: string;
  quote: string;
  graduationYear?: string;
  isSample: boolean;
  photoFile?: string;
  hasPhoto?: boolean;
};
