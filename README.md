# zerofits

A hyper-minimalist, single-page anime lookbook. Scroll through characters, tap a look, shop every piece on Amazon. Built with Next.js 14 (App Router), TypeScript, and Tailwind.

## Quick start

```bash
npm install
npm run dev          # http://localhost:3000
```

## Deploy to Vercel

1. Push this folder to a GitHub repo.
2. Go to <https://vercel.com/new>, pick the repo, accept the auto-detected Next.js defaults, click **Deploy**.
3. No env vars required — every product link is configured in `lib/data.ts`.

## Architecture

One route. One file does everything visible:

```
app/
  layout.tsx             ← global chrome (header + footer + fonts)
  page.tsx               ← the entire site — maps over `looks[]`
  globals.css            ← Tailwind + brand helpers
  not-found.tsx
components/
  Header.tsx             ← wordmark + 2 social icons. nothing else.
  Footer.tsx             ← wordmark + FTC line + copyright
  CharacterLook.tsx      ← full-bleed hero + click-to-expand product grid
  ProductCard.tsx        ← image / name / USD price / "Buy on Amazon"
  AmazonCTA.tsx          ← the affiliate button — single source of truth
  PlaceholderFrame.tsx   ← legacy helper (unused by current pages)
lib/
  data.ts                ← THE single source of truth
```

## Editing the lookbook

Open `lib/data.ts` and edit `looks[]`. Each character is one entry:

```ts
{
  characterName: "Mikasa",
  tagline: "soldier — clean black layers, technical outerwear.",
  image_url: "https://your-cdn.com/mikasa-hero.jpg",
  products: [
    {
      id: "mikasa-shell-jacket",
      name: "technical shell jacket / black",
      price_usd: 142,
      image_url: "https://your-cdn.com/shell.jpg",
      amazon_affiliate_url: amazon("B0XXXXXXXX"), // your ASIN
    },
    // ... 3–5 products per look
  ],
}
```

**Tip.** Change `ASSOCIATES_TAG` at the top of `data.ts` once — every Amazon URL built via `amazon(asin)` picks up the new tag automatically.

If `image_url` lives on a new hostname, add it to `next.config.mjs` → `images.remotePatterns`.

## Affiliate compliance

- Every Amazon link is rendered with `target="_blank" rel="sponsored noopener noreferrer"`.
- The "via amazon associates" eyebrow above each CTA is the per-link disclosure.
- The footer carries the *"we earn from qualifying purchases"* line on every page.
- The Associates tag lives in `data.ts`, never hand-typed into URLs.

## What's still placeholder

- All `image_url`s point at Unsplash. Replace with your real AI-generated character renders + product photography.
- All ASINs are `B0XXXXXXXX`. Swap them in once you have real Amazon listings.
