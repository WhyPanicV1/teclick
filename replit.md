# TEC LICK Website

## Overview
Professional, conversion-oriented website for TEC LICK - a technology solutions company located in Vila do Conde, Portugal. The site covers repair services, 3D printing, web development, e-commerce, and AI solutions.

## Architecture
- **Frontend**: React + TypeScript with Vite, Tailwind CSS, shadcn/ui components
- **Backend**: Express.js API
- **Routing**: wouter (client-side)
- **Storage**: In-memory (contact form submissions)

## Pages
- `/` - Homepage (hero, services overview, testimonials, map, CTAs)
- `/servicos` - Services page (detailed service blocks with benefits)
- `/sobre` - About page (company story, values, stats)
- `/contactos` - Contact page (form, contact info, map)

## Key Files
- `client/src/App.tsx` - Main app with routing
- `client/src/components/Header.tsx` - Navigation header
- `client/src/components/Footer.tsx` - Site footer
- `client/src/pages/Home.tsx` - Homepage
- `client/src/pages/Services.tsx` - Services page
- `client/src/pages/About.tsx` - About page
- `client/src/pages/Contact.tsx` - Contact page with form
- `server/routes.ts` - API endpoint for contact form
- `server/storage.ts` - In-memory storage for submissions
- `shared/schema.ts` - Contact form Zod schema

## Design
- Color scheme: Orange primary (#F97316) with neutral grays
- Font: Inter (body) + Space Grotesk (headings)
- Mobile-first responsive design
- Portuguese language (PT-PT)

## API Endpoints
- `POST /api/contact` - Submit contact form

## Business Info
- Company: TEC LICK
- Location: Av. Portas Fronhas 264, 4480-004 Vila do Conde, Portugal
- Phone: 935 133 610
- Hours: Mon-Fri 10:00-12:30 | 14:30-19:00, Sat 10:00-13:00, Sun: Closed
