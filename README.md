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
- [x] Phase 6 — SEO & performance
- [x] Phase 7 — QA
- [x] Ad-hoc — World-class Footer/Navbar redesign (newsletter, mega-footer, developer credit)
- [x] Ad-hoc — Production launch content pass (real org data from "Organization Details b4 launch.docx")

### Ad-hoc: Production launch content pass

Real institutional content replaced remaining placeholders, sourced from the organization's "Organization Details b4 launch.docx":

- **`config/institution.ts`**: full physical address (Rehema Complex Building, 4th Floor, Left Wing, Ronald Ngala Street, Eldoret), postal address (P.O. Box 5938-30100), confirmed production domain `bbti.co.ke`, Google Maps Plus Code (`G78G+GRW`) with a working embed + share URL (no API key needed). Branches now carry real addresses and phone numbers for Kapsabet, Bungoma, Busia and Kericho instead of just names.
- **`app/contact/page.tsx`**: real Google Maps `<iframe>` embed plus an accessible "Open in Google Maps" fallback link, per-branch address/phone cards, postal address display.
- **`data/team.ts` + `app/team/page.tsx`**: real Director (Paul Kefa) and 5 real Heads of Department (Felix Parnoti — Languages, Joel Chege — ICT, Mr Christopher Kiplagat — Business & Technical Studies, Mary Cheruto — Health Sciences, Ms Ajuma Kalasinga — Professional Short Courses), each with their real supplied professional biography. New `DirectorCard`, `HodCard` and `TeamPhoto` components give the Director full-width visual prominence above the HOD grid, per the required layout. No Director biography was supplied (the doc contains only an instruction placeholder), so the Director card shows name/title only rather than fabricating one.
- **`app/about/page.tsx`**: real Mission and Vision statements (verbatim from the doc) and the 5 real Core Values (Integrity, Excellence, Hard Work, Networking, Efficiency), replacing all "editable placeholder" content.
- **`data/testimonials.ts`**: real student names/courses (Mary Chebet — Caregiving, Ian Kimani — Basic Computer Packages, Joy Nekesa — IELTS, Oscar Kimutai — German, Patience Quinn — Cosmetology). The quote text stays a clearly-labeled "pending" placeholder, because the source document's testimonial fields were themselves instructional placeholders (e.g. "[Provide a clear and short correct testimony of the student]"), not actual approved quotes — inventing plausible-sounding quotes here would violate the no-fabrication requirement even though names are real.
- **`components/departments/DepartmentCard.tsx`**: rebuilt for full-card imagery (`object-cover`, gradient scrim, name + "Explore Courses" pinned at the bottom, single clickable/keyboard-focusable surface). Falls back to a branded gradient + large icon when no real photo exists — which is currently every department, since no actual photography was supplied to this project (only filenames were named in the doc: `complab.jpg`, `computer.jpg`, `bbti.jpg`).
- **`components/home/Hero.tsx`**: restructured to support an optional full-bleed video background (autoplay/muted/loop/playsInline, poster fallback, readability scrim) gated behind a `HAS_HERO_VIDEO` flag — currently `false` because the actual `Bbti.mp4`/`bbti.jpg` files were named in the doc but never uploaded to this project. Flipping the flag and adding the two files at `/public/hero/` activates it with no other changes needed.
- **Domain migration**: `metadataBase`, sitemap, robots.txt and JSON-LD `sameAs` all updated from the placeholder `bbtikenya.co.ke` to the organization-confirmed production domain `bbti.co.ke`.
- **Resend sender address** made configurable via a new `RESEND_FROM_EMAIL` env var (documented in `.env.example`), rather than hardcoded — ready for `info@bbti.co.ke` once that domain is verified in Resend.

**One editorial correction made, worth your attention:** the source document's Health Sciences HOD biography literally reads "As the head of **technical studies** Mary Cheruto **Lagat** oversees..." — internally inconsistent with her actual section header (Health Sciences) and stated name (Mary Cheruto, no "Lagat"). This looks like a copy-paste artifact from another HOD's bio in the source document. I removed the contradictory phrase and surname rather than publish a visible inconsistency, but **please verify this with your source** — I did not have a way to confirm which version is correct.

