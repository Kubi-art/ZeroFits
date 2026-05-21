import { notFound } from "next/navigation";
import LookRow from "@/components/LookRow";
import { getLook, looks } from "@/lib/data";

export function generateStaticParams() {
  return looks.map((l) => ({ id: l.id }));
}

export function generateMetadata({ params }: { params: { id: string } }) {
  const look = getLook(params.id);
  if (!look) return { title: "zerofits" };
  return {
    title: `${look.title} — zerofits`,
    description: `${look.number} — ${look.copy}`,
  };
}

export default function LookDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const look = getLook(params.id);
  if (!look) notFound();

  return (
    <div data-screen-label={`look ${look.id}`}>
      <LookRow look={look} priority />
      <SiblingNav currentId={look.id} />
    </div>
  );
}

function SiblingNav({ currentId }: { currentId: string }) {
  const idx = looks.findIndex((l) => l.id === currentId);
  const prev = looks[(idx - 1 + looks.length) % looks.length];
  const next = looks[(idx + 1) % looks.length];
  return (
    <nav className="grid grid-cols-2 border-t border-zf-smoke">
      <a
        href={`/looks/${prev.id}`}
        className="group flex flex-col gap-1 border-r border-zf-smoke px-6 py-7 transition-colors hover:bg-zf-ink md:px-10 md:py-9"
      >
        <span className="font-mono text-[10px] uppercase tracking-zf-widest text-zf-mist">
          previous · {prev.number}
        </span>
        <span className="font-display text-[18px] font-medium tracking-zf-tight text-zf-bone md:text-[22px]">
          ← {prev.title}
        </span>
      </a>
      <a
        href={`/looks/${next.id}`}
        className="group flex flex-col items-end gap-1 px-6 py-7 transition-colors hover:bg-zf-ink md:px-10 md:py-9"
      >
        <span className="font-mono text-[10px] uppercase tracking-zf-widest text-zf-mist">
          next · {next.number}
        </span>
        <span className="font-display text-[18px] font-medium tracking-zf-tight text-zf-bone md:text-[22px]">
          {next.title} →
        </span>
      </a>
    </nav>
  );
}
