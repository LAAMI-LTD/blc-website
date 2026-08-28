# Berlin Business Training Institute — Website

Next.js 16 (App Router) · TypeScript · Tailwind CSS v4 · shadcn/ui primitives · React Hook Form + Zod

> This project began as "Berlin Language Center" and is being migrated in
> controlled phases into the official Berlin Business Training Institute
> (BBTI) website. This README is the living architecture doc — update it
> as each phase lands.

---

## UI library decision: shadcn/ui (not Aceternity UI)

Two component libraries were considered:

| | **shadcn/ui** (chosen) | Aceternity UI |
|---|---|---|
| What it is | Accessible, unstyled primitives (Radix UI) that you copy into your own codebase and own | Pre-built, highly animated marketing/landing components (spotlight cards, 3D tilt, beam effects) |
| Fit for this project | Exactly what's needed for **forms**: `Input`, `Select`, `Textarea`, `Label` with correct ARIA behavior, keyboard nav, focus states | Built for flashy hero sections, not form primitives — would need heavy restyling to look institutional |
| Accessibility | Built on Radix UI — WAI-ARIA compliant out of the box | Varies; not its focus |
| Spec alignment | Directly requested in the spec (`shadcn/ui` + Lucide icons) | Would conflict with the spec's "avoid excessive animation... professional institution, not a gaming website" guidance |
| Bundle/complexity cost | Low — only the primitives you copy in, no extra runtime dependency beyond Radix | Larger, more opinionated animation dependencies (framer-motion-heavy) |

**Decision:** shadcn/ui for all form and interactive primitives. Aceternity-style effects are not used anywhere on this site — the brand (a Kenyan TVET institution) calls for a credible, professional feel, not a landing-page-with-particle-effects feel.

### How shadcn/ui was added

The `shadcn` CLI (`npx shadcn@latest add ...`) fetches its component registry from `ui.shadcn.com`, which isn't reachable from this build environment's sandboxed network. Since shadcn's whole model is "you own the code, not a package," the components were hand-authored using the exact same convention the CLI produces:

