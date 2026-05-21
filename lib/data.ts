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
    tagline: "One Piece",
    image_url:
      "/looks/Nami.png",
    products: [
      {
        id: "nami-linen-shirt",
        name: "Halter Mini Dress",
        price_usd: 23.99,
        image_url:
          "https://m.media-amazon.com/images/I/61-NVd3p3HL._AC_SY741_.jpg",
        amazon_affiliate_url: amazon("B0GKZJLVX3"),
      },
      {
        id: "nami-sandal",
        name: "Red High Heels",
        price_usd: 59.99,
        image_url:
          "https://m.media-amazon.com/images/I/71HGuLct-ZL._AC_SY625_.jpg",
        amazon_affiliate_url: amazon("B0FGXVFS95"),
      },
      {
        id: "nami-canvas-tote",
        name: "Womens Newsboy Cap",
        price_usd: 16.98,
        image_url:
          "https://m.media-amazon.com/images/I/61xg2WJmLqL._AC_SX679_.jpg",
        amazon_affiliate_url: amazon("B0D9669JFF"),
      },
      {
        id: "Metallic Red Purses",
        name: "Metallic Red Purses",
        price_usd: 22.99,
        image_url:
          "https://m.media-amazon.com/images/I/61QsuYGIJ2L._AC_SY675_.jpg",
        amazon_affiliate_url: amazon("B0F1KVQTRX"),
      },
      {
        id: "Gold Bangle Bracelets",
        name: "Gold Bangle Bracelets",
        price_usd: 12.99,
        image_url:
          "https://m.media-amazon.com/images/I/71x-c2F5AVL._AC_SY695_.jpg",
        amazon_affiliate_url: amazon("B0F1K9GK4P"),
      },
    ],
  },

  {
    characterName: "Mikasa",
    tagline: "soldier — clean black layers, technical outerwear.",
    image_url:
      "/looks/Mikasa.png",
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
      {
        id: "mikasa-shell-jacket",
        name: "technical shell jacket / black",
        price_usd: 142,
        image_url:
          "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=1200&q=70&auto=format&fit=crop",
        amazon_affiliate_url: amazon("B0XXXXXXXX"),
      },
      {
        id: "mikasa-shell-jacket",
        name: "technical shell jacket / black",
        price_usd: 142,
        image_url:
          "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=1200&q=70&auto=format&fit=crop",
        amazon_affiliate_url: amazon("B0XXXXXXXX"),
      },
    ],
  },

  {
    characterName: "Nezuko",
    tagline: "softer silhouette — cream knits, washed pinks.",
    image_url:
      "/looks/Nezuko.png",
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
    tagline: "Jujustu Kaisen",
    image_url:
      "/looks/Nobara.png",
    products: [
      {
        id: "nobara-denim-jacket",
        name: "Casual Blazer Jacket",
        price_usd: 96,
        image_url:
          "https://m.media-amazon.com/images/I/61Tz8je24vL._AC_SX679_.jpg",
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
      {
        id: "nobara-silk-scarf",
        name: "silk neck scarf / olive",
        price_usd: 24,
        image_url:
          "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=1200&q=70&auto=format&fit=crop",
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
