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

## Current project structure (after Phase 3)

```
blc-website/
├── components.json              # shadcn/ui config (style, aliases, icon library)
├── app/
│   ├── layout.tsx                # Root layout: fonts, metadata, Navbar/Footer shell
│   ├── page.tsx                   # Homepage
│   ├── globals.css                # Design tokens (colors, type, spacing) + base styles
│   ├── robots.ts / sitemap.ts
│   ├── icon.png                    # BBTI favicon (generated from the shield logo)
│   ├── about/page.tsx
│   ├── departments/[slug]/page.tsx # 5 department pages (course tables by category)
│   ├── courses/
│   │   ├── page.tsx                # Department overview (5 cards)
│   │   └── [slug]/page.tsx         # 9 language course detail pages (dynamicParams: false)
│   ├── team/page.tsx                # Head of Department profiles
│   ├── testimonials/page.tsx        # Student testimonials (sample data)
│   └── contact/page.tsx
│
├── components/
│   ├── layout/        Navbar.tsx, Footer.tsx
│   ├── ui/             Container, Button, SectionHeading, Badge, Card
│   │                    + shadcn primitives: input, textarea, label, select
│   ├── home/           Hero, Trust, DepartmentsOverview, WhyUs, HowItWorks,
│   │                    HostelSection, TestimonialsPreview, AboutPreview
│   ├── departments/     DepartmentCard.tsx, CourseTable.tsx
│   ├── testimonials/    TestimonialCard.tsx
│   ├── sections/       FinalCTA, PageHero
│   └── forms/          ContactForm.tsx (RHF + Zod + shadcn primitives)
│
├── config/
│   └── institution.ts   # Single source of truth: name, tagline, phone, whatsapp,
│                          email, location, branches, businessHours, navLinks
│
├── data/
│   ├── departments.ts    # 5 BBTI departments
│   ├── courses.ts         # ~110 courses across all departments (brochure-sourced)
│   ├── team.ts             # HOD placeholders, one per department
│   └── testimonials.ts     # Sample testimonials (clearly flagged)
│
├── lib/utils.ts          # cn() helper
├── lib/validation/contact.ts  # Shared Zod schema (client form + server route)
├── types/index.ts        # Department, Course, TeamMember, Testimonial types
├── .env.example          # RESEND_API_KEY, CONTACT_EMAIL (never commit real values)
├── .gitignore            # Restored — excludes .env, node_modules, .next, etc.
└── public/
    ├── logo/              # Official BBTI logo (transparent PNG + dark lockup JPEG)
    └── marketing/         # hostel-ad.png (cropped from the supplied trifold)
```

## Remaining work

```
├── app/opengraph-image.tsx   # Phase 5/6 — dedicated OG image (currently reuses the logo lockup JPEG)
```

**Why `config/institution.ts` instead of `data/site.ts`:** the spec calls this out explicitly as the place BBTI staff/developers should look to change a phone number, add a branch, or add an HOD — separating *institutional identity/contact facts* (`config/`) from *content collections* (`data/`) makes that intent clearer as the data layer grows to 4+ files.

---

## Scripts

```bash
npm run dev      # local dev server
npm run lint      # ESLint
npm run build     # production build — must pass with 0 errors before each phase is considered done
```

## Environment variables

Copy `.env.example` to `.env.local` and fill in real values before the contact form can send email:

```
RESEND_API_KEY=      # server-side only, read exclusively in app/api/contact/route.ts — never exposed to the client
CONTACT_EMAIL=bbtikenya@gmail.com
```

Without `RESEND_API_KEY` set, the contact form correctly returns a `503` error rather than silently pretending to succeed — this was verified against a running production build.

## Migration phase status

- [x] Phase 1 — Audit
- [x] Phase 2 — Brand migration (logo, colors, institution config, metadata)
- [x] Phase 3 — Information architecture (departments, courses, team, testimonials, hostel)
- [x] Phase 4 — Contact & conversion (API route, WhatsApp button)
- [x] Phase 5 — UI/UX polish
- [ ] Phase 6 — SEO & performance
- [ ] Phase 7 — QA

### Phase 5 notes

- **Color contrast fixed:** `--color-orange-600` (used for eyebrow labels, active nav state, links, badges, required-field asterisks) originally measured **3.8–4.0:1** against white/paper backgrounds — below WCAG AA's 4.5:1 minimum for normal text. Recalculated to `#a2530a`, which now passes **≥4.5:1 against white, the paper background, and the light badge background simultaneously** (verified by computing actual relative-luminance contrast ratios, not eyeballed). The WhatsApp button's icon color was also fixed the same way: the standard WhatsApp green (`#25D366`) only gives **1.98:1** contrast for its white icon; switched to WhatsApp's own darker brand teal (`#128C7E`, used in their app header) for **4.14:1** — still instantly recognizable as WhatsApp, now properly accessible.
- **No more horizontal scrolling on course tables:** `CourseTable` previously used `overflow-x-auto` with a `min-w-[520px]` table, which required horizontal scrolling on any phone narrower than ~520px. It now renders as **stacked definition-list cards below the `sm` breakpoint** and the full table from `sm` up — same data, no scroll gesture needed on mobile. Verified both layouts render correctly in a production build (14 tables × 2 layouts each on the Business & Technical Studies department page).
- **Mobile nav animation:** the mobile menu previously appeared/disappeared with an abrupt conditional render. Now uses `motion`'s `AnimatePresence` for a smooth height/opacity transition, and both desktop and mobile nav links get `aria-current="page"` on the active route.
- **Scroll-reveal animation:** a small reusable `<Reveal>` component (fade + slide-up, staggered) was added to the homepage's card grids (Departments, Why BBTI, How It Works, Testimonials) — subtle, once-only (`viewport={{ once: true }}`), and globally respects the user's OS-level reduced-motion preference via `<MotionConfig reducedMotion="user">` wrapping the whole app in `app/layout.tsx`. The existing CSS-level `prefers-reduced-motion` override in `globals.css` continues to handle plain CSS transitions.
- **Leftover copy fixed:** `HowItWorks` still referenced "CEFR level" and "your preferred language" — accurate for the old language-only brand, wrong now that BBTI spans 5 departments. Reworded to be department-agnostic.
- **Heading hierarchy verified:** every page has exactly one `<h1>` (via the shared `Hero`/`PageHero` components, or its own on the course detail page) — checked programmatically across all 8 page templates, not just spot-checked.

