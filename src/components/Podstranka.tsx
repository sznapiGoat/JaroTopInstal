import Image from "next/image";
import { Drobecky, JsonLd, faqSchema } from "./Seo";
import type { Foto } from "@/lib/site";

export function HlavickaStranky({
  drobek,
  nadpis,
  perex,
  foto,
}: {
  drobek: { href: string; label: string };
  nadpis: string;
  perex: React.ReactNode;
  foto?: Foto;
}) {
  return (
    <section className="mx-auto max-w-6xl px-5 pt-8 pb-16 sm:px-8 md:pb-20">
      <Drobecky kroky={[drobek]} />
      <div className={`mt-8 grid gap-10 ${foto ? "lg:grid-cols-[1.15fr_0.85fr] lg:items-end lg:gap-14" : ""}`}>
        <div className="min-w-0">
          <h1 className="font-display text-[2.3rem] leading-[1.05] font-bold tracking-tight text-balance sm:text-5xl lg:text-[3.4rem]">
            {nadpis}
          </h1>
          <div className="mt-6 max-w-2xl text-lg text-muted sm:text-xl">{perex}</div>
        </div>
        {foto && (
          <figure className="min-w-0">
            <Image
              src={foto.src}
              alt={foto.alt}
              width={foto.w}
              height={foto.h}
              priority
              sizes="(min-width: 1024px) 420px, 100vw"
              className="aspect-[4/3] w-full object-cover"
            />
            <figcaption className="mt-3 text-sm text-muted">{foto.popis}</figcaption>
          </figure>
        )}
      </div>
    </section>
  );
}

/** Seznam služeb jako tabulka: co a co to obnáší. */
export function TabulkaSluzeb({ radky }: { radky: [string, string][] }) {
  return (
    <dl className="border-t border-ink">
      {radky.map(([co, popis]) => (
        <div key={co} className="grid gap-1 border-b border-line py-5 md:grid-cols-[16rem_1fr] md:gap-10">
          <dt className="font-display text-lg font-bold">{co}</dt>
          <dd className="text-muted">{popis}</dd>
        </div>
      ))}
    </dl>
  );
}

export type Otazka = { q: string; a: string };

export function Faq({ otazky }: { otazky: Otazka[] }) {
  return (
    <section className="border-t border-line">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 py-20 sm:px-8 md:grid-cols-[0.7fr_1.3fr] md:gap-14 md:py-24">
        <h2 className="font-display text-3xl font-bold sm:text-4xl">Na co se lidé ptají</h2>
        <div className="border-t border-ink">
          {otazky.map((o) => (
            <details key={o.q} className="group border-b border-line">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-5 text-lg font-semibold">
                {o.q}
                <span aria-hidden className="mt-0.5 shrink-0 text-xl leading-none text-red group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="max-w-2xl pb-6 text-muted">{o.a}</p>
            </details>
          ))}
        </div>
      </div>
      <JsonLd data={faqSchema(otazky)} />
    </section>
  );
}
