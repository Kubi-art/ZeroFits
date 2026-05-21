// ============================================================
// ZeroFits — Canonical Product Manifest
// ============================================================
// Single source of truth for every product on the site.
// Edit THIS file when you add / remove / re-tag products.
// Affiliate links route to Amazon Associates — replace the
// placeholder tag (?tag=zerofits-20) with your real one.
// ============================================================

export type Product = {
  /** Unique slug. Used in URLs and React keys. */
  id: string;
  /** Brand, lowercase per house style ("cav empt", "stone island"). */
  brand: string;
  /** Product name, the way the partner spells it. */
  name: string;
  /** Price in JPY (integer yen). Front-end formats with ¥. */
  price: number;
  /** Optional USD price shown next to JPY. */
  price_usd?: number;
  /** Public image URL — see next.config.mjs for allowed hosts. */
  image_url: string;
  /** AMAZON ASSOCIATES affiliate URL — always include your tag. */
  amazon_affiliate_url: string;
  /** Decorative variant of the placeholder gradient: '' | 'v2' | 'v3' | 'v4' | 'v5'. */
  frame?: string;
  /** Drop the product was featured in ("04", "03", ...). */
  drop?: string;
  /** Free-form tags used by the /shop filter rail. */
  tags?: string[];
  /** When true, hide the CTA and line-through the price. */
  soldOut?: boolean;
  /** Low-stock warning text (e.g. "6 left"). */
  stockNote?: string;
};

export type Look = {
  id: string;
  drop: string;
  number: string;
  title: string;
  copy: string;
  image_url: string;
  /** Optional gradient variant for the placeholder frame. */
  frame?: string;
  /** Product IDs referenced from `products` below. */
  pieceIds: string[];
};

// ------------------------------------------------------------
// Affiliate tag — change this in ONE place when your Associates
// account is approved.  All Amazon links derive from `amazon()`.
// ------------------------------------------------------------
export const ASSOCIATES_TAG = "zerofits-20";

/** Build an Amazon Associates URL from an ASIN.  Use this when
 *  adding new products instead of hand-crafting URLs. */
export function amazon(asin: string): string {
  return `https://www.amazon.com/dp/${asin}?tag=${ASSOCIATES_TAG}`;
}

