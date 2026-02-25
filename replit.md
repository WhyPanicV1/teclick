# TECLiCK Website

## Overview
Professional, futuristic single-page website for TECLiCK - a technology solutions company in Vila do Conde, Portugal. Dark theme with red accent colors matching the brand logo.

## Architecture
- **Frontend**: React + TypeScript with Vite, Tailwind CSS, shadcn/ui
- **Backend**: Express.js API (contact form)
- **Storage**: In-memory (contact form submissions)
- **Design**: Single-page, dark futuristic theme, CSS animations (no framer-motion)

## Sections (Single Page)
- Hero with gradient effects and grid pattern
- Services (6 service cards with features)
- Why Us (4 differentiators + stats)
- Testimonials (3 client reviews)
- Contact (form + info + map)
- Final CTA

## Key Files
- `client/src/App.tsx` - App wrapper (no routing, single page)
- `client/src/components/Header.tsx` - Sticky nav with smooth scroll
- `client/src/components/Footer.tsx` - Site footer
- `client/src/pages/Home.tsx` - Full single-page layout with all sections
- `server/routes.ts` - POST /api/contact endpoint
- `server/storage.ts` - In-memory storage
- `shared/schema.ts` - Contact form Zod schema

## Design
- Color scheme: Red primary (hsl 0 85% 50%) on dark background (#0a0a0a)
- Font: Space Grotesk (headings + body) + Inter (fallback)
- Logo: `/logo.jpeg` (also imported via @assets)
- Grid patterns, red glows, gradient text effects
- CSS-based fade-in animations on scroll (IntersectionObserver)

## API
- `POST /api/contact` - Submit contact form

## Business Info
- Company: TECLiCK
- Location: Av. Portas Fronhas 264, 4480-004 Vila do Conde
- Phone: 935 133 610
- Hours: Mon-Fri 10:00-12:30 | 14:30-19:00, Sat 10:00-13:00, Sun: Closed
