export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4 px-6 py-20 text-center">
      <div className="font-mono text-[10px] uppercase tracking-zf-widest text-zf-mist">
        404 · nothing here
      </div>
      <h1 className="font-display text-[44px] font-medium leading-[1] tracking-[-0.03em] text-zf-bone md:text-[64px]">
        the page slipped out the back door.
      </h1>
      <a
        href="/"
        className="mt-4 border border-zf-bone bg-zf-bone px-5 py-3 font-body text-[11px] font-medium uppercase tracking-zf-widest text-zf-black transition-colors hover:bg-transparent hover:text-zf-bone"
      >
        back to drop 04
      </a>
    </div>
  );
}
