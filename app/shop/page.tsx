"use client";

import { useMemo, useState } from "react";
import ProductTile from "@/components/ProductTile";
import { products } from "@/lib/data";

const allTags = Array.from(
  new Set(products.flatMap((p) => p.tags ?? []))
).sort();

const allDrops = Array.from(new Set(products.map((p) => p.drop).filter(Boolean))) as string[];

export default function ShopPage() {
  const [activeTags, setActiveTags] = useState<Set<string>>(new Set());
  const [activeDrop, setActiveDrop] = useState<string | null>(null);

  const filtered = useMemo(() => {
    return products.filter((p) => {
      if (activeDrop && p.drop !== activeDrop) return false;
      if (activeTags.size === 0) return true;
      return p.tags?.some((t) => activeTags.has(t));
    });
  }, [activeTags, activeDrop]);

  const toggleTag = (t: string) => {
    setActiveTags((curr) => {
      const next = new Set(curr);
      if (next.has(t)) next.delete(t);
      else next.add(t);
      return next;
    });
  };

  return (
    <div data-screen-label="02 shop">
      <section className="border-b border-zf-smoke px-4 py-12 md:px-8 md:py-16">
        <div className="font-body text-[11px] font-medium uppercase tracking-zf-widest text-zf-mist">
          shop · drops 03 — 04
        </div>
        <h1 className="mt-2 font-display text-[40px] font-medium leading-[1] tracking-[-0.035em] text-zf-bone md:text-[64px]">
          twelve drops.<br />one wardrobe.
        </h1>
        <p className="mt-4 max-w-[48ch] font-body text-[14px] leading-[1.55] text-zf-fog md:text-[15px]">
          every piece links to a verified amazon listing. as an amazon associate we earn from qualifying purchases.
        </p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-[240px_1fr]">
        {/* Filter rail */}
        <aside className="flex flex-row gap-6 overflow-x-auto border-b border-zf-smoke px-4 py-6 no-scrollbar md:sticky md:top-[140px] md:flex-col md:gap-8 md:border-b-0 md:border-r md:px-6 md:py-10">
          <FilterGroup
            title="drops"
            items={allDrops.map((d) => ({ key: d, label: `drop ${d}` }))}
            isActive={(k) => activeDrop === k}
            onToggle={(k) => setActiveDrop((c) => (c === k ? null : k))}
          />
          <FilterGroup
            title="category"
            items={allTags.map((t) => ({ key: t, label: t }))}
            isActive={(k) => activeTags.has(k)}
            onToggle={toggleTag}
          />
          <button
            onClick={() => {
              setActiveTags(new Set());
              setActiveDrop(null);
            }}
            className="ml-auto self-end border border-zf-ash px-3 py-2 font-body text-[10px] font-medium uppercase tracking-zf-widest text-zf-fog transition-colors hover:bg-zf-bone hover:text-zf-black md:ml-0 md:mt-2 md:self-stretch"
          >
            clear all
          </button>
        </aside>

        {/* Product grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {filtered.map((p) => (
            <div
              key={p.id}
              className="border-b border-r border-zf-smoke p-4 md:p-6 [&:nth-child(2n)]:border-r-0 md:[&:nth-child(2n)]:border-r md:[&:nth-child(3n)]:border-r-0 lg:md:[&:nth-child(3n)]:border-r lg:[&:nth-child(4n)]:border-r-0"
            >
              <ProductTile product={p} />
            </div>
          ))}
          {filtered.length === 0 && (
            <div className="col-span-full px-6 py-20 text-center">
              <div className="font-mono text-[10px] uppercase tracking-zf-widest text-zf-mist">
                nothing matches that filter
              </div>
              <div className="mt-3 font-display text-[20px] font-medium tracking-zf-tight text-zf-bone">
                clear a tag or two to widen the net.
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function FilterGroup({
  title,
  items,
  isActive,
  onToggle,
}: {
  title: string;
  items: { key: string; label: string }[];
  isActive: (k: string) => boolean;
  onToggle: (k: string) => void;
}) {
  return (
    <div className="flex flex-shrink-0 flex-col gap-3 md:gap-3.5">
      <h3 className="font-body text-[11px] font-medium uppercase tracking-zf-widest text-zf-mist">
        {title}
      </h3>
      <div className="flex flex-row gap-2 md:flex-col md:gap-2.5">
        {items.map((it) => (
          <button
            key={it.key}
            onClick={() => onToggle(it.key)}
            className={`flex items-center gap-2 px-3 py-2 text-left font-body text-[12px] transition-colors md:px-0 md:py-0 md:text-[13px] ${
              isActive(it.key)
                ? "text-zf-sage md:text-zf-sage"
                : "text-zf-fog hover:text-zf-bone"
            } border border-zf-smoke md:border-0 ${
              isActive(it.key) ? "border-zf-sage md:border-0" : ""
            }`}
          >
            {isActive(it.key) && <span className="md:hidden">✕</span>}
            <span>{it.label}</span>
            <span className="ml-1 hidden font-mono text-[10px] tracking-wide text-zf-dust md:inline">
              {it.key}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
