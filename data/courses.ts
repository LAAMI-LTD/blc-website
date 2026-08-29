import { Course, DepartmentSlug } from "@/types";

function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/[/&(),.]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}

type Row = [name: string, entryRequirement?: string, extra?: Partial<Course>];

function fromRows(
  department: DepartmentSlug,
  category: string,
  examBody: string | undefined,
  rows: Row[]
): Course[] {
  return rows.map(([name, entryRequirement, extra]) => ({
    slug: slugify(`${category}-${name}`),
    name,
    department,
    category,
    entryRequirement,
    examBody,
    ...extra,
  }));
}

// ---------------------------------------------------------------------------
// DEPARTMENT 1 — LANGUAGES
// (Full CEFR-mapped detail preserved for the original six languages — these
// power the rich /courses/[slug] pages. English, Italian and Kiswahili are
// added per the institutional course list; the marketing brochure's stated
// exam bodies — Goethe/ÖSD for German, DELF/DALF for French, British
// Council for English — are reflected in examBody.)
// ---------------------------------------------------------------------------

export const languageCourses: Course[] = [
  {
    slug: "german",
    name: "German",
    language: "German",
    department: "languages",
    category: "Language Programs",
    nativeGreeting: "Hallo",
    flagRegion: "Germany",
    tagline: "Build everyday and professional fluency in German.",
    description:
      "Our German courses take learners from first words to confident, workplace-ready fluency, following the Goethe/ÖSD exam framework.",
    levels: ["A1", "A2", "B1", "B2"],
    examBody: "Goethe / ÖSD",
    audience: ["Adults & professionals", "Students & young learners", "Businesses & teams"],
    format: ["Regular", "Part-time", "Online"],
    outcomes: [
      "Hold everyday conversations with confidence",
      "Navigate work, study and daily life in German",
      "Prepare for Goethe/ÖSD-aligned proficiency levels",
    ],
    featured: true,
  },
  {
    slug: "french",
    name: "French",
    language: "French",
    department: "languages",
    category: "Language Programs",
    nativeGreeting: "Bonjour",
    flagRegion: "France",
    tagline: "Learn French for travel, culture and career.",
    description:
      "From foundational grammar to nuanced conversation, our French program balances structured learning with real spoken practice, aligned to the DELF/DALF framework.",
    levels: ["A1", "A2", "B1", "B2", "C1"],
    examBody: "DELF / DALF",
    audience: ["Adults & professionals", "Students & young learners"],
    format: ["Regular", "Part-time", "Online"],
    outcomes: [
      "Speak and understand conversational French",
      "Build a strong grammar and vocabulary foundation",
      "Prepare for DELF/DALF examinations",
    ],
    featured: true,
  },
  {
    slug: "chinese",
    name: "Chinese",
    language: "Chinese",
    department: "languages",
    category: "Language Programs",
    nativeGreeting: "你好",
    flagRegion: "China",
    tagline: "Mandarin Chinese for business and everyday communication.",
    description:
      "Our Chinese courses introduce Mandarin pronunciation, characters and conversation in a structured, beginner-friendly progression.",
    levels: ["A1", "A2", "B1", "B2"],
    audience: ["Adults & professionals", "Businesses & teams"],
    format: ["Regular", "Part-time", "Online"],
    outcomes: [
      "Read and write foundational Chinese characters",
      "Communicate confidently in common business and social settings",
      "Build listening skills for spoken Mandarin",
    ],
    featured: true,
  },
  {
    slug: "finnish",
    name: "Finnish",
    language: "Finnish",
    department: "languages",
    category: "Language Programs",
    nativeGreeting: "Hei",
    flagRegion: "Finland",
    tagline: "A steady, structured path into Finnish.",
    description:
      "Finnish is taught in small, focused groups that work through pronunciation, grammar and conversation step by step.",
    levels: ["A1", "A2", "B1"],
    audience: ["Adults & professionals", "Students & young learners"],
    format: ["Regular", "Part-time", "Online"],
    outcomes: [
      "Understand and use everyday Finnish phrases",
      "Build a working knowledge of Finnish grammar",
      "Gain confidence speaking in guided conversation practice",
    ],
    featured: true,
  },
  {
    slug: "spanish",
    name: "Spanish",
    language: "Spanish",
    department: "languages",
    category: "Language Programs",
    nativeGreeting: "Hola",
    flagRegion: "Spain",
    tagline: "Conversational and career-focused Spanish.",
    description:
      "Our Spanish courses combine grammar fundamentals with lively conversation practice for learners of every level.",
    levels: ["A1", "A2", "B1", "B2", "C1"],
    audience: ["Adults & professionals", "Students & young learners", "Businesses & teams"],
    format: ["Regular", "Part-time", "Online"],
    outcomes: [
      "Converse naturally in everyday and professional situations",
      "Strengthen grammar, vocabulary and listening skills",
      "Progress through CEFR-aligned proficiency levels",
    ],
    featured: true,
  },
  {
    slug: "arabic",
    name: "Arabic",
    language: "Arabic",
    department: "languages",
    category: "Language Programs",
    nativeGreeting: "مرحبا",
    flagRegion: "Arabic-speaking world",
    tagline: "Modern Standard Arabic, taught from the ground up.",
    description:
      "Our Arabic courses introduce script, pronunciation and grammar alongside practical, everyday conversation.",
    levels: ["A1", "A2", "B1"],
    audience: ["Adults & professionals", "Businesses & teams"],
    format: ["Regular", "Part-time", "Online"],
    outcomes: [
      "Read and write Arabic script with confidence",
      "Hold basic to intermediate conversations",
      "Understand core grammar structures",
    ],
    featured: true,
  },
  {
    slug: "english-ielts-pte",
    name: "English (IELTS & PTE)",
    language: "English",
    department: "languages",
    category: "Language Programs",
    nativeGreeting: "Hello",
    flagRegion: "International",
    tagline: "IELTS and PTE preparation for study, work and migration abroad.",
    description:
      "English language training with dedicated IELTS and PTE exam preparation tracks, aligned to the British Council framework.",
    examBody: "British Council (IELTS / PTE)",
    audience: ["Adults & professionals", "Students & young learners"],
    format: ["Regular", "Part-time", "Online"],
    outcomes: [
      "Prepare specifically for IELTS or PTE exam formats",
      "Build academic and everyday English proficiency",
      "Support study-and-work-abroad applications",
    ],
    featured: true,
  },
  {
    slug: "italian",
    name: "Italian",
    language: "Italian",
    department: "languages",
    category: "Language Programs",
    nativeGreeting: "Ciao",
    flagRegion: "Italy",
    tagline: "Conversational Italian from the ground up.",
    description:
      "Italian language classes covering pronunciation, grammar fundamentals and everyday conversation.",
    audience: ["Adults & professionals", "Students & young learners"],
    format: ["Regular", "Part-time", "Online"],
    outcomes: ["Hold basic everyday conversations in Italian", "Build core grammar and vocabulary"],
    featured: false,
  },
  {
    slug: "kiswahili",
    name: "Kiswahili",
    language: "Kiswahili",
    department: "languages",
    category: "Language Programs",
    nativeGreeting: "Habari",
    flagRegion: "East Africa",
    tagline: "Kiswahili for learners and professionals.",
    description:
      "Kiswahili language instruction for learners looking to build fluency for local and regional communication.",
    audience: ["Adults & professionals", "Students & young learners"],
    format: ["Regular", "Part-time", "Online"],
    outcomes: ["Communicate confidently in everyday Kiswahili", "Build vocabulary for professional settings"],
    featured: false,
  },
];

