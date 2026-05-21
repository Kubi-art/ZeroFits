import Link from "next/link";
import PlaceholderFrame from "./PlaceholderFrame";
import { getLookPieces, formatYen, type Look } from "@/lib/data";

/**
 * LookFeedCard — full-bleed editorial card for the home feed.
 * Image, eyebrow, title, then 3 tappable "buy on amazon" chips —
 * the TikTok-landing-friendly first-touch surface.
 */
export default function LookFeedCard({
  look,
  priority = false,
}: {
  look: Look;
  priority?: boolean;
}) {
  const pieces = getLookPieces(look);

  return (
    <article className="relative">
      <Link href={`/looks/${look.id}`} className="block" aria-label={`${look.number} — ${look.title}`}>
        <PlaceholderFrame
          src={look.image_url}
          alt={`${look.number} — ${look.title}`}
          variant={look.frame}
          aspectRatio="9/16"
          topLeft={look.number}
          bottomRight={look.drop}
          priority={priority}
          className="md:!aspect-[16/9]"
          sizes="100vw"
        />
        {/* caption — over imagery, protected by the gradient */}
        <div className="pointer-events-none absolute inset-x-4 bottom-24 z-10 md:inset-x-12 md:bottom-16">
          <div className="font-body text-[10px] font-medium uppercase tracking-zf-widest text-zf-bone/75 md:text-[11px]">
            {look.drop}
          </div>
          <h2 className="mt-2 font-display text-[32px] font-medium leading-[1.02] tracking-[-0.025em] text-zf-bone md:text-[56px]">
            {look.title}
          </h2>
        </div>
      </Link>

      {/* Amazon CTA chips — the actual conversion surface */}
      <div className="absolute inset-x-0 bottom-0 z-10 flex gap-2 overflow-x-auto px-3 pb-3 no-scrollbar md:px-12 md:pb-6">
        {pieces.slice(0, 3).map((p) => (
          <a
            key={p.id}
            href={p.amazon_affiliate_url}
            target="_blank"
            rel="sponsored noopener noreferrer"
            className="group flex flex-shrink-0 flex-col gap-1 no-underline"
          >
            <span className="font-mono text-[8px] uppercase tracking-zf-widest text-zf-bone/70">
              {formatYen(p.price)} · amazon
            </span>
            <span className="flex min-w-[140px] items-center gap-2 bg-zf-bone/95 px-3 py-2 font-body text-[9px] font-medium uppercase tracking-zf-widest text-zf-black backdrop-blur transition-colors group-hover:bg-zf-bone md:min-w-[180px] md:text-[10px]">
              <span className="font-mono text-[8px] tracking-zf-wider opacity-60 md:text-[9px]">
                {p.brand}
              </span>
              <span className="ml-auto font-display text-[14px] leading-none">↗</span>
            </span>
          </a>
        ))}
      </div>
    </article>
  );
}