// ------------------------------------------------------------
// PRODUCTS — edit me freely.  Each item needs a real
// `image_url` and `amazon_affiliate_url` before launch.
// ------------------------------------------------------------
export const products: Product[] = [
  {
    id: "veilance-isogon-mx",
    brand: "veilance",
    name: "isogon mx jacket",
    price: 168000,
    price_usd: 1100,
    image_url: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=1200&q=70&auto=format&fit=crop",
    amazon_affiliate_url: amazon("B0XXXXXXXX"),
    frame: "v2",
    drop: "04",
    tags: ["techwear", "outerwear"],
  },
  {
    id: "stone-island-117wn",
    brand: "stone island",
    name: "overshirt 117wn",
    price: 64000,
    price_usd: 420,
    image_url: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=1200&q=70&auto=format&fit=crop",
    amazon_affiliate_url: amazon("B0XXXXXXXX"),
    drop: "04",
    tags: ["overshirt"],
  },
  {
    id: "cav-empt-md7",
    brand: "cav empt",
    name: "MD-7 cargo / olive",
    price: 38000,
    price_usd: 248,
    image_url: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=1200&q=70&auto=format&fit=crop",
    amazon_affiliate_url: amazon("B0XXXXXXXX"),
    frame: "v3",
    drop: "04",
    tags: ["cargo"],
    stockNote: "6 left",
  },
  {
    id: "visvim-fbt-folk-lo",
    brand: "visvim",
    name: "FBT folk lo / black",
    price: 92000,
    price_usd: 600,
    image_url: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=1200&q=70&auto=format&fit=crop",
    amazon_affiliate_url: amazon("B0XXXXXXXX"),
    frame: "v4",
    drop: "04",
    tags: ["footwear"],
  },
  {
    id: "auralee-knit-henley",
    brand: "auralee",
    name: "merino knit henley",
    price: 42000,
    price_usd: 275,
    image_url: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=1200&q=70&auto=format&fit=crop",
    amazon_affiliate_url: amazon("B0XXXXXXXX"),
    frame: "v5",
    drop: "04",
    tags: ["knit"],
  },
  {
    id: "salomon-xt6-expanse",
    brand: "salomon",
    name: "xt-6 expanse / black",
    price: 28000,
    price_usd: 184,
    image_url: "https://images.unsplash.com/photo-1539185441755-769473a23570?w=1200&q=70&auto=format&fit=crop",
    amazon_affiliate_url: amazon("B0XXXXXXXX"),
    frame: "v2",
    drop: "04",
    tags: ["footwear"],
  },
  {
    id: "lemaire-carrot",
    brand: "lemaire",
    name: "carrot trouser / sand",
    price: 62000,
    price_usd: 405,
    image_url: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=1200&q=70&auto=format&fit=crop",
    amazon_affiliate_url: amazon("B0XXXXXXXX"),
    frame: "v3",
    drop: "04",
    tags: ["trouser"],
  },
  {
    id: "paraboot-michael",
    brand: "paraboot",
    name: "michael derby / brown",
    price: 84000,
    price_usd: 549,
    image_url: "https://images.unsplash.com/photo-1614252369475-531eba835eb1?w=1200&q=70&auto=format&fit=crop",
    amazon_affiliate_url: amazon("B0XXXXXXXX"),
    frame: "v4",
    drop: "04",
    tags: ["footwear"],
  },
  {
    id: "our-legacy-loose",
    brand: "our legacy",
    name: "loose cut shirt / ecru",
    price: 41000,
    price_usd: 268,
    image_url: "https://images.unsplash.com/photo-1620799139507-2a76f79a2f4d?w=1200&q=70&auto=format&fit=crop",
    amazon_affiliate_url: amazon("B0XXXXXXXX"),
    drop: "03",
    tags: ["shirt"],
  },
  {
    id: "stone-island-ghost",
    brand: "stone island",
    name: "ghost cargo / charcoal",
    price: 56000,
    price_usd: 366,
    image_url: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=1200&q=70&auto=format&fit=crop",
    amazon_affiliate_url: amazon("B0XXXXXXXX"),
    frame: "v5",
    drop: "04",
    tags: ["cargo"],
  },
  {
    id: "auralee-cashmere-polo",
    brand: "auralee",
    name: "cashmere polo / oat",
    price: 48000,
    price_usd: 314,
    image_url: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=1200&q=70&auto=format&fit=crop",
    amazon_affiliate_url: amazon("B0XXXXXXXX"),
    frame: "v2",
    drop: "04",
    tags: ["knit"],
    soldOut: true,
  },
  {
    id: "eg-shooter",
    brand: "engineered garments",
    name: "shooter overshirt",
    price: 52000,
    price_usd: 340,
    image_url: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=1200&q=70&auto=format&fit=crop",
    amazon_affiliate_url: amazon("B0XXXXXXXX"),
    frame: "v3",
    drop: "03",
    tags: ["overshirt"],
  },
];

// ------------------------------------------------------------
// LOOKS — editorial stories that bundle products together.
// `pieceIds` references `products[].id`.
// ------------------------------------------------------------
export const looks: Look[] = [
  {
    id: "look-01",
    drop: "drop 04 / shinkai",
    number: "look 01",
    title: "the runner",
    copy: "shell layer over technical knit. cut for the train-platform sprint.",
    image_url: "https://images.unsplash.com/photo-1551316679-9c6ae9dec224?w=1600&q=70&auto=format&fit=crop",
    frame: "v2",
    pieceIds: ["veilance-isogon-mx", "auralee-knit-henley", "stone-island-ghost", "salomon-xt6-expanse"],
  },
  {
    id: "look-03",
    drop: "drop 04 / shinkai",
    number: "look 03",
    title: "the commuter",
    copy: "overshirt, tapered cargo, deck shoe. styled for the 23:14 last train.",
    image_url: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1600&q=70&auto=format&fit=crop",
    pieceIds: ["stone-island-117wn", "cav-empt-md7", "visvim-fbt-folk-lo"],
  },
  {
    id: "look-05",
    drop: "drop 04 / shinkai",
    number: "look 05",
    title: "the editor",
    copy: "trouser, knit, derby. office wear for the late shift.",
    image_url: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=1600&q=70&auto=format&fit=crop",
    frame: "v3",
    pieceIds: ["auralee-cashmere-polo", "lemaire-carrot", "paraboot-michael"],
  },
];

// ------------------------------------------------------------
// Helpers
// ------------------------------------------------------------
const productsById: Record<string, Product> = Object.fromEntries(
  products.map((p) => [p.id, p])
);

export function getProduct(id: string): Product | undefined {
  return productsById[id];
}

export function getLook(id: string): Look | undefined {
  return looks.find((l) => l.id === id);
}

export function getLookPieces(look: Look): Product[] {
  return look.pieceIds.map(getProduct).filter((p): p is Product => Boolean(p));
}

export function formatYen(n: number): string {
  return "¥" + n.toLocaleString("en-US");
}
export function formatUsd(n?: number): string {
  return n == null ? "" : "$" + n.toLocaleString("en-US");
}
