import AmazonCTA from "./AmazonCTA";
import PlaceholderFrame from "./PlaceholderFrame";
import {
  formatYen,
  formatUsd,
  getLookPieces,
  type Look,
} from "@/lib/data";

type Props = {
  look: Look;
  /** When true (e.g. on /looks/[id]), the look frame is given priority loading. */
  priority?: boolean;
};

/**
 * LookRow — editorial 5/12 + 7/12 composition.
 * Left:  full-height look image with corner labels.
 * Right: pieces list + complete-the-look total + Amazon CTA per piece.
 *
 * Stacks vertically on mobile.
 */
export default function LookRow({ look, priority = false }: Props) {
  const pieces = getLookPieces(look);
  const approx = pieces.reduce((s, p) => (p.soldOut ? s : s + p.price), 0);

  return (
    <article
      data-screen-label={look.number}
      className="grid grid-cols-1 border-t border-zf-smoke md:grid-cols-12"
    >
      <div className="md:col-span-5">
        <PlaceholderFrame
          src={look.image_url}
          alt={`${look.number} — ${look.title}`}
          variant={look.frame}
          aspectRatio="9/13"
          topLeft={look.number}
          bottomRight={look.drop}
          priority={priority}
          sizes="(min-width: 768px) 40vw, 100vw"
        />
      </div>

      <div className="flex flex-col border-t border-zf-smoke md:col-span-7 md:border-l md:border-t-0">
        <header className="border-b border-zf-smoke px-6 py-8 md:px-10 md:py-10">
          <div className="font-body text-[11px] font-medium uppercase tracking-zf-widest text-zf-mist">
            {look.drop} — {look.number}
          </div>
          <h2 className="mt-2 font-display text-[32px] font-medium leading-[1.02] tracking-zf-tight text-zf-bone md:text-[44px]">
            {look.title}
          </h2>
          <p className="mt-4 max-w-[42ch] font-body text-[14px] leading-[1.55] text-zf-fog md:text-[15px]">
            {look.copy}
          </p>
        </header>

        <ul className="flex-1">
          {pieces.map((p) => (
            <li
              key={p.id}
              className="grid grid-cols-[64px_1fr_auto] items-center gap-4 border-b border-zf-smoke px-6 py-4 md:grid-cols-[80px_1fr_180px] md:gap-5 md:px-10 md:py-5"
            >
              <PlaceholderFrame
                src={p.image_url}
                alt={p.name}
                variant={p.frame}
                aspectRatio="4/5"
                withFigure={false}
                className="w-16 md:w-20"
                sizes="80px"
              />
              <div>
                <div className="font-mono text-[10px] uppercase tracking-zf-widest text-zf-mist">
                  {p.brand}
                </div>
                <div className="mt-1 font-display text-[15px] font-medium tracking-zf-tight text-zf-bone md:text-[18px]">
                  {p.name}
                </div>
                <div className="mt-1.5 font-mono text-[10px] uppercase tracking-zf-wider text-zf-mist">
                  {p.stockNote && (
                    <span className="text-zf-stock-low">{p.stockNote} · </span>
                  )}
                  ships via amazon prime
                </div>
              </div>

              <div className="flex flex-col items-end gap-1.5">
                <div
                  className={`font-display text-[14px] tabular-nums md:text-[17px] ${
                    p.soldOut ? "text-zf-mist line-through" : "text-zf-bone"
                  }`}
                >
                  {formatYen(p.price)}
                </div>
                {p.price_usd && (
                  <div className="font-mono text-[10px] tracking-wide text-zf-mist">
                    {formatUsd(p.price_usd)}
                  </div>
                )}
                <AmazonCTA
                  href={p.amazon_affiliate_url}
                  soldOut={p.soldOut}
                  size="sm"
                  className="mt-1 w-full md:w-auto md:min-w-[170px]"
                />
              </div>
            </li>
          ))}
        </ul>

        <footer className="flex flex-wrap items-center justify-between gap-4 px-6 py-6 md:px-10 md:py-7">
          <div>
            <div className="font-mono text-[10px] uppercase tracking-zf-widest text-zf-mist">
              complete the look · approx.
            </div>
            <div className="mt-1 font-display text-[24px] font-medium tracking-zf-tight tabular-nums text-zf-bone md:text-[28px]">
              {formatYen(approx)}
            </div>
          </div>
        </footer>
      </div>
    </article>
  );
}
