"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { firma, navigace } from "@/lib/site";

/** Stránky, které začínají tmavou fotkou, aby hlavička byla průhledná už při prvním vykreslení. */
const FOTKA_NAHORE = ["/", "/instalater-plzen", "/topenar-plzen", "/zakazky"];

type Ton = { pozadi: string; tmavy: boolean };

const SVETLY: Ton = { pozadi: "rgb(255 255 255)", tmavy: false };
const PRUHLEDNY: Ton = { pozadi: "rgb(20 20 20 / 0)", tmavy: true };

function jas(rgb: string) {
  const [r, g, b] = (rgb.match(/[\d.]+/g) ?? ["255", "255", "255"]).map(Number);
  return (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255;
}

/**
 * Zjistí, která sekce je právě pod hlavičkou, a převezme její barvu.
 * Sekce si může barvu vynutit atributem data-header="tmava" (fotka, hlavička
 * je průhledná a bílá) nebo data-header="svetla" (fotka, na které musí být bílý pruh).
 */
function tonPodHlavickou(vyska: number): Ton {
  const y = vyska / 2;
  for (const el of document.querySelectorAll<HTMLElement>("main > *")) {
    const r = el.getBoundingClientRect();
    if (r.top > y || r.bottom <= y) continue;
    if (el.dataset.header === "tmava") return PRUHLEDNY;
    if (el.dataset.header === "svetla") return SVETLY;
    const bg = getComputedStyle(el).backgroundColor;
    const alfa = bg.startsWith("rgba") ? Number(bg.split(",")[3]?.replace(")", "") ?? 1) : 1;
    if (alfa === 0) return SVETLY;
    return jas(bg) < 0.4 ? PRUHLEDNY : { pozadi: bg, tmavy: false };
  }
  return SVETLY;
}

export function Header() {
  const pathname = usePathname();
  const [ton, setTon] = useState<Ton>(FOTKA_NAHORE.includes(pathname) ? PRUHLEDNY : SVETLY);
  const [menu, setMenu] = useState(false);
  const hlavicka = useRef<HTMLElement>(null);

  useEffect(() => setMenu(false), [pathname]);

  useEffect(() => {
    let ceka = false;
    const prepocitej = () => {
      ceka = false;
      setTon(tonPodHlavickou(hlavicka.current?.offsetHeight ?? 72));
    };
    const naplanuj = () => {
      if (ceka) return;
      ceka = true;
      requestAnimationFrame(prepocitej);
    };
    prepocitej();
    window.addEventListener("scroll", naplanuj, { passive: true });
    window.addEventListener("resize", naplanuj);
    return () => {
      window.removeEventListener("scroll", naplanuj);
      window.removeEventListener("resize", naplanuj);
    };
  }, [pathname]);

  const tmavy = ton.tmavy && !menu;

  return (
    <header
      ref={hlavicka}
      className={`fixed inset-x-0 top-0 z-30 transition-[background-color,color] duration-300 ${tmavy ? "text-white" : "text-ink"}`}
      style={{ backgroundColor: menu ? "rgb(255 255 255)" : ton.pozadi }}
    >
      <div className="relative mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3 sm:px-8">
        <Link href="/" className="flex items-center gap-2.5">
          <Image src="/logo.png" alt="" width={44} height={44} priority className="size-10 rounded-full bg-white sm:size-11" />
          <span className="font-display text-lg font-extrabold tracking-tight sm:text-xl">Jaro TopInstal</span>
        </Link>
        <nav aria-label="Hlavní" className="hidden items-center gap-1 font-medium lg:flex">
          {navigace.map((n) => {
            const aktivni = pathname === n.href;
            return (
              <Link
                key={n.href}
                href={n.href}
                aria-current={aktivni ? "page" : undefined}
                className={`rounded-full px-4 py-2 ${tmavy ? "hover:bg-white/15" : "hover:bg-ink/[0.06]"} ${aktivni ? (tmavy ? "bg-white/15" : "bg-ink/[0.06]") : ""}`}
              >
                {n.label}
              </Link>
            );
          })}
        </nav>
        <a
          href={firma.telHref}
          className="hidden rounded-full bg-red px-5 py-2.5 font-display font-bold whitespace-nowrap text-white hover:bg-red-dark active:translate-y-px lg:block"
        >
          {firma.tel}
        </a>
        <div className="lg:hidden">
          <button
            type="button"
            onClick={() => setMenu((o) => !o)}
            aria-expanded={menu}
            aria-controls="mobil-menu"
            className={`rounded-full px-4 py-2 text-[0.9375rem] font-semibold ${tmavy ? "bg-white/15" : "bg-ink/[0.06]"}`}
          >
            {menu ? "Zavřít" : "Menu"}
          </button>
        </div>
      </div>
      {menu && (
        <nav id="mobil-menu" aria-label="Hlavní (mobil)" className="border-t border-line bg-paper px-3 pt-2 pb-4 shadow-[0_16px_30px_rgb(20_20_20/0.10)] lg:hidden">
          <ul>
            {navigace.map((n) => (
              <li key={n.href}>
                <Link
                  href={n.href}
                  aria-current={pathname === n.href ? "page" : undefined}
                  className={`block rounded-xl px-4 py-3.5 text-lg font-semibold ${pathname === n.href ? "bg-plaster" : ""}`}
                >
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
