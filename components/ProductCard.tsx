import Image from "next/image";
import AmazonCTA from "./AmazonCTA";
import { formatUsd, type Product } from "@/lib/data";

/**
 * ProductCard — editorial product tile.
 * 4:5 image, name, USD price, "Buy on Amazon" CTA.
 * Designed for use inside CharacterLook's right column.
 */
export default function ProductCard({ product }: { product: Product }) {
  return (
    <article className="flex flex-col gap-3">
      <div className="zf-frame relative aspect-[4/5]">
        <Image
          src={product.image_url}
          alt={product.name}
          fill
          sizes="(min-width: 1024px) 22vw, (min-width: 640px) 30vw, 45vw"
          className="object-cover"
        />
      </div>
      <h3 className="mt-1 font-display text-[14px] font-medium leading-tight tracking-zf-tight text-zf-bone">
        {product.name}
      </h3>
      <div className="font-display text-[15px] font-medium tabular-nums text-zf-fog">
        {formatUsd(product.price_usd)}
      </div>
      <AmazonCTA href={product.amazon_affiliate_url} size="sm" className="mt-1" />
    </article>
  );
}
