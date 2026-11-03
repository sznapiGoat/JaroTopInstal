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
  { tvrzeni: "Rychlý termín a uklizeno", detail: "Zákazníci chválí rychlou reakci a čistotu po práci." },
  { tvrzeni: "Přes 15 let v oboru", detail: "Velkou část z toho na stavbách v Německu." },
  { tvrzeni: "100 % na Poptávej.cz", detail: "Kvalita, komunikace i poměr ceny a výkonu." },
];

const obory: { stitek: string; nadpis: string; text: string; href: string; odkaz: string; foto: Foto; polozky: string[] }[] = [
  {
    stitek: "Voda a odpady",
    nadpis: "Rozvody vody, odpady a kanalizace",
    text: "Od zapojení myčky po nové rozvody celého domu. Ucpané odpady, bojlery a technická část koupelny včetně modulu pro závěsné WC.",
    href: "/instalater-plzen",
    odkaz: "Podrobně o vodě a odpadech",
    foto: fotky.kanalizaceOdbocky,
    polozky: ["Rozvody vody", "Odpady a kanalizace", "Čištění odpadů", "Bojlery", "Koupelny"],
  },
  {
    stitek: "Topení",
    nadpis: "Podlahové topení, radiátory a rozvody",
    text: "Nové topení při rekonstrukci i v novostavbě. Podlahovka od desky po rozdělovač, výměna radiátorů a napojení zdroje tepla.",
    href: "/topenar-plzen",
    odkaz: "Podrobně o topení",
    foto: fotky.podlahovkaCelek,
    polozky: ["Podlahové topení", "Rozvody topení", "Radiátory", "Napojení zdroje"],
  },
];

