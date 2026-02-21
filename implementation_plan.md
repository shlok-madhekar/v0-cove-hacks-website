# Implementation Plan

## Goal
Add Crackd as the first Gold sponsor, rename sponsor tier labels on the main site to match the real sponsorship tiers (Platinum / Gold / Silver / Bronze), keep skeleton placeholders for all unfilled slots, and ensure the layout is fully responsive.

## Context
- Gold sponsor logo: `public/sponsor-logos/gold/crackd-color.webp`
- Gold sponsor URL: `https://crackd.it/`
- Real tiers (from `lib/prospectus-data.ts`): Bronze → Silver → Gold → Platinum
- Current site uses placeholder tier names: "Title", "Gold", "Community"

## Proposed Changes

| File | Action | Description |
|---|---|---|
| `components/sponsors.tsx` | [MODIFY] | Rename tiers to Platinum / Gold / Silver / Bronze; add Crackd real logo card in Gold row; keep skeletons for all other slots; ensure responsive grid at all breakpoints |

## Tier Layout Plan

### Platinum (top, most prominent)
- Grid: `grid-cols-1 sm:grid-cols-2 md:grid-cols-3`
- Card height: `h-[100px]`
- Border: dashed, slightly bolder
- All skeleton

### Gold
- Grid: `grid-cols-2 sm:grid-cols-3 md:grid-cols-4`
- Card height: `h-[72px]`
- Slot 1: **Crackd** — real logo, linked to `https://crackd.it/`, subtle gold ring on hover
- Slots 2-4: skeleton placeholders

### Silver
- Grid: `grid-cols-2 sm:grid-cols-3 md:grid-cols-4`
- Card height: `h-[60px]`
- All skeleton

### Bronze
- Grid: `grid-cols-3 sm:grid-cols-4 md:grid-cols-6`
- Card height: `h-[44px]`
- All skeleton

## Verification Plan
- `cd v0-cove-hacks-website && bun run build` — must pass with zero errors
- Visual check at 375px, 768px, 1280px viewports