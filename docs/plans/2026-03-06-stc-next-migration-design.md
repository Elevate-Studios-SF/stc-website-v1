# STC Next.js Migration Design

Date: 2026-03-06

## Goal
Replace the existing `stc-web` folder with a fresh Next.js app and migrate assets from the public repo `TySnyder/STC-Website-Mockup-Homepage-v2`, producing two routes for comparison: a pixel-close port and a Next.js-native refactor. Update the logo using `docs/brand/assets/stc-logo-horizontal.png` in both routes.

## Architecture
- Create a new Next.js app (App Router, TypeScript) in `stc-web`.
- Clone the repo to a temp folder and migrate assets into `stc-web/public`.
- Routes:
  - `/` = pixel-close port of the original HTML/CSS.
  - `/v2` = Next.js-native refactor with componentized sections.
- Styling:
  - `/` uses a dedicated CSS file to preserve pixel fidelity.
  - `/v2` uses modular styling alongside componentized structure.

## Components & Structure
- Pixel-close (`/`):
  - `app/page.tsx` renders a single page structure.
  - `app/pixel.css` mirrors original CSS with minimal edits for asset paths and logo swap.
- Next-native (`/v2`):
  - `app/v2/page.tsx` plus 5–7 presentational components in `app/v2/components/`.
  - Suggested sections: `Hero`, `FeatureGrid`, `Process`, `Testimonials`, `CTA`, `Footer`.

## Data Flow
- Static content only. No runtime data fetching.
- Content sourced directly from the repo’s HTML.
- Assets referenced via absolute paths from `public/`.

## Error Handling & Edge Cases
- Missing assets: keep references, add TODO comments, list in summary.
- Web-hosted fonts: keep for pixel-close; for `/v2` use only if required.
- Normalize relative paths to absolute `/` paths from `public/`.

## Testing
- Manual verification only:
  - `npm run dev`.
  - Check `/` and `/v2` render, assets load, and new logo appears.
  - Compare `/` to original screenshot for pixel fidelity.

## Open Decisions
- None.
