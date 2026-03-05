TITLE: STC Rebuild from HeartsWay Comparison (Stitch-Enhanced)
PLATFORM: web
FORM FACTOR: desktop
CANVAS SIZE: 1920x1080
CONSTRAINT: no phone UI, no mobile frame, desktop-only composition
IMPLEMENTATION TARGET: Next.js 14+ (App Router) + TypeScript + Tailwind CSS
MOTION STACK (REQUIRED): Framer Motion + GSAP (ScrollTrigger) + Lenis

Build a conversion-focused STC homepage that uses HeartsWay section-flow inspiration but only Treatment Solutions content/facts.

REFERENCE (STRUCTURE INSPIRATION ONLY):
- https://heartswaynm.com/

CONTENT SOURCE OF TRUTH (REQUIRED):
- https://treatmentsolutions.org/
- https://treatmentsolutions.org/services/adult-intensive-outpatient-iop/
- https://treatmentsolutions.org/about/insurance-payment-information/
- https://treatmentsolutions.org/about/location-and-directions/
- https://treatmentsolutions.org/contact-us/
- https://treatmentsolutions.org/therapies/

FACTS TO PRESERVE (REQUIRED):
- Locations: Santa Fe and Albuquerque
- IOP program
- Free consultation + insurance verification
- Contact numbers: 877-499-1354 and 505-424-3170

DESIGN SYSTEM (REQUIRED):
- Background: Soft Blue (#D4E3FC)
- Surfaces/cards: Soft Blue tonal variants only (no white cards)
- Primary Accent/CTA: Healing Green (#22B610)
- Secondary Structure Accent: Deep Indigo (#1F1CDE)
- Heading font: Fraunces
- Body/UI font: Manrope
- Never use white (#FFFFFF) as page/canvas background or as primary card surface.

LOGO ASSET LOCK (REQUIRED):
- Header logo URL:
  - https://raw.githubusercontent.com/Elevate-Studios-SF/stc-website-v1/main/docs/brand/assets/stc-logo-horizontal.png
- Footer logo URL:
  - https://raw.githubusercontent.com/Elevate-Studios-SF/stc-website-v1/main/docs/brand/assets/stc-logo-stacked.png
- First attempt must use exact URL assets.
- Fallback only if URL load fails:
  - stc-logo-horizontal.png
  - stc-logo-stacked.png
- Implement as image nodes only; no synthetic/acronym/logo-text substitutes.
- CSS sizing:
  - Header logo: width 220px; height auto; object-fit contain
  - Footer logo: width 140px; height auto; object-fit contain

HARD FAIL CONDITIONS (REGENERATE IF ANY TRUE):
- Any generated logo appears (including acronym-only marks like "STC")
- Header/footer logo missing or replaced by icon/text placeholder
- White page background or white dominant card surfaces used

NAVIGATION MODEL (REQUIRED):
- Programs, Approach, Locations, Insurance, About, Resources, Contact
- Header CTA: "Call for Free Consultation"
- Programs dropdown: IOP, Free Mental Health Assessment
- Approach dropdown: The Solutions Method, Treatment Approach Overview, Therapy Modalities
- About dropdown: Who We Are, Our Team, Testimonials

PAGE STRUCTURE (REQUIRED):
1) Header: logo, nav, primary CTA
2) Hero: emotional trust headline + subheadline + dual CTAs
3) Reassurance/Trust strip: concise credibility and safety cues
4) Solutions Method block: whole-person framework + short explainer
5) Services overview: concise cards for IOP, teletherapy, family support
6) Insurance-friendly block:
   - Title: In-Network and Insurance-Friendly Care
   - Chips/logos for BCBS, Presbyterian, New Mexico Health Connections, Medicaid Centennial plans
   - Copy: Most private PPO plans accepted out-of-network. Verify benefits before intake.
7) Testimonials/outcomes: short, scannable social proof
8) FAQ: top intake/insurance/logistics questions
9) Final CTA: conversion-focused close with all required CTA labels
10) Footer: stacked logo, locations, legal/resource links

CTA LABELS (DO NOT CHANGE):
- Call for Free Consultation
- Request Mental Health Assessment
- Verify Insurance Benefits

COPY/UX RULES:
- Keep language clear, compassionate, specific, and non-hype.
- Keep paragraphs short and scannable.
- Avoid cloning HeartsWay copy or visual branding.
- Preserve STC factual accuracy.
- Ensure WCAG AA contrast, visible focus states, and reduced-motion behavior.

MOTION REQUIREMENTS:
- Hero entrance timeline
- Staggered section reveals
- Subtle scroll-linked depth/parallax
- CTA micro-interactions
- Respect prefers-reduced-motion

OUTPUT CHECKLIST (REQUIRED BEFORE FINAL):
- Uses STC content facts and contact numbers correctly
- Uses locked STC logos correctly
- Uses soft blue background system (no white page/card surfaces)
- Section order matches required flow
- CTA labels unchanged