export default function Home() {
  return (
    <>
      <section className="relative isolate flex min-h-[calc(100svh-5rem)] flex-col overflow-hidden bg-ink text-white lg:min-h-[min(100svh,900px)]">
        <HeroSlideshow slides={slides} />
        <div className="relative z-[5] mx-auto flex w-full max-w-6xl flex-1 flex-col justify-end px-5 pt-32 pb-24 sm:px-8 sm:pb-32 lg:justify-center lg:pb-36">
          <div className="max-w-[50rem]">
            <h1 className="font-display text-[2.35rem] leading-[1.14] font-black [text-shadow:0_2px_22px_rgb(0_0_0/0.35)] tracking-tight sm:text-6xl lg:text-[4.1rem]">
              <span className="linka">Instalatér a topenář</span>
              <br />
              <span>pro Plzeň a okolí</span>
            </h1>
            <p className="mt-7 max-w-xl text-lg text-white/90 sm:text-xl">
              Rozvody vody, topení a odpadů v domech i bytech. Plzeň a celý Plzeňský kraj.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <a
                href={firma.telHref}
                className="hidden rounded-full bg-red px-7 py-4 font-display text-lg font-bold text-white hover:bg-red-dark active:translate-y-px lg:inline-block"
              >
                Zavolat {firma.tel}
              </a>
              <Link
                href="/zakazky"
                className="rounded-full bg-white px-7 py-4 font-display text-lg font-bold text-ink hover:bg-plaster active:translate-y-px"
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
              <dt className="font-display text-lg font-extrabold">{d.tvrzeni}</dt>
              <dd className="mt-1 text-[0.9375rem] text-muted">{d.detail}</dd>
            </div>
          ))}
        </dl>
      </div>

      <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8 md:py-24">
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl leading-tight font-extrabold tracking-tight sm:text-[2.6rem]">
            Voda, topení a odpady z jedné ruky
          </h2>
          <p className="mt-5 text-lg text-muted">
            Nemusíte shánět zvlášť instalatéra a topenáře. Rozvody vody i topení udělám v jednom termínu.
          </p>
        </div>
        <div className="mt-12 space-y-6">
          {obory.map((o, i) => (
            <article key={o.href} className="grid overflow-hidden rounded-2xl bg-plaster md:grid-cols-2">
              <Image
                src={o.foto.src}
                alt={o.foto.alt}
                width={o.foto.w}
                height={o.foto.h}
                sizes="(min-width: 768px) 560px, 100vw"
                className={`aspect-[4/3] h-full w-full object-cover md:aspect-auto ${i % 2 ? "md:order-2" : ""}`}
              />
              <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-12">
                <p className="font-display text-lg font-bold">
                  <span className="blok">{o.stitek}</span>
                </p>
                <h3 className="mt-4 font-display text-2xl leading-tight font-extrabold tracking-tight sm:text-3xl">
                  {o.nadpis}
                </h3>
                <p className="mt-4 text-muted">{o.text}</p>
                <ul className="mt-5 flex flex-wrap gap-2 text-sm">
                  {o.polozky.map((p) => (
                    <li key={p} className="rounded-full bg-paper px-3 py-1.5">
                      {p}
                    </li>
                  ))}
                </ul>
                <Link
                  href={o.href}
                  className="mt-8 self-start rounded-full bg-paper px-6 py-3 font-display font-bold hover:bg-ink hover:text-white active:translate-y-px"
                >
                  {o.odkaz}
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-line">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 md:py-24">
          <div className="max-w-2xl">
            <h2 className="font-display text-3xl leading-tight font-extrabold tracking-tight text-balance sm:text-[2.6rem]">
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
        </div>
      </section>

      <section className="relative isolate overflow-hidden">
        <Image
          src={fotky.podlahovkaPokoj.src}
          alt={fotky.podlahovkaPokoj.alt}
          fill
          sizes="100vw"
          className="-z-10 object-cover"
        />
        <div className="mx-auto flex min-h-[34rem] max-w-6xl items-end px-5 py-10 sm:px-8 md:min-h-[40rem] md:py-14">
          <div className="max-w-md rounded-2xl bg-paper p-7 sm:p-9">
            <h2 className="font-display text-2xl leading-tight font-extrabold tracking-tight sm:text-3xl">
              Podlahové topení od desky po rozdělovač
            </h2>
            <p className="mt-4 text-muted">
              Pravidelná rozteč smyček a okrajový pásek u každé stěny, aby podlaha hřála rovnoměrně. Celá přízemí domů
              i jednotlivé koupelny.
            </p>
            <Link
              href="/topenar-plzen"
              className="mt-6 inline-block rounded-full bg-plaster px-6 py-3 font-display font-bold hover:bg-ink hover:text-white active:translate-y-px"
            >
              Podrobně o topení
            </Link>
          </div>
        </div>
      </section>

      <section id="reference" className="scroll-mt-24">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 md:py-24">
          <div className="text-center">
            <h2 className="font-display text-3xl font-extrabold tracking-tight sm:text-[2.6rem]">Co říkají zákazníci</h2>
            <p className="mt-3 text-muted">100 % za kvalitu, komunikaci i poměr ceny a výkonu na Poptávej.cz</p>
          </div>
          <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-2">
            {reference.map((r) => (
              <figure key={r.jmeno} className="flex flex-col rounded-2xl bg-plaster p-7 sm:p-9">
                <blockquote className="flex-1 text-xl leading-snug font-medium text-balance">„{r.text}“</blockquote>
                <figcaption className="mt-6">
                  <span className="font-display text-lg font-bold">
                    <span className="blok">{r.jmeno}</span>
                  </span>
                  <span className="mt-2 block text-sm text-muted">
                    {r.zakazka}, {r.misto}, {r.datum}
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-line">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 sm:px-8 md:grid-cols-[1.2fr_1fr] md:gap-16 md:py-24">
          <div className="flex gap-6">
            <Image src="/logo.png" alt="" width={96} height={96} className="hidden size-24 shrink-0 sm:block" />
            <div>
              <h2 className="font-display text-3xl leading-tight font-extrabold tracking-tight sm:text-4xl">
                Jaro TopInstal ze Zbůchu
              </h2>
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
            <h3 className="font-display text-xl font-extrabold">Kam jezdím</h3>
            <p className="mt-2 text-muted">Celý Plzeňský kraj, sídlo mám ve Zbůchu.</p>
            <ul className="mt-5 flex flex-wrap gap-2">
              {pusobnost.map((o) => (
                <li key={o} className="rounded-full bg-plaster px-4 py-2">
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
