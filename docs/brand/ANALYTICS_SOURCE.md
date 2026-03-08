# Analytics Source Notes (Current Site)

Date captured: 2026-03-08

## Google Analytics (Legacy UA)

Source: treatmentsolutions.org (homepage, contact, therapies, and IOP pages)

Detected Universal Analytics snippet:

```html
<script>
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-29476228-1', 'treatmentsolutions.org');
ga('require', 'displayfeatures');
ga('send', 'pageview');
</script>
```

## Notes
- The current production site appears to use Universal Analytics (UA), which is deprecated.
- No GA4 `G-` measurement ID or GTM container ID was detected in the pages inspected.
- The new site includes the UA snippet in `stc-web/src/app/layout.tsx` to preserve continuity.
- GA4 is wired to `NEXT_PUBLIC_GA_ID` (optional). Set this env var to enable GA4 on the new site without code changes.
- CTA events on diagnosis pages emit `cta_call_click` and `cta_form_click` via the GA4 `gtag` API when GA4 is enabled.
