# Staging & Speed Verification Checklist

## Before Deployment
- [ ] Run `npm run speed-check` (builds, then reminds you to test PageSpeed)

## After Deploy to Staging (Vercel/Netlify)
1. [ ] Open staging URL in browser
2. [ ] Test on [PageSpeed Insights](https://pagespeed.web.dev) (Mobile)
3. [ ] Screenshot the PageSpeed score for your records

## Speed Badge Update (in `src/app/page.tsx`)
- **If LCP is under 2.5s:** Update hero badge from "⚡ Mobile-Optimized • No Bloat • Instant Loading" to "Loads in [X] seconds" (use real Lighthouse LCP value)
- **If LCP is over 2.5s:** Optimize images further before claiming speed. Keep the flexible badge until verified.

## Hero Structure (Already Optimized)
- Pure HTML/CSS (no background images, no heavy graphics)
- Phone mockups = CSS gradients, borders, divs
- Above-fold: H1, subhead, CTA buttons only
- No render-blocking resources (system fonts, inline critical CSS only)
