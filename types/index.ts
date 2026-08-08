export type NavLink = {
  label: string;
  href: string;
};

export type SocialLink = {
  label: string;
  href: string;
};

export type Course = {
  slug: string;
  language: string;
  nativeGreeting: string;
  flagRegion: string;
  tagline: string;
  description: string;
  levels: string[];
  audience: string[];
  format: string[];
  outcomes: string[];
  featured: boolean;
};

export type TeamMember = {
  slug: string;
  name: string;
  role: string;
  languages: string[];
  bio: string;
};

export type Testimonial = {
  name: string;
  role: string;
  quote: string;
  isSample: boolean;
};