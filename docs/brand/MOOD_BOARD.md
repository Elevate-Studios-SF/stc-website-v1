# STC Mood Board
Date: 2026-03-05
Purpose: Establish a visual direction for modernizing STC pages using current brand standards and identify missing brand decisions.

## 1) North Star
- Emotional target: safe, hopeful, clinically credible.
- Functional target: faster decisions to call, assess, or verify insurance.
- Visual target: modern healthcare without looking generic corporate.

## 2) Core Brand Inputs (from current guidelines)
- Background: `#D4E3FC`
- Primary accent/action: `#22B610`
- Primary UI/body font: `Tahoma`
- Preferred heading pairing: `Georgia` (alternates: Fraunces, Merriweather, Source Serif 4)
- Logo lockups: horizontal in header, stacked in footer
- Navigation model: Programs / Approach / Locations / Insurance / About / Resources / Contact + CTA

## 3) Mood Direction Boards

### Board A: Clinical Confidence (Recommended default)
- Feeling: trusted, clear, organized.
- Typography: Georgia headlines + Tahoma body.
- Surfaces: light blue cards with subtle elevation.
- Motion: polished but restrained choreography; clear CTA emphasis.
- Best use: homepage, services, insurance, admissions flow.

### Board B: Warm Recovery Support
- Feeling: human, gentle, reassuring.
- Typography: Merriweather headlines + Tahoma body.
- Visuals: softer corner radii, warm image treatment, supportive testimonial focus.
- Motion: calmer transitions, comforting reveal patterns.
- Best use: story-driven sections, testimonials, family support messaging.

### Board C: Modern Expert Care
- Feeling: precise, contemporary, outcomes-focused.
- Typography: Fraunces headlines + Tahoma body.
- Visuals: stronger contrast accents, tighter UI rhythm, sharper cards.
- Motion: more energetic scroll-linked transitions and counters.
- Best use: campaign pages, high-intent program landing pages.

## 4) Visual Ingredients
- Background treatment: `#D4E3FC` base with subtle gradient/noise layer.
- Card system: 12-16px radius, soft shadow, concise copy blocks.
- CTAs: high contrast green actions with clear hover/focus animation.
- Iconography: clean, simple stroke icons with healthcare clarity.
- Imagery: authentic, people-first treatment environment; avoid staged stock.

## 5) Motion Language (High Motion, Accessible)
- Hero timeline: staged entrance for logo, headline, subheadline, CTA.
- Scroll reveal: stagger services/testimonials as sections enter viewport.
- Transition rhythm: smooth section flow with subtle parallax accents.
- Micro-motion: CTA hover lift/glow, counter animations for trust metrics.
- Accessibility: `prefers-reduced-motion` removes non-essential animation.

## 6) Brand Gaps + Recommendations

### Gap 1: Heading font not locked by page type
- Recommendation: set default heading map:
  - Homepage + core conversion pages -> `Georgia`
  - Campaign landing pages -> `Fraunces`
  - Long-form/support pages -> `Merriweather`

### Gap 2: Missing semantic color tokens beyond 3 core colors
- Recommendation: define and document:
  - `text-primary`, `text-secondary`, `border-soft`, `success-bg`, `warning-bg`, `error-bg`
  - Include light/dark-on-light token pairs for accessibility consistency.

### Gap 3: No standardized component states
- Recommendation: set mandatory states for buttons/inputs/cards:
  - default / hover / active / focus-visible / disabled
  - include timing and shadow rules.

### Gap 4: No image style criteria by section type
- Recommendation: define image rules:
  - Hero images: one focal subject + shallow depth
  - Testimonials: candid portraits, neutral lighting
  - Services: contextual environment imagery

### Gap 5: Motion intensity not tiered by page intent
- Recommendation: define motion tiers:
  - Tier 1 (core pages): medium/high motion with strong CTA emphasis
  - Tier 2 (support pages): moderate motion
  - Tier 3 (legal/info pages): minimal motion

### Gap 6: Missing design QA checklist
- Recommendation: add pre-publish checklist:
  - nav consistency
  - CTA visibility
  - logo usage compliance
  - typography consistency
  - accessibility checks
  - reduced-motion checks

## 7) Prompt Injection Block (Mood + Gaps Applied)
```md
MOOD BOARD MODE (REQUIRED):
- Use Board A: Clinical Confidence unless otherwise specified.
- Keep base background #D4E3FC and primary action #22B610.
- Body/UI font must be Tahoma.
- Heading font for this page: Georgia.
- Apply high-motion section choreography with reduced-motion fallback.
- Enforce standardized component states and concise card-based content.
```

## 8) Recommended Next Moves
1. Approve one primary board (A/B/C) for the homepage baseline.
2. Add semantic color tokens to `design-system/tokens.css` and `tokens.json`.
3. Add component-state specs to `docs/brand/BRAND_COMPONENTS.md`.
4. Run one Stitch generation with Board A block + current final merged prompt.
