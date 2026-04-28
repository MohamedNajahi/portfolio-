# Mohamed Najahi Portfolio

Personal portfolio website for Mohamed Najahi, an AI/ML engineer and Computer Science with AI student. The site highlights his philosophy, selected projects, internship experience, technical skills, and contact details through a polished single-page experience with motion, scroll interactions, and a lightweight 3D hero scene.

## Overview

This project is a responsive portfolio built with React, TypeScript, and Vite. It presents:

- A cinematic hero section with animated particles and a scroll-reactive 3D object
- A philosophy section explaining the motivation behind the work
- A featured projects section covering AI, computer vision, IoT, and productivity tools
- Internship experience and practical engineering contributions
- Skills grouped across AI/ML, LLMs, backend, cloud, computer vision, and production practices
- About and contact sections with direct links to GitHub, LinkedIn, email, and phone

## Tech Stack

- `React 18`
- `TypeScript`
- `Vite`
- `Tailwind CSS`
- `shadcn/ui`
- `React Router`
- `React Helmet`
- `@react-three/fiber` and `@react-three/drei`
- `TanStack Query`

## Project Structure

```text
src/
  components/    Reusable UI and page sections
  pages/         Route-level pages
  hooks/         Custom React hooks
  lib/           Shared utilities
```

The main landing page is assembled in `src/pages/Index.tsx` from modular sections such as `Hero`, `Projects`, `WorkExperience`, `Skills`, `About`, and `Contact`.

## Getting Started

### Prerequisites

- `Node.js` 18+ recommended
- `npm`

### Install dependencies

```bash
npm install
```

### Start the development server

```bash
npm run dev
```

The app runs locally at:

```text
http://localhost:8080/
```

## Available Scripts

- `npm run dev` - start the Vite development server
- `npm run build` - create a production build
- `npm run build:dev` - create a development-mode build
- `npm run preview` - preview the production build locally
- `npm run lint` - run ESLint

## Deployment

This project is configured to support GitHub Pages deployments.

When building for GitHub Pages, set:

```bash
VITE_GITHUB_PAGES=true
```

That changes the Vite base path to:

```text
/portfolio-/
```

For normal local development and standard hosting, the base path remains `/`.

## Notable Features

- Smooth single-page navigation with desktop and mobile menus
- Animated hero background with canvas particles
- Scroll-driven 3D scene rendered with Three.js via React Three Fiber
- Section entrance animations using `IntersectionObserver`
- SEO metadata configured with `react-helmet`
- Clean, component-based structure for easy customization

## Customization

If you want to adapt this portfolio for another person or brand, the main content lives in:

- `src/components/Hero.tsx`
- `src/components/Philosophy.tsx`
- `src/components/Projects.tsx`
- `src/components/WorkExperience.tsx`
- `src/components/Skills.tsx`
- `src/components/About.tsx`
- `src/components/Contact.tsx`

You will likely also want to update:

- SEO metadata in `src/pages/Index.tsx`
- Base path behavior in `vite.config.ts`
- Images and other static assets in the project

## Notes

- The site uses a custom design system layered on top of Tailwind and `shadcn/ui`.
- A GitHub Pages-aware router basename is already wired in through `import.meta.env.BASE_URL`.
- Some project links are intentionally marked as coming soon where public links are not yet available.