### Phase 4 notes

- **`app/api/contact/route.ts`** — real server-side handler using [Resend](https://resend.com). Server-side Zod validation (shared with the client via `lib/validation/contact.ts`, so the rules can never drift out of sync), a honeypot field that silently no-ops for bots without leaking its existence in the error response, and a best-effort in-memory rate limiter (5 requests/IP/minute).
  - **Known limitation, documented in-code:** the rate limiter's in-memory `Map` only protects a single warm serverless instance — on Vercel, concurrent or cold-started instances don't share it. It's a real deterrent against naive scripts hitting one instance repeatedly, not a hard guarantee. For production-grade protection, back it with Upstash Redis/Vercel KV and/or add a CAPTCHA (e.g. Cloudflare Turnstile).
  - **`RESEND_API_KEY` is required** for the form to actually send email — without it the route correctly returns `503` rather than pretending to succeed (verified by test). `.env.example` documents both required variables. The `from` address (`onboarding@resend.dev`) only works for testing; BBTI needs to verify a sending domain in Resend before launch.
  - Verified: valid submissions, honeypot spam, invalid input, and rate-limiting were all tested directly against a running production build in this sandbox — see the phase notes above the file tree for the actual `curl` responses.
- **`ContactForm.tsx`** now POSTs to `/api/contact` instead of mock-submitting, and includes a visually/screen-reader-hidden honeypot field the real user never sees.
- **`WhatsAppButton.tsx`** — new persistent floating CTA, fixed bottom-right, added globally in `app/layout.tsx`. Uses `react-icons`' official WhatsApp glyph, opens `wa.me/254723222792` with the spec's pre-filled message, respects `env(safe-area-inset-*)` for notched mobile devices, has a visible focus ring and tooltip on hover/keyboard-focus, and `prefers-reduced-motion` disables the hover scale animation.
- **Restored `.gitignore`** (lost in an earlier doc-export/reconstruction round-trip) — critical now that `.env` will hold a real secret.

### Phase 3 notes

- **Course data model** (`data/courses.ts`) is now a single, unified, department-aware model shared by all 5 departments. A `fromRows()` factory keeps the ~90 brochure line items (Business & Management, Hospitality & Tourism, Engineering, Cosmetology & Fashion, Higher Diploma, NITA trades, KASNEB, Health & Social Sciences) from becoming 90 duplicated object literals. Every `entryRequirement`, `examBody`, `duration` and `price` is transcribed directly from the supplied brochures — nothing invented; prices are only shown where the source material states one (e.g. Nail Technology has none, so none is shown).
- **Languages department** keeps its original rich schema (CEFR levels, outcomes, audience, format) and still powers individual `/courses/[slug]` pages. English (IELTS & PTE), Italian and Kiswahili were added per the client's explicit course list; exam bodies (Goethe/ÖSD, DELF/DALF, British Council) were added from the brochure.
- **Other 4 departments** don't get individual per-course pages — the brochures don't supply enough unique detail per line item to justify one, and 90 near-empty pages would hurt UX/SEO more than help. Instead, `/departments/[slug]` groups each department's courses into tables by category (mirroring the brochure's own layout), via a reusable `CourseTable` component.
- **Team/HOD structure** (`data/team.ts`) rebuilt as one placeholder Head of Department per department, replacing the old per-language-instructor model.
- **Testimonials**: `data/testimonials.ts`, `TestimonialCard`, a homepage preview section, and a full `/testimonials` page — all samples are explicitly labeled `isSample: true` and rendered with a visible "Sample" badge so they can never be mistaken for real reviews.
- **Hostel section**: uses a precisely-cropped version of the *actual* supplied trifold advertisement (`public/marketing/hostel-ad.png`, isolated via connected-component color detection, not manually eyeballed) — not a stock photo. Only the features stated on that ad (Wi-Fi, TV, meals, optional cooking) are listed.
- **Homepage** restructured to match the spec's architecture: Hero → Trust → Departments Overview → Why BBTI → How It Works → Hostel → Testimonials Preview → About Preview → Final CTA.
- **New route:** `/departments/[slug]` (5 static pages). **Updated:** `/courses` is now a department-overview page instead of a languages list; `/courses/[slug]` is restricted to the 9 language slugs via `dynamicParams = false`.
