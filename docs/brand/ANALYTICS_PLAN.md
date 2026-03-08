# Analytics Plan (SEO + Hub Pages)

Date: 2026-03-08

## Goals
- Measure organic search performance by hub and diagnosis pages
- Track primary conversion actions (calls + assessment requests)
- Understand page-level engagement (scroll depth, time, FAQ interactions)

## Event Naming (GA4)

Event Name | Trigger | Properties
--- | --- | ---
cta_call_click | Click on any call CTA | page, location, label
cta_form_click | Click on any assessment/contact CTA | page, location, label
nav_link_click | Click on hub nav links | page, label
faq_expand | Expand FAQ item | page, question
scroll_depth | 25/50/75/100% scroll | page, percent
outbound_click | External link click | page, url, label

## Conversions
- `cta_call_click`
- `cta_form_click`

## Recommended Page Parameters
- `page_type`: hub, group, diagnosis
- `condition_bucket`: mental-health, addiction, relationships, dual-diagnosis
- `page`: path slug

## Implementation Notes
- GA4 is enabled when `NEXT_PUBLIC_GA_ID` is set.
- CTA tracking already fires `cta_call_click` and `cta_form_click` on diagnosis pages.
- Add `nav_link_click`, `faq_expand`, `scroll_depth`, and `outbound_click` once layout is final.
