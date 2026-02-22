# Walkthrough

## Summary

Three changes shipped in this update:

1. **Email updated sitewide** — All instances of `covehacks@gmail.com` replaced with `team@covehacks.dev` across 5 files (CTA, footer, sponsors, prospectus page, prospectus PDF document).
2. **Sponsor skeleton cards redesigned** — "Your Logo" placeholders replaced with tier-aware, inviting CTAs that link to `mailto:team@covehacks.dev`. Each tier has unique copy that rotates across cards, with hover effects that transition to the brand blue.
3. **Team page created** — New `/team` route with exec team and sub-team sections, placeholder member cards, initials-based avatars, and a "Want to help organize?" CTA. Navbar and footer updated with "Team" link. All anchor links updated to `/#` prefix so they work cross-page.

---

## Changes Made

### Email Update (`covehacks@gmail.com` → `team@covehacks.dev`)

| File | What changed |
|---|---|
| `components/cta.tsx` | `mailto:` href + display text |
| `components/footer.tsx` | `mailto:` href |
| `components/sponsors.tsx` | `mailto:` href + display text |
| `components/prospectus.tsx` | `mailto:` href + display text |
| `components/prospectus-document.tsx` | Display text in PDF |

### Sponsor Skeleton Redesign

**File**: `components/sponsors.tsx`

- Replaced static `<div>` skeleton with `<a>` linking to `mailto:team@covehacks.dev?subject=Sponsoring%20Cove%20Hacks`
- Added `SKELETON_COPY` object with tier-specific copy arrays:
  - **Partners**: "Interested in partnering?", "Lead sponsor spot available", "Headline your support here"
  - **Gold**: "Back 400 builders", "Fuel the next generation", "Your brand, front & center"
  - **Silver**: "Support young engineers", "Champion innovation", "Invest in tomorrow", "Empower student hackers"
  - **Bronze**: "Chip in", "Join the mission", "Be part of it", "Rep your brand", "Show up for students", "Get involved"
  - **In-Kind**: "Donate tools", "Share resources", "Lend your product", "Contribute credits", "Provide services", "Supply the hackers"
- Each card rotates through its tier's copy via `index % length`
- Hover state transitions border and text to `[#6B9BD2]` blue
- Partners tier shows "reach out →", all others show "sponsor →" as a subtle sub-label
- `SkeletonCard` component now accepts `tier` and `index` props

### Team Page

**New files**:
- `app/team/page.tsx` — Route with metadata, wraps `<Navbar>`, `<TeamPage>`, `<Footer>`
- `components/team-page.tsx` — Full team page component

**Modified files**:
- `components/navbar.tsx`:
  - Added `{ label: "Team", href: "/team" }` to nav links
  - Updated logo `href` from `#` to `/` for cross-page navigation
  - Updated all anchor links from `#section` to `/#section`
- `components/footer.tsx`:
  - Added "Team" link in the Event column pointing to `/team`
  - Updated all anchor links from `#section` to `/#section`

**Team page structure**:
- **Hero**: Subtle blue background glow, mono label + bold heading + description
- **Exec Team**: Lead Organizer featured in a single-column card, remaining exec in 3-column grid. Cards use `featured` variant with blue-tinted avatars and `[#6B9BD2]` accent
- **Sub-teams**: 6 departments (Engineering, Design, Sponsorship, Marketing, Logistics, Operations) each with lead + 2 members in a 4-column grid. Cards use standard variant with neutral styling
- **Join CTA**: Blue-tinted card with "Want to help organize?" heading and mailto button
- **Member cards**: Clickable `<a>` tags with initials avatar, name, role, and arrow-on-hover. Smooth scale + translate animation on hover

**Data structure** (placeholder — ready to fill in):
- `EXEC_TEAM: TeamMember[]` — 7 exec members with name, role, link
- `SUB_TEAMS: Team[]` — 6 teams, each with name and members array
- `TeamMember` interface: `{ name: string; role: string; link: string }`

---

## Evidence

```
▲ Next.js 16.1.6 (Turbopack)
✓ Compiled successfully in 1694.6ms
✓ Generating static pages (5/5) in 165.8ms

Route (app)
┌ ○ /
├ ○ /_not-found
├ ○ /prospectus
└ ○ /team
```

- Build passes with zero errors
- `/team` route generated as static content
- `grep` confirms zero remaining instances of `covehacks@gmail.com` in `.tsx` files

## Notes

- Team member data is placeholder — swap names, roles, and links in `EXEC_TEAM` and `SUB_TEAMS` arrays in `components/team-page.tsx`
- Sponsor skeleton copy auto-rotates; adding real sponsors to `REAL_SPONSORS` will automatically reduce skeleton count per tier
- All cross-page navigation uses absolute paths (`/`, `/#about`, `/team`) so links work from any route