# TreatmentSolutions.org Site + Navigation Analysis
Date: 2026-03-05
Scope: Information architecture and navigation effectiveness based on live-page inspection.

## Method
- Reviewed live navigation and key pages on treatmentsolutions.org.
- Checked URL health/status for core navigation and conversion pages.
- Evaluated pages by user intent fit: high-intent conversion, trust support, low-intent/distraction.

## Key Findings

### What appears to work (keep and prioritize)
1. Services pages align with high-intent visitors:
- https://treatmentsolutions.org/services/adult-intensive-outpatient-iop/
- https://treatmentsolutions.org/services/expect-op-program/

2. Conversion support pages are present and should remain prominent:
- https://treatmentsolutions.org/about/insurance-payment-information/
- https://treatmentsolutions.org/contact-us/
- https://treatmentsolutions.org/about/location-and-directions/

3. Trust pages exist and can support decision-making when grouped correctly:
- https://treatmentsolutions.org/about/who-we-are/
- https://treatmentsolutions.org/about/our-team/
- https://treatmentsolutions.org/about/testimonials/

### What appears not to work (restructure)
1. Primary nav is overloaded with too many top-level choices, including lower-intent items.
2. Labeling under "The Solutions Method™" is fragmented and internally named as "Therapies," which is less clear for new visitors.
3. Some slugs are non-semantic (example: `/therapies/430-2/`) and reduce clarity.
4. Low-intent items (like Photo Tour/Blog) are positioned alongside core conversion paths.
5. Conversion pathways are split across About/Services/Therapies, making first-click paths harder.

### Technical URL checks
- 200: `/about/location-and-directions/` (valid)
- 404 examples for likely guessed paths (not in active IA):
  - `/the-solutions-method/`
  - `/services/the-solutions-method/`
  - `/admissions/`

## Recommended Navigation Restructure

### Primary Top Nav (desktop)
1. Programs
2. Approach
3. Locations
4. Insurance
5. About
6. Resources
7. Contact
8. Primary CTA button: "Call for Free Consultation"

### Dropdown structure
- Programs:
  - Intensive Outpatient (IOP)
  - Outpatient Program (OP)
  - Free Mental Health Assessment
- Approach:
  - The Solutions Method
  - Treatment Approach Overview
  - Therapy Modalities
- Locations:
  - Santa Fe
  - Albuquerque
  - Directions
- About:
  - Who We Are
  - Our Team
  - Testimonials
- Resources:
  - Blog
  - FAQ

### Footer nav (expanded)
- Keep broad access to all pages (including Photo Tour and legal), but do not prioritize these in primary header nav.

## Prompt Integration Rules
Use these rules in generation prompts:
1. Enforce a single, conversion-first top navigation.
2. Keep top-level items to 6-7 plus one CTA.
3. Move low-intent pages to footer/resources.
4. Keep Insurance, Contact, and Programs one click from the homepage.
5. Include both phone numbers in header CTA and final CTA.

## Expected Outcome
- Faster path from homepage to assessment/contact actions.
- Less decision fatigue from reduced primary-nav complexity.
- Better trust + conversion flow for first-time visitors.
