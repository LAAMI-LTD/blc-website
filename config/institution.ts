import type { NavLink, SocialLink } from "@/types";

export const institution = {
  name: "Berlin Business Training Institute",
  shortName: "BBTI",
  tagline: "Career Empowerment For Success",
  description:
    "Berlin Business Training Institute (BBTI) is a TVETA-accredited career training institution in Kenya, offering practical, industry-oriented courses across Languages, ICT, Business & Technical Studies, Health Sciences and Professional Short Courses.",
  country: "Kenya",
  registration: {
    label: "TVETA Registration",
    number: "TVETA/PRIVATE/TVC/0143/2024",
  },
  primaryCta: { label: "Explore Courses", href: "/courses" },
  secondaryCta: { label: "Contact / Enquire Now", href: "/contact" },
};

export const contact = {
  phone: "0723 222 792",
  phoneHref: "tel:+254723222792",
  email: "bbtikenya@gmail.com",
  location: "Rehema Complex",
  whatsapp: {
    displayNumber: "0723 222 792",
    // International (Kenyan) format required for the wa.me deep link
    internationalNumber: "254723222792",
    defaultMessage: "Hello BBTI, I would like to enquire about your courses.",
    get href() {
      return `https://wa.me/${this.internationalNumber}?text=${encodeURIComponent(
        this.defaultMessage
      )}`;
    },
  },
};

// Branches beyond the primary location. No street addresses are fabricated —
// only branch names, per the supplied institutional information.
export const branches = ["Kapsabet", "Bungoma", "Busia", "Kericho"];

export const businessHours = [
  { days: "Monday – Friday", time: "8:00 AM – 8:00 PM" },
  { days: "Saturday", time: "8:00 AM – 5:00 PM" },
  { days: "Sunday", time: "12:00 PM – 6:00 PM" },
];

export const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Courses", href: "/courses" },
  { label: "Team", href: "/team" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Contact", href: "/contact" },
];

// Only populate with real, verified URLs — omit rather than fabricate.
export const socialLinks: SocialLink[] = [];
