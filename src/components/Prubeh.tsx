"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import type { Foto } from "@/lib/site";

export type Faze = { nazev: string; text: string; foto: Foto };

/**
 * Vodorovný pás fází rekonstrukce. Posouvá se prstem, kolečkem nebo
 * tlačítky, každá fáze se zarovná k levému okraji. Červeno-modrá linka
 * nad fotkami ukazuje, kde v postupu člověk je.
 */
export function Prubeh({ faze }: { faze: Faze[] }) {
  const pas = useRef<HTMLOListElement>(null);
  const [aktivni, setAktivni] = useState(0);
  const [zacatek, setZacatek] = useState(true);
  const [konec, setKonec] = useState(false);

  useEffect(() => {
    const el = pas.current;
    if (!el) return;
    const sleduj = () => {
      const sirka = (el.firstElementChild as HTMLElement | null)?.offsetWidth ?? 1;
      setAktivni(Math.min(faze.length - 1, Math.round(el.scrollLeft / (sirka + 20))));
      setZacatek(el.scrollLeft <= 4);
      setKonec(el.scrollLeft + el.clientWidth >= el.scrollWidth - 4);
    };
    sleduj();
    el.addEventListener("scroll", sleduj, { passive: true });
    window.addEventListener("resize", sleduj);
    return () => {
      el.removeEventListener("scroll", sleduj);
      window.removeEventListener("resize", sleduj);
    };
  }, [faze.length]);

  const posun = (smer: number) => {
    const el = pas.current;
    if (!el) return;
    const sirka = (el.firstElementChild as HTMLElement | null)?.offsetWidth ?? 300;
    el.scrollBy({ left: smer * (sirka + 20), behavior: "smooth" });
  };

  const hotovo = konec ? 1 : aktivni / Math.max(1, faze.length - 1);

  return (
    <div>
      <div className="flex items-center gap-6">
        <div className="relative h-[13px] flex-1" aria-hidden>
          <span className="absolute inset-x-0 top-0 h-[3px] bg-ink/10" />
          <span className="absolute inset-x-0 bottom-0 h-[3px] bg-ink/10" />
          <span
            className="absolute top-0 left-0 h-[3px] bg-logo-red transition-[width] duration-500"
            style={{ width: `${Math.max(8, hotovo * 100)}%` }}
          />
          <span
            className="absolute bottom-0 left-0 h-[3px] bg-pipe-blue transition-[width] duration-500"
            style={{ width: `${Math.max(8, hotovo * 100)}%` }}
          />
        </div>
        <div className="flex shrink-0 gap-2">
          <button
            type="button"
            onClick={() => posun(-1)}
            disabled={zacatek}
            aria-label="Předchozí fáze"
            className="grid size-11 place-items-center border border-ink/20 text-xl hover:border-ink disabled:opacity-30"
          >
            ‹
          </button>
          <button
            type="button"
            onClick={() => posun(1)}
            disabled={konec}
            aria-label="Další fáze"
            className="grid size-11 place-items-center border border-ink/20 text-xl hover:border-ink disabled:opacity-30"
          >
            ›
          </button>
        </div>
      </div>

      <ol
        ref={pas}
        className="no-scrollbar mt-8 flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth pb-2"
        aria-label="Fáze rekonstrukce"
      >
        {faze.map((f, i) => (
          <li key={f.nazev} className="w-[82%] shrink-0 snap-start sm:w-[44%] lg:w-[28%]">
            <Image
              src={f.foto.src}
              alt={f.foto.alt}
              width={f.foto.w}
              height={f.foto.h}
              sizes="(min-width: 1024px) 320px, (min-width: 640px) 46vw, 82vw"
              className="aspect-[4/5] w-full object-cover"
            />
            <h3
              className={`mt-4 font-display text-xl font-bold transition-colors ${i === aktivni ? "text-ink" : "text-ink/70"}`}
            >
              {f.nazev}
            </h3>
            <p className="mt-1.5 text-muted">{f.text}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}
