import Link from "next/link";

/**
 * Header — hyper-minimalist.
 * Wordmark only, plus a tiny TikTok + Instagram icon pair on the right.
 * No nav links, no drop badges, no city/time meta.
 */
export default function Header() {
  return (
    <header className="sticky top-0 z-30 bg-zf-black/90 backdrop-blur">
      <div className="flex items-center justify-between border-b border-zf-smoke px-4 py-4 md:px-8 md:py-5">
        {/* spacer balances the icon row on the right so the wordmark sits centered on desktop */}
        <div className="w-[64px] md:w-[72px]" aria-hidden="true" />

        <Link
          href="/"
          className="flex items-baseline gap-1.5 font-display text-[18px] font-medium tracking-[-0.05em] text-zf-bone md:text-[22px]"
          aria-label="ZeroFits — home"
        >
          zerofits
          <span className="mb-1 inline-block h-1 w-1 bg-zf-sage md:mb-1.5 md:h-1.5 md:w-1.5" />
        </Link>

        <nav className="flex w-[64px] items-center justify-end gap-3 md:w-[72px] md:gap-4" aria-label="social">
          <a
            href="https://www.tiktok.com/@therun.fashion"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zf-fog transition-colors hover:text-zf-bone"
            aria-label="TikTok"
          >
            <TikTokIcon />
          </a>
          <a
            href="https://www.instagram.com/therun.fashion/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zf-fog transition-colors hover:text-zf-bone"
            aria-label="Instagram"
          >
            <InstagramIcon />
          </a>
        </nav>
      </div>
    </header>
  );
}

function TikTokIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M16 4a4 4 0 0 0 4 4" />
      <path d="M16 4v10.5a4.5 4.5 0 1 1-4.5-4.5" />
      <path d="M16 4h-3v10.5" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3.5" y="3.5" width="17" height="17" rx="4" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17" cy="7" r="0.8" fill="currentColor" />
    </svg>
  );
}
