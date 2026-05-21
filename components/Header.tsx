"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navItems = [
  { href: "/", label: "drops" },
  { href: "/looks/look-03", label: "lookbook" },
  { href: "/shop", label: "shop" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-30 bg-zf-black">
      <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-4 border-b border-zf-smoke px-4 py-4 md:px-8 md:py-6">
        {/* left */}
        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className="zf-link"
              data-active={isActive(n.href)}
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <button
          aria-label="open menu"
          onClick={() => setOpen((v) => !v)}
          className="flex h-8 w-8 items-center justify-center text-zf-bone md:hidden"
        >
          <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
            <line x1="4" y1="7" x2="20" y2="7" />
            <line x1="4" y1="13" x2="20" y2="13" />
            <line x1="4" y1="19" x2="14" y2="19" />
          </svg>
        </button>

        {/* center wordmark */}
        <Link href="/" className="flex items-baseline gap-1.5 font-display text-[20px] font-medium tracking-[-0.05em] text-zf-bone md:text-[26px]">
          zerofits
          <span className="mb-1 inline-block h-1 w-1 bg-zf-sage md:mb-1.5 md:h-1.5 md:w-1.5" />
        </Link>

        {/* right */}
        <div className="flex items-center justify-end gap-4 md:gap-6">
          <span className="hidden font-mono text-[10px] uppercase tracking-zf-widest text-zf-sage md:inline">
            drop 04 / live
          </span>
          <a
            href="https://www.tiktok.com/@zerofits"
            target="_blank"
            rel="noopener noreferrer"
            className="zf-link"
          >
            @zerofits ↗
          </a>
        </div>
      </div>

      {/* status strip — desktop only */}
      <div className="hidden grid-cols-[1fr_auto_1fr] items-center border-b border-zf-smoke px-8 py-3 font-mono text-[10px] uppercase tracking-zf-widest md:grid">
        <div className="text-zf-mist">jst · 23:14 · tokyo</div>
        <div className="text-zf-bone">
          drop 04 / shinkai winter — <span className="text-zf-sage">live now</span>
        </div>
        <div className="text-right text-zf-mist">we earn from qualifying purchases · associates</div>
      </div>

      {/* mobile menu */}
      {open && (
        <nav className="border-b border-zf-smoke bg-zf-ink px-6 py-6 md:hidden">
          <ul className="flex flex-col gap-4">
            {navItems.map((n) => (
              <li key={n.href}>
                <Link
                  href={n.href}
                  onClick={() => setOpen(false)}
                  className="zf-link"
                  data-active={isActive(n.href)}
                >
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
