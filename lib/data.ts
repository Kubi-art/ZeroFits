// ============================================================
// ZeroFits — Lookbook Data
// ============================================================
// A flat, character-keyed manifest. One entry per character.
// Each character has a hero image, an optional tagline, and a
// list of Amazon products that "complete the look".
//
// Edit THIS file when you add a character or rotate products.
// ============================================================

export type Product = {
  /** Unique slug. Used as React key. */
  id: string;
  /** Display name of the garment / item. */
  name: string;
  /** Price in USD (integer dollars). */
  price_usd: number;
  /** Public image URL — see next.config.mjs for allowed hostnames. */
  image_url: string;
  /** Amazon Associates URL — must include your tag. */
  amazon_affiliate_url: string;
};

export type Look = {
  /** Character the look is styled after — e.g. "Nami", "Mikasa". */
  characterName: string;
  /** One-line tagline shown under the character name. Optional. */
  tagline?: string;
  /** Hero image URL. Cool, low-contrast grade. */
  image_url: string;
  /** 3–5 Amazon items that build the look. */
  products: Product[];
};

// ------------------------------------------------------------
// Amazon Associates tag — change this in ONE place.
// All Amazon links derive from `amazon(asin)`.
// ------------------------------------------------------------
export const ASSOCIATES_TAG = "zerofits-20";

/** Build an Amazon Associates URL from an ASIN. */
export function amazon(asin: string): string {
  return `https://www.amazon.com/dp/${asin}?tag=${ASSOCIATES_TAG}`;
}

export function formatUsd(n: number): string {
  return "$" + n.toLocaleString("en-US");
}

// ------------------------------------------------------------
// LOOKS — one per character. Reorder freely; the home page
// renders them top-to-bottom in the order they appear here.
// ------------------------------------------------------------
export const looks: Look[] = [
  {
    characterName: "Nami",
    tagline: "navigator — layered linens, sand-bleached denim.",
    image_url:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1600&q=70&auto=format&fit=crop",
    products: [
      {
        id: "nami-linen-shirt",
        name: "oversized linen shirt / ecru",
        price_usd: 64,
        image_url:
          "https://images.unsplash.com/photo-1620799139507-2a76f79a2f4d?w=1200&q=70&auto=format&fit=crop",
        amazon_affiliate_url: amazon("B0XXXXXXXX"),
      },
      {
        id: "nami-denim-mini",
        name: "stonewash denim mini",
        price_usd: 48,
        image_url:
          "https://images.unsplash.com/photo-1551316679-9c6ae9dec224?w=1200&q=70&auto=format&fit=crop",
        amazon_affiliate_url: amazon("B0XXXXXXXX"),
      },
      {
        id: "nami-sandal",
        name: "leather thong sandal / tan",
        price_usd: 52,
        image_url:
          "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=1200&q=70&auto=format&fit=crop",
        amazon_affiliate_url: amazon("B0XXXXXXXX"),
      },
      {
        id: "nami-canvas-tote",
        name: "canvas tote / weathered",
        price_usd: 28,
        image_url:
          "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=1200&q=70&auto=format&fit=crop",
        amazon_affiliate_url: amazon("B0XXXXXXXX"),
      },
    ],
  },

  {
    characterName: "Mikasa",
    tagline: "soldier — clean black layers, technical outerwear.",
    image_url:
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=1600&q=70&auto=format&fit=crop",
    products: [
      {
        id: "mikasa-shell-jacket",
        name: "technical shell jacket / black",
        price_usd: 142,
        image_url:
          "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=1200&q=70&auto=format&fit=crop",
        amazon_affiliate_url: amazon("B0XXXXXXXX"),
      },
      {
        id: "mikasa-merino-turtleneck",
        name: "merino turtleneck / charcoal",
        price_usd: 68,
        image_url:
          "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=1200&q=70&auto=format&fit=crop",
        amazon_affiliate_url: amazon("B0XXXXXXXX"),
      },
      {
        id: "mikasa-cargo",
        name: "tapered cargo trouser / black",
        price_usd: 88,
        image_url:
          "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=1200&q=70&auto=format&fit=crop",
        amazon_affiliate_url: amazon("B0XXXXXXXX"),
      },
      {
        id: "mikasa-trail-runner",
        name: "trail runner / triple black",
        price_usd: 96,
        image_url:
          "https://images.unsplash.com/photo-1539185441755-769473a23570?w=1200&q=70&auto=format&fit=crop",
        amazon_affiliate_url: amazon("B0XXXXXXXX"),
      },
    ],
  },

  {
    characterName: "Nezuko",
    tagline: "softer silhouette — cream knits, washed pinks.",
    image_url:
      "https://images.unsplash.com/photo-1551316679-9c6ae9dec224?w=1600&q=70&auto=format&fit=crop",
    products: [
      {
        id: "nezuko-cardigan",
        name: "oversized chunky cardigan / cream",
        price_usd: 74,
        image_url:
          "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=1200&q=70&auto=format&fit=crop",
        amazon_affiliate_url: amazon("B0XXXXXXXX"),
      },
      {
        id: "nezuko-midi-skirt",
        name: "pleated midi skirt / rose",
        price_usd: 56,
        image_url:
          "https://images.unsplash.com/photo-1551316679-9c6ae9dec224?w=1200&q=70&auto=format&fit=crop",
        amazon_affiliate_url: amazon("B0XXXXXXXX"),
      },
      {
        id: "nezuko-mary-jane",
        name: "leather mary jane / oxblood",
        price_usd: 84,
        image_url:
          "https://images.unsplash.com/photo-1614252369475-531eba835eb1?w=1200&q=70&auto=format&fit=crop",
        amazon_affiliate_url: amazon("B0XXXXXXXX"),
      },
      {
        id: "nezuko-ribbon-clip",
        name: "silk ribbon hair clip / coral",
        price_usd: 18,
        image_url:
          "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=1200&q=70&auto=format&fit=crop",
        amazon_affiliate_url: amazon("B0XXXXXXXX"),
      },
    ],
  },

  {
    characterName: "Nobara",
    tagline: "sharp — denim, scarf, boot. urban exorcist.",
    image_url:
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=1600&q=70&auto=format&fit=crop",
    products: [
      {
        id: "nobara-denim-jacket",
        name: "boxy denim jacket / indigo",
        price_usd: 96,
        image_url:
          "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=1200&q=70&auto=format&fit=crop",
        amazon_affiliate_url: amazon("B0XXXXXXXX"),
      },
      {
        id: "nobara-tee",
        name: "ribbed cotton tee / bone",
        price_usd: 32,
        image_url:
          "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=1200&q=70&auto=format&fit=crop",
        amazon_affiliate_url: amazon("B0XXXXXXXX"),
      },
      {
        id: "nobara-straight-jean",
        name: "straight-leg jean / raw indigo",
        price_usd: 72,
        image_url:
          "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=1200&q=70&auto=format&fit=crop",
        amazon_affiliate_url: amazon("B0XXXXXXXX"),
      },
      {
        id: "nobara-ankle-boot",
        name: "leather ankle boot / black",
        price_usd: 108,
        image_url:
          "https://images.unsplash.com/photo-1614252369475-531eba835eb1?w=1200&q=70&auto=format&fit=crop",
        amazon_affiliate_url: amazon("B0XXXXXXXX"),
      },
      {
        id: "nobara-silk-scarf",
        name: "silk neck scarf / olive",
        price_usd: 24,
        image_url:
          "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=1200&q=70&auto=format&fit=crop",
        amazon_affiliate_url: amazon("B0XXXXXXXX"),
      },
    ],
  },
];
