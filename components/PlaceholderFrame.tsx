import Image from "next/image";
import type { CSSProperties } from "react";

type Props = {
  src?: string;
  alt?: string;
  variant?: string;
  aspectRatio?: string; // e.g. "9/16", "4/5"
  topLeft?: string;
  bottomRight?: string;
  className?: string;
  withFigure?: boolean;
  priority?: boolean;
  sizes?: string;
  style?: CSSProperties;
};

/**
 * PlaceholderFrame — wraps a styled gradient placeholder when no image is
 * available, or renders next/image when src is provided. Corner labels are
 * the editorial signature ("look 03 / drop 04 / nezu, tokyo").
 */
export default function PlaceholderFrame({
  src,
  alt = "",
  variant = "",
  aspectRatio = "4/5",
  topLeft,
  bottomRight,
  className = "",
  withFigure = true,
  priority = false,
  sizes = "(min-width: 1024px) 33vw, 100vw",
  style,
}: Props) {
  return (
    <div
      data-variant={variant}
      data-with-figure={!src && withFigure ? "true" : "false"}
      className={`zf-frame ${className}`}
      style={{ aspectRatio, ...style }}
    >
      {src && (
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          className="object-cover"
        />
      )}
      {topLeft && (
        <div className="absolute left-3 top-3 z-10 font-mono text-[9px] uppercase tracking-zf-widest text-zf-bone/70">
          {topLeft}
        </div>
      )}
      {bottomRight && (
        <div className="absolute bottom-3 right-3 z-10 font-mono text-[9px] uppercase tracking-zf-widest text-zf-bone/50">
          {bottomRight}
        </div>
      )}
    </div>
  );
}
