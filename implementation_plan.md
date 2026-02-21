# Implementation Plan

## Goal
1. Replace all contact/sponsor email addresses site-wide with `covehacks@gmail.com`.
2. Replace the broken "View Prospectus" link with a sleek, closable PDF preview modal that lets users view and download `/Cove Hacks Prospectus.pdf`.

---

## Proposed Changes

### Email Updates
- [MODIFY] `components/cta.tsx` — Replace `hello@covehacks.org` (href + display text)
- [MODIFY] `components/footer.tsx` — Replace `hello@covehacks.org` (href)
- [MODIFY] `components/sponsors.tsx` — Replace `sponsors@covehacks.org` (href + display text)
- [MODIFY] `components/prospectus.tsx` — Replace `sponsor@covehacks.org` (href + display text)
- [MODIFY] `components/prospectus-document.tsx` — Replace `sponsor@covehacks.org` (PDF contact page text)

### Prospectus PDF Modal
- [NEW] `components/prospectus-modal.tsx` — New client component: dark glassmorphism modal with iframe PDF preview, close (X) button, and download button. Accepts `isOpen` + `onClose` props.
- [MODIFY] `components/sponsors.tsx` — Convert to `"use client"`, import `ProspectusModal`, wire up open/close state to "View Prospectus" button.

---

## Implementation Details

### `ProspectusModal`
- Full-viewport fixed overlay with `backdrop-blur` and dark tint, animated with Tailwind `transition` classes
- Centered panel: ~90vw / 90vh max, dark `#111` background, `border border-white/10` rounded corners, shadow
- Header bar: "Sponsorship Prospectus" title (font-mono, [#6B9BD2]), download anchor (`<a href="/Cove Hacks Prospectus.pdf" download>`), close button (`X` icon from lucide-react)
- Body: `<iframe src="/Cove Hacks Prospectus.pdf" ...>` filling remaining space
- Escape key listener to close; click-outside-panel to close
- `aria-modal` + focus trap basics for accessibility

---

## Verification Plan
- `cd cove-site/v0-cove-hacks-website && pnpm build` — must pass with zero errors
- Visual check: open dev server, click "View Prospectus" in Sponsors section → modal opens with PDF preview
- Click backdrop or X → modal closes
- Click Download inside modal → PDF downloads
- Grep for old emails: `grep -r "covehacks.org\|hello@\|sponsor@\|sponsors@" components/` → zero matches