// ---------------------------------------------------------------------------
// DEPARTMENT 2 — ICT
// ---------------------------------------------------------------------------

export const ictBasicPackages: Course[] = [
  "Introduction to Computers",
  "MS Windows",
  "MS Word",
  "MS Excel",
  "MS Access",
  "MS PowerPoint",
  "MS Publisher",
  "MS Adobe Pagemaker",
  "Internet & Email, AI",
  "Print, Scan & Laminate",
  "Troubleshooting",
].map((name) => ({
  slug: slugify(`ict-basic-${name}`),
  name,
  department: "ict" as DepartmentSlug,
  category: "Basic Computer Packages",
}));

export const ictAdvancedPackages: Course[] = [
  { name: "Programming (Python, Java, Web Development)" },
  { name: "Graphic Design (Adobe, CorelDRAW)" },
  { name: "Data Analysis (SPSS)" },
  { name: "Networking" },
  { name: "Software Installation" },
  { name: "Computer Maintenance" },
].map(({ name }) => ({
  slug: slugify(`ict-advanced-${name}`),
  name,
  department: "ict" as DepartmentSlug,
  category: "Advanced Computer Packages",
}));

export const ictCourses: Course[] = [...ictBasicPackages, ...ictAdvancedPackages];

// ---------------------------------------------------------------------------
// DEPARTMENT 3 — BUSINESS & TECHNICAL STUDIES
// (Business & Management, Hospitality & Tourism, Engineering, Cosmetology &
// Fashion, Higher Diploma, NITA trades, and KASNEB professional courses —
// all transcribed directly from the supplied BBTI marketing brochures.)
// ---------------------------------------------------------------------------

