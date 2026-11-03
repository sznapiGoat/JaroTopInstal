import type { Metadata } from "next";
import { Drobecky } from "@/components/Seo";
import { firma, pusobnost } from "@/lib/site";

export const metadata: Metadata = {
  title: "Kontakt",
  description: `Jaro TopInstal, ${firma.ulice}, ${firma.psc} ${firma.obec}. Tel. ${firma.tel}, ${firma.email}. Instalatér a topenář pro Plzeň a celý Plzeňský kraj.`,
  alternates: { canonical: "/kontakt" },
};

const udaje: [string, React.ReactNode][] = [
  ["Firma", firma.pravniNazev],
  [
    "Sídlo",
    <>
      {firma.ulice}, {firma.psc} {firma.obec}
      <br />
      <a href={firma.mapa} className="underline underline-offset-4 hover:text-red">
        Ukázat na mapě
      </a>
    </>,
  ],
  ["IČO", firma.ico],
  ["DIČ", firma.dic],
  [
    "Facebook",
    <a key="fb" href={firma.facebook} className="underline underline-offset-4 hover:text-red">
      Jaro TopInstal
    </a>,
  ],
];

export default function Kontakt() {
  return (
    <section className="mx-auto max-w-6xl px-5 pt-32 pb-24 sm:px-8 md:pb-32">
      <Drobecky kroky={[{ href: "/kontakt", label: "Kontakt" }]} />
      <div className="mt-8 grid gap-16 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
        <div className="min-w-0">
          <h1 className="font-display text-[2.3rem] leading-[1.2] font-black tracking-tight sm:text-5xl"><span className="linka">Kontakt</span></h1>
          <p className="mt-6 max-w-lg text-lg text-muted">
            Zavolejte a popište, co potřebujete. Když to nevezmu, jsem nejspíš na stavbě a ozvu se zpátky. U větší
            zakázky pomůžou fotky poslané e-mailem.
          </p>
          <a
            href={firma.telHref}
            className="mt-10 block font-display text-5xl leading-none font-extrabold tracking-tight underline decoration-logo-red decoration-[6px] underline-offset-[12px] sm:text-7xl"
          >
            {firma.tel}
          </a>
          <a
            href={`mailto:${firma.email}`}
            className="mt-10 inline-block text-xl font-semibold break-all underline decoration-ink/25 underline-offset-4 hover:decoration-red sm:text-2xl"
          >
            {firma.email}
          </a>
          <p className="mt-10 text-muted">
            Na adrese sídla mě zastihnete po domluvě, většinu dne jsem na zakázkách.
          </p>
        </div>

        <div className="min-w-0 space-y-12">
          <div>
            <h2 className="font-display text-xl font-extrabold tracking-tight">Údaje o firmě</h2>
            <dl className="mt-4 border-t border-ink">
              {udaje.map(([k, v]) => (
                <div key={k} className="grid grid-cols-[6.5rem_1fr] gap-4 border-b border-line py-3">
                  <dt className="text-muted">{k}</dt>
                  <dd>{v}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div>
            <h2 className="font-display text-xl font-extrabold tracking-tight">Kam jezdím</h2>
            <p className="mt-2 text-muted">Celý Plzeňský kraj.</p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {pusobnost.map((o) => (
                <li key={o} className="rounded-full bg-plaster px-4 py-2">{o === "Plzeň-město" ? "Plzeň" : o}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
