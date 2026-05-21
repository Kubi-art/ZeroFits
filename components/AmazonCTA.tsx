import type { ReactNode } from "react";

type Variant = "primary" | "sage" | "ghost";
type Size = "md" | "sm";

type Props = {
  href: string;
  variant?: Variant;
  size?: Size;
  soldOut?: boolean;
  label?: string;
  className?: string;
  children?: ReactNode;
};

/**
 * AmazonCTA — affiliate-compliant "Buy on Amazon" button.
 * - Always opens in a new tab.
 * - Always carries rel="sponsored noopener noreferrer" (Amazon Associates +
 *   FTC requirement).
 * - The "via amazon associates" eyebrow is the disclosure — keep it visible.
 */
export default function AmazonCTA({
  href,
  variant = "primary",
  size = "md",
  soldOut = false,
  label = "buy on amazon",
  className = "",
}: Props) {
  if (soldOut) {
    return (
      <div className={`flex flex-col gap-1.5 pointer-events-none ${className}`}>
        <span className="font-mono uppercase text-zf-dust tracking-zf-widest text-[9px]">
          currently unavailable
        </span>
        <span className={`flex items-center justify-between gap-3 border border-zf-smoke text-zf-dust ${size === "sm" ? "px-3 py-2.5 text-[10px]" : "px-4 py-3.5 text-[11px]"} uppercase tracking-zf-widest font-medium`}>
          <span>sold out</span>
          <span className="font-display text-base">·</span>
        </span>
      </div>
    );
  }

  const palette: Record<Variant, string> = {
    primary: "bg-zf-bone text-zf-black border-zf-bone hover:bg-zf-sage hover:border-zf-sage",
    sage:    "bg-transparent text-zf-sage border-zf-sage hover:bg-zf-sage hover:text-zf-black",
    ghost:   "bg-transparent text-zf-bone border-zf-ash hover:bg-zf-bone hover:text-zf-black hover:border-zf-bone",
  };
  const sizing: Record<Size, string> = {
    md: "px-4 py-3.5 text-[11px]",
    sm: "px-3 py-2.5 text-[10px]",
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="sponsored noopener noreferrer"
      className={`group flex flex-col gap-1.5 no-underline ${className}`}
    >
      <span className="font-mono uppercase text-zf-mist tracking-zf-widest text-[9px]">
        via amazon associates
      </span>
      <span
        className={`flex items-center justify-between gap-3 border uppercase tracking-zf-widest font-medium transition-all duration-200 ease-zf-out active:translate-y-px ${palette[variant]} ${sizing[size]}`}
      >
        <span>{label}</span>
        <span className="font-display text-base leading-none">↗</span>
      </span>
    </a>
  );
}
