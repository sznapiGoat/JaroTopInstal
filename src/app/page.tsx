import Image from "next/image";
import Link from "next/link";
import { KontaktPas, Rozvod } from "@/components/Chrome";
import { firma, fotky, pusobnost, reference } from "@/lib/site";

const voda = [
  ["Rozvody vody", "nové rozvody v bytě i v domě, výměna starých při rekonstrukci"],
  ["Odpady a kanalizace", "vnitřní odpady, ležatá kanalizace, napojení dřezu, myčky, WC"],
  ["Čištění odpadů", "ucpaný odpad, revize a kamerová prohlídka potrubí"],
  ["Bojlery a ohřev vody", "montáž a výměna bojlerů"],
  ["Koupelny a sanita", "technická část: moduly pro závěsné WC, umyvadla, sprchy, baterie"],
];

const topeni = [
  ["Podlahové topení", "kladení na systémové desky, rozdělovače, napojení"],
  ["Rozvody topení", "nové trasy v drážce, pod stropem i v podlaze"],
  ["Radiátory", "výměna a montáž nových, v domech i v panelových bytech"],
  ["Napojení zdroje", "připojení kotle nebo jiného zdroje tepla na rozvody"],
];

function Sluzby({ nadpis, href, odkaz, polozky }: { nadpis: string; href: string; odkaz: string; polozky: string[][] }) {
  return (
    <div>
      <h3 className="font-display text-2xl font-bold sm:text-3xl">{nadpis}</h3>
      <dl className="mt-6 border-t border-ink/15">
        {polozky.map(([co, popis]) => (
          <div key={co} className="grid gap-1 border-b border-ink/15 py-4 sm:grid-cols-[11rem_1fr] sm:gap-6">
            <dt className="font-semibold">{co}</dt>
            <dd className="text-muted">{popis}</dd>
          </div>
        ))}
      </dl>
      <Link href={href} className="mt-6 inline-block font-semibold text-red underline underline-offset-4 hover:text-red-dark">
        {odkaz}
      </Link>
    </div>
  );
}

