# STC Semantic Tokens

Purpose: define implementation-ready semantic tokens so prompts and code use consistent meanings, not raw color guesses.

## 1) Core Palette (source)
- `--color-bg-base`: `#D4E3FC`
- `--color-accent-primary`: `#22B610`
- `--color-brand-deep`: `#1F1CDE`

## 2) Semantic Text Tokens
- `--color-text-primary`: `#101828`
- `--color-text-secondary`: `#344054`
- `--color-text-on-dark`: `#FFFFFF`
- `--color-text-link`: `#1F1CDE`
- `--color-text-link-hover`: `#1715A8`

## 3) Surface + Border Tokens
- `--color-surface-primary`: `#D4E3FC`
- `--color-surface-elevated`: `#EAF1FF`
- `--color-surface-inverse`: `#1F1CDE`
- `--color-border-soft`: `#B8CDF6`
- `--color-border-strong`: `#7FA2E6`

## 4) State Tokens
- `--color-state-success`: `#22B610`
- `--color-state-success-bg`: `#E9FBE6`
- `--color-state-warning`: `#B26A00`
- `--color-state-warning-bg`: `#FFF3E0`
- `--color-state-error`: `#B42318`
- `--color-state-error-bg`: `#FEE4E2`
- `--color-state-info`: `#1F1CDE`
- `--color-state-info-bg`: `#EEF2FF`

## 5) Focus + Overlay Tokens
- `--color-focus-ring`: `#1F1CDE`
- `--color-focus-ring-offset`: `#FFFFFF`
- `--overlay-soft`: `rgba(16, 24, 40, 0.08)`
- `--overlay-medium`: `rgba(16, 24, 40, 0.16)`

## 6) Token Usage Rules
- Do not hardcode random hex values in components when a semantic token exists.
- CTA actions always map to `--color-accent-primary`.
- Validation and status UI must use state tokens.
- Links use link tokens, not accent green.

## 7) Prompt Injection Block
```md
SEMANTIC TOKENS (REQUIRED):
- Base background: --color-bg-base (#D4E3FC)
- Primary action: --color-accent-primary (#22B610)
- Primary text: --color-text-primary (#101828)
- Secondary text: --color-text-secondary (#344054)
- Soft border: --color-border-soft (#B8CDF6)
- Focus ring: --color-focus-ring (#1F1CDE)
```
