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
    tagline: "Attack on Titan",
    image_url:
      "/looks/Mikasa.png",
    products: [
      {
        id: "mikasa-shell-jacket",
        name: "Military Cropped Jacket",
        price_usd: 43.99,
        image_url:
          "https://m.media-amazon.com/images/I/81YQnrs05tL._AC_SX569_.jpg",
        amazon_affiliate_url: amazon("B0D72ZNRMC"),
      },
      {
        id: "Cargo Jeans High Waist",
        name: "Cargo Jeans High Waist",
        price_usd: 39.99,
        image_url:
          "https://m.media-amazon.com/images/I/61vatkLhl3L._AC_SY741_.jpg",
        amazon_affiliate_url: amazon("B0D7ZJ2WH4"),
      },
      {
        id: "Knee High Flat Boots",
        name: "Knee High Flat Boots",
        price_usd: 70.70,
        image_url:
          "https://m.media-amazon.com/images/I/61jXNo1twCL._AC_SY625_.jpg",
        amazon_affiliate_url: amazon("B0BR698H7B"),
      },
      {
        id: "Body Chain Belt",
        name: "Body Chain Belt",
        price_usd: 15.99,
        image_url:
          "https://m.media-amazon.com/images/I/51+KjucFp+L._AC_SX679_.jpg",
        amazon_affiliate_url: amazon("B09KXJ8PNC"),
      },
      {
        id: "Crossbody Triangle Chest Pack",
        name: "Crossbody Triangle Chest Pack",
        price_usd: 52,
        image_url:
          "https://m.media-amazon.com/images/I/61LSkIY-skL._AC_SL1500_.jpg",
        amazon_affiliate_url: amazon("B0FDGHZ3H9"),
      },
      {
        id: "Red Winter Scarf",
        name: "Winter Scarf",
        price_usd: 21.98,
        image_url:
          "https://m.media-amazon.com/images/I/91+zHDSNscL._AC_SY741_.jpg",
        amazon_affiliate_url: amazon("B01D2J52QC"),
      },
    ],
  },

  {
    characterName: "Nezuko",
    tagline: "Demon Slayer",
    image_url:
      "/looks/Nezuko.png",
    products: [
      {
        id: "Long Skirt Boho Crochet",
        name: "Long Skirt Boho Crochet",
        price_usd: 22.94,
        image_url:
          "https://m.media-amazon.com/images/I/71LCztZz45L._AC_SY741_.jpg",
        amazon_affiliate_url: amazon("B0FWZV1PMP"),
      },
      {
        id: "Chunky Platform Flip Flops",
        name: "Chunky Platform Flip Flops",
        price_usd: 39.99,
        image_url:
          "https://m.media-amazon.com/images/I/71AIv6gE8NL._AC_SY625_.jpg",
        amazon_affiliate_url: amazon("B09RLZC8J6"),
      },
      {
        id: "Obi Belt Wrap",
        name: "Obi Belt Wrap",
        price_usd: 13.99,
        image_url:
          "https://images.unsplash.com/photo-1614252369475-531eba835eb1?w=1200&q=70&auto=format&fit=crop",
        amazon_affiliate_url: amazon("B09B3GW797"),
      },
      {
        id: "Shoulder Bag",
        name: "Burgundy Shoulder Bag",
        price_usd: 28.49,
        image_url:
          "https://m.media-amazon.com/images/I/61RvFp2u0tL._AC_SY625_.jpg",
        amazon_affiliate_url: amazon("B0DY4HDS2W"),
      },
      {
        id: "Chunky Acrylic Bangle Bracelets",
        name: "Chunky Acrylic Bangle Bracelets",
        price_usd: 14.99,
        image_url:
          "https://m.media-amazon.com/images/I/61WAtR8Zm8L._AC_SY675_.jpg",
        amazon_affiliate_url: amazon("B0FQ5P2L8H"),
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
        id: "Casual Blazer Jacket",
        name: "Casual Blazer Jacket",
        price_usd: 49.99,
        image_url:
          "https://m.media-amazon.com/images/I/61Tz8je24vL._AC_SX679_.jpg",
        amazon_affiliate_url: amazon("B0B7LP13KR"),
      },
      {
        id: "High Waisted Midi Skirt",
        name: "High Waisted Midi Skirt",
        price_usd: 35.99,
        image_url:
          "https://m.media-amazon.com/images/I/61Odcu9Cx7L._AC_SY741_.jpg",
        amazon_affiliate_url: amazon("B0F5Z6BWZH"),
      },
      {
        id: "Platform Chunky Loafers",
        name: "Platform Chunky Loafers",
        price_usd: 39.99,
        image_url:
          "https://m.media-amazon.com/images/I/61TdJ9D0-OL._AC_SY625_.jpg",
        amazon_affiliate_url: amazon("B0F9FCT29Y"),
      },
      {
        id: "French Beanie",
        name: "French Beanie",
        price_usd: 8.99,
        image_url:
          "https://m.media-amazon.com/images/I/71QaRgEXlbL._AC_SX679_.jpg",
        amazon_affiliate_url: amazon("B0DPMHKT44"),
      },
      {
        id: "Small Shoulder Bag",
        name: "Small Shoulder Bag",
        price_usd: 26.99,
        image_url:
          "https://m.media-amazon.com/images/I/51e2eTAFTuL._AC_SY535_.jpg",
        amazon_affiliate_url: amazon("B0G496S2Z1"),
      },
      {
        id: "Genuine Leather Belt",
        name: "Genuine Leather Belt",
        price_usd: 21.69,
        image_url:
          "https://m.media-amazon.com/images/I/71Jb0ifeQDL._AC_SX679_.jpg",
        amazon_affiliate_url: amazon("B0CDM6KT3G"),
      },
    ],
  },
];