const businessManagement = fromRows("business-technical", "Business & Management Studies", "KNEC / CDACC", [
  ["Artisan in Store Keeping", "KCPE / KJSEA / KCSE"],
  ["Artisan in Salesmanship", "KCPE / KJSEA / KCSE"],
  ["Cert/Dip in Office Administration", "D / C-"],
  ["Cert/Dip in Supply Chain Management", "D / C-"],
  ["Cert/Dip in Accountancy", "D / C-"],
  ["Cert/Dip in Secretarial Studies", "D / C-"],
  ["Cert/Dip in Sales and Marketing", "D / C-"],
  ["Cert/Dip in Cooperative Management", "D / C-"],
  ["Cert/Dip in ICT", "D / C-"],
  ["Certificate in Banking & Finance", "D / C-"],
  ["Cert/Dip in Human Resource Management", "D / C-"],
  ["Certificate in Road Transport Management", "D / C-"],
  ["Cert/Dip in Project Management and Development", "D / C-"],
  ["Cert/Dip in Library and Information Science", "D / C-"],
]);

const hospitalityTourism = fromRows("business-technical", "Hospitality & Tourism Management", "KNEC / CDACC", [
  ["Artisan in Food & Beverage Management", "KCPE / KJSEA / KCSE"],
  ["Cert/Dip in Housekeeping & Laundry", "D / C-"],
  ["Cert/Dip in Food Processing Technology", "D / C-"],
  ["Cert/Dip in Food & Beverage Management", "D / C-"],
  ["Cert/Dip in Bakery Technology", "D / C-"],
  ["Cert/Dip in Tourism Management", "D / C-"],
  ["Cert/Dip in Tour Operations", "D / C-"],
  ["Cert/Dip in Hotel Catering & Accommodation Management", "D / C-"],
]);

const engineering = fromRows("business-technical", "Engineering", "KNEC / CDACC", [
  ["Artisan in Electrical and Electronic Technology", "KCPE / KJSEA / KCSE"],
  ["Artisan in General Agriculture", "KCPE / KJSEA / KCSE"],
  ["Artisan in Electrical Installation", "KCPE / KJSEA / KCSE"],
  ["Artisan in Plumbing", "KCPE / KJSEA / KCSE"],
  ["Cert/Dip in General Agriculture", "D / C-"],
  ["Cert/Dip in Land Surveying", "D / C-"],
  ["Cert/Dip in Electrical/Electronics Engineering (Power Option)", "D / C-"],
  ["Cert/Dip in Electrical/Electronics (Telecommunication)", "D / C-"],
  ["Certificate in Water Engineering", "D / C-"],
]);

const cosmetologyFashion = fromRows("business-technical", "Cosmetology, Fashion and Design", undefined, [
  ["Artisan in Fashion Design", "D- & below", { examBody: "NITA / KNEC / CDACC" }],
  ["Beauty Therapy", "D", { examBody: "NITA" }],
  ["Cert/Dip in Fashion Design", "D / C-", { examBody: "KNEC / CDACC" }],
  ["Cosmetology", "D / C-", { examBody: "KNEC / CDACC" }],
]);

const higherDiploma = fromRows("business-technical", "Higher Diploma", "KNEC", [
  ["HND in Business Management (Module 1 & 2)", "Degree / KNEC"],
  ["HND in Human Resource Management"],
  ["HND in Project Management"],
  ["HND in Library, Archives and Information Science (Module 1 & 2)"],
  ["HND in Tourism Management"],
  ["HND in Secretarial Studies"],
  ["HND in Entrepreneurship"],
]);

const nitaCourses: Course[] = [
  "Hair Dressing",
  "Artisan in Dressmaking",
  "Electrical Installation",
  "Plumbing",
  "Food & Beverage Management",
  "Beauty Therapy",
  "Automotive Engineering",
  "Carpentry & Joinery",
  "Masonry",
].map((name) => ({
  slug: slugify(`nita-${name}`),
  name,
  department: "business-technical" as DepartmentSlug,
  category: "NITA Courses",
  examBody: "NITA",
  duration: "6 months per grade",
}));

const kasnebCourses = fromRows("business-technical", "KASNEB Courses", "KASNEB", [
  ["CAMS (Level I – III)", "D+ (plus)"],
  ["ATD (Level I – III)", "C- (minus)"],
  ["CPA (Foundation)", "C+ (plus)"],
  ["CPA (Intermediate)", "Pass in Foundation"],
  ["CPA (Advanced)", "Pass in Foundation"],
]).map((c) => ({ ...c, price: "KES 10,000 per unit" }));

export const businessTechnicalCourses: Course[] = [
  ...businessManagement,
  ...hospitalityTourism,
  ...engineering,
  ...cosmetologyFashion,
  ...higherDiploma,
  ...nitaCourses,
  ...kasnebCourses,
];

// ---------------------------------------------------------------------------
// DEPARTMENT 4 — HEALTH SCIENCES
// ---------------------------------------------------------------------------

export const healthSciencesCourses: Course[] = fromRows(
  "health-sciences",
  "Health & Social Sciences",
  undefined,
  [
    ["Certified Nurse Assistant / Caregiver", "D- & above", { examBody: "HealthLogic" }],
    ["Cert/Dip in Nutrition & Dietetics Management", "D / C-", { examBody: "KNEC / CDACC" }],
    ["Cert/Dip in Community Health and Development", "D / C-", { examBody: "KNEC / CDACC, APTTI" }],
    ["Certificate in Social Work", "D / C-", { examBody: "KNEC / CDACC" }],
    ["Cert/Dip in Health Records with IT", "C / C-", { examBody: "APTTI / HRIM Board" }],
    ["Diploma in Disaster Management & Trauma Counselling", "C-", { examBody: "KNEC / CDACC" }],
    ["Certificate in Science Laboratory", "D", { examBody: "KNEC / CDACC" }],
    ["Diploma in Counselling", "C-", { examBody: "KNEC / CDACC" }],
    ["Diploma in Spiritual Counselling", "C-", { examBody: "KNEC / CDACC" }],
    ["Diploma in HIV Testing and Management", "C-", { examBody: "KNEC / CDACC" }],
    [
      "Cert/Dip in Development Studies with Entrepreneurship Skills",
      "D / C-",
      { examBody: "KNEC / CDACC" },
    ],
  ]
);

// ---------------------------------------------------------------------------
// DEPARTMENT 5 — PROFESSIONAL SHORT COURSES
// (Duration & price transcribed directly from the supplied trifold ad —
// prices are only included where the source material actually states one.)
// ---------------------------------------------------------------------------

export const professionalShortCourses: Course[] = [
  { name: "Online Digital Marketing", duration: "1 month", price: "KES 10,000" },
  { name: "Project Management", duration: "2 months", price: "KES 14,000" },
  { name: "Public Speaking", duration: "1 month", price: "KES 7,000" },
  { name: "Nurse Assistant", duration: "1 month", price: "KES 3,000" },
  { name: "Care Giving", duration: "4 months", price: "KES 28,000" },
  { name: "CCTV Installation", duration: "1 month", price: "KES 7,000" },
  { name: "Online Conferencing", duration: "1 month", price: "KES 10,000" },
  { name: "Nail Technology", duration: "1 month" }, // price not stated on the source material
].map(({ name, duration, price }) => ({
  slug: slugify(`short-${name}`),
  name,
  department: "professional-courses" as DepartmentSlug,
  category: "Professional Short Courses",
  duration,
  price,
}));

// ---------------------------------------------------------------------------
// Combined export + helpers
// ---------------------------------------------------------------------------

export const courses: Course[] = [
  ...languageCourses,
  ...ictCourses,
  ...businessTechnicalCourses,
  ...healthSciencesCourses,
  ...professionalShortCourses,
];

export function getCourseBySlug(slug: string) {
  return courses.find((c) => c.slug === slug);
}

export function getCoursesByDepartment(department: DepartmentSlug) {
  return courses.filter((c) => c.department === department);
}