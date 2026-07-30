# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm dev           # start Next.js dev server (http://localhost:3000)
pnpm build         # lint + type-check + production bundle
pnpm start         # serve the production build locally
pnpm lint          # Next.js ESLint
pnpm typecheck     # tsc --noEmit (type checking only)
```

Package manager: **pnpm** (lock file: `pnpm-lock.yaml`). Do not use npm or yarn.

No tests exist in this project.

## Architecture

Next.js 15 App Router + React 19 single-page storefront for **INA'S DRINK**, a French artisanal juice brand. No backend — cart is client-only, persisted to `localStorage`.

### Directory layout

```
app/           # Next.js App Router
  layout.tsx   # root layout: fonts (Cormorant Garamond + Inter), metadata, JSON-LD, CartProvider
  page.tsx     # assembles all section components
  globals.css  # Tailwind base + custom utilities

components/    # all sections + interactive UI (all 'use client')
lib/
  data.ts      # single source of truth: PRODUCTS, BRAND, FEATURES, TESTIMONIALS, FAQS, NAV_LINKS
  cart.tsx     # CartProvider context + useCart hook (localStorage-persisted)
  utils.ts     # cn() helper (clsx + tailwind-merge)
```

### Key files

| File | Role |
|---|---|
| `lib/data.ts` | All static content and brand data. Edit here to change copy, prices, contact info, or add products. |
| `lib/cart.tsx` | `CartProvider` (wraps app in `layout.tsx`) + `useCart()` hook. `CartItem.id` is `ProductId \| 'pack'`. Persists to `localStorage` under `inas-drink-cart`. |
| `tailwind.config.ts` | Custom palette: `forest` (brand green), `gold`, `cream`, and per-product colors `bissap` / `gingembre` / `tamarin` / `baobab`. |

### Component map

| Component | Section |
|---|---|
| `Navbar` | Sticky glassmorphism nav + mobile drawer + cart badge |
| `Hero` | Full-screen with 4 floating product bottles (Framer Motion parallax) |
| `Features` | 4 benefit cards with stagger scroll animation |
| `ProductCard` | Individual product card with hover effects + cart add |
| `ProductGrid` | `#produits` section — renders all `PRODUCTS` |
| `DiscoveryPack` | `#pack` section — dark green, all 4 bottles, pricing |
| `StorySection` | `#histoire` brand storytelling — split image + text |
| `Testimonials` | Auto-advancing carousel with dot navigation |
| `FAQ` | `#faq` animated accordion |
| `CTA` | Final full-width forest-green call-to-action |
| `Footer` | Dark footer with logo, nav, contact, social links |
| `CartDrawer` | Slide-in cart panel (Framer Motion AnimatePresence) |
| `FloatingActions` | WhatsApp button + scroll-to-top |

### Styling conventions

- **All components are `'use client'`** (Framer Motion + cart context).
- `font-display` → Cormorant Garamond (headings); `font-sans` → Inter (body).
- Key CSS utilities in `app/globals.css`:
  - `.gold-text` / `.gold-text-shimmer` — animated gold gradient text
  - `.btn-shine` — hover shine sweep effect on buttons
  - `.glass` / `.glass-dark` — glassmorphism panels
  - `.bg-grain` — subtle noise texture overlay
- External images come from **Pexels** (`images.pexels.com`) — allowed in `next.config.ts` via `remotePatterns`.

### Adding a new product

1. Add a new entry to `PRODUCTS` in `lib/data.ts` with a new `ProductId` string literal.
2. Add matching Tailwind color keys in `tailwind.config.ts` for the accent color (follow the `bissap` pattern with `400`–`700` shades).
3. Add the product's accent config entry to the `accentConfig` map in `components/ProductCard.tsx`.
4. The `ProductGrid` and `DiscoveryPack` components render from `PRODUCTS` automatically.

### Cart state flow

`CartProvider` (in `lib/cart.tsx`) holds all state via React Context. Any component that needs the cart imports `useCart()` from `@/lib/cart`. The `CartDrawer` opens via `cart.setOpen(true)`, which is also called automatically after a product is added via `ProductCard`.
