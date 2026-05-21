export default function Footer() {
  return (
    <footer className="border-t border-zf-smoke px-4 pb-8 pt-16 md:px-8 md:pb-8 md:pt-20">
      <div className="grid grid-cols-2 gap-10 md:grid-cols-[2fr_1fr_1fr_1fr] md:gap-16">
        <div>
          <div className="flex items-baseline gap-1.5 font-display text-[22px] font-medium tracking-[-0.05em] text-zf-bone">
            zerofits<span className="mb-1.5 inline-block h-1.5 w-1.5 bg-zf-sage" />
          </div>
          <p className="mt-4 max-w-[36ch] font-body text-[13px] leading-[1.55] text-zf-mist">
            a curated lookbook of streetwear-adjacent fashion. we don't make the clothes — we choose them. each piece links to a verified amazon listing.
          </p>
          <p className="mt-3 font-mono text-[10px] uppercase tracking-zf-wider text-zf-dust">
            we earn from qualifying purchases · amazon associate
          </p>
        </div>
        <FooterCol title="shop" items={["drops", "lookbook", "archive", "stockists"]} />
        <FooterCol title="read"  items={["editorial", "field notes", "about"]} />
        <FooterCol title="support" items={["sizing", "shipping", "returns", "contact"]} />
      </div>

      <div className="mt-12 flex flex-wrap items-end justify-between gap-6 border-t border-zf-smoke pt-6">
        <div>
          <div className="font-mono text-[10px] uppercase tracking-zf-widest text-zf-dust">
            © 2026 zerofits — tokyo · berlin
          </div>
          <div className="mt-1 font-mono text-[10px] uppercase tracking-zf-widest text-zf-dust">
            built on the work of others · credited where due
          </div>
        </div>
        <div className="font-display text-[88px] font-medium leading-[0.9] tracking-[-0.06em] text-zf-bone md:text-[140px]">
          0F.
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h4 className="font-body text-[11px] font-medium uppercase tracking-zf-widest text-zf-mist">
        {title}
      </h4>
      <ul className="mt-4 flex flex-col gap-2">
        {items.map((it) => (
          <li
            key={it}
            className="cursor-pointer font-body text-[13px] text-zf-fog transition-colors hover:text-zf-bone"
          >
            {it}
          </li>
        ))}
      </ul>
    </div>
  );
}
