# STC Brand Components Spec

This file defines implementation-ready specs for core brand components.

## 1) Header / Navbar

### Desktop (>= 1024px)
- Height: 88px
- Horizontal padding: 32px
- Background: `#1F1CDE`
- Layout: logo left, nav center/right, primary action right
- Max content width: 1200px centered

#### Logo
- Asset: `docs/brand/assets/stc-logo-horizontal.png`
- Render width: 260px
- Max height: 64px
- Preserve intrinsic aspect ratio
- Clear space around logo: minimum 16px inside header container

#### Navigation Links
- Font: Manrope, 16px, 600
- Color: `#D4E3FC`
- Hover: `#FFFFFF`
- Active: underline + color `#FFFFFF`
- Gap between items: 28px

#### Primary CTA Button
- Label examples: `Call Now`, `Verify Insurance`
- Background: `#22B610`
- Text: `#FFFFFF`
- Radius: 12px
- Height: 48px
- Horizontal padding: 22px

### Mobile (< 1024px)
- Height: 72px
- Horizontal padding: 16px
- Background: `#1F1CDE`
- Logo width: 180px
- Hamburger touch target: 44x44 minimum
- Mobile menu surface: `#D4E3FC`
- Mobile menu text: `#101828`

## 2) Footer

### Desktop
- Background: `#1F1CDE`
- Top padding: 64px
- Bottom padding: 32px
- Content width: 1200px centered
- Structure: 4 columns (brand, programs, resources, contact)

#### Brand Block
- Preferred logo: stacked
- Asset: `docs/brand/assets/stc-logo-stacked.png`
- Render width: 160px
- Spacing below logo before text: 20px
- Brand copy color: `#D4E3FC`

#### Footer Links
- Font: Manrope, 15px, 500
- Link color: `#D4E3FC`
- Hover color: `#FFFFFF`
- Row spacing: 12px

#### Bottom Bar
- Top margin: 40px
- Top border: 1px solid `rgba(212, 227, 252, 0.25)`
- Text color: `#D4E3FC`
- Font size: 14px

### Mobile
- Padding: 40px 16px 24px
- Layout: single column with grouped sections
- Stacked logo width: 128px
- Increase vertical spacing between groups to 20px

## 3) Buttons

### Primary
- Background: `#22B610`
- Text: `#FFFFFF`
- Radius: 12px
- Height: 48px (desktop), 46px (mobile)
- Hover: darken 6-8%
- Focus: 2px outline in `#D4E3FC`

### Secondary
- Background: transparent
- Border: 2px solid `#D4E3FC`
- Text: `#D4E3FC`
- Hover: background `rgba(212, 227, 252, 0.12)`

## 4) Cards and Surfaces
- Card background: `#D4E3FC`
- Card text: `#101828`
- Radius: 16px
- Padding: 24px desktop, 20px mobile
- Shadow: `0 6px 20px rgba(16, 24, 40, 0.12)`

## 5) Form Controls
- Input height: 48px
- Background: `#FFFFFF`
- Border: `#B8CDF6`
- Focus border: `#22B610`
- Label color: `#101828`
- Helper/error text: minimum 14px

## 6) Accessibility Baselines
- Text contrast: WCAG AA minimum
- Touch targets: 44x44 minimum
- Keyboard focus ring visible for all interactive controls
- Body copy minimum: 16px
