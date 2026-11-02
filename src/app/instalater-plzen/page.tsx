import type { Metadata } from "next";
import Link from "next/link";
import { KontaktPas } from "@/components/Chrome";
import { Galerie } from "@/components/Galerie";
import { Faq, HlavickaStranky, TabulkaSluzeb, type Otazka } from "@/components/Podstranka";
import { fotky } from "@/lib/site";

export const metadata: Metadata = {
  title: "Instalatér Plzeň: rozvody vody, odpady, kanalizace",
  description:
    "Instalatér pro Plzeň a okolí: nové rozvody vody, odpady a kanalizace, čištění odpadů, bojlery, technická instalace koupelen a drobné opravy. Jaro TopInstal, tel. 722 909 605.",
  alternates: { canonical: "/instalater-plzen" },
};

const sluzby: [string, string][] = [
  [
    "Rozvody vody",
    "Nové rozvody studené a teplé vody v bytě i v rodinném domě. Při rekonstrukci vyměním staré trubky a vedu nové trasy v drážce nebo v podlaze.",
  ],
  [
    "Odpady a kanalizace",
    "Vnitřní odpady, stoupačky a ležatá kanalizace, i ve větších objektech. Napojení kuchyně, koupelny a WC na stávající nebo novou kanalizaci.",
  ],
  [
    "Čištění odpadů",
    "Ucpaný dřez, umyvadlo nebo WC. Revize a kamerová prohlídka potrubí, když je potřeba zjistit, kde je problém.",
  ],
  ["Bojlery a ohřev vody", "Montáž nového bojleru, výměna starého a napojení na rozvody."],
  [
    "Koupelny a sanita",
    "Technická část koupelny: předstěnové moduly pro závěsné WC, přívody a odpady k umyvadlu, sprše a vaně, montáž baterií a sanity.",
  ],
  ["Drobné práce", "Zapojení dřezu a myčky, výměna WC mísy, kapající baterie. I malou zakázku vezmu."],
];

const otazky: Otazka[] = [
  {
    q: "Jezdíte i mimo Plzeň?",
    a: "Ano. Sídlo mám ve Zbůchu a jezdím po celém Plzeňském kraji: Plzeň-sever, Plzeň-jih, Rokycany, Tachov, Domažlice a Klatovy.",
  },
  {
    q: "Vezmete i malou zakázku, třeba zapojení myčky?",
    a: "Ano. Jedna z hodnocených zakázek na Poptávej.cz bylo právě zapojení odpadu pod dřezem a myčky v Doubravce.",
  },
  {
    q: "Uděláte celou koupelnu?",
    a: "Dělám technickou část: rozvody vody, odpady, modul pro závěsné WC a napojení sanity. Obklady a dlažbu dělá obkladač.",
  },
  {
    q: "Kolik to bude stát?",
    a: "Záleží na rozsahu. Po telefonu nebo podle fotek řeknu orientační cenu, přesnou po prohlídce na místě.",
  },
];

export default function InstalaterPlzen() {
  return (
    <>
      <HlavickaStranky
        drobek={{ href: "/instalater-plzen", label: "Voda a odpady" }}
        nadpis="Instalatér Plzeň: voda, odpady a kanalizace"
        perex={
          <p>
            Od zapojení myčky po kompletní rozvody vody a kanalizace v domě. Pracuji v Plzni a po celém kraji, v
            rodinných domech, bytech i větších objektech.
          </p>
        }
        foto={fotky.kanalizaceSouber}
        focus="40% 60%"
      />

      <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8 md:py-24">
        <h2 className="mb-8 font-display text-3xl font-bold sm:text-4xl">Co dělám</h2>
        <TabulkaSluzeb radky={sluzby} />
      </section>

      <section className="bg-plaster">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 md:py-24">
          <div className="max-w-2xl">
            <h2 className="font-display text-3xl leading-tight font-bold sm:text-4xl">Kanalizace ve větším objektu</h2>
            <p className="mt-5 text-lg text-muted">
              Nové ležaté potrubí podél zdí, stoupačky v drážkách a prostupy zdmi. Takhle to vypadá, než se podlaha
              zalije a drážky zapraví.
            </p>
          </div>
          <div className="mt-12">
            <Galerie
              fotky={[
                fotky.kanalizacePodelZdi,
                fotky.kanalizaceOdbocky,
                fotky.kanalizaceStoupacka,
                fotky.kanalizaceDetail,
                fotky.rozvodyObjekt,
                fotky.kanalizaceRoh,
              ]}
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8 md:py-24">
        <div className="grid gap-10 md:grid-cols-[1.2fr_1fr] md:gap-14">
          <div>
            <h2 className="font-display text-3xl leading-tight font-bold sm:text-4xl">Koupelna před obkladem</h2>
            <p className="mt-5 text-lg text-muted">
              Při rekonstrukci koupelny se nejdřív odkryje podlaha a staré rozvody. Pak přijde nový odpad, přívody a
              modul pro závěsné WC. Teprve potom jde na řadu obkladač.
            </p>
            <p className="mt-5 text-lg">
              Topení v koupelně, radiátor nebo podlahovku, udělám ve stejném termínu.{" "}
              <Link href="/topenar-plzen" className="font-semibold text-red underline underline-offset-4 hover:text-red-dark">
                Topení
              </Link>
            </p>
          </div>
          <Galerie fotky={[fotky.koupelnaBourani, fotky.wcGeberit]} sloupce="grid-cols-2" pomer="aspect-[3/4]" />
        </div>
      </section>

      <Faq otazky={otazky} />
      <KontaktPas nadpis="Teče, kape, neodtéká? Zavolejte." />
    </>
  );
}
