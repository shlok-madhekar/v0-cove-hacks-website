# Implementation Plan: SEO Overhaul & OG Image

## Goal

Massively upgrade the SEO metadata across the Cove Hacks site and add a dynamically generated OpenGraph image that renders a beautiful branded preview (NOT the sun logo, NOT the countdown timer) when shared on iMessage, Twitter, Discord, etc.

## Proposed Changes

| File | Action | Description |
|---|---|---|
| `app/opengraph-image.tsx` | [NEW] | Dynamic OG image (1200×630) via `next/og` — recreates hero aesthetic with blue gradient, "COVE HACKS" title, tagline, date, stats. No countdown. |
| `app/twitter-image.tsx` | [NEW] | Twitter card image (1200×630) — same design as OG image, optimized for Twitter/X large summary card. |
| `app/layout.tsx` | [MODIFY] | Full metadata overhaul: `metadataBase`, comprehensive OpenGraph, Twitter card, keywords, canonical, robots, authors, JSON-LD structured data for the event. |
| `app/robots.ts` | [NEW] | Programmatic `robots.txt` via Next.js metadata API — allow all crawlers, reference sitemap. |
| `app/sitemap.ts` | [NEW] | Programmatic `sitemap.xml` via Next.js metadata API — index `/`, `/team`, `/prospectus`. |
| `components/json-ld.tsx` | [NEW] | Server component that injects JSON-LD structured data (Event schema) into the page `<head>`. |
| `app/page.tsx` | [MODIFY] | Import and render `<JsonLd />` component. |

## Key Decisions

- **Dynamic OG image over static screenshot**: A static screenshot would go stale. `next/og` renders at request time and always matches the brand.
- **No countdown in OG image**: The countdown is dynamic and a frozen timestamp in a social preview makes zero sense.
- **`metadataBase` set to `https://covehacks.dev`**: All relative OG/Twitter image URLs resolve against this.
- **JSON-LD Event schema**: Gives Google rich results for the hackathon event (date, location, description, registration link).

## Verification Plan

- `cd v0-cove-hacks-website && npx next build` — must pass with zero errors
- Visit `/opengraph-image` directly in browser to confirm the image renders
- Visit `/twitter-image` directly in browser to confirm the image renders
- Validate OG tags with https://www.opengraph.xyz/ or Facebook Sharing Debugger
- Validate structured data with https://search.google.com/test/rich-results
- Check `/robots.txt` and `/sitemap.xml` routes in browser