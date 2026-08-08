import { NavLink, SocialLink } from "@/types";

export const site = {
  name: "Berlin Language Center",
  shortName: "BLC",
  tagline: "Six languages. One city to learn them in.",
  description:
    "Berlin Language Center has taught German, French, Chinese, Finnish, Spanish and Arabic to professionals, students and businesses in Berlin since 2015.",
  foundedYear: 2015,
  primaryCta: { label: "Book a Free Consultation", href: "/contact" },
  secondaryCta: { label: "View Courses", href: "/courses" },
};

export const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Courses", href: "/courses" },
  { label: "Team", href: "/team" },
  { label: "Contact", href: "/contact" },
];

export const contact = {
  phone: "[Organization Phone]",
  email: "[Organization Email]",
  address: "[Physical Address, Berlin, Germany]",
  whatsapp: "[WhatsApp Number]",
  hours: [
    { days: "Monday – Friday", time: "[Business Hours]" },
    { days: "Saturday", time: "[Business Hours]" },
    { days: "Sunday", time: "Closed" },
  ],
};

export const socialLinks: SocialLink[] = [
  { label: "Facebook", href: "[Facebook URL]" },
  { label: "Instagram", href: "[Instagram URL]" },
  { label: "LinkedIn", href: "[LinkedIn URL]" },
  { label: "TikTok", href: "[TikTok URL]" },
];