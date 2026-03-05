TITLE: STC Clinical Desktop Prompt (No Landing-Page Skill)
PLATFORM: web
FORM FACTOR: desktop
CANVAS SIZE: 1920x1080
CONSTRAINT: no phone UI, no mobile frame, no mobile viewport composition
IMPLEMENTATION TARGET: Next.js 14+ (App Router) + TypeScript + Tailwind CSS
MOTION STACK (REQUIRED): Framer Motion + GSAP (ScrollTrigger) + Lenis
LAYOUT ENFORCEMENT: desktop single-flow layout
NAVIGATION ENFORCEMENT: top header navigation

Design a desktop homepage for Solutions Treatment Center (STC) in New Mexico.

Use this style system:
- Background: #D4E3FC
- Surface cards: #D4E3FC
- Primary action color: #22B610
- Headings: Fraunces
- Body text: Manrope

ASSET LOCK (REQUIRED):
- Use uploaded asset `stc-logo-horizontal.png` in the header.
- Use uploaded asset `stc-logo-stacked.png` in the footer.
- Source of truth (GitHub):
  - https://raw.githubusercontent.com/Elevate-Studios-SF/stc-website-v1/main/docs/brand/assets/stc-logo-horizontal.png
  - https://raw.githubusercontent.com/Elevate-Studios-SF/stc-website-v1/main/docs/brand/assets/stc-logo-stacked.png
- Do not redraw, recolor, restyle, crop, or replace logos.
- Keep aspect ratio locked and preserve clear space.

Desktop composition requirements:
- Top desktop header with navigation and primary CTA
- Single vertical flow for all content sections
- No side navigation and no segmented layout instructions

Content goals:
- Communicate clinical credibility and trust
- Explain core services (IOP, teletherapy, family support)
- Drive consultation and assessment conversions

Must include:
- Header context row with STC horizontal logo
- Hero with strong headline and two action buttons
- Services section with concise cards
- Method/process section
- Testimonials section
- Insurance verification section
- FAQ section
- Footer with STC stacked logo and Santa Fe + Albuquerque contact information

CTA labels:
- Call for Free Consultation
- Request Mental Health Assessment
- Verify Insurance Benefits

Keep the page clean, professional, and easy to scan.

Motion requirements:
- Add hero entrance timeline and staggered section reveals.
- Add scroll-triggered transitions for service/trust sections.
- Add hover/tween micro-interactions for cards, CTAs, and media.
- Add subtle parallax/background drift for depth.
- Include reduced-motion fallback for accessibility (`prefers-reduced-motion`).
