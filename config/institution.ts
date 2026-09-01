import type { NavLink, SocialLink, Branch } from "@/types";

export const institution = {
  name: "Berlin Business Training Institute",
  shortName: "BBTI",
  tagline: "Career Empowerment For Success",
  description:
    "Berlin Business Training Institute (BBTI) is a TVETA-accredited career training institution in Kenya, offering practical, industry-oriented courses across Languages, ICT, Business & Technical Studies, Health Sciences and Professional Short Courses.",
  country: "Kenya",
  // Intended production domain, confirmed by the organization. Resend's
  // sending domain and the site's canonical/OG URLs should both move to
  // this once DNS + Resend domain verification are complete.
  website: "https://bbti.co.ke",
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
  // Confirmed by the organization as the intended future address, pending
  // the bbti.co.ke domain going live in Resend. Not yet the primary
  // contact address — shown as a secondary note where relevant.
  futureEmail: "info@bbti.co.ke",
  location: "Rehema Complex Building, 4th Floor, Left Wing",
  street: "Ronald Ngala Street, Eldoret",
  postalAddress: "P.O. Box 5938-30100, Eldoret",
  postalCode: "30100",
  // Google's "Plus Code" for the building, as supplied by the organization.
  // No Google Maps API key is required for either of these — both are
  // plain URLs.
  googleMaps: {
    plusCode: "G78G+GRW",
    query: "G78G+GRW, Ronald Ngala St, Eldoret",
    get embedUrl() {
      return `https://www.google.com/maps?q=${encodeURIComponent(this.query)}&output=embed`;
    },
    get shareUrl() {
      return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(this.query)}`;
    },
  },
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

// Branches beyond the primary Eldoret location. Address and phone are only
// populated where the organization explicitly supplied them — nothing here
// is invented.
export const branches: Branch[] = [
  {
    name: "Kapsabet",
    address: "Grand View House, 2nd Floor, Room C6",
    phone: "0722 951 415",
  },
  {
    name: "Bungoma",
    address: "Cooperative Bank Building, 2nd Floor, Room 4, Bungoma Town",
    phone: "0792 885 023",
  },
  {
    name: "Busia",
    address: "YMCA Grounds, Busia",
    phone: "0728 774 794",
  },
  {
    name: "Kericho",
    address: "Cooperative Bank Building, 2nd Floor, Room 107, Kericho Town",
    phone: "0711 720 448",
  },
];

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

// Official BBTI social media accounts (handle: bbti.ke across all platforms)
export const socialLinks: SocialLink[] = [
  {
    label: "Facebook",
    href: "https://facebook.com/bbti.ke",
  },
  {
    label: "Instagram",
    href: "https://instagram.com/bbti.ke",
  },
  {
    label: "TikTok",
    href: "https://tiktok.com/@bbti.ke",
  },
];
