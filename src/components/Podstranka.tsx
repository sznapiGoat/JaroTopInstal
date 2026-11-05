import Image from "next/image";
import { Drobecky, JsonLd, faqSchema } from "./Seo";
import { firma, type Foto } from "@/lib/site";

export function HlavickaStranky({
  drobek,
  nadpis,
  perex,
  foto,
  focus = "50% 50%",
}: {
  drobek: { href: string; label: string };
  nadpis: string;
  perex: React.ReactNode;
  foto?: Foto;
  focus?: string;
}) {
  if (!foto) {
    return (
      <section className="mx-auto max-w-6xl px-5 pt-32 pb-16 sm:px-8 md:pb-20">
        <Drobecky kroky={[drobek]} />
        <h1 className="mt-8 font-display text-[2.3rem] leading-[1.08] font-black tracking-tight text-balance sm:text-5xl lg:text-[3.4rem]">
          {nadpis}
        </h1>
        <div className="mt-6 max-w-2xl text-lg text-muted sm:text-xl">{perex}</div>
      </section>
    );
  }
  return (
    <section className="relative isolate overflow-hidden bg-ink text-white">
      <div aria-hidden className="absolute inset-0 -z-10">
        <Image
          src={foto.src}
          alt=""
          fill
          priority
          sizes="100vw"
          className="photo-drift object-cover"
          style={{ objectPosition: focus, transformOrigin: focus }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/95 via-ink/70 to-ink/40 lg:bg-gradient-to-r lg:from-ink/90 lg:via-ink/60 lg:to-ink/10" />
        <div className="absolute inset-x-0 top-0 h-44 bg-gradient-to-b from-ink/60 to-transparent" />
      </div>
      <div className="mx-auto flex min-h-[min(72svh,660px)] max-w-6xl flex-col px-5 pt-28 pb-14 sm:px-8 md:pb-20">
        <Drobecky kroky={[drobek]} svetle />
        <div className="mt-auto max-w-3xl pt-20">
          <h1 className="font-display text-[2.1rem] leading-[1.24] font-black tracking-tight sm:text-5xl sm:leading-[1.22] lg:text-[3.3rem]">
            {nadpis.includes(":") ? (
              <>
                <span className="linka">{nadpis.split(":")[0]}</span>
                <span className="mt-3 block text-[0.56em] leading-[1.32]">
                  <span className="[text-shadow:0_2px_18px_rgb(0_0_0/0.35)]">{nadpis.split(":").slice(1).join(":").trim()}</span>
                </span>
              </>
            ) : (
              <span className="linka">{nadpis}</span>
            )}
          </h1>
          <div className="mt-6 text-lg text-white/85 sm:text-xl">{perex}</div>
          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
            <a
              href={firma.telHref}
              className="hidden rounded-full bg-red px-7 py-4 font-display text-lg font-bold text-white hover:bg-red-dark active:translate-y-px lg:inline-block"
            >
              Zavolat {firma.tel}
            </a>
            <span className="text-sm text-white/65">{foto.popis}</span>
          </div>
        </div>
      </div>
    </section>
  );
}

/** Služby ve dvou sloupcích: co a co to obnáší. */
export function TabulkaSluzeb({ radky }: { radky: [string, string][] }) {
  return (
    <dl className="grid gap-x-14 gap-y-9 border-t border-ink pt-10 md:grid-cols-2">
      {radky.map(([co, popis]) => (
        <div key={co} className="max-w-[34rem]">
          <dt className="font-display text-xl font-extrabold">{co}</dt>
          <dd className="mt-2 text-muted">{popis}</dd>
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
        <h2 className="font-display text-3xl font-extrabold tracking-tight sm:text-4xl">Na co se lidé ptají</h2>
        <div className="space-y-3">
          {otazky.map((o) => (
            <details key={o.q} className="group rounded-2xl bg-plaster px-6">
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
