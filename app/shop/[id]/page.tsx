import { notFound } from "next/navigation";
import Link from "next/link";
import AmazonCTA from "@/components/AmazonCTA";
import PlaceholderFrame from "@/components/PlaceholderFrame";
import {
  formatUsd,
  formatYen,
  getProduct,
  products,
} from "@/lib/data";

export function generateStaticParams() {
  return products.map((p) => ({ id: p.id }));
}

export function generateMetadata({ params }: { params: { id: string } }) {
  const p = getProduct(params.id);
  if (!p) return { title: "zerofits" };
  return {
    title: `${p.brand} ${p.name} — zerofits`,
    description: `${p.brand} ${p.name} — ${formatYen(p.price)}`,
  };
}

export default function ProductDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const product = getProduct(params.id);
  if (!product) notFound();

  const related = products
    .filter((p) => p.id !== product.id && p.tags?.some((t) => product.tags?.includes(t)))
    .slice(0, 4);

  return (
    <div data-screen-label={`product ${product.id}`}>
      <article className="grid grid-cols-1 border-b border-zf-smoke md:grid-cols-12">
        <div className="md:col-span-7">
          <PlaceholderFrame
            src={product.image_url}
            alt={`${product.brand} ${product.name}`}
            variant={product.frame}
            aspectRatio="4/5"
            topLeft={product.drop ? `drop ${product.drop}` : undefined}
            bottomRight={product.soldOut ? "sold out" : product.stockNote}
            priority
            sizes="(min-width: 768px) 58vw, 100vw"
          />
        </div>

        <aside className="flex flex-col gap-8 border-t border-zf-smoke px-6 py-10 md:col-span-5 md:border-l md:border-t-0 md:px-10 md:py-14">
          <div>
            <div className="font-mono text-[11px] uppercase tracking-zf-widest text-zf-mist">
              {product.brand}
            </div>
            <h1 className="mt-2 font-display text-[36px] font-medium leading-[1.05] tracking-zf-tight text-zf-bone md:text-[48px]">
              {product.name}
            </h1>
          </div>

          <div className="flex items-baseline justify-between border-y border-zf-smoke py-5">
            <div
              className={`font-display text-[28px] font-medium tabular-nums ${
                product.soldOut ? "text-zf-mist line-through" : "text-zf-bone"
              }`}
            >
              {formatYen(product.price)}
            </div>
            {product.price_usd && (
              <div className="font-mono text-[12px] tracking-wide text-zf-mist">
                approx. {formatUsd(product.price_usd)}
              </div>
            )}
          </div>

          <div className="flex flex-col gap-3">
            <AmazonCTA href={product.amazon_affiliate_url} soldOut={product.soldOut} />
            <p className="font-mono text-[10px] leading-[1.5] tracking-zf-wider text-zf-mist">
              clicking through opens amazon in a new tab. as an amazon associate, zerofits earns from qualifying purchases.
            </p>
          </div>

          {product.tags && product.tags.length > 0 && (
            <div className="border-t border-zf-smoke pt-5">
              <div className="font-mono text-[10px] uppercase tracking-zf-widest text-zf-mist">
                tags
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                {product.tags.map((t) => (
                  <span
                    key={t}
                    className="border border-zf-smoke px-3 py-1.5 font-mono text-[10px] uppercase tracking-zf-wider text-zf-fog"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          )}
        </aside>
      </article>

      {related.length > 0 && (
        <section className="px-4 py-12 md:px-8 md:py-16">
          <div className="mb-8 flex items-baseline justify-between">
            <h2 className="font-display text-[20px] font-medium tracking-zf-tight text-zf-bone md:text-[24px]">
              styled alongside
            </h2>
            <Link
              href="/shop"
              className="font-body text-[11px] font-medium uppercase tracking-zf-widest text-zf-fog hover:text-zf-bone"
            >
              full archive →
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {related.map((p) => (
              <Link key={p.id} href={`/shop/${p.id}`} className="block">
                <PlaceholderFrame
                  src={p.image_url}
                  alt={p.name}
                  variant={p.frame}
                  aspectRatio="4/5"
                />
                <div className="mt-3 font-mono text-[10px] uppercase tracking-zf-widest text-zf-mist">
                  {p.brand}
                </div>
                <div className="mt-1 font-display text-[15px] font-medium tracking-zf-tight text-zf-bone">
                  {p.name}
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
