# STC Typography Board

Primary direction: use `Tahoma` as the default brand font for UI/body copy, with controlled supporting fonts for headings and emphasis.

## 1) Core System

### Primary (required)
- Body/UI/Nav/Forms/Buttons: `Tahoma`

### Fallback stack
- `Tahoma, Verdana, Segoe UI, Arial, sans-serif`

## 2) Pairing Sets (Tahoma + Heading Font)

### Pairing A (Recommended Clinical)
- Heading: `Georgia`
- Body/UI: `Tahoma`
- Tone: trustworthy, familiar, readable
- Best for: primary homepage, services pages, insurance pages

### Pairing B (Modern Clinical)
- Heading: `Fraunces`
- Body/UI: `Tahoma`
- Tone: modern + authoritative
- Best for: hero headlines and campaign landing pages

### Pairing C (Editorial Support)
- Heading: `Merriweather`
- Body/UI: `Tahoma`
- Tone: calm, long-form friendly
- Best for: method/explainer pages and blog-like content

### Pairing D (Structured Professional)
- Heading: `Source Serif 4`
- Body/UI: `Tahoma`
- Tone: precise, clean, professional
- Best for: process and team pages

## 3) Type Scale (Desktop)
- H1: 56 / 62
- H2: 40 / 48
- H3: 30 / 38
- H4: 24 / 32
- Body Large: 18 / 30
- Body: 16 / 26
- Caption: 14 / 22

## 4) Type Scale (Mobile)
- H1: 40 / 46
- H2: 32 / 38
- H3: 24 / 30
- H4: 20 / 26
- Body: 16 / 24
- Caption: 14 / 20

## 5) Font Usage Rules
- Keep `Tahoma` for all navigational and functional UI text.
- Use one heading font per page (do not mix multiple serif heading families).
- Keep minimum body size at 16px.
- Use semibold/700 sparingly for emphasis and CTA clarity.
- Preserve high contrast and clean line length for healthcare readability.

## 6) Prompt Injection Block
Use this in Stitch/Frontend/UX prompts:

```md
TYPOGRAPHY SYSTEM (REQUIRED):
- Primary UI/Body font: Tahoma
- Preferred heading pair: Georgia (fallback: Fraunces, Merriweather, Source Serif 4)
- Body stack: Tahoma, Verdana, Segoe UI, Arial, sans-serif
- Keep body text at 16px minimum
- Use one heading family per page; no mixed heading font sets
```

## 7) Implementation Snippets

### CSS
```css
:root {
  --font-body: Tahoma, Verdana, "Segoe UI", Arial, sans-serif;
  --font-heading: Georgia, "Times New Roman", serif;
}

body { font-family: var(--font-body); }

h1, h2, h3, h4 { font-family: var(--font-heading); }
```

### Tailwind theme extension (example)
```ts
fontFamily: {
  body: ["Tahoma", "Verdana", "Segoe UI", "Arial", "sans-serif"],
  heading: ["Georgia", "Times New Roman", "serif"],
}
```
