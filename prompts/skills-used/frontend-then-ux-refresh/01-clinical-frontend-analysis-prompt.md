TITLE: STC Clinical Homepage Modernization (Frontend Pass)
SKILL: landing-page-guide-v2
WORKFLOW STEP: 1 of 4 (Frontend)
NEXT STEP: Run through Stitch Prompt Enhancer before generation
PLATFORM: web
FORM FACTOR: desktop
CANVAS SIZE: 1920x1080
CONSTRAINT: no phone UI, no mobile frame
IMPLEMENTATION TARGET: Next.js 14+ (App Router) + TypeScript + Tailwind CSS
MOTION STACK (REQUIRED): Framer Motion + GSAP (ScrollTrigger) + Lenis

Objective:
Modernize the homepage for Solutions Treatment Center using content and structure grounded in https://treatmentsolutions.org.

Content-source analysis requirements:
- Pull and synthesize messaging from treatmentsolutions.org homepage and key program/about/insurance pages.
- Preserve factual items to carry over:
  - Two locations: Santa Fe and Albuquerque
  - Core services: IOP, mental health and trauma support
  - Access/fit messaging: free consultation, insurance verification, family support
  - Contact intent: 877-499-1354 and 505-424-3170

Brand system:
- Background: #D4E3FC
- Surface cards: #D4E3FC
- Primary action: #22B610
- Heading font: Fraunces
- Body font: Manrope

ASSET LOCK (REQUIRED):
- Use uploaded asset `stc-logo-horizontal.png` in header.
- Use uploaded asset `stc-logo-stacked.png` in footer.
- If assets are not uploaded, stop and request upload before generation.
- Do not redraw, recolor, restyle, crop, or replace logos.

Layout requirements:
- Desktop single-flow homepage (top nav, full-width sections)
- No sidebar layout

NAVIGATION MODEL (REQUIRED):
- Top nav labels: Programs, Approach, Locations, Insurance, About, Resources, Contact
- Keep one primary CTA button in header: "Call for Free Consultation"
- Programs dropdown: IOP, Free Mental Health Assessment
- Approach dropdown: The Solutions Method, Treatment Approach Overview, Therapy Modalities
- About dropdown: Who We Are, Our Team, Testimonials
- Move lower-intent links (Photo Tour, legal extras) to footer/resources
- Keep Programs, Insurance, and Contact one click from homepage

Required sections:
1) Header with logo/nav/primary CTA
2) Hero with clear clinical value proposition and dual CTAs
3) Trust strip (credentials, social proof, local trust)
4) Services overview (IOP, trauma/mental health support)
5) Treatment approach section (clear steps/process)
6) Testimonials section
7) Insurance/payment access section
8) FAQ section
9) Final CTA block
10) Footer with both locations + contact info

CTA labels:
- Call for Free Consultation
- Request Mental Health Assessment
- Verify Insurance Benefits

Copy rules:
- Concise, credible, non-hype language
- Improve scanability over current site (short blocks, bullets, clear hierarchy)
- Keep local New Mexico relevance visible

Motion requirements:
- Use animated hero intro timeline and staggered section reveals.
- Add scroll-triggered transitions for services, approach, and testimonials.
- Add CTA micro-motion (hover lift, pulse, shadow shift).
- Add subtle background motion/parallax for depth.
- Include reduced-motion fallback for accessibility.
