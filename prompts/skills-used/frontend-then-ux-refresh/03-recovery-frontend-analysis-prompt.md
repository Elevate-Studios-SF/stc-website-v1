TITLE: STC Recovery Homepage Modernization (Frontend Pass)
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
Create a warm, recovery-centered modern homepage for Solutions Treatment Center based on treatmentsolutions.org content.

Content-source analysis requirements:
- Pull themes from treatmentsolutions.org home/about/services/insurance pages.
- Preserve factual carryovers:
  - Santa Fe + Albuquerque presence
  - IOP and ongoing support pathway
  - Family participation and supportive environment
  - Free consultation and insurance verification
  - Contact numbers: 877-499-1354 and 505-424-3170

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
1) Header
2) Warm hero with dual CTAs
3) Reassurance section (confidential, compassionate, no-judgment)
4) Insurance Accepted logo block
5) Step-by-step getting started section
6) Services section
7) Recovery-focused testimonials
8) Insurance/access section
9) FAQ
10) Final CTA section
11) Footer with location/contact details

CTA labels:
- Call for Free Consultation
- Request Mental Health Assessment
- Verify Insurance Benefits

Copy rules:
- Empathetic and clear, never vague
- Reduce content heaviness from current site
- Keep language supportive but specific

Motion requirements:
- Use animated hero intro timeline and staggered section reveals.
- Add scroll-triggered transitions for reassurance, services, and testimonials.
- Add CTA micro-motion (hover lift, pulse, shadow shift).
- Add subtle background motion/parallax for depth.
- Include reduced-motion fallback for accessibility.

Insurance block requirements:
- Show accepted insurance logo/text chips for:
  - Blue Cross Blue Shield
  - Presbyterian
  - New Mexico Health Connections
  - Medicaid Centennial plans
- Include support line: "Most private PPO plans accepted out-of-network. Verify benefits before intake."
- If logo assets are unavailable, use branded text chips and flag for asset swap.
