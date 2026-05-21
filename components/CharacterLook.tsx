import Image from "next/image";
import ProductCard from "./ProductCard";
import type { Look } from "@/lib/data";

/**
 * CharacterLook — premium split-view.
 * On desktop: character hero on the LEFT (50%, sticky as products scroll),
 *             product grid on the RIGHT (50%, 2-column).
 * On mobile:  hero stacks on top of a 2-column product grid.
 *
 * Reads like an editorial catalog spread: see the full fit, see the pieces.
 */
export default function CharacterLook({
  look,
  priority = false,
}: {
  look: Look;
  priority?: boolean;
}) {
  return (
    <section
      data-screen-label={look.characterName}
      className="grid grid-cols-1 border-b border-zf-smoke md:grid-cols-2"
    >
      {/* LEFT — character image (sticky on desktop) */}
      <div className="relative md:border-r md:border-zf-smoke">
        <div className="md:sticky md:top-[65px] md:h-[calc(100vh-65px)]">
          <div className="zf-frame relative aspect-[4/5] h-full w-full md:aspect-auto">
            <Image
              src={look.image_url}
              alt={`${look.characterName} look`}
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              priority={priority}
              className="object-cover"
            />

            {/* Character name + tagline — bottom-left over imagery */}
            <div className="pointer-events-none absolute inset-x-5 bottom-6 z-10 md:inset-x-10 md:bottom-12">
              <h2 className="font-display text-[40px] font-medium leading-[0.98] tracking-[-0.035em] text-zf-bone md:text-[64px]">
                {look.characterName}
              </h2>
              {look.tagline && (
                <p className="mt-2 max-w-[36ch] font-body text-[12px] leading-[1.4] text-zf-bone/80 md:mt-3 md:text-[13px]">
                  {look.tagline}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT — products grid */}
      <div className="px-4 py-10 md:px-10 md:py-14">
        <div className="mb-8 flex items-baseline justify-between md:mb-10">
          <h3 className="font-mono text-[11px] uppercase tracking-zf-widest text-zf-mist">
            shop the look
          </h3>
          <span className="font-mono text-[11px] uppercase tracking-zf-widest text-zf-mist">
            {look.products.length} pieces
          </span>
        </div>
        <div className="grid grid-cols-2 gap-x-5 gap-y-10 md:gap-x-6 md:gap-y-14">
          {look.products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
