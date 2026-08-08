# Berlin Language Center

Berlin Language Center is a modern marketing and course website for a language school based in Berlin. The site highlights the school’s language programs, teaching approach, team, and contact information, with a polished landing experience for prospective students and businesses.

## Overview

This project is built with Next.js and React, using the App Router and TypeScript. It includes:

- A homepage with course highlights, trust signals, and calls to action
- Dedicated pages for About, Courses, Team, and Contact
- Dynamic course detail pages driven by content data
- A contact form UI with validation and form handling

## Tech Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS
- Framer Motion-style animation support via motion
- React Hook Form + Zod for form validation
- Lucide React for icons

## Getting Started

### Prerequisites

- Node.js 18 or newer
- npm, pnpm, yarn, or bun

### Install dependencies

```bash
npm install
```

### Run locally

```bash
npm run dev
```

Then open http://localhost:3000 in your browser.

## Available Scripts

```bash
npm run dev      # start the development server
npm run build    # create a production build
npm run start    # start the production server
npm run lint     # run ESLint
```

## Project Structure

```text
app/                # App Router pages and route segments
components/         # Reusable UI and section components
data/               # Site content, course data, and navigation
lib/                # Utility helpers
public/             # Static assets
types/              # Shared TypeScript types
```

## Content and Customization

Most site content is organized in the data directory:

- [data/site.ts](data/site.ts) for branding, navigation, and contact details
- [data/courses.ts](data/courses.ts) for course listings and course content
- [data/team.ts](data/team.ts) for team member profiles

You can update these files to tailor the website to your real organization, including phone numbers, email addresses, course offerings, and team information.

## Deployment

The app is ready to be deployed on platforms such as Vercel or any Node.js-compatible hosting environment.

For a Vercel deployment, connect the repository and use the standard Next.js build settings.
