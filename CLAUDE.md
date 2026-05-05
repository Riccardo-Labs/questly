# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # start dev server (localhost:3000)
npm run build    # production build
npm run lint     # ESLint via next lint
```

No test suite is configured.

## Architecture

Next.js 14 App Router landing page for Questly — an Italian digital agency targeting SMBs.

### Content layer

All copy lives in **`lib/content.ts`** as typed named exports (`hero`, `nav`, `services`, `faq`, etc.). TypeScript interfaces for every content shape are in **`types/index.ts`**. When editing copy, only touch `lib/content.ts`. When adding a new section, add its type to `types/index.ts` and its content export to `lib/content.ts`.

### Component structure

- `components/sections/` — one file per page section; each imports its content from `lib/content.ts`
- `components/layout/` — `Navbar`, `Footer`
- `components/ui/` — `Button`, `Badge`, `SectionLabel`, `ContactModal`, `Logo`, `ServiceSidebar`, `VantaBackground`, `CustomCursor`, `Container`
- `ServiceSidebar` uses a CSS Module (`ServiceSidebar.module.css`); receives `service: ServiceData | null` via props, data comes from `lib/content.ts` (`serviceDetails`)
- `Badge` has `variant?: 'dark' | 'light'` — use `variant="light"` on light-background sections
- Sections use `Badge` (not `SectionLabel`) for section labels
- `lucide-react` is installed and available

### Contact modal

State lives in `app/page.tsx`. Sections that need to open the modal receive an `onContactOpen: () => void` prop. Do not lift this state further.

### Design system

Mixed dark/light theme — sections alternate. Custom Tailwind tokens (defined in `tailwind.config.ts`):

**Dark tokens:**
| Token | Value |
|---|---|
| `bg` | `#08102a` (page background) |
| `bg2` | `#0e1a38` (surface) |
| `bg3` | `#162244` (elevated surface) |
| `blue` | `#3d6aff` (primary accent) |
| `text` | `#e8ecff` |
| `muted` | `rgba(180,195,255,0.5)` |
| `subtle` | `rgba(99,130,255,0.12)` (borders) |

**Light tokens:**
| Token | Value |
|---|---|
| `bg-light` | `#f8f9ff` (light section bg) |
| `surface-light` | `#ffffff` (cards) |
| `text-body` | `#0d1120` (primary text on light) |
| `text-secondary` | `#4a5568` (secondary text on light) |
| `border-light` | `#e2e8f0` (borders on light) |

**Section themes (current order in `app/page.tsx`):**
- Hero → dark
- LogoBar → dark
- Problem → **light** (`bg-bg-light`, `#f4f6fb` override)
- Solution → **dark** (`bg-bg2`)
- Services → **light** (`bg-bg-light`)
- FinalCta → **dark** (`bg-bg2`)

**`min-h-[90vh] flex flex-col justify-center`** applied to Problem, Solution, Services, Faq sections for consistent height across devices.

Fonts via CSS variables: `--font-space-grotesk` → `font-sans`, `--font-jetbrains` → `font-mono`.

Custom CSS classes in `globals.css`: `hero-grid-bg` (dot grid), `scanline` (animated line inside ServicesWidget), `badge-dot-pulse`, `bg-blob-1/2/3` (floating animated blobs, global background in `layout.tsx`).

### Layout container

`Container` component (`components/ui/Container.tsx`) wraps all section content with `max-w-[1750px] mx-auto px-[clamp(1.875rem,6.25vw,7.5rem)]`. Navbar uses the same values for alignment. Hero uses these values directly (no Container wrapper, values are manually scaled ×1.25 from base).

### Custom cursor

`CustomCursor` component (`components/ui/CustomCursor.tsx`) — JS-based cursor with dot + radial gradient glow. Native cursor hidden via `cursor: none` in `globals.css` (desktop only, `@media (pointer: fine)`). Rendered in `layout.tsx`.

`VantaBackground` — Vanta.js NET effect (Three.js), rendered as `absolute` inside Hero section only. Deps: `vanta`, `three`.

Custom Tailwind animations: `animate-blink`, `animate-marquee`, `animate-fade-up`.

### Button component

`components/ui/Button.tsx` is smart about rendering: `next/link` for internal paths, `<a>` for `#hash`/`mailto:`, `<button>` otherwise. Variants: `primary`, `secondary`, `white`, `outline`.

### Navbar

Solid `bg-[#08102a]` (no opacity/blur). Uses `usePathname()` for active link detection. Nav links are route-based (`/servizi`, `/faq`), not hash anchors. Active state: `border-t-2 border-[#3d6aff] text-[#3d6aff]`.

### Subpages

App Router subpages exist at `app/servizi/page.tsx` and `app/faq/page.tsx` (placeholders). Add new pages under `app/[route]/page.tsx`.

### HowWeWork / WhyQuestly

These sections exist as components but are **not rendered** in `app/page.tsx`.