**Verified, not assumed:** ran a full production build, started it, and crawled every updated page checking for the actual new content (all 5 department cards, all 4 named HODs + Director, all 5 core values, the Google Maps embed, branch phone numbers) via `curl` against the live server. Full lint and type-check also clean.

### Ad-hoc: Footer/Navbar redesign notes

- **Mega-footer** (`components/layout/Footer.tsx`): asymmetric grid (brand column weighted `1.3fr` vs `0.9fr`/`0.9fr`/`1fr` for link columns), full-width newsletter band above the link grid, real trust signals only (TVETA registration, department/branch counts — no fabricated "as seen in" logos or star ratings), subtle blurred gradient shapes for depth.
- **Newsletter signup is real**, not decorative: `app/api/newsletter/route.ts` adds subscribers to a Resend Audience, sharing the same honeypot + rate-limiting rigor as the contact form. Requires `RESEND_AUDIENCE_ID` (new) alongside the existing `RESEND_API_KEY`.
- **Mobile link columns** collapse into native `<details>/<summary>` accordions (`components/layout/FooterAccordion.tsx`) — genuinely accessible (keyboard-operable, screen-reader-announced open/closed state) with zero JavaScript, not a custom ARIA reimplementation.
- **Navbar** gained a shared-layout sliding active-link indicator (motion's `layoutId`, glides between routes since the Navbar never unmounts) and a staggered mobile-menu entrance.
- **Contrast bug caught during this work:** the newsletter Subscribe button initially used `orange-500` at 2.89:1 against white text — added a proper `--color-orange-700` hover-state token and switched the button to the already-AA-compliant `orange-600` (5.56:1).
- **Developer credit:** initially built as text-only because my tools couldn't retrieve Laami's actual logo binary from their site (only text content) and their domain isn't in this sandbox's bash network allowlist. Once you uploaded the real logo file, I cropped just the triangular mark (removing the "LAAMI LTD" wordmark portion, since the wordmark text is already set separately as "LAAMI LABS" next to it) and made the white background transparent — now live at `public/credits/laami-mark.png`.
- **Note for future sections:** you asked me to remember this design brief (mega-layout, glassmorphism/gradient depth, real conversion CTAs, verified-only trust signals, accordion mobile UX, motion micro-interactions, full accessibility) to apply to other parts of the site later. I don't have persistent memory across separate conversations, so if this thread ends, you'd want to paste the brief again — but I'll keep applying it consistently for the rest of this conversation.

### Phase 7 QA — Full Report

**Process:** ran an actual production build (`npm run build`) in an isolated copy, started it (`npm run start`), and crawled every route via `curl` against the live server rather than only reading source code — this caught a real bug a code review alone would have missed.

**Bug found and fixed:** `app/sitemap.ts` was still listing the full `courses` array (all ~110 courses across every department) instead of `languageCourses` — this would have submitted ~100 dead URLs to search engines pointing at course pages that don't exist (only the 9 language courses have individual detail pages; `dynamicParams: false` means those would 404). It was also missing `/testimonials` and the 5 `/departments/[slug]` routes. Fixed and reverified — sitemap now lists exactly the 20 real indexable pages.

**Old-branding sweep:** grepped the entire codebase (all `.ts`/`.tsx`/`.css`/`.md`) for "Berlin Language Center", "Language Center", "Berlin, Germany", and "Germany". Two hits, both benign:
  - `README.md`: an intentional historical note explaining the project's origin — internal documentation, not user-facing.
  - `data/courses.ts`: `flagRegion: "Germany"` on the German course entry — this is the *language's* country of origin (legitimate metadata), not a leftover business-location claim. It's also currently unused in any rendered component (verified via grep) — harmless dead data, not a defect, left as-is per the "don't make unnecessary changes this close to launch" principle.

**Link/image integrity:** extracted every internal `href` (including dynamic `${slug}` templates) and every `<Image src>` across the codebase and cross-checked them against real routes/files. Zero broken links, zero broken images — all dynamic hrefs are generated from the same data arrays that produce the pages themselves, so they can't drift out of sync.

**Production checklist:**

| Item | Status |
|---|---|
| No old branding remains | ✅ (2 benign exceptions explained above) |
| BBTI logo appears correctly | ✅ |
| Color system applied consistently | ✅ (2 contrast bugs found & fixed across Phases 5–7) |
| Navbar / mobile navigation work | ✅ verified live |
| All pages work (Home, About, Courses, Departments, Team, Testimonials, Contact) | ✅ all 21 pages crawled, HTTP 200 |
| Contact form submits & notifies | ⚠️ Code is correct and tested (422/429/503/success paths all verified) — but **requires `RESEND_API_KEY` set in your real deployment** to actually send email. Correctly fails closed (503) rather than faking success without it. |
| WhatsApp button works, correct number | ✅ `wa.me/254723222792` with pre-filled message, verified |
| Phone / email / location / branches / hours correct | ✅ matches spec exactly |
| Hostel ad appears correctly | ✅ real cropped asset, not stock |
| No broken images / links | ✅ verified by cross-reference, not assumed |
| No console errors | ✅ server logs clean across 21 real-page crawls (the only two log entries were expected `NoFallbackError`s from intentionally testing invalid slugs, which correctly 404) |
| No TypeScript / lint / build errors | ✅ all three clean on final build |
| Responsive design | ✅ mobile-specific implementations verified in rendered HTML (accordion footer, card-based tables, stacking hero) — not full pixel-level visual regression testing across every breakpoint, which this environment can't do without a real browser |
| SEO metadata / favicon / OG / sitemap / robots | ✅ |
| Accessibility | ✅ contrast fixed, native accordions, aria-current, focus rings, semantic landmarks — not a full screen-reader walkthrough |
| Performance | ✅ client-JS audit done, static generation used everywhere possible |
| Env vars documented | ✅ `.env.example` covers all 3 required variables |
| Production env vars actually set | ❌ **your responsibility** — see Remaining Content below |

### Remaining content BBTI must still supply

- `RESEND_API_KEY` and a verified sending domain in Resend (currently defaults to `onboarding@resend.dev`, testing-only)
- `RESEND_AUDIENCE_ID` for newsletter signups to actually store subscribers
- Real Head of Department names, titles, and photos (`data/team.ts`)
- Real student testimonials (`data/testimonials.ts`) — currently clearly-labeled samples
- Social media URLs (`config/institution.ts` → `socialLinks`, currently empty)
- Exact branch street addresses, if you want more than branch names shown
- Confirmed final mission/vision wording for the About page (currently editable placeholders)

### Production readiness verdict

**READY FOR PRODUCTION**, conditional on setting the three environment variables above in your real deployment before launch. Everything else — code correctness, branding, accessibility, SEO, and content architecture — has been verified against a live running build, not just source review.

### Phase 6 notes

- **Dedicated Open Graph image** (`app/opengraph-image.tsx`, using `next/og`'s `ImageResponse`) replaces the raw JPEG reference from Phase 2 with a properly-sized (1200×630) branded card generated from the real logo — verified by rendering it and viewing the actual PNG output during this build. Also auto-populates the Twitter card image via Next.js's file convention, so the manual `images` arrays were removed from `layout.tsx` metadata (one less place for the URL to go stale).
- **Structured data (JSON-LD):**
  - `components/seo/OrganizationJsonLd.tsx` — sitewide `EducationalOrganization` schema (name, description, phone, email, address locality, branches, departments) injected in the root layout. Only fields we can actually verify are populated — no fabricated founding date, accreditation body beyond the stated TVETA registration, or ratings.
  - Each language course detail page (`/courses/[slug]`) additionally emits a `Course` schema referencing the institution as `provider`.
  - Verified both render correctly in the actual HTML output of a running production build, not just assumed from the code.
- **Canonical URLs** added via `alternates: { canonical: ... }` on all 5 static pages plus both dynamic route types (`/courses/[slug]`, `/departments/[slug]`) — confirmed present in rendered `<head>` output.
- **Favicon/apple-touch-icon** wired explicitly via `metadata.icons` for broader device compatibility, still using the same generated `app/icon.png`.
- **Performance:** audited every `"use client"` directive across the codebase — `WhatsAppButton` had one with zero hooks/state (a plain anchor tag), so it was converted back to a Server Component, trimming a small amount of client JS. The remaining 5 client components (`Navbar`, `ContactForm`, `Reveal`, and the two Radix-based `select`/`label` primitives) are all genuinely interactive and correctly need to stay client-side.
- Dependency audit: no unused packages found in `package.json` — everything installed across all 6 phases is actively imported somewhere.

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
