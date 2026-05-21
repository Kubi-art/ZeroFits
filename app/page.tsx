import Link from "next/link";
import LookFeedCard from "@/components/LookFeedCard";
import { looks } from "@/lib/data";

export default function HomePage() {
  return (
    <div data-screen-label="01 home">
      {/* Editorial hero */}
      <section className="grid grid-cols-1 gap-6 border-b border-zf-smoke px-4 py-12 md:grid-cols-12 md:gap-8 md:px-8 md:py-20">
        <div className="flex flex-col gap-5 md:col-span-5 md:justify-end">
          <div className="font-body text-[11px] font-medium uppercase tracking-zf-widest text-zf-mist">
            drop 04 — released 18.05.26
          </div>
          <h1 className="font-display text-[56px] font-medium leading-[0.98] tracking-[-0.04em] text-zf-bone md:text-[88px]">
            shinkai<br />winter.
          </h1>
          <p className="max-w-[36ch] font-body text-[15px] leading-[1.6] text-zf-fog md:text-[16px]">
            a quiet wardrobe for the long walk home. twelve looks, one palette, hand-picked from amazon. every piece is one click away.
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <Link
              href="/looks/look-03"
              className="border border-zf-bone bg-zf-bone px-6 py-3.5 font-body text-[11px] font-medium uppercase tracking-zf-widest text-zf-black transition-colors hover:bg-transparent hover:text-zf-bone"
            >
              enter the lookbook
            </Link>
            <Link
              href="/shop"
              className="relative pb-2 font-body text-[11px] font-medium uppercase tracking-zf-widest text-zf-fog after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-zf-fog hover:text-zf-bone hover:after:bg-zf-sage"
            >
              shop the archive
            </Link>
          </div>
        </div>
      </section>

      {/* Feed of looks */}
      <section className="flex flex-col">
        {looks.map((look, i) => (
          <LookFeedCard key={look.id} look={look} priority={i === 0} />
        ))}
      </section>

      {/* Affiliate disclosure block */}
      <section className="border-t border-zf-smoke px-4 py-10 md:px-8 md:py-12">
        <div className="font-body text-[11px] font-medium uppercase tracking-zf-widest text-zf-mist">
          how this works — amazon associates
        </div>
        <p className="mt-4 max-w-[60ch] font-body text-[14px] leading-[1.55] text-zf-fog">
          we curate. amazon ships. every &quot;buy on amazon&quot; link routes through our associates account — clicking through helps us keep the lookbook running. as an amazon associate, we earn from qualifying purchases.
        </p>
      </section>
    </div>
  );
}
