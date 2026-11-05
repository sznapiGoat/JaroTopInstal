import Image from "next/image";
import Link from "next/link";
import { firma, navigace } from "@/lib/site";
export { Header } from "./NavLink";

export function KontaktPas({
  nadpis = "Popište, co potřebujete, a domluvíme termín",
  text = "Nejrychlejší je zavolat. Když to nevezmu, jsem nejspíš na stavbě a ozvu se zpátky.",
}: {
  nadpis?: string;
  text?: string;
}) {
  return (
    <section className="bg-plaster">
      <div className="mx-auto max-w-3xl px-5 py-20 text-center sm:px-8 md:py-24">
        <h2 className="font-display text-3xl leading-tight font-extrabold tracking-tight text-balance sm:text-4xl">
          {nadpis}
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-lg text-muted">{text}</p>
        <a
          href={firma.telHref}
          className="mt-8 inline-block rounded-full bg-red px-8 py-4 font-display text-xl font-bold text-white hover:bg-red-dark active:translate-y-px sm:text-2xl"
        >
          Zavolat {firma.tel}
        </a>
        <p className="mt-6 text-muted">
          nebo e-mail{" "}
          <a href={`mailto:${firma.email}`} className="font-semibold text-ink underline underline-offset-4 hover:text-red">
            {firma.email}
          </a>
        </p>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="bg-ink pb-28 text-sm text-white/65 lg:pb-0">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 py-12 sm:grid-cols-[1fr_auto] sm:px-8">
        <div className="flex items-start gap-4">
          <Image src="/logo.png" alt="" width={56} height={56} className="size-14 rounded-full bg-white" />
          <p>
            <span className="font-display text-base font-bold text-white">{firma.pravniNazev}</span>
            <br />
            {firma.ulice}, {firma.psc} {firma.obec}
            <br />
            IČO {firma.ico}, DIČ {firma.dic}
          </p>
        </div>
        <ul className="flex flex-wrap gap-x-6 gap-y-2 sm:justify-end">
          {navigace.map((n) => (
            <li key={n.href}>
              <Link href={n.href} className="hover:text-white">
                {n.label}
              </Link>
            </li>
          ))}
          <li>
            <a href={firma.facebook} className="hover:text-white">
              Facebook
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export function MobilZavolat() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-20 p-3 lg:hidden">
      <a
        href={firma.telHref}
        className="block rounded-full bg-red py-3.5 text-center font-display text-lg font-bold text-white shadow-[0_6px_24px_rgb(20_20_20/0.18)] active:translate-y-px"
      >
        Zavolat {firma.tel}
      </a>
    </div>
  );
}
