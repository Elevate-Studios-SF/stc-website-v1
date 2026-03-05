TITLE: STC Final Merged Frontend + UX Stitch Prompt
SKILLS: landing-page-guide-v2 + ui-ux-pro-max (+ Stitch Prompt Enhancer constraints)
PLATFORM: web
FORM FACTOR: desktop
CANVAS SIZE: 1920x1080
CONSTRAINT: no phone UI, no mobile frame, desktop-only composition
IMPLEMENTATION TARGET: Next.js 14+ (App Router) + TypeScript + Tailwind CSS
MOTION STACK (REQUIRED): Framer Motion + GSAP (ScrollTrigger) + Lenis smooth scroll

Objective:
Generate a modernized, conversion-focused Solutions Treatment Center homepage using treatmentsolutions.org as content source, with UX refinement quality baked in.

Content-source requirements:
- Analyze and synthesize key messaging from:
  - https://treatmentsolutions.org/
  - https://treatmentsolutions.org/services/adult-intensive-outpatient-iop/
  - https://treatmentsolutions.org/about/insurance-payment-information/
  - https://treatmentsolutions.org/about/location-and-directions/
  - https://treatmentsolutions.org/contact-us/
- Preserve factual carryovers:
  - Santa Fe + Albuquerque locations
  - IOP program
  - Free consultation + insurance verification
  - Contact numbers: 877-499-1354 and 505-424-3170

Brand system:
- Background: #D4E3FC
- Surface cards: #D4E3FC
- Primary action color: #22B610
- Headings: Fraunces
- Body text: Manrope

ASSET LOCK (REQUIRED):
- Use logo URLs from GitHub repo in header/footer:
  - https://raw.githubusercontent.com/Elevate-Studios-SF/stc-website-v1/main/docs/brand/assets/stc-logo-horizontal.png
  - https://raw.githubusercontent.com/Elevate-Studios-SF/stc-website-v1/main/docs/brand/assets/stc-logo-stacked.png
- If external URL loading fails in Stitch, fallback to uploaded assets:
  - `stc-logo-horizontal.png` (header)
  - `stc-logo-stacked.png` (footer)
- Do not redraw/recolor/restyle/crop/replace logos
- Preserve clear space and aspect ratio

NAVIGATION MODEL (REQUIRED):
- Top nav labels: Programs, Approach, Locations, Insurance, About, Resources, Contact
- Header CTA button: "Call for Free Consultation"
- Programs dropdown: IOP, Free Mental Health Assessment
- Approach dropdown: The Solutions Method, Treatment Approach Overview, Therapy Modalities
- About dropdown: Who We Are, Our Team, Testimonials
- Move low-intent links (Photo Tour, legal extras) to footer/resources
- Keep Programs, Insurance, and Contact one click from homepage

Page structure (single-flow desktop):
1) Header with logo/nav/CTA
2) Hero with strong value proposition + dual CTAs
3) Trust strip (credentials/social proof/local trust)
4) Insurance Accepted logo block (prominent, above services)
5) Services overview section
6) Treatment approach/process section
7) Testimonials section
8) Insurance/payment access section
9) FAQ section
10) Final CTA section
11) Footer with logo, locations, legal links

INSURANCE LOGO BLOCK (REQUIRED):
- Title: "In-Network and Insurance-Friendly Care"
- Include logo grid/chips for:
  - Blue Cross Blue Shield
  - Presbyterian
  - New Mexico Health Connections
  - Medicaid Centennial plans
- Include supporting copy: "Most private PPO plans accepted out-of-network. Verify benefits before intake."
- If exact logos are unavailable in generation context, use branded text chips/placeholders and mark for asset replacement.

CTA labels (do not change):
- Call for Free Consultation
- Request Mental Health Assessment
- Verify Insurance Benefits

UX refinement requirements (apply during generation):
- Improve hierarchy: clear section priorities and stronger above-the-fold clarity
- Improve conversion flow: visible CTA sequence and repeated high-intent actions
- Improve scanability: shorter paragraphs, concise cards, obvious headings
- Improve accessibility: WCAG AA contrast, visible focus states, legible text sizes
- Improve interaction quality: clean hover/focus states and calm transitions
- Keep single-flow desktop rhythm and visual consistency
- Use high-motion presentation across sections:
  - Hero entrance timeline
  - Staggered reveal for cards/testimonials
  - Scroll-linked parallax/background drift
  - Animated counters/trust metrics
  - CTA micro-interactions (glow, lift, pulse)
  - Section transition choreography between major blocks
- Respect `prefers-reduced-motion` with reduced/disabled non-essential effects

Output quality bar:
- Must look modern, trustworthy, and easier to navigate than current site
- Must preserve factual service/location/contact information
- Must avoid generic placeholder structure and text-heavy legacy layout