export default function Home() {
  const hero = fotky.rozvodyRoh;
  return (
    <>
      <section className="mx-auto grid max-w-6xl gap-10 px-5 pt-10 pb-6 sm:px-8 md:pt-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        <div className="min-w-0 lg:pt-8">
          <h1 className="font-display text-[2.6rem] leading-[1.02] font-bold tracking-tight text-balance sm:text-6xl lg:text-[4.1rem]">
            Instalatér a topenář pro Plzeň a okolí
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted sm:text-xl">
            Rozvody vody, topení a odpadů v rodinných domech, bytech i větších objektech. Podlahové topení, radiátory,
            kanalizace. Řemeslo dělám přes 15 let, velkou část z toho v Německu.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-x-8 gap-y-4">
            <a
              href={firma.telHref}
              className="rounded-sm bg-red px-6 py-4 font-display text-lg font-bold text-white hover:bg-red-dark"
            >
              Zavolat {firma.tel}
            </a>
            <a href={`mailto:${firma.email}`} className="font-semibold underline underline-offset-4 hover:text-red">
              Napsat e-mail
            </a>
          </div>
          <p className="mt-10 max-w-md text-sm text-muted">
            Sídlo ve Zbůchu, jezdím po celém Plzeňském kraji. Vodoinstalace, kanalizace, topení a čištění odpadů.
          </p>
        </div>
        <figure className="min-w-0">
          <Image
            src={hero.src}
            alt={hero.alt}
            width={hero.w}
            height={hero.h}
            priority
            sizes="(min-width: 1024px) 460px, 100vw"
            className="aspect-[4/5] w-full object-cover sm:aspect-[4/3] lg:aspect-[4/5]"
          />
          <figcaption className="mt-3 text-sm text-muted">
            {hero.popis}. Všechny fotky na webu jsou z mých zakázek.
          </figcaption>
        </figure>
      </section>

      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Rozvod className="ml-[8%] w-[70%] lg:w-[58%]" spad="4.5rem" />
      </div>

      <section className="mx-auto max-w-6xl px-5 pt-4 pb-20 sm:px-8 md:pb-28">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end lg:gap-14">
          <div className="lg:pb-4">
            <h2 className="font-display text-3xl leading-tight font-bold text-balance sm:text-4xl">
              Nejdůležitější část práce skončí ve zdi
            </h2>
            <p className="mt-5 text-lg text-muted">
              Trubky pod omítkou nebo v podlaze už nikdo neuvidí, ale vy s nimi budete bydlet desítky let. Proto je
              vedu souběžně, v pravých úhlech a pořádně ukotvené. Na fotkách je vidět, jak to vypadá, než se to zazdí.
            </p>
            <Link href="/zakazky" className="mt-6 inline-block font-semibold text-red underline underline-offset-4 hover:text-red-dark">
              Fotky ze zakázek
            </Link>
          </div>
          <figure>
            <Image
              src={fotky.rozvodyStena.src}
              alt={fotky.rozvodyStena.alt}
              width={fotky.rozvodyStena.w}
              height={fotky.rozvodyStena.h}
              sizes="(min-width: 1024px) 660px, 100vw"
              className="w-full"
            />
            <figcaption className="mt-3 text-sm text-muted">{fotky.rozvodyStena.popis}</figcaption>
          </figure>
        </div>
      </section>

      <section className="bg-plaster">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 md:py-24">
          <h2 className="max-w-2xl font-display text-3xl leading-tight font-bold sm:text-4xl">Co pro vás udělám</h2>
          <div className="mt-12 grid gap-16 lg:grid-cols-2 lg:gap-0 lg:divide-x lg:divide-ink/15">
            <div className="lg:pr-12">
              <Sluzby
                nadpis="Voda, odpady a kanalizace"
                href="/instalater-plzen"
                odkaz="Instalatérské práce podrobně"
                polozky={voda}
              />
            </div>
            <div className="lg:pl-12">
              <Sluzby nadpis="Topení" href="/topenar-plzen" odkaz="Topenářské práce podrobně" polozky={topeni} />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8 md:py-28">
        <div className="grid gap-4 sm:grid-cols-[1.4fr_1fr]">
          <Image
            src={fotky.podlahovkaPokoj.src}
            alt={fotky.podlahovkaPokoj.alt}
            width={fotky.podlahovkaPokoj.w}
            height={fotky.podlahovkaPokoj.h}
            sizes="(min-width: 640px) 640px, 100vw"
            className="aspect-[4/3] w-full object-cover sm:aspect-auto sm:h-full"
          />
          <Image
            src={fotky.podlahovkaObyvak.src}
            alt={fotky.podlahovkaObyvak.alt}
            width={fotky.podlahovkaObyvak.w}
            height={fotky.podlahovkaObyvak.h}
            sizes="(min-width: 640px) 450px, 100vw"
            className="hidden h-full w-full object-cover sm:block"
          />
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-[1fr_1.2fr] md:gap-14">
          <h2 className="font-display text-3xl leading-tight font-bold sm:text-4xl">Podlahové topení od desky po rozdělovač</h2>
          <p className="text-lg text-muted">
            Pravidelná rozteč smyček a okrajový pásek u každé stěny, aby podlaha pak hřála rovnoměrně. Dělám celá
            přízemí domů i jednotlivé koupelny při rekonstrukci.{" "}
            <Link href="/topenar-plzen" className="font-semibold text-red underline underline-offset-4 hover:text-red-dark">
              Topení a podlahovky
            </Link>
          </p>
        </div>
      </section>

      <section className="border-t border-line">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 md:py-24">
          <h2 className="font-display text-3xl font-bold sm:text-4xl">Co říkají zákazníci</h2>
          <div className="mt-10 grid gap-12 md:grid-cols-2">
            {reference.map((r) => (
              <figure key={r.jmeno} className="border-l-[5px] border-logo-red pl-6">
                <blockquote className="text-xl leading-snug font-medium text-balance sm:text-2xl">„{r.text}“</blockquote>
                <figcaption className="mt-4 text-muted">
                  {r.jmeno}, {r.zakazka}, {r.misto}, {r.datum}
                </figcaption>
              </figure>
            ))}
          </div>
          <p className="mt-10 text-sm text-muted">
            Hodnocení z poptávkového serveru Poptávej.cz, kde mám 100 % za kvalitu, komunikaci i poměr ceny a výkonu.
          </p>
        </div>
      </section>

      <section className="bg-plaster">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 sm:px-8 md:grid-cols-[1.2fr_1fr] md:gap-16 md:py-24">
          <div>
            <h2 className="font-display text-3xl leading-tight font-bold sm:text-4xl">Jaro TopInstal ze Zbůchu</h2>
            <p className="mt-5 text-lg">
              Firmu jsem založil v roce 2025, ale instalatérské a topenářské práci se věnuji přes 15 let. Velkou část té
              doby jsem pracoval v Německu, kde se na pořádek na stavbě a přesnost hodně dbá. Zakázky beru po Plzni a
              v celém kraji, od výměny baterie po rozvody celého domu.
            </p>
            <p className="mt-4 text-muted">
              V září 2026 jsem absolvoval školení ENBRA Měření vody a tepla a ČMI Metrologický systém ČR.{" "}
              <Link href="/kontakt" className="underline underline-offset-4 hover:text-red">
                Kontakt a údaje o firmě
              </Link>
            </p>
          </div>
          <div>
            <h3 className="font-display text-xl font-bold">Kam jezdím</h3>
            <ul className="mt-4 border-t border-ink/15">
              {pusobnost.map((o) => (
                <li key={o} className="border-b border-ink/15 py-2.5">
                  {o === "Plzeň-město" ? "Plzeň" : `okres ${o}`}
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
