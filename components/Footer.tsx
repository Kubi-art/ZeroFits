/**
 * Footer — minimal. Wordmark, tiny FTC disclaimer, copyright.
 */
export default function Footer() {
  return (
    <footer className="border-t border-zf-smoke px-4 py-8 md:px-8 md:py-10">
      <div className="flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
        <div className="flex items-baseline gap-1.5 font-display text-[18px] font-medium tracking-[-0.05em] text-zf-bone">
          zerofits<span className="mb-1 inline-block h-1 w-1 bg-zf-sage" />
        </div>

        <p className="font-mono text-[9px] uppercase tracking-zf-wider text-zf-dust">
          as an amazon associate, I earn from qualifying purchases.
        </p>

        <div className="font-mono text-[9px] uppercase tracking-zf-widest text-zf-dust">
          © 2026 zerofits
        </div>
      </div>
    </footer>
  );
}
