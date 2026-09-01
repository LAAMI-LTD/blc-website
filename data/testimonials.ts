import { Testimonial } from "@/types";

// Real student names, courses and expected photo filenames were supplied
// in the organization's launch document — but the testimonial quote text
// itself was left as instructional placeholders (e.g. "[Provide a clear
// and short correct testimony of the student]"), not actual approved
// wording. Per the launch brief, we never invent testimonial quotes and
// present them as genuine — so `quote` stays a clearly-labeled pending
// notice until the organization supplies real, approved statements.
// `isSample: true` keeps the "Sample" badge visible on these cards.
export const testimonials: Testimonial[] = [
  {
    name: "Mary Chebet",
    course: "Caregiving",
    quote: "Approved testimonial pending — this student's quote has not yet been supplied.",
    isSample: true,
    photoFile: "student1.jpg",
    hasPhoto: false,
  },
  {
    name: "Ian Kimani",
    course: "Basic Computer Packages",
    quote: "Approved testimonial pending — this student's quote has not yet been supplied.",
    isSample: true,
    photoFile: "student2.jpg",
    hasPhoto: false,
  },
  {
    name: "Joy Nekesa",
    course: "IELTS",
    quote: "Approved testimonial pending — this student's quote has not yet been supplied.",
    isSample: true,
    photoFile: "student3.jpg",
    hasPhoto: false,
  },
  {
    name: "Oscar Kimutai",
    course: "German",
    quote: "Approved testimonial pending — this student's quote has not yet been supplied.",
    isSample: true,
    photoFile: "student4.jpg",
    hasPhoto: false,
  },
  {
    name: "Patience Quinn",
    course: "Cosmetology",
    quote: "Approved testimonial pending — this student's quote has not yet been supplied.",
    isSample: true,
    photoFile: "student5.jpg",
    hasPhoto: false,
  },
];
