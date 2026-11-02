import Image from "next/image";
import Link from "next/link";
import { KontaktPas } from "@/components/Chrome";
import { HeroSlideshow, type Slide } from "@/components/HeroSlideshow";
import { Prubeh, type Faze } from "@/components/Prubeh";
import { firma, fotky, pusobnost, reference, type Foto } from "@/lib/site";

const slides: Slide[] = [
  { foto: fotky.rozvodyStena, obor: "Rozvody vody a topení", popis: "Rekonstrukce domu, před omítkou", focus: "45% 40%" },
  { foto: fotky.podlahovkaPokoj, obor: "Podlahové topení", popis: "Pravidelná rozteč až ke stěně", focus: "50% 70%" },
  { foto: fotky.radiatorNapojeni, obor: "Radiátory", popis: "Napojení z drážky ve zdi", focus: "62% 55%" },
  { foto: fotky.kanalizaceHlavni, obor: "Kanalizace", popis: "Ležaté potrubí ve větším objektu", focus: "35% 55%" },
];

const faze: Faze[] = [
  {
    nazev: "Odkrytí",
    text: "Nejdřív se odkryjí staré rozvody a odpady, ať je vidět, s čím se pracuje.",
    foto: fotky.koupelnaBourani,
  },
  {
    nazev: "Nové trasy",
    text: "Rozvody vody a topení vedené souběžně, v pravých úhlech a v objímkách.",
    foto: fotky.rozvodyRoh,
  },
  {
    nazev: "Odpady",
    text: "Nové odpadní potrubí podél zdi, napojené na ležatou kanalizaci.",
    foto: fotky.kanalizacePodelZdi,
  },
  {
    nazev: "Podlahové topení",
    text: "Smyčky na systémové desce, okrajový pásek u každé stěny.",
    foto: fotky.podlahovkaObyvak,
  },
  {
    nazev: "Radiátory",
    text: "Přípojka z drážky ve zdi, radiátor pod oknem.",
    foto: fotky.rozvodPodelOkna,
  },
  {
    nazev: "Hotovo",
    text: "Drážky se zapraví a z rozvodů zůstane vidět jen radiátor a baterie.",
    foto: fotky.pokojHotovo,
  },
];

const duvody = [
  {
    tvrzeni: "Fotky jen z mých zakázek",
    detail: "Žádná fotobanka. Rozvody, jak vypadají před omítkou.",
  },
  { tvrzeni: "Přes 15 let v oboru", detail: "Velkou část z toho na stavbách v Německu." },
  {
    tvrzeni: "100 % na Poptávej.cz",
    detail: "Kvalita, komunikace i poměr ceny a výkonu.",
    odkaz: { href: "#reference", label: "Co píšou zákazníci" },
  },
];

const obory: { nadpis: string; href: string; foto: Foto; polozky: string[] }[] = [
  {
    nadpis: "Voda, odpady a kanalizace",
    href: "/instalater-plzen",
    foto: fotky.kanalizaceOdbocky,
    polozky: ["Rozvody vody", "Odpady a kanalizace", "Čištění odpadů", "Bojlery a ohřev vody", "Technická část koupelen"],
  },
  {
    nadpis: "Topení",
    href: "/topenar-plzen",
    foto: fotky.podlahovkaCelek,
    polozky: ["Podlahové topení", "Rozvody topení", "Výměna a montáž radiátorů", "Napojení zdroje tepla"],
  },
];

