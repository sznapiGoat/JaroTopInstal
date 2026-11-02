"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import type { Foto } from "@/lib/site";

/** Mřížka fotek, klik otevře fotku přes celou obrazovku, šipky listují. */
export function Galerie({
  fotky,
  sloupce = "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
  pomer = "aspect-[4/3]",
  mozaika = false,
}: {
  fotky: Foto[];
  sloupce?: string;
  pomer?: string;
  /** První fotka přes dva sloupce a dva řádky, ať skupina nevypadá jako tabulka. */
  mozaika?: boolean;
}) {
  const dialog = useRef<HTMLDialogElement>(null);
  const [i, setI] = useState<number | null>(null);

  const otevrit = (n: number) => {
    setI(n);
    dialog.current?.showModal();
  };
  const posun = useCallback(
    (o: number) => setI((n) => (n === null ? n : (n + o + fotky.length) % fotky.length)),
    [fotky.length],
  );

  useEffect(() => {
    const d = dialog.current;
    if (!d) return;
    const klavesy = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") posun(1);
      if (e.key === "ArrowLeft") posun(-1);
    };
    d.addEventListener("keydown", klavesy);
    return () => d.removeEventListener("keydown", klavesy);
  }, [posun]);

  const f = i === null ? null : fotky[i];

  return (
    <>
      <ul className={`grid gap-x-4 gap-y-6 ${sloupce}`}>
        {fotky.map((foto, n) => {
          const velka = mozaika && n === 0;
          // Za velkou fotkou jdou řady po třech; zbydou-li v poslední řadě dvě, poslední se roztáhne.
          const siroka = mozaika && n === fotky.length - 1 && (fotky.length - 3) % 3 === 2;
          return (
            <li key={foto.src} className={velka ? "sm:col-span-2 lg:row-span-2" : siroka ? "lg:col-span-2" : ""}>
              <button
                type="button"
                onClick={() => otevrit(n)}
                className="flex h-full w-full flex-col border-b-[3px] border-transparent text-left hover:border-logo-red"
              >
                <span className={`relative block w-full ${velka ? "aspect-[4/3] lg:aspect-auto lg:flex-1" : siroka ? `${pomer} lg:aspect-[8.1/3]` : pomer}`}>
                  <Image
                    src={foto.src}
                    alt={foto.alt}
                    fill
                    sizes={velka ? "(min-width: 1024px) 760px, 100vw" : "(min-width: 1024px) 380px, (min-width: 640px) 50vw, 100vw"}
                    className="object-cover"
                  />
                </span>
                <span className="block py-2 text-sm text-muted">{foto.popis}</span>
              </button>
            </li>
          );
        })}
      </ul>

      <dialog
        ref={dialog}
        onClose={() => setI(null)}
        onClick={(e) => {
          const t = e.target as HTMLElement;
          if (t === dialog.current || t.tagName === "FIGURE") dialog.current?.close();
        }}
        className="m-auto max-h-none max-w-none bg-transparent p-0 backdrop:bg-black/90"
        aria-label="Fotka zakázky"
      >
        {f && (
          <figure className="flex h-dvh w-screen flex-col items-center justify-center gap-3 p-4">
            <Image
              src={f.src}
              alt={f.alt}
              width={f.w}
              height={f.h}
              sizes="100vw"
              className="max-h-[80dvh] w-auto object-contain"
            />
            <figcaption className="flex w-full max-w-3xl items-center justify-between gap-4 text-white">
              <button type="button" onClick={() => posun(-1)} className="px-3 py-2 text-2xl" aria-label="Předchozí fotka">
                ‹
              </button>
              <span className="text-center">
                {f.popis}
                <span className="ml-2 text-white/50">
                  {i! + 1}/{fotky.length}
                </span>
              </span>
              <button type="button" onClick={() => posun(1)} className="px-3 py-2 text-2xl" aria-label="Další fotka">
                ›
              </button>
            </figcaption>
            <button
              type="button"
              onClick={() => dialog.current?.close()}
              className="absolute top-4 right-4 px-3 py-2 text-white underline underline-offset-4"
            >
              Zavřít
            </button>
          </figure>
        )}
      </dialog>
    </>
  );
}
