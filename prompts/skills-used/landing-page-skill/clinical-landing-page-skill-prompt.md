TITLE: STC Clinical Desktop Web Landing Page
SKILL: landing-page-guide-v2
PLATFORM: web
FORM FACTOR: desktop
CANVAS SIZE: 1920x1080
CONSTRAINT: no phone UI, no mobile frame, no mobile viewport composition
IMPLEMENTATION TARGET: Next.js 14+ (App Router) + TypeScript + Tailwind CSS
MOTION STACK (REQUIRED): Framer Motion + GSAP (ScrollTrigger) + Lenis
LAYOUT ENFORCEMENT: desktop single-flow landing page
NAVIGATION ENFORCEMENT: top header navigation

Create a desktop website landing page for Solutions Treatment Center (STC), clinical/professional direction.

Brand tokens:
- Background #D4E3FC
- Surfaces #D4E3FC
- Primary CTA #22B610
- Heading font Fraunces
- Body font Manrope

Logo rules:
- Header area: STC horizontal logo lockup
- Footer: STC stacked logo lockup
- Preserve logo clear space and proportions

ASSET LOCK (REQUIRED):
- Header logo must be the exact STC horizontal image (not an icon substitute):
  - `https://raw.githubusercontent.com/Elevate-Studios-SF/stc-website-v1/main/docs/brand/assets/stc-logo-horizontal.png`
- Footer logo must be the exact STC stacked image (not an icon substitute):
  - `https://raw.githubusercontent.com/Elevate-Studios-SF/stc-website-v1/main/docs/brand/assets/stc-logo-stacked.png`
- First attempt must use these exact URL assets.
- If URL rendering fails in Stitch, use uploaded assets as fallback only:
  - `stc-logo-horizontal.png` (header)
  - `stc-logo-stacked.png` (footer)
- Do not redraw, recolor, restyle, crop, or replace logos.
- Keep aspect ratio locked and preserve clear space.
- Explicitly forbid placeholder/logo-like vectors in header/footer.
- Preflight check required before final output:
  - Header contains visible STC horizontal logo image.
  - Footer contains visible STC stacked logo image.
  - No missing-image state, no empty image frame, no generic medical icon replacing logo.

Desktop composition requirements:
- Standard desktop header at top
- Single vertical flow of full-width sections
- No side navigation and no segmented layout instructions

Use a high-converting landing page architecture with these sections:
1) Header context row
2) Hero + dual CTA
3) Credibility strip
4) Services matrix (IOP, teletherapy, family support)
5) Treatment methodology section
6) Testimonials
7) Insurance verification
8) FAQ
9) Final CTA
10) Footer with Santa Fe + Albuquerque contacts

Primary CTAs:
- Call for Free Consultation
- Request Mental Health Assessment
- Verify Insurance Benefits

Style requirements:
- Clear hierarchy, calm clinical tone, concise copy
- WCAG AA contrast
- Desktop spacing and readable section rhythm

Motion requirements:
- Add hero entrance timeline and staggered section reveals.
- Add scroll-triggered transitions for service/trust sections.
- Add hover/tween micro-interactions for cards, CTAs, and media.
- Add subtle parallax/background drift for depth.
- Include reduced-motion fallback for accessibility (`prefers-reduced-motion`).
