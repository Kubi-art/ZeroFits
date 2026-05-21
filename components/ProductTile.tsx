import Link from "next/link";
import AmazonCTA from "./AmazonCTA";
import PlaceholderFrame from "./PlaceholderFrame";
import { formatUsd, formatYen, type Product } from "@/lib/data";

type Props = {
  product: Product;
  /** When true, the whole tile becomes a link to /shop/[id]. Default false. */
  linkToDetail?: boolean;
};

/**
 * ProductTile — the conversion card. Image first, then brand / name / price,
 * then a high-contrast "Buy on Amazon" CTA. Designed so a TikTok visitor can
 * convert from any product on the page without scrolling.
 */
export default function ProductTile({ product, linkToDetail = false }: Props) {
  const Wrapper = ({ children }: { children: React.ReactNode }) =>
    linkToDetail ? (
      <Link href={`/shop/${product.id}`} className="contents">
        {children}
      </Link>
    ) : (
      <>{children}</>
    );

  return (
    <article className="flex flex-col gap-3.5">
      <Wrapper>
        <PlaceholderFrame
          src={product.image_url}
          alt={`${product.brand} ${product.name}`}
          variant={product.frame}
          aspectRatio="4/5"
          topLeft={product.drop ? `drop ${product.drop}` : undefined}
          bottomRight={
            product.soldOut
              ? "sold out"
              : product.stockNote
              ? product.stockNote
              : undefined
          }
        />
        <div className="mt-1">
          <div className="font-mono text-[10px] uppercase tracking-zf-widest text-zf-mist">
            {product.brand}
          </div>
          <div className="mt-1 font-display text-[17px] font-medium leading-tight tracking-zf-tight text-zf-bone">
            {product.name}
          </div>
        </div>
        <div className="flex items-baseline justify-between">
          <div
            className={`font-display text-[15px] tabular-nums ${
              product.soldOut ? "text-zf-mist line-through" : "text-zf-bone"
            }`}
          >
            {formatYen(product.price)}
          </div>
          {product.price_usd && (
            <div className="font-mono text-[10px] tracking-wide text-zf-mist">
              {formatUsd(product.price_usd)}
            </div>
          )}
        </div>
      </Wrapper>
      <AmazonCTA
        href={product.amazon_affiliate_url}
        soldOut={product.soldOut}
      />
    </article>
  );
}