- `components.json` — standard shadcn config (style: `new-york`, RSC-aware, path aliases), so the real CLI will work normally in your local/CI environment if you ever want to `npx shadcn add <component>` for something new.
- `lib/utils.ts` — already had the `cn()` helper (clsx + tailwind-merge) that every shadcn component expects.
- `components/ui/input.tsx`, `textarea.tsx`, `label.tsx`, `select.tsx` — written against the same Radix primitives (`@radix-ui/react-label`, `@radix-ui/react-select`) and `class-variance-authority` conventions shadcn uses, styled with this project's existing CSS-variable design tokens instead of shadcn's default palette.
- `components/forms/ContactForm.tsx` — refactored to use `Input` / `Textarea` / `Label` for all text fields, and `Select` (via React Hook Form's `Controller`, since Radix Select isn't a native `<select>` and can't use `register()` directly) for the course/department dropdown.

New dependencies added: `class-variance-authority`, `@radix-ui/react-label`, `@radix-ui/react-select`, `@radix-ui/react-slot`.

If you want, the next form fields (department picker, branch picker) can follow this same pattern.

---

## Current project structure

```
blc-website/
├── components.json              # shadcn/ui config (style, aliases, icon library)
├── app/
│   ├── layout.tsx                # Root layout: fonts, metadata, Navbar/Footer shell
│   ├── page.tsx                   # Homepage
│   ├── globals.css                # Design tokens (colors, type, spacing) + base styles
│   ├── robots.ts                  # robots.txt generation
│   ├── sitemap.ts                 # sitemap.xml generation
│   ├── about/page.tsx
│   ├── courses/
│   │   ├── page.tsx                # Course listing
│   │   └── [slug]/page.tsx         # Dynamic course detail
│   ├── team/page.tsx
│   └── contact/page.tsx
│
├── components/
│   ├── layout/        Navbar.tsx, Footer.tsx
│   ├── ui/             Container, Button, SectionHeading, Badge, Card
│   │                    + shadcn primitives: input, textarea, label, select
│   ├── home/           Hero, Trust, CoursesGrid, WhyUs, HowItWorks, AboutPreview
│   ├── sections/       FinalCTA, PageHero
│   └── forms/          ContactForm.tsx (RHF + Zod + shadcn primitives)
│
├── data/
│   ├── site.ts          # ⚠️ to become config/institution.ts in Phase 2
│   ├── courses.ts        # ⚠️ to become department-aware in Phase 3
│   └── team.ts
│
├── lib/utils.ts          # cn() helper
├── types/index.ts        # Shared TypeScript types
└── public/logo/          # ⚠️ old BLC logo — replaced in Phase 2
```

## Target structure (end of migration)

```
blc-website/
├── components.json
├── .env.example                       # NEW — RESEND_API_KEY, CONTACT_EMAIL
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── globals.css
│   ├── robots.ts / sitemap.ts
│   ├── icon.png                        # NEW — BBTI favicon
│   ├── about/page.tsx
│   ├── departments/[slug]/page.tsx     # NEW — department landing pages
│   ├── courses/[slug]/page.tsx
│   ├── team/page.tsx
│   ├── testimonials/page.tsx           # NEW
│   ├── contact/page.tsx
│   └── api/
│       └── contact/route.ts            # NEW — real form handler (Resend)
│
├── components/
│   ├── layout/        Navbar.tsx, Footer.tsx
│   ├── ui/             existing primitives + shadcn primitives
│   ├── home/           existing sections, re-themed for BBTI
│   ├── sections/       FinalCTA, PageHero
│   ├── forms/          ContactForm.tsx (wired to /api/contact)
│   ├── whatsapp/        NEW — WhatsAppButton.tsx (floating CTA)
│   ├── team/             NEW — TeamCard.tsx
│   ├── testimonials/     NEW — TestimonialCard.tsx, TestimonialsCarousel.tsx
│   └── departments/      NEW — DepartmentCard.tsx, CourseTable.tsx
│
├── config/
│   └── institution.ts                  # NEW — single source of truth:
│                                        # name, tagline, phone, whatsapp, email,
│                                        # location, branches, businessHours, socialLinks
│
├── data/
│   ├── departments.ts                  # NEW — 5 BBTI departments
│   ├── courses.ts                       # UPDATED — department-aware course model
│   ├── team.ts                          # UPDATED — HOD schema
│   └── testimonials.ts                  # NEW
│
├── lib/utils.ts
├── types/index.ts                        # UPDATED — Department, expanded Course, Testimonial
└── public/
    ├── logo/                             # NEW — official BBTI logo (transparent PNG)
    └── marketing/                        # NEW — cropped hostel image, brochure assets
```

**Why `config/institution.ts` instead of `data/site.ts`:** the spec calls this out explicitly as the place BBTI staff/developers should look to change a phone number, add a branch, or add an HOD — separating *institutional identity/contact facts* (`config/`) from *content collections* (`data/`) makes that intent clearer as the data layer grows to 4+ files.

---

## Scripts

```bash
npm run dev      # local dev server
npm run lint      # ESLint
npm run build     # production build — must pass with 0 errors before each phase is considered done
```

## Environment variables (Phase 4)

```
RESEND_API_KEY=      # server-side only, never exposed to the client
CONTACT_EMAIL=bbtikenya@gmail.com
```

## Migration phase status

- [x] Phase 1 — Audit
- [x] Phase 2 — Brand migration (logo, colors, institution config, metadata)
- [ ] Phase 3 — Information architecture (departments, courses, team, testimonials, hostel)
- [ ] Phase 4 — Contact & conversion (API route, WhatsApp button)
- [ ] Phase 5 — UI/UX polish
- [ ] Phase 6 — SEO & performance
- [ ] Phase 7 — QA

### Phase 2 notes

- Colors were **sampled directly from the official logo** (`berlin_business_training_logo.png`) via pixel quantization, not eyeballed — see the hex values in `app/globals.css`.
- Display font changed from Fraunces (editorial serif, suited to the old language-school brand) to **Manrope** (geometric sans) — better fits "modern, energetic, career-focused" than an ornate serif.
- `app/icon.png` (512×512, transparent) generated from the shield logo for the site favicon.
- `public/logo/bbti-logo.png` (transparent shield) used in Navbar/Footer/About/favicon; `public/logo/bbti-logo-lockup.jpeg` (horizontal lockup on dark background) reserved for Open Graph/social preview images.
- The homepage Courses section and `/courses` page still only show the **Languages** department (6 languages) — this is real BBTI content (Languages remains one of the five departments), not leftover brand content, but it's clearly flagged in-page as a partial view pending Phase 3's full department catalogue.
- `data/team.ts` still uses per-language instructor placeholders rather than the HOD-per-department structure the spec calls for — that's Phase 3 scope.
- The contact form's "Language of Interest" field is unchanged (still mock-submits) — Phase 3 will broaden it to a department/course picker, Phase 4 will wire it to a real API route.