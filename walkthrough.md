# Walkthrough

## Summary

Added **Crackd** as the first confirmed Gold sponsor on the Cove Hacks website, renamed all sponsor tier labels to match the real sponsorship tiers from the prospectus (`Platinum → Gold → Silver → Bronze`), and ensured full responsiveness across all device sizes.

---

## What Changed

### `components/sponsors.tsx`

| Change | Detail |
|---|---|
| Tier labels renamed | `Title` → `Platinum`, `Gold` → `Gold`, `Community` → `Bronze`; added new `Silver` tier row |
| Crackd sponsor card | Real logo (`/sponsor-logos/gold/crackd-color.webp`) rendered via Next.js `<Image>`, wrapped in an `<a>` linking to `https://crackd.it/` (opens in new tab with `noopener noreferrer`) |
| Hover effects | Gold ring glow (`box-shadow` via Tailwind ring utilities) + subtle warm shimmer gradient + `scale-[1.02]` on the Crackd card |
| Skeleton slots | Platinum: 3 slots · Gold: 3 remaining (Crackd fills 1 of 4) · Silver: 4 slots · Bronze: 6 slots |
| Responsive grids | Platinum `grid-cols-1 sm:grid-cols-2 md:grid-cols-3` · Gold/Silver `grid-cols-2 sm:grid-cols-3 md:grid-cols-4` · Bronze `grid-cols-3 sm:grid-cols-4 md:grid-cols-6` |
| Section dividers | Each tier label now has a trailing `h-px` gradient rule for visual separation |
| Extracted components | `SponsorCard` and `SkeletonCard` are now reusable sub-components with explicit props |
| Type safety | `RealSponsor` interface defined; no `any` types used |

---

## Evidence

### Build Output
```
▲ Next.js 16.1.6 (Turbopack)
✓ Compiled successfully in 2.1s
✓ Collecting page data
✓ Generating static pages
✓ Finalizing page optimization

Route (app)
┌ ○ /
├ ○ /_not-found
└ ○ /prospectus
```
Zero errors, zero warnings.

---

## Tier Structure (After)

```
Platinum  ┌─────────────────┐ ┌─────────────────┐ ┌─────────────────┐
 h=100px  │   Your Logo     │ │   Your Logo     │ │   Your Logo     │  (3 skeletons)
          └─────────────────┘ └─────────────────┘ └─────────────────┘

Gold      ┌──────────────┐ ┌──────────────┐ ┌──────────────┐ ┌──────────────┐
 h=72px   │   [CRACKD]   │ │   Your Logo  │ │   Your Logo  │ │   Your Logo  │
          │  crackd.it ↗ │ │  (skeleton)  │ │  (skeleton)  │ │  (skeleton)  │
          └──────────────┘ └──────────────┘ └──────────────┘ └──────────────┘

Silver    ┌──────────────┐ ┌──────────────┐ ┌──────────────┐ ┌──────────────┐
 h=60px   │   Your Logo  │ │   Your Logo  │ │   Your Logo  │ │   Your Logo  │  (4 skeletons)
          └──────────────┘ └──────────────┘ └──────────────┘ └──────────────┘

Bronze    ┌────────┐ ┌────────┐ ┌────────┐ ┌────────┐ ┌────────┐ ┌────────┐
 h=44px   │  Logo  │ │  Logo  │ │  Logo  │ │  Logo  │ │  Logo  │ │  Logo  │  (6 skeletons)
          └────────┘ └────────┘ └────────┘ └────────┘ └────────┘ └────────┘
```

---

## Notes

- Adding future sponsors requires only appending to the `REAL_SPONSORS` array in `sponsors.tsx` — the slot counts auto-adjust.
- The Gold tier label uses a warm amber tint (`text-[#c9a227]/60`) to visually distinguish it from the neutral grey used by other tiers.