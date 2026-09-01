import { TeamMember } from "@/types";

// Real names, titles and biographies as supplied in the organization's
// "Organization Details b4 launch" document. Photos have not been supplied
// yet (expected filenames are noted per person) — hasPhoto stays false so
// the UI shows a placeholder instead of a broken image. Once the real
// files are added at /public/team/<photoFile>, flip hasPhoto to true.
export const team: TeamMember[] = [
  {
    slug: "paul-kamau",
    name: "Paul Kamau",
    title: "Director",
    department: "leadership",
    isDirector: true,
    bio: "Paul is the Head of Languages and BBTI and speaks over eight languages. Over 4 local languages with various dialect conversation and 5+ foreign languages. He has additional certifications in educational leadership and educational management training. Mr. Felix speaks not only Swahili and English but also French and German fluently. His teaching experience spans over 18 years with hands-on experience delivering specific frameworks like Cambridge, International Baccalaureate (IB), GCSE, or A-Level standards. Not to mention his pastoral and extra-curricular Experience in student welfare, boarding school environments, or organizing student activities",
    photoFile: "director.jpeg",
    hasPhoto: true,
  },
  {
    slug: "felix-parnoti",
    name: "Felix Parnoti",
    title: "Head of Department – Languages",
    department: "languages",
    bio: "Felix Parnoti is the Head of Languages at BBTI and holds a Bachelor's BA in French, a Postgraduate degree in Teaching French as a Foreign Language, and a KNEC Secondary School Teacher Certificate (German & CRE), with additional certifications in educational leadership and management. He speaks Swahili, English, French and German fluently. His teaching experience spans over 18 years, including hands-on delivery of frameworks such as Cambridge, IB, GCSE and A-Level standards, alongside pastoral and extra-curricular experience in student welfare and boarding school environments. His core competencies include modern language teaching methods and learning technologies, mentoring staff, running departmental meetings, and managing performance and communication with students, parents and school leadership.",
    photoFile: "lan-hod.jpg",
    hasPhoto: true,
  },
  {
    slug: "joel-chege",
    name: "Joel Chege",
    title: "Head of Department – ICT",
    department: "ict",
    bio: "Joel Chege brings over 10 years of teaching and leadership experience with a specialized background in advanced computing frameworks, curriculum design, and educational technology. He has extensive experience teaching core computer science curriculums, including AP Computer Science, IGCSE, A-Levels, IB Diploma and university-level courses. He holds a Bachelor's degree in Computer Science and is currently pursuing ongoing professional validation in specialized tech ecosystems such as Cisco (CCNA), CompTIA, Microsoft Certified Educator (MCE) and Google Certified Trainer pathways.",
    photoFile: "ict-hod.jpeg",
    hasPhoto: true,
  },
  {
    slug: "christopher-kiplagat",
    name: "Mr Christopher Kiplagat",
    title: "Head of Department – Business & Technical Studies",
    department: "business-technical",
    bio: "Mr Christopher Kiplagat holds a B.Com bachelor's degree with a PGCE (Postgraduate Certificate in Education) and has over five years of classroom teaching experience in Business Studies and Economics. He has a proven track record preparing students for national and international examinations, including KNEC, CDACC and ICM Diploma exams, and has coordinated enterprise, entrepreneurship and practical business projects beyond the standard classroom. His leadership roles include mentoring teachers, coordinating professional development, and reviewing department performance, analyzing exam results and setting improvement targets with school leadership.",
    photoFile: "bt-hod.jpeg",
    hasPhoto: true,
  },
  {
    slug: "mary-cheruto",
    name: "Mary Cheruto",
    title: "Head of Department – Health Sciences",
    department: "health-sciences",
    bio: "Mary Cheruto oversees curriculum development, designing and updating practical, industry-relevant courses and training modules. She holds a Master's Degree in Civil Engineering and brings expertise across applied sciences, engineering and IT. Her role also includes evaluating teaching methods and guiding staff on modern training techniques.",
    photoFile: "health-hod.jpg",
    hasPhoto: true,
  },
  {
    slug: "ajuma-kalasinga",
    name: "Ms Ajuma Kalasinga",
    title: "Head of Department – Professional Short Courses",
    department: "professional-courses",
    bio: "Ms Ajuma Kalasinga manages BBTI's non-degree programs, professional certifications and vocational training. She holds a Bachelor's degree in Entrepreneurship Studies and brings a combination of academic leadership, industry networking and business management skills to the department.",
    photoFile: "short-hod.jpeg",
    hasPhoto: true,
  },
];

export const director = team.find((m) => m.isDirector);
export const headsOfDepartment = team.filter((m) => !m.isDirector);
