# Walkthrough — 404 Page & Prospectus Removal

## Summary

Two changes were made in this pass:

1. **Custom 404 Page** — A brand-consistent "not found" page was created at `app/not-found.tsx`. It mirrors the hero section's visual identity: `#6B9BD2` blue background, DM Sans + JetBrains Mono typography, white text with opacity layers, fade-in + translate-up entrance animations, and pill-shaped CTA buttons ("Go Home" / "Learn more"). The Navbar is included for consistent navigation.

2. **Prospectus Route Removed** — The `/prospectus` page was fully decommissioned:
   - `app/prospectus/page.tsx` was **deleted**.
   - A **permanent redirect** (`301`) from `/prospectus` → `/` was added in `next.config.mjs` so existing links don't break.
   - The `/prospectus` entry was **removed from `app/sitemap.ts`**.
   - `/prospectus` was **disallowed in `app/robots.ts`** to signal crawlers.

## Files Changed

| File | Action | Detail |
|---|---|---|
| `app/not-found.tsx` | **Created** | Custom 404 page with on-brand styling, animated entrance, Navbar, and dual CTAs |
| `app/sitemap.ts` | **Modified** | Removed the `/prospectus` entry from the sitemap array |
| `app/robots.ts` | **Modified** | Added `disallow: ["/prospectus"]` rule |
| `next.config.mjs` | **Modified** | Added `redirects()` with permanent redirect `/prospectus` → `/` |
| `app/prospectus/page.tsx` | **Deleted** | Route no longer exists |

## Evidence

Build output (`npx next build`):

```
▲ Next.js 16.1.6 (Turbopack)

  Creating an optimized production build ...
✓ Compiled successfully in 1321.4ms
  Skipping validation of types
✓ Collecting page data using 10 workers in 203.1ms
✓ Generating static pages using 10 workers (6/6) in 195.1ms
✓ Finalizing page optimization in 9.8ms

Route (app)
┌ ○ /
├ ○ /_not-found
├ ○ /robots.txt
├ ○ /sitemap.xml
└ ○ /team

○  (Static)  prerendered as static content
```

- Zero build errors.
- `/_not-found` is listed as a generated static page.
- `/prospectus` is no longer in the route table.
- `/sitemap.xml` only lists `/` and `/team`.