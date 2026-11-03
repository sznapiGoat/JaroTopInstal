export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://jarotopinstal.vercel.app";

export const firma = {
  nazev: "Jaro TopInstal",
  pravniNazev: "Jaro TopInstal s.r.o.",
  jednatel: "pan Hašek",
  tel: "722 909 605",
  telHref: "tel:+420722909605",
  telE164: "+420722909605",
  email: "jaro.topinstal@gmail.com",
  ulice: "U Vlečky 372",
  psc: "330 22",
  obec: "Zbůch",
  ico: "23388901",
  dic: "CZ23388901",
  facebook: "https://www.facebook.com/p/Jaro-TopInstal-61580865513594/",
  mapa: "https://mapy.cz/zakladni?q=U%20Vle%C4%8Dky%20372%2C%20Zb%C5%AFch",
};

export const navigace = [
  { href: "/instalater-plzen", label: "Voda a odpady" },
  { href: "/topenar-plzen", label: "Topení" },
  { href: "/zakazky", label: "Zakázky" },
  { href: "/kontakt", label: "Kontakt" },
];

export const pusobnost = [
  "Plzeň-město",
  "Plzeň-sever",
  "Plzeň-jih",
  "Rokycany",
  "Tachov",
  "Domažlice",
  "Klatovy",
];

export const reference = [
  {
    text: "S panem Haškem jsem se domluvil na rychlý termín, práce provedeny precizně a velké plus je, jak dbá na čistotu.",
    jmeno: "Jakub M.",
    zakazka: "zapojení odpadu pod dřezem a myčky",
    misto: "Plzeň-Doubravka",
    datum: "prosinec 2025",
  },
  {
    text: "Maximální spokojenost. Rychlá reakce na poptávku a rychlé řešení.",
    jmeno: "Petr K.",
    zakazka: "instalace WC mísy v rodinném domě",
    misto: "Kozolupy",
    datum: "září 2025",
  },
];

export type Foto = { src: string; w: number; h: number; alt: string; popis: string };

const na = (w: number, h: number) => ({ w, h });
const L = na(1600, 1200);
const P = na(1200, 1600);

export const fotky = {
  rozvodyRoh: {
    src: "/foto/rozvody-roh.jpg", ...P,
    alt: "Červené a modré izolované trubky vedené souběžně po stěně a do rohu místnosti, uprostřed stěny zapuštěná krabice",
    popis: "Nové rozvody při rekonstrukci domu, ještě před omítkou",
  },
  rozvodyStena: {
    src: "/foto/rozvody-stena.jpg", ...L,
    alt: "Celá stěna místnosti s novými červenými a modrými rozvody pod stropem a svislými odbočkami, na podlaze nářadí a krabice s materiálem",
    popis: "Rozvody vody a topení vedené pod stropem",
  },
  rozvodyStenaNaradi: {
    src: "/foto/rozvody-stena-naradi.jpg", ...L,
    alt: "Stěna s červenými a modrými rozvody, v popředí kufry s nářadím a role trubek",
    popis: "Rozvody během montáže",
  },
  rozvodyDetail: {
    src: "/foto/rozvody-detail.jpg", ...P,
    alt: "Souběžné červené a modré trubky připevněné objímkami ke stěně vedle dveřní zárubně",
    popis: "Souběh trubek v objímkách",
  },
  rozvodyPodStropem: {
    src: "/foto/rozvody-pod-stropem.jpg", ...L,
    alt: "Prázdná místnost s červenou a modrou trubkou vedenou těsně pod stropem a dolů v rohu",
    popis: "Trasa pod stropem a svod v rohu",
  },
  rozvodPodelOkna: {
    src: "/foto/rozvod-podel-okna.jpg", ...P,
    alt: "Svislá drážka ve zdi vedle okna s červenou a modrou trubkou, dole napojený radiátor",
    popis: "Svislé stoupání v drážce u okna",
  },
  rozvodyChodba: {
    src: "/foto/rozvody-chodba.jpg", ...P,
    alt: "Úzká chodba s dlažbou, podél stěny vedou v drážce v podlaze červené a modré trubky",
    popis: "Rozvody v podlaze chodby",
  },
  rozvodyKoupelnaPodlaha: {
    src: "/foto/rozvody-koupelna-podlaha.jpg", ...P,
    alt: "Koupelna s vanou a dlažbou, podél stěny v podlaze uložené červené a modré trubky",
    popis: "Nové rozvody v koupelně, dlažba zůstala",
  },
  podlahovkaDum: {
    src: "/foto/podlahovka-dum-prizemi.jpg", ...L,
    alt: "Velká místnost v přízemí rodinného domu s hrubými betonovými stěnami, celá podlaha pokrytá systémovou deskou s položenými smyčkami podlahového topení",
    popis: "Podlahové topení v celém přízemí",
  },
  podlahovkaKoupelna: {
    src: "/foto/podlahovka-koupelna.jpg", ...L,
    alt: "Pohled shora do malé koupelny s obkladem, na podlaze spirála trubky podlahového topení v systémové desce",
    popis: "Podlahovka v malé koupelně",
  },
  podlahovkaObyvak: {
    src: "/foto/podlahovka-obyvak.jpg", ...P,
    alt: "Místnost s francouzským oknem, podlaha pokrytá šedou systémovou deskou se smyčkami podlahového topení",
    popis: "Smyčky kladené do šneku",
  },
  podlahovkaPokoj: {
    src: "/foto/podlahovka-pokoj.jpg", ...L,
    alt: "Pokoj s betonovými stěnami, podlahové topení položené v pravidelné spirále až ke stěnám s okrajovým páskem",
    popis: "Pravidelná rozteč až ke stěně",
  },
  podlahovkaCelek: {
    src: "/foto/podlahovka-celek.jpg", ...L,
    alt: "Přízemí rozestavěného domu se schodištěm v pozadí, podlaha celá pokrytá trubkami podlahového topení, v popředí zbytek role trubky",
    popis: "Přízemí rodinného domu před zalitím",
  },
  radiatorRozvodVeZdi: {
    src: "/foto/radiator-rozvod-ve-zdi.jpg", ...L,
    alt: "Nový deskový radiátor pod oknem, k němu vede vodorovná drážka ve zdi s červenou a modrou trubkou",
    popis: "Napojení radiátoru z drážky",
  },
  radiatorNapojeni: {
    src: "/foto/radiator-napojeni.jpg", ...L,
    alt: "Detail drážky ve zdi, kde červená a modrá trubka stoupají v pravém úhlu k přípojce bílého radiátoru",
    popis: "Přípojka radiátoru před zapravením",
  },
  radiatorPodOknem: {
    src: "/foto/radiator-pod-oknem.jpg", ...L,
    alt: "Pokoj bez podlahové krytiny, pod oknem nový radiátor a podél stěny drážka s rozvody",
    popis: "Nový radiátor a vodorovná trasa",
  },
  radiatorDrazka: {
    src: "/foto/radiator-drazka.jpg", ...L,
    alt: "Drážka v omítce podél podlahy s trubkami, které stoupají k novému radiátoru pod oknem",
    popis: "Trasa k radiátoru v drážce",
  },
  pokojHotovo: {
    src: "/foto/pokoj-hotovo.jpg", ...L,
    alt: "Hotový pokoj s laminátovou podlahou, bílými stěnami a radiátorem pod oknem se záclonou",
    popis: "Pokoj po dokončení",
  },
  pokojHotovo2: {
    src: "/foto/pokoj-hotovo-2.jpg", ...L,
    alt: "Hotový světlý pokoj s radiátorem pod oknem a novou podlahou, na zemi ještě vodováha a nářadí",
    popis: "Hotovo, zbývá uklidit nářadí",
  },
  radiatorPanelak: {
    src: "/foto/radiator-panelak.jpg", ...L,
    alt: "Nový radiátor s ochrannými rohy z kartonu pod oknem bytu v panelovém domě, kolem nářadí",
    popis: "Výměna radiátoru v panelovém bytě",
  },
  radiatorPanelak2: {
    src: "/foto/radiator-panelak-2.jpg", ...L,
    alt: "Radiátor ještě v ochranném obalu pověšený pod oknem bytu, napojený na stoupačku",
    popis: "Napojení na stoupačku",
  },
  wcGeberit: {
    src: "/foto/wc-geberit-moduly.jpg", ...P,
    alt: "Předstěnový instalační modul Geberit pro závěsné WC v koupelně s modrým obkladem, pod ním napojený odpad",
    popis: "Modul pro závěsné WC a nový odpad",
  },
  koupelnaBourani: {
    src: "/foto/koupelna-bourani.jpg", ...P,
    alt: "Koupelna s modrým obkladem během bourání, v podlaze odkryté staré trubky a odpad, vedle radiátor",
    popis: "Původní rozvody po odkrytí podlahy",
  },
  kanalizaceHlavni: {
    src: "/foto/kanalizace-hlavni-rad.jpg", ...L,
    alt: "Nové šedé kanalizační potrubí vedené podél zdi na betonové podlaze ve větším objektu",
    popis: "Ležatá kanalizace podél zdi",
  },
  kanalizacePodelZdi: {
    src: "/foto/kanalizace-podel-zdi.jpg", ...P,
    alt: "Šedé kanalizační potrubí s kolenem uložené u paty zdi z cihel",
    popis: "Napojení svodu u paty zdi",
  },
  kanalizaceOdbocky: {
    src: "/foto/kanalizace-odbocky.jpg", ...L,
    alt: "Svazek nových šedých trubek s odbočkami vedený u cihlové zdi, vedle cihla a nářadí",
    popis: "Souběh odpadu a přívodů",
  },
  kanalizaceSouber: {
    src: "/foto/kanalizace-souber.jpg", ...L,
    alt: "Dlouhá místnost s několika souběžnými šedými trubkami podél stěny, v pozadí nářadí a pytle s materiálem",
    popis: "Několik tras v jednom souběhu",
  },
  kanalizaceStoupacka: {
    src: "/foto/kanalizace-stoupacka.jpg", ...P,
    alt: "Svislá drážka v rohu chodby s novým potrubím a oranžovými tvarovkami u podlahy",
    popis: "Stoupací potrubí v rohu",
  },
  kanalizaceRoh: {
    src: "/foto/kanalizace-roh.jpg", ...P,
    alt: "Roh místnosti s vybouranou drážkou, šedé trubky a oranžové kolena položené u podlahy",
    popis: "Rozvody v rohu před zazděním",
  },
  rozvodyObjekt: {
    src: "/foto/rozvody-objekt.jpg", ...L,
    alt: "Místnost ve větším objektu se souběhem šedých a bílých trubek v podlaze u zdi, okolo nářadí a pytle",
    popis: "Rozvody ve větším objektu",
  },
  kanalizaceDetail: {
    src: "/foto/kanalizace-detail-odbocky.jpg", ...P,
    alt: "Detail průrazu ve zdi s šedou kanalizační trubkou a bílými plastovými trubkami s kolenem",
    popis: "Detail prostupu zdí",
  },
  rozvodyObjektRoh: {
    src: "/foto/rozvody-objekt-roh.jpg", ...P,
    alt: "Svazek trubek ohnutý v pravém úhlu v rohu místnosti u podlahy, vedle desky izolace a vrtací kladivo",
    popis: "Trasa v rohu, připravená na izolaci",
  },
} satisfies Record<string, Foto>;
