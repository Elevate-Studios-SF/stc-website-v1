# STC Design System

This file is the source of truth for UI generation and implementation.

## Brand Identity
- Brand: STC (Solutions Treatment Center)
- Positioning: Clinical, calm, and trustworthy
- Tone: Clear, supportive, professional

## Core Palette
- `--color-bg-primary`: `#1F1CDE` (Primary background)
- `--color-surface-soft`: `#D4E3FC` (Soft surfaces and secondary backgrounds)
- `--color-accent-success`: `#22B610` (Primary action/accent)

## Semantic Color Roles
- Backgrounds:
  - Page Background: `#1F1CDE`
  - Surface / Cards: `#D4E3FC`
- Text:
  - Text on dark background: `#FFFFFF`
  - Text on light surface: `#101828`
  - Supporting text on light surface: `#344054`
- Actions:
  - Primary CTA: `#22B610`
  - CTA text on green: `#FFFFFF`
  - Link on dark: `#D4E3FC`

## Typography
- Headings: `Fraunces`, serif
- Body/UI: `Manrope`, sans-serif

## Logo System
- Official lockups:
  - Primary stacked lockup: emblem above `SOLUTIONS TREATMENT CENTER`
  - Horizontal lockup: emblem left of wordmark
- Preferred use:
  - Header/nav: horizontal lockup
  - Hero/footer or brand block: stacked lockup
- Clear space:
  - Keep minimum padding around logo equal to the height of the `S` in `SOLUTIONS`
- Minimum sizes:
  - Stacked lockup: 120px wide minimum on web
  - Horizontal lockup: 180px wide minimum on web
- Background handling:
  - On dark indigo `#1F1CDE`: use full-color logo
  - On light surfaces `#D4E3FC`/white: use full-color logo with enough breathing room
  - Never place logo on visually busy imagery without an overlay or solid surface

## Radius, Spacing, and Elevation
- Radius: 8 / 12 / 20
- Spacing scale: 4, 8, 12, 16, 24, 32, 48, 64
- Shadows:
  - Soft: `0 6px 20px rgba(16, 24, 40, 0.12)`
  - Medium: `0 12px 30px rgba(16, 24, 40, 0.18)`

## Component Guidance
- Buttons:
  - Primary: green fill (`#22B610`), white text, semi-bold, 12px radius
  - Secondary: transparent with `#D4E3FC` border on dark backgrounds
- Cards:
  - Use `#D4E3FC` surfaces with dark text (`#101828`)
- Navigation:
  - Dark background with high-contrast text and visible active states

## Accessibility Rules
- Keep body text at 16px minimum
- Maintain WCAG AA contrast for all text/button combinations
- Always provide visible focus states for interactive elements

## Stitch Prompt Injection Block
Use this block in every Stitch prompt:

```md
**DESIGN SYSTEM (REQUIRED):**
- Brand style: Clinical, calm, trustworthy
- Background: Deep Indigo (#1F1CDE)
- Surface: Soft Blue (#D4E3FC)
- Primary Accent/CTA: Healing Green (#22B610)
- Heading font: Fraunces
- Body font: Manrope
- Logo: use official STC horizontal lockup in header, stacked lockup in footer/hero brand blocks
- Buttons: Rounded 12px, high-contrast, clear hover/focus states
- Layout: Spacious, clear hierarchy, conversion-first
```
