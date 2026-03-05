TITLE: STC Rebuild Prompt from HeartsWay Comparison
PLATFORM: web
FORM FACTOR: desktop
CANVAS SIZE: 1920x1080
CONSTRAINT: no phone UI, desktop-only composition
IMPLEMENTATION TARGET: Next.js 14+ (App Router) + TypeScript + Tailwind CSS
MOTION STACK (REQUIRED): Framer Motion + GSAP (ScrollTrigger) + Lenis

Objective:
Create a modernized STC homepage using HeartsWay-inspired section structure while using only Treatment Solutions content/facts.

Reference structure source:
- https://heartswaynm.com/

Content source of truth:
- https://treatmentsolutions.org/
- https://treatmentsolutions.org/services/adult-intensive-outpatient-iop/
- https://treatmentsolutions.org/about/insurance-payment-information/
- https://treatmentsolutions.org/about/location-and-directions/
- https://treatmentsolutions.org/contact-us/
- https://treatmentsolutions.org/therapies/

Preserve factual carryovers:
- Santa Fe + Albuquerque
- IOP program
- Free consultation + insurance verification
- Contact numbers: 877-499-1354 and 505-424-3170

Brand system:
- Background: #D4E3FC
- Surface cards: #D4E3FC
- Primary action color: #22B610
- Headings: Fraunces
- Body text: Manrope
- Never use white (#FFFFFF) as page/canvas background or card surface.

ASSET LOCK (REQUIRED):
- Header logo URL:
  - https://raw.githubusercontent.com/Elevate-Studios-SF/stc-website-v1/main/docs/brand/assets/stc-logo-horizontal.png
- Footer logo URL:
  - https://raw.githubusercontent.com/Elevate-Studios-SF/stc-website-v1/main/docs/brand/assets/stc-logo-stacked.png
- Use exact image assets only; no generated/synthetic/acronym logos.

Required section flow:
1) Header with logo/nav/primary CTA
2) Emotion-led hero with dual CTAs
3) Trust/reassurance strip
4) Solutions Method / whole-person framework section
5) Services + modalities overview
6) Insurance-friendly access block
7) Testimonials/outcomes
8) FAQ
9) Final conversion CTA
10) Footer with locations/contact

CTA labels:
- Call for Free Consultation
- Request Mental Health Assessment
- Verify Insurance Benefits

Output quality bar:
- Must feel more modern and easier to scan than current site
- Must preserve STC factual accuracy
- Must not imitate HeartsWay branding directly
