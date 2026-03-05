# STC Component States

Purpose: standardize behavior and visual states for core UI components.

## 1) Buttons

### Primary Button
- Background: `#22B610`
- Text: `#FFFFFF`
- Radius: 12px
- Height: 48px desktop / 46px mobile

States:
- Default: solid green
- Hover: brightness -8%, slight lift (`translateY(-1px)`)
- Active: brightness -12%, reset lift
- Focus-visible: 2px ring `#1F1CDE` + 2px offset
- Disabled: 50% opacity, no shadow, `cursor:not-allowed`

### Secondary Button
- Background: transparent
- Border: 2px `#1F1CDE`
- Text: `#1F1CDE`

States:
- Hover: subtle fill `rgba(31,28,222,0.08)`
- Active: subtle fill `rgba(31,28,222,0.14)`
- Focus-visible: same as primary
- Disabled: 45% opacity

## 2) Inputs / Select / Textarea
- Background: `#FFFFFF`
- Border: `#B8CDF6`
- Text: `#101828`
- Placeholder: `#667085`

States:
- Hover: border `#7FA2E6`
- Focus: border `#1F1CDE`, 2px soft focus ring
- Error: border `#B42318`, error bg support `#FEE4E2`
- Disabled: `#F2F4F7` background, muted text

## 3) Cards
- Base: `#D4E3FC`
- Radius: 16px
- Shadow: `0 6px 20px rgba(16,24,40,0.12)`

States:
- Default: soft shadow
- Hover: stronger shadow + slight lift
- Focus-within: border accent and focus ring
- Disabled/Muted: opacity 70%, no hover lift

## 4) Nav Links
- Default: `#1F1CDE`
- Hover: darker (`#1715A8`) + optional underline reveal
- Active: visible underline + semibold
- Focus-visible: outlined focus ring

## 5) Motion + Timing
- Transition default: 180ms ease-out
- Complex interaction: 240-300ms
- Prefer transform/opacity animations over layout animations
- Respect `prefers-reduced-motion`
