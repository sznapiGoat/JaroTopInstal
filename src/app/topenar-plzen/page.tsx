import type { Metadata } from "next";
import Image from "next/image";
import { KontaktPas } from "@/components/Chrome";
import { Galerie } from "@/components/Galerie";
import { Faq, HlavickaStranky, TabulkaSluzeb, type Otazka } from "@/components/Podstranka";
import { fotky } from "@/lib/site";

export const metadata: Metadata = {
  title: "Topenář Plzeň: podlahové topení, radiátory, rozvody",
  description:
    "Topenář pro Plzeň a okolí: podlahové topení, nové rozvody topení, výměna radiátorů a napojení zdroje tepla. Rodinné domy, byty i panelové domy. Jaro TopInstal, tel. 722 909 605.",
  alternates: { canonical: "/topenar-plzen" },
};

const sluzby: [string, string][] = [
  [
    "Podlahové topení",
    "Kladení trubek na systémové desky s okrajovým páskem, rozdělovač, napojení. Celá přízemí i jednotlivé koupelny.",
  ],
  [
    "Rozvody topení",
    "Nové trasy při rekonstrukci domu nebo bytu: v drážce ve zdi, pod stropem nebo v podlaze.",
  ],
  ["Radiátory", "Výměna starých litinových i plechových radiátorů za nové, montáž radiátorů do nových místností."],
  ["Napojení zdroje tepla", "Připojení kotle nebo jiného zdroje na nové či stávající rozvody."],
];

const postup = [
  ["Prohlídka", "Podívám se na dům nebo byt, na stávající rozvody a zdroj a domluvíme rozsah."],
  ["Trasy a materiál", "Navrhnu, kudy rozvody povedou, a připravím materiál."],
  ["Montáž", "Drážky, rozvody, radiátory nebo podlahovka. Na konci dne po sobě uklidím."],
  ["Tlaková zkouška", "Než se cokoliv zazdí nebo zalije, systém natlakuji a zkontroluji těsnost."],
  ["Napojení a předání", "Napojení na zdroj, napuštění, odvzdušnění a vyzkoušení celé soustavy."],
];

const otazky: Otazka[] = [
  {
    q: "Jde podlahové topení udělat i ve starším domě?",
    a: "Často ano, záleží na skladbě podlahy a na tom, o kolik ji můžete zvýšit. Posoudím to při prohlídce na místě.",
  },
  {
    q: "Musí se kvůli novým radiátorům bourat?",
    a: "Když stávající rozvody vyhovují, vyměním jen radiátory a připojení. Když jsou staré, vedu nové trasy v drážce, jako na fotkách níže.",
  },
  {
    q: "Pracujete i v panelových domech?",
    a: "Ano, radiátory v panelových bytech měním a napojuji na stávající stoupačky.",
  },
  {
    q: "Jezdíte i mimo Plzeň?",
    a: "Ano. Sídlo mám ve Zbůchu a jezdím po celém Plzeňském kraji: Plzeň-sever, Plzeň-jih, Rokycany, Tachov, Domažlice a Klatovy.",
  },
];

export default function TopenarPlzen() {
  return (
    <>
      <HlavickaStranky
        drobek={{ href: "/topenar-plzen", label: "Topení" }}
        nadpis="Topenář Plzeň: podlahové topení, radiátory a rozvody"
        perex={
          <p>
            Nové topení při rekonstrukci i v novostavbě. Rozvody vedu souběžně a v pravých úhlech, ať jsou ve zdi, pod
            stropem nebo v podlaze.
          </p>
        }
        foto={fotky.podlahovkaDum}
        focus="50% 75%"
      />

      <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8 md:py-24">
        <h2 className="mb-8 font-display text-3xl font-bold sm:text-4xl">Co dělám</h2>
        <TabulkaSluzeb radky={sluzby} />
      </section>

      <section className="bg-plaster">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 md:py-24">
          <div className="max-w-2xl">
            <h2 className="font-display text-3xl leading-tight font-bold sm:text-4xl">Podlahové topení</h2>
            <p className="mt-5 text-lg text-muted">
              Smyčky kladené do šneku s pravidelnou roztečí, aby podlaha hřála rovnoměrně od okna po dveře. Na fotkách
              přízemí rodinného domu a malá koupelna.
            </p>
          </div>
          <div className="mt-12 grid gap-4 md:grid-cols-[1.5fr_1fr]">
            <Image
              src={fotky.podlahovkaCelek.src}
              alt={fotky.podlahovkaCelek.alt}
              width={fotky.podlahovkaCelek.w}
              height={fotky.podlahovkaCelek.h}
              sizes="(min-width: 768px) 660px, 100vw"
              className="aspect-[4/3] w-full object-cover md:aspect-auto md:h-full"
            />
            <div className="grid grid-cols-2 gap-4 md:grid-cols-1">
              <Image
                src={fotky.podlahovkaKoupelna.src}
                alt={fotky.podlahovkaKoupelna.alt}
                width={fotky.podlahovkaKoupelna.w}
                height={fotky.podlahovkaKoupelna.h}
                sizes="(min-width: 768px) 440px, 50vw"
                className="aspect-[4/3] w-full object-cover"
              />
              <Image
                src={fotky.podlahovkaObyvak.src}
                alt={fotky.podlahovkaObyvak.alt}
                width={fotky.podlahovkaObyvak.w}
                height={fotky.podlahovkaObyvak.h}
                sizes="(min-width: 768px) 440px, 50vw"
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8 md:py-28">
        <div className="grid gap-12 md:grid-cols-[0.8fr_1.2fr] md:gap-14">
          <div>
            <h2 className="font-display text-3xl leading-tight font-bold sm:text-4xl">Jak práce probíhá</h2>
            <p className="mt-5 text-lg text-muted">Od první prohlídky po teplý radiátor.</p>
          </div>
          <ol className="relative">
            <span aria-hidden className="absolute top-2 bottom-2 left-0 w-[5px] rounded-full bg-logo-red" />
            <span aria-hidden className="absolute top-2 bottom-2 left-3 w-[5px] rounded-full bg-pipe-blue" />
            {postup.map(([krok, popis]) => (
              <li key={krok} className="pb-9 pl-12 last:pb-0">
                <h3 className="font-display text-xl font-bold">{krok}</h3>
                <p className="mt-1.5 text-muted">{popis}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-plaster">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 md:py-24">
          <div className="max-w-2xl">
            <h2 className="font-display text-3xl leading-tight font-bold sm:text-4xl">Nové radiátory a rozvody</h2>
            <p className="mt-5 text-lg text-muted">
              Výměna radiátorů v rodinném domě a v panelovém bytě. Trasy v drážce se po zapravení ztratí, zůstane jen
              radiátor pod oknem.
            </p>
          </div>
          <div className="mt-12">
            <Galerie
              fotky={[
                fotky.radiatorRozvodVeZdi,
                fotky.radiatorDrazka,
                fotky.radiatorPodOknem,
                fotky.radiatorPanelak,
                fotky.radiatorPanelak2,
                fotky.pokojHotovo,
              ]}
            />
          </div>
        </div>
      </section>

      <Faq otazky={otazky} />
      <KontaktPas nadpis="Plánujete nové topení? Probereme to po telefonu." />
    </>
  );
}
