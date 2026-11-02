import type { Metadata } from "next";
import { KontaktPas } from "@/components/Chrome";
import { Galerie } from "@/components/Galerie";
import { HlavickaStranky } from "@/components/Podstranka";
import { fotky, type Foto } from "@/lib/site";

export const metadata: Metadata = {
  title: "Zakázky: fotky z rozvodů vody, topení a kanalizace",
  description:
    "Fotky z vlastních zakázek Jaro TopInstal: rozvody vody a topení při rekonstrukci, podlahové topení, výměna radiátorů a kanalizace ve větším objektu. Plzeň a okolí.",
  alternates: { canonical: "/zakazky" },
};

const skupiny: { nadpis: string; text: string; fotky: Foto[] }[] = [
  {
    nadpis: "Rozvody vody a topení při rekonstrukci domu",
    text: "Nové trasy pod stropem, v rozích a v podlaze. Souběh trubek v objímkách, než přijde omítka.",
    fotky: [
      fotky.rozvodyStenaNaradi,
      fotky.rozvodyDetail,
      fotky.rozvodyPodStropem,
      fotky.rozvodPodelOkna,
      fotky.rozvodyChodba,
      fotky.rozvodyKoupelnaPodlaha,
    ],
  },
  {
    nadpis: "Podlahové topení",
    text: "Celé přízemí rodinného domu i malá koupelna.",
    fotky: [
      fotky.podlahovkaPokoj,
      fotky.podlahovkaObyvak,
      fotky.podlahovkaDum,
      fotky.podlahovkaCelek,
      fotky.podlahovkaKoupelna,
    ],
  },
  {
    nadpis: "Radiátory a pokoje po dokončení",
    text: "Rozvody v drážce, nové radiátory a pokoje, když už je hotovo.",
    fotky: [
      fotky.radiatorRozvodVeZdi,
      fotky.radiatorNapojeni,
      fotky.radiatorPodOknem,
      fotky.radiatorDrazka,
      fotky.pokojHotovo,
      fotky.pokojHotovo2,
      fotky.radiatorPanelak,
      fotky.radiatorPanelak2,
    ],
  },
  {
    nadpis: "Kanalizace a rozvody ve větším objektu",
    text: "Ležaté potrubí, stoupačky a prostupy zdmi.",
    fotky: [
      fotky.kanalizaceHlavni,
      fotky.kanalizacePodelZdi,
      fotky.kanalizaceOdbocky,
      fotky.kanalizaceSouber,
      fotky.kanalizaceStoupacka,
      fotky.kanalizaceRoh,
      fotky.rozvodyObjekt,
      fotky.kanalizaceDetail,
      fotky.rozvodyObjektRoh,
    ],
  },
  {
    nadpis: "Koupelna před obkladem",
    text: "Odkryté staré rozvody a nový modul pro závěsné WC.",
    fotky: [fotky.koupelnaBourani, fotky.wcGeberit],
  },
];

export default function Zakazky() {
  return (
    <>
      <HlavickaStranky
        drobek={{ href: "/zakazky", label: "Zakázky" }}
        nadpis="Fotky ze zakázek"
        foto={fotky.rozvodyStenaNaradi}
        focus="50% 40%"
        perex={
          <p>
            Žádné fotky z fotobanky. Všechno, co tu vidíte, jsou moje zakázky, většinou ve fázi, kdy jsou rozvody ještě
            vidět. Kliknutím se fotka zvětší.
          </p>
        }
      />
      {skupiny.map((s, n) => (
        <section key={s.nadpis} className={n % 2 === 0 ? "border-t border-line" : "bg-plaster"}>
          <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 md:py-20">
            <div className="mb-10 grid gap-3 md:grid-cols-[1fr_1fr] md:items-end md:gap-14">
              <h2 className="font-display text-2xl leading-tight font-bold sm:text-3xl">{s.nadpis}</h2>
              <p className="text-muted">{s.text}</p>
            </div>
            <Galerie fotky={s.fotky} />
          </div>
        </section>
      ))}
      <KontaktPas />
    </>
  );
}
