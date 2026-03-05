# STC Brand Guide

## 1. Brand Direction
STC should feel stable, clinically credible, and supportive. Visual choices should reduce anxiety and improve trust.

## 2. Color System

### Core Colors
- Deep Indigo: `#1F1CDE`
- Soft Blue: `#D4E3FC`
- Healing Green: `#22B610`

### Usage Ratios
- 60% Deep Indigo (structure, background, navigation)
- 30% Soft Blue (cards, section fills, supporting surfaces)
- 10% Healing Green (CTA, status highlights, emphasis)

### Recommended Pairings
- `#1F1CDE` background + `#FFFFFF` text
- `#D4E3FC` surface + `#101828` text
- `#22B610` CTA + `#FFFFFF` text

## 3. Typography
- Display/Headlines: Fraunces
- Body/UI: Manrope

## 3.1 Logo System
- Primary logo (stacked): emblem centered above wordmark
- Secondary logo (horizontal): emblem left, wordmark right
- Header usage: horizontal logo is default
- Footer or standalone brand sections: stacked logo preferred
- Clear space: minimum 1x `S` height from the word `SOLUTIONS`
- Minimum digital sizes:
  - Stacked: 120px width
  - Horizontal: 180px width
- Misuse to avoid:
  - Do not stretch, skew, rotate, or recolor logo elements
  - Do not apply glow/shadow effects directly on logo artwork
  - Do not place over noisy backgrounds without a solid or dark overlay

### Type Scale
- H1: 56/60
- H2: 40/46
- H3: 30/36
- H4: 24/30
- Body L: 18/30
- Body: 16/26
- Caption: 14/22

## 4. Layout and Spacing
- Grid: 12-column desktop, 8 tablet, 4 mobile
- Max content width: 1200px
- Section padding: 80px desktop, 56px tablet, 40px mobile
- Spacing scale: 4, 8, 12, 16, 24, 32, 48, 64

## 5. Component Principles
- Buttons: high contrast, concise labels, one primary action per viewport
- Cards: clear grouping, generous padding, readable line length
- Forms: minimal fields, strong labels, immediate validation feedback
- Navigation: simple, predictable, always show contact action

## 6. Motion
- Keep motion purposeful and calm
- Use fade/slide transitions (150ms-300ms)
- Avoid aggressive zooms or distracting loops

## 7. Imagery
- Use real, warm, human-centered imagery
- Prefer authentic treatment or community contexts
- Avoid generic corporate stock look

## 8. Voice and Microcopy
- Tone: clear, compassionate, direct
- CTA style: action-first ("Call Now", "Verify Insurance", "Start Assessment")
- Avoid jargon and overly promotional wording

## 9. Accessibility
- WCAG AA minimum contrast
- Keyboard focus visible on all interactive elements
- Minimum touch target 44x44
- Use semantic landmarks for screen readers

## 10. Do / Don't

### Do
- Keep hierarchy obvious
- Use green only for high-value actions
- Keep copy scannable and specific

### Don't
- Overuse accent color
- Add visual noise that reduces trust
- Use low-contrast text on colored surfaces

## 11. Assets and File Naming
- Keep source files in `docs/brand/assets/`
- Recommended names:
  - `stc-logo-stacked.png`
  - `stc-logo-horizontal.png`
  - `stc-logo-stacked.svg` (future vector export)
  - `stc-logo-horizontal.svg` (future vector export)
- For production websites, prefer SVG for crisp rendering and smaller payload.

## 12. Required Navigation Model (Global Standard)
This is the required navigation structure for homepage and landing-page prompts.

### Primary Header Nav
- Programs
- Approach
- Locations
- Insurance
- About
- Resources
- Contact
- Primary CTA button: `Call for Free Consultation`

### Required Dropdowns
- Programs:
  - Intensive Outpatient (IOP)
  - Outpatient Program (OP)
  - Free Mental Health Assessment
- Approach:
  - The Solutions Method
  - Treatment Approach Overview
  - Therapy Modalities
- About:
  - Who We Are
  - Our Team
  - Testimonials

### Navigation Rules
- Keep Programs, Insurance, and Contact one click from the homepage.
- Keep top-level nav concise (7 labels + 1 CTA).
- Move lower-intent links (for example, Photo Tour and legal extras) to footer/resources.
- Keep desktop navigation in a top header (no sidebar navigation pattern).

### Prompt Inheritance Rule
All future prompts (Stitch, frontend, UX, and enhancement prompts) must inherit this navigation model unless explicitly overridden by project requirements.
