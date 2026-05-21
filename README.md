# zerofits

A premium, minimalist, dark-mode lookbook that converts TikTok traffic into Amazon Associates sales. Built with Next.js 14 (App Router), TypeScript, and Tailwind.

## Quick start

```bash
npm install
npm run dev
```

Open <http://localhost:3000>.

## Deploy to Vercel

1. Push the contents of this folder to a GitHub repo.
2. Go to <https://vercel.com/new>, pick the repo, accept the auto-detected Next.js defaults, click **Deploy**.
3. There are **no required env vars** — every product link is configured in `lib/data.ts`.

Custom domain → Vercel project → *Settings → Domains*.

## Where to edit things

| Want to change... | File |
|---|---|
| Products, prices, Amazon links | `lib/data.ts` |
| The Amazon Associates tag (one place, every link) | `lib/data.ts` — `ASSOCIATES_TAG` |
| Looks (which products belong to which look) | `lib/data.ts` — `looks` |
| Colour palette, fonts | `tailwind.config.ts` + `app/globals.css` |
| Header / footer chrome | `components/Header.tsx`, `components/Footer.tsx` |
| The "Buy on Amazon" button itself | `components/AmazonCTA.tsx` |
| Homepage layout | `app/page.tsx` |
| Look detail layout | `app/looks/[id]/page.tsx` + `components/LookRow.tsx` |
| Shop archive + filters | `app/shop/page.tsx` |
| Product detail | `app/shop/[id]/page.tsx` |

## Adding a product

In `lib/data.ts`, push a new entry into `products`:

```ts
{
  id: "stussy-8ball",
  brand: "stüssy",
  name: "8-ball oversized tee",
  price: 9800,
  price_usd: 64,
  image_url: "https://your-cdn.com/8ball.jpg",
  amazon_affiliate_url: amazon("B0XXXXXXXX"), // <-- your ASIN
  drop: "04",
  tags: ["tee"],
}
```

If `image_url` lives on a new hostname, add it to `next.config.mjs` → `images.remotePatterns`.

## Affiliate compliance

- Every Amazon link is rendered with `target="_blank" rel="sponsored noopener noreferrer"` (required by Amazon Associates + the FTC).
- The `via amazon associates` eyebrow above each CTA is the per-link disclosure.
- The footer carries the *"we earn from qualifying purchases"* line on every page.
- The Associates tag is appended at the data layer (`amazon()`), never hand-typed into URLs.

## File map

```
.
├── app/
│   ├── layout.tsx              ← global chrome (Header + Footer + fonts)
│   ├── page.tsx                ← home / lookbook feed
│   ├── globals.css             ← Tailwind base + brand helpers
│   ├── not-found.tsx           ← 404
│   ├── looks/[id]/page.tsx     ← editorial look detail
│   └── shop/
│       ├── page.tsx            ← archive + filter rail
│       └── [id]/page.tsx       ← single-product detail (TikTok landing)
├── components/
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── AmazonCTA.tsx           ← the conversion surface
│   ├── PlaceholderFrame.tsx    ← styled gradient until real photos arrive
│   ├── ProductTile.tsx
│   ├── LookFeedCard.tsx        ← homepage full-bleed card
│   └── LookRow.tsx             ← editorial 5/12 + 7/12 look composition
├── lib/
│   └── data.ts                 ← THE single source of truth
├── tailwind.config.ts
├── postcss.config.mjs
├── next.config.mjs
├── tsconfig.json
└── package.json
```

## What's still placeholder

- All `image_url`s point at Unsplash. Replace with real product / look photography that matches the cool, low-contrast grade in the design system's `imagery-notes.md`.
- All ASINs are `B0XXXXXXXX`. Swap in real ASINs (and rotate the `ASSOCIATES_TAG` once your account is approved).
- The logo is a typographic wordmark in Space Grotesk — drop a real mark in `app/layout.tsx` or `components/Header.tsx` when you have one.
