import Image from "next/image";
import Link from "next/link";
import { firma, navigace } from "@/lib/site";
import { NavLink } from "./NavLink";

export function Header() {
  return (
    <header className="border-b border-line bg-paper">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3 sm:px-8">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/logo.png" alt="" width={52} height={52} priority className="size-12 sm:size-[52px]" />
          <span className="leading-tight">
            <span className="block font-display text-xl font-bold">Jaro TopInstal</span>
            <span className="block text-sm text-muted">instalatér a topenář, Plzeň</span>
          </span>
        </Link>
        <nav aria-label="Hlavní" className="hidden items-center gap-7 font-medium lg:flex">
          {navigace.map((n) => (
            <NavLink key={n.href} href={n.href}>
              {n.label}
            </NavLink>
          ))}
        </nav>
        <a href={firma.telHref} className="hidden font-display text-xl font-bold whitespace-nowrap sm:block">
          {firma.tel}
        </a>
      </div>
      <nav aria-label="Hlavní (mobil)" className="border-t border-line lg:hidden">
        <ul className="mx-auto flex max-w-6xl justify-between gap-4 overflow-x-auto px-5 py-3 font-medium whitespace-nowrap sm:justify-start sm:gap-8 sm:px-8">
          {navigace.map((n) => (
            <li key={n.href}>
              <NavLink href={n.href}>{n.label}</NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

/** Rozvod, který na konci zahne dolů. Šířka a výška se řídí rodičem. */
export function Rozvod({ className = "", spad = "3.5rem" }: { className?: string; spad?: string }) {
  return <div aria-hidden className={`rozvod ${className}`} style={{ ["--spad" as string]: spad }} />;
}

export function KontaktPas({
  nadpis = "Popište, co potřebujete, a domluvíme termín",
  text = "Nejrychlejší je zavolat. Když to nevezmu, jsem nejspíš na stavbě a ozvu se zpátky.",
}: {
  nadpis?: string;
  text?: string;
}) {
  return (
    <section className="bg-ink text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-20 sm:px-8 md:grid-cols-[1.1fr_1fr] md:items-end md:py-24">
        <div>
          <h2 className="font-display text-3xl leading-tight font-bold text-balance sm:text-4xl">{nadpis}</h2>
          <p className="mt-4 max-w-md text-lg text-white/75">{text}</p>
        </div>
        <div>
          <a
            href={firma.telHref}
            className="block font-display text-5xl leading-none font-bold tracking-tight underline decoration-logo-red decoration-[6px] underline-offset-[12px] sm:text-7xl"
          >
            {firma.tel}
          </a>
          <p className="mt-8 text-lg text-white/75">
            E-mail{" "}
            <a href={`mailto:${firma.email}`} className="text-white underline decoration-white/30 underline-offset-4 hover:decoration-logo-red">
              {firma.email}
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="bg-ink pb-28 text-sm text-white/65 lg:pb-0">
      <div className="mx-auto grid max-w-6xl gap-6 border-t border-white/10 px-5 py-8 sm:grid-cols-[1fr_auto] sm:px-8">
        <p>
          {firma.pravniNazev}, {firma.ulice}, {firma.psc} {firma.obec}
          <br />
          IČO {firma.ico}, DIČ {firma.dic}
        </p>
        <ul className="flex flex-wrap gap-x-6 gap-y-2">
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
    <div className="fixed inset-x-0 bottom-0 z-20 border-t border-line bg-paper p-3 lg:hidden">
      <a href={firma.telHref} className="block rounded-sm bg-red py-3.5 text-center font-display text-lg font-bold text-white">
        Zavolat {firma.tel}
      </a>
    </div>
  );
}
