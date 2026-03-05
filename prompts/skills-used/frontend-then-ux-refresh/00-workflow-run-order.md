# STC Workflow Run Order (Frontend -> Enhancer -> UX)

Use this exact sequence for each direction (Clinical, Recovery):

1. Run `01-*` or `03-*` (Frontend generation pass with `landing-page-guide-v2`).
2. Run Stitch Prompt Enhancer on that same prompt/output.
3. Generate updated screen from enhanced frontend prompt.
4. Run `02-*` or `04-*` (UX refinement pass with `ui-ux-pro-max`).
5. Optional: run Stitch Prompt Enhancer again on UX prompt.
6. Generate final refined screen.

## Non-negotiables
- Keep desktop-only constraints.
- Keep single-flow page structure.
- Keep CTA set unchanged.
- Keep logo asset lock unchanged.
- Keep implementation target: Next.js 14+ (App Router) + TypeScript + Tailwind.
- Keep high-motion stack active (Framer Motion + GSAP/ScrollTrigger + Lenis).
- Ensure `prefers-reduced-motion` fallback is always included.
