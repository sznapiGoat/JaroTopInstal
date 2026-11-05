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

const skupiny: { id: string; kratce: string; nadpis: string; text: string; fotky: Foto[] }[] = [
  {
    id: "rozvody",
    kratce: "Rozvody",
    nadpis: "Rozvody vody a topení při rekonstrukci domu",
    text: "Nové trasy pod stropem, v rozích a v podlaze. Souběh trubek v objímkách, než přijde omítka.",
    fotky: [
      fotky.rozvodyPodStropem,
      fotky.rozvodyDetail,
      fotky.rozvodyStenaNaradi,
      fotky.rozvodPodelOkna,
      fotky.rozvodyChodba,
      fotky.rozvodyKoupelnaPodlaha,
    ],
  },
  {
    id: "podlahove-topeni",
    kratce: "Podlahové topení",
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
    id: "radiatory",
    kratce: "Radiátory",
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
    id: "kanalizace",
    kratce: "Kanalizace",
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
    id: "koupelna",
    kratce: "Koupelna",
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
            Moje zakázky, většinou ve fázi, kdy jsou rozvody ještě
            vidět. Kliknutím se fotka zvětší.
          </p>
        }
      />
      <nav aria-label="Skupiny zakázek" className="sticky top-[4.25rem] z-10 bg-paper/95 backdrop-blur-sm">
        <ul className="no-scrollbar mx-auto flex max-w-6xl gap-2 overflow-x-auto px-5 py-3 sm:px-8">
          {skupiny.map((s) => (
            <li key={s.id} className="shrink-0">
              <a
                href={`#${s.id}`}
                className="block rounded-full bg-plaster px-4 py-2 text-[0.9375rem] font-semibold whitespace-nowrap hover:bg-ink hover:text-white"
              >
                {s.kratce}
                <span className="ml-2 text-muted">{s.fotky.length}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
      {skupiny.map((s, n) => (
        <section
          key={s.id}
          id={s.id}
          className={`scroll-mt-36 ${n % 2 === 0 ? "" : "bg-plaster"} ${n === 0 ? "" : "border-t border-line"}`}
        >
          <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 md:py-20">
            <h2 className="font-display text-2xl leading-tight font-extrabold tracking-tight sm:text-3xl">{s.nadpis}</h2>
            <p className="mt-3 max-w-2xl text-muted">{s.text}</p>
            <div className="mt-10">
              <Galerie fotky={s.fotky} mozaika={s.fotky.length >= 5} />
            </div>
          </div>
        </section>
      ))}
      <KontaktPas />
    </>
  );
}