export default function Home() {
  return (
    <>
      <section className="relative isolate flex min-h-[calc(100svh-12.5rem)] flex-col overflow-hidden bg-ink text-white lg:min-h-[min(calc(100svh-4.75rem),860px)]">
        <HeroSlideshow slides={slides} />
        <div className="relative z-[5] mx-auto flex w-full max-w-6xl flex-1 flex-col justify-end px-5 pt-24 pb-24 sm:px-8 sm:pb-32 lg:justify-center lg:pb-36">
          <div className="max-w-[56rem]">
            <h1 className="font-display text-[2.6rem] leading-[1.02] font-bold tracking-tight text-balance sm:text-6xl lg:text-[4.25rem]">
              Instalatér a topenář pro Plzeň a okolí
            </h1>
            <p className="mt-6 max-w-xl text-lg text-white/85 sm:text-xl">
              Rozvody vody, topení a odpadů v domech i bytech. Všechny fotky na webu jsou z mých zakázek.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <a
                href={firma.telHref}
                className="hidden bg-red active:translate-y-px px-6 py-4 font-display text-lg font-bold text-white hover:bg-red-dark lg:inline-block"
              >
                Zavolat {firma.tel}
              </a>
              <Link
                href="/zakazky"
                className="border border-white/40 active:translate-y-px px-6 py-4 font-display text-lg font-bold text-white hover:border-white hover:bg-white/10"
              >
                Fotky ze zakázek
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="border-b border-line">
        <dl className="mx-auto grid max-w-6xl grid-cols-1 px-5 sm:grid-cols-3 sm:px-8">
          {duvody.map((d, i) => (
            <div
              key={d.tvrzeni}
              className={`border-b border-line py-6 sm:border-b-0 ${i < 2 ? "sm:border-r sm:pr-6" : ""} ${i > 0 ? "sm:pl-6" : ""}`}
            >
              <dt className="font-display text-lg font-bold">{d.tvrzeni}</dt>
              <dd className="mt-1 text-[0.9375rem] text-muted">
                {d.detail}
                {d.odkaz && (
                  <Link href={d.odkaz.href} className="mt-1.5 block font-semibold text-red underline-offset-4 hover:underline">
                    {d.odkaz.label}
                  </Link>
                )}
              </dd>
            </div>
          ))}
        </dl>
      </div>

      <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8 md:py-28">
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl leading-tight font-bold text-balance sm:text-[2.6rem]">
            Nejdůležitější část práce skončí ve zdi
          </h2>
          <p className="mt-5 text-lg text-muted">
            Trubky pod omítkou nebo v podlaze už nikdo neuvidí, ale budete s nimi bydlet desítky let. Takhle vypadá
            rekonstrukce, než se to zazdí. Fotky jsou z různých zakázek.
          </p>
        </div>
        <div className="mt-12">
          <Prubeh faze={faze} />
        </div>
      </section>

      <section className="border-t border-line">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 md:py-24">
          <h2 className="font-display text-3xl leading-tight font-bold sm:text-[2.6rem]">Co pro vás udělám</h2>
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {obory.map((o) => (
              <Link
                key={o.href}
                href={o.href}
                className="group flex flex-col border-b-4 border-transparent bg-plaster hover:border-logo-red"
              >
                <Image
                  src={o.foto.src}
                  alt={o.foto.alt}
                  width={o.foto.w}
                  height={o.foto.h}
                  sizes="(min-width: 1024px) 540px, 100vw"
                  className="aspect-[16/10] w-full object-cover"
                />
                <div className="flex flex-1 flex-col p-6 sm:p-8">
                  <h3 className="font-display text-2xl font-bold sm:text-3xl">{o.nadpis}</h3>
                  <ul className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-muted">
                    {o.polozky.map((p) => (
                      <li key={p}>{p}</li>
                    ))}
                  </ul>
                  <span className="mt-auto pt-7 font-semibold text-red group-hover:underline group-hover:underline-offset-4">
                    Podrobně o {o.nadpis === "Topení" ? "topení" : "vodě a odpadech"}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-plaster">
        <div className="grid lg:grid-cols-2">
          <Image
            src={fotky.podlahovkaPokoj.src}
            alt={fotky.podlahovkaPokoj.alt}
            width={fotky.podlahovkaPokoj.w}
            height={fotky.podlahovkaPokoj.h}
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="aspect-[4/3] h-full w-full object-cover lg:aspect-auto"
          />
          <div className="flex flex-col justify-center px-5 py-16 sm:px-8 lg:px-16 lg:py-24">
            <h2 className="max-w-md font-display text-3xl leading-tight font-bold sm:text-[2.6rem]">
              Podlahové topení od desky po rozdělovač
            </h2>
            <p className="mt-5 max-w-md text-lg text-muted">
              Pravidelná rozteč smyček a okrajový pásek u každé stěny, aby podlaha hřála rovnoměrně. Celá přízemí
              domů i jednotlivé koupelny při rekonstrukci.
            </p>
            <Link
              href="/topenar-plzen"
              className="mt-8 self-start font-semibold text-red underline underline-offset-4 hover:text-red-dark"
            >
              Podrobně o topení
            </Link>
          </div>
        </div>
      </section>

      <section id="reference" className="scroll-mt-6">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 md:py-28">
          <h2 className="font-display text-3xl font-bold sm:text-[2.6rem]">Co říkají zákazníci</h2>
          <div className="mt-12 grid gap-12 md:grid-cols-2">
            {reference.map((r) => (
              <figure key={r.jmeno}>
                <span aria-hidden className="flex w-10 flex-col gap-[3px]">
                  <span className="h-1 bg-logo-red" />
                  <span className="h-1 bg-pipe-blue" />
                </span>
                <blockquote className="mt-5 text-xl leading-snug font-medium text-balance sm:text-2xl">„{r.text}“</blockquote>
                <figcaption className="mt-5 border-t border-line pt-4 text-muted">
                  <span className="font-semibold text-ink">{r.jmeno}</span>, {r.zakazka}, {r.misto}, {r.datum}
                </figcaption>
              </figure>
            ))}
          </div>
          <p className="mt-12 text-sm text-muted">Hodnocení z poptávkového serveru Poptávej.cz.</p>
        </div>
      </section>

      <section className="border-t border-line">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 sm:px-8 md:grid-cols-[1.2fr_1fr] md:gap-16 md:py-24">
          <div className="flex gap-6">
            <Image src="/logo.png" alt="" width={96} height={96} className="hidden size-24 shrink-0 sm:block" />
            <div>
              <h2 className="font-display text-3xl leading-tight font-bold sm:text-4xl">Jaro TopInstal ze Zbůchu</h2>
              <p className="mt-5 text-lg">
                Firmu jsem založil v roce 2025, ale instalatérské a topenářské práci se věnuji přes 15 let. Velkou část
                té doby jsem pracoval v Německu. Zakázky beru po Plzni a v celém kraji, od výměny baterie po rozvody
                celého domu.
              </p>
              <p className="mt-4 text-muted">
                V září 2026 jsem absolvoval školení ENBRA Měření vody a tepla a ČMI Metrologický systém ČR.{" "}
                <Link href="/kontakt" className="underline underline-offset-4 hover:text-red">
                  Kontakt a údaje o firmě
                </Link>
              </p>
            </div>
          </div>
          <div>
            <h3 className="font-display text-xl font-bold">Kam jezdím</h3>
            <p className="mt-2 text-muted">Celý Plzeňský kraj, sídlo mám ve Zbůchu.</p>
            <ul className="mt-5 flex flex-wrap gap-2">
              {pusobnost.map((o) => (
                <li key={o} className="border border-ink/15 px-3.5 py-1.5">
                  {o === "Plzeň-město" ? "Plzeň" : o}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <KontaktPas />
    </>
  );
}
