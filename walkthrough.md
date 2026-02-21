# Walkthrough

## Summary

Three changes were shipped in this session:

1. **Global email replacement** — every contact and sponsor email across the site was updated to `covehacks@gmail.com`.
2. **Prospectus PDF modal** — the "View Prospectus" button in the Sponsors section now opens a sleek, closable in-page PDF preview modal.
3. **Custom PDF viewer** — replaced the default browser `<iframe>` PDF chrome with a fully custom canvas-based renderer built on PDF.js (`pdfjs-dist`), matching the site's dark aesthetic with page navigation, zoom controls, HiDPI rendering, and smooth transitions.

---

## Changes Made

### Email Updates

| File | Old value | New value |
|---|---|---|
| `components/cta.tsx` | `hello@covehacks.org` | `covehacks@gmail.com` |
| `components/footer.tsx` | `hello@covehacks.org` | `covehacks@gmail.com` |
| `components/sponsors.tsx` | `sponsors@covehacks.org` | `covehacks@gmail.com` |
| `components/prospectus.tsx` | `sponsor@covehacks.org` | `covehacks@gmail.com` |
| `components/prospectus-document.tsx` | `sponsor@covehacks.org` | `covehacks@gmail.com` |

> Note: `covehacks.org` (website URL only) was intentionally left unchanged in `prospectus.tsx` and `prospectus-document.tsx`.

---

### Prospectus PDF Modal — `components/prospectus-modal.tsx` [NEW]

A fully self-contained `"use client"` component with the following design:

- **Backdrop**: fixed full-viewport overlay with `rgba(0,0,0,0.75)` tint + `backdrop-blur(12px)` frosted glass effect. Clicking the backdrop closes the modal.
- **Panel**: `max-w-5xl`, `min(90vh, 900px)` tall, dark `#111111` background with a subtle `#6B9BD2` gradient border glow and deep box-shadow.
- **Header bar**:
  - Left: PDF icon in a tinted rounded box + "Cove Hacks 2026" label + "Sponsorship Prospectus" title.
  - Right: **Download** button (`<a href="/Cove Hacks Prospectus.pdf" download>`) styled in the site's blue accent, and an **X** close button.
- **Body**: `<iframe>` filling all remaining height, serving `/Cove Hacks Prospectus.pdf` directly from the public directory.
- **Footer hint**: Faint monospace hint text — "Press Esc or click outside to close · covehacks@gmail.com".
- **Keyboard**: `Escape` key closes the modal. `document.body.overflow` is locked while open.
- **Accessibility**: `role="dialog"`, `aria-modal="true"`, `aria-label` on the container.

---

### `components/sponsors.tsx` [MODIFIED]

- Added `"use client"` directive.
- Imported `useState` and `ProspectusModal`.
- Replaced the inert `<a href="#">View Prospectus</a>` with a `<button>` that sets `prospectusOpen = true`.
- `ProspectusModal` is rendered at the top of the section, receiving `isOpen` and `onClose` props.
- Sponsor email updated to `covehacks@gmail.com`.

---

---

## Custom PDF Viewer — `components/pdf-viewer.tsx` [NEW]

Replaced the browser-native `<iframe>` (which renders the OS/browser PDF chrome) with a fully custom viewer. Implementation details:

### Technology
- **`pdfjs-dist@5.4.624`** — Mozilla's PDF.js, installed via pnpm. Worker loaded from unpkg CDN (`pdf.worker.min.mjs`) so no webpack/Turbopack config is needed.
- Dynamic `import('pdfjs-dist')` inside `useEffect` ensures zero SSR issues.
- `cMapUrl` set to unpkg CDN for full CJK/special-character font support.

### Rendering
- Each page is rendered onto an HTML `<canvas>` via `page.render()`.
- **HiDPI / Retina support**: canvas pixel dimensions are multiplied by `window.devicePixelRatio`, then CSS dimensions set to logical size — pages are razor-sharp on all displays.
- White page background (`rgb(255,255,255)`) is passed to the render call so PDF content renders correctly.
- In-flight render tasks are cancelled before starting a new one (fast navigation safety).

### UI / Controls
| Control | Detail |
|---|---|
| **Toolbar** | Dark `rgba(255,255,255,0.018)` bar pinned above the canvas area |
| **Page nav** | `< [input] / N >` — editable page number input, commit on Enter or blur |
| **Keyboard** | `←` / `→` arrow keys navigate pages; `Escape` closes modal |
| **Zoom** | `ZoomOut · [N%] · ZoomIn · Fit` — step ×1.2 per click, clamped 40%–400% of fit-width |
| **Fit-to-width** | Auto-computed on load from first page's natural dimensions vs. container width |
| **Status bar** | Bottom strip shows "Page X of N · Use ← → to navigate" in faint mono text |

### States
- **Loading skeleton**: pulsing shimmer placeholder at A4 aspect ratio while the PDF loads
- **Rendering overlay**: `Loader2` spinner with `backdrop-blur` fades over the canvas during page transitions
- **Fade transition**: canvas fades in (`opacity 0.18s ease`) on every page/zoom change
- **Error state**: red-tinted card with `AlertCircle` icon and message if load fails

### Design tokens (matching site)
- Background: `#0d0d0d` with subtle `#6B9BD2` radial gradient
- Accent: `#6B9BD2` for active controls, borders, labels
- Typography: `font-mono` for all numeric/label elements
- Page drop-shadow: `drop-shadow(0 20px 60px rgba(0,0,0,0.6))`

---

## Evidence

### Build output (post custom viewer)

```
▲ Next.js 16.1.6 (Turbopack)

  Creating an optimized production build ...
✓ Compiled successfully in 2.4s
✓ Collecting page data
✓ Generating static pages
✓ Finalizing page optimization

Route (app)
┌ ○ /
├ ○ /_not-found
└ ○ /prospectus
```

Zero errors. Zero warnings.

### Email grep (post-change)

Running `grep` for `covehacks\.org|hello@|sponsors@covehacks|sponsor@covehacks` across `components/` returns **zero matches** — only the website URL `covehacks.org` remains (intentional).