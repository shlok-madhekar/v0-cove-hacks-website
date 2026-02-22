# Implementation Plan

## Goal
1. Create a custom 404 page that matches the Cove Hacks visual identity (blue `#6B9BD2` background, DM Sans + JetBrains Mono fonts, white text, smooth animations).
2. Remove `/prospectus` from the sitemap.
3. Block access to the `/prospectus` route by redirecting visitors to the homepage.

## Proposed Changes

| File | Action |
|---|---|
| `app/not-found.tsx` | **[NEW]** Custom 404 page with on-brand styling, animated entrance, and a "Go Home" CTA |
| `app/sitemap.ts` | **[MODIFY]** Remove the `/prospectus` entry from the sitemap array |
| `next.config.mjs` | **[MODIFY]** Add a permanent redirect from `/prospectus` to `/` so no one can visit the page |
| `app/prospectus/page.tsx` | **[DELETE]** Remove the prospectus route entirely |

## Design Notes — 404 Page
- Full-viewport height with `#6B9BD2` background to match the hero section
- Large "404" heading in DM Sans (font-black), echoing the hero's `COVE HACKS` treatment
- Monospace subtitle and description in JetBrains Mono with `white/60` opacity
- Fade-in + translate-up entrance animation (client component with `useEffect` mount state)
- "Go Home" pill button matching hero CTA styling (`bg-white text-[#5a8abf]`)
- Navbar included for consistent navigation
- Fully responsive

## Verification Plan
- `bun run build` — confirm no build errors and 404 page is generated
- Visit a non-existent route to confirm the 404 page renders
- Visit `/prospectus` to confirm it redirects to `/`
- Check `/sitemap.xml` to confirm prospectus is no longer listed