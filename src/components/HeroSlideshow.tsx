"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import type { Foto } from "@/lib/site";

export type Slide = { foto: Foto; obor: string; popis: string; focus: string };

const SLIDE_MS = 7000;

/**
 * Jeho fotky přes celé hero. Každá se pomalu přiblíží (směr se střídá)
 * a prolne do další. Dole přepínač s oborem, proužek ukazuje, kdy přijde
 * další fotka. Pohyb delší než 5 s jde zastavit (WCAG 2.2.2), na skryté
 * záložce se nepřepíná, při prefers-reduced-motion fotky stojí.
 *
 * Vrstva leží absolutně přes rodiče (sekci hero), text je nad ní.
 */
export function HeroSlideshow({ slides }: { slides: Slide[] }) {
  const [index, setIndex] = useState(0);
  const [prev, setPrev] = useState<number | null>(null);
  const [paused, setPaused] = useState(false);
  const [reduced, setReduced] = useState(false);
  const [hidden, setHidden] = useState(false);
  // Do DOM jen aktuální a další fotka, ať se zbytek nepere o linku s první (LCP).
  const [mounted, setMounted] = useState<Set<number>>(() => new Set([0, 1]));

  useEffect(() => {
    const next = (index + 1) % slides.length;
    setMounted((m) => (m.has(index) && m.has(next) ? m : new Set([...m, index, next])));
  }, [index, slides.length]);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const onMq = () => setReduced(mq.matches);
    const onVis = () => setHidden(document.visibilityState === "hidden");
    mq.addEventListener("change", onMq);
    document.addEventListener("visibilitychange", onVis);
    return () => {
      mq.removeEventListener("change", onMq);
      document.removeEventListener("visibilitychange", onVis);
    };
  }, []);

  const running = !paused && !reduced && !hidden;

  const go = (next: number) => {
    if (next === index) return;
    setPrev(index);
    setIndex(next);
  };

  useEffect(() => {
    if (!running) return;
    const t = window.setTimeout(() => {
      setPrev(index);
      setIndex((index + 1) % slides.length);
    }, SLIDE_MS);
    return () => window.clearTimeout(t);
  }, [index, running, slides.length]);

  useEffect(() => {
    if (prev === null) return;
    const t = window.setTimeout(() => setPrev(null), 1600);
    return () => window.clearTimeout(t);
  }, [prev]);

  const active = slides[index];

  return (
    <>
      <div className="absolute inset-0 overflow-hidden bg-ink" aria-hidden>
        {slides.map((s, i) => {
          if (!mounted.has(i)) return null;
          const visible = i === index;
          const moving = visible || i === prev;
          return (
            <div
              key={s.foto.src}
              className={`absolute inset-0 transition-opacity duration-[1500ms] ease-out ${visible ? "z-[1] opacity-100" : "opacity-0"}`}
            >
              <Image
                src={s.foto.src}
                alt=""
                fill
                priority={i === 0}
                sizes="100vw"
                className={[
                  "object-cover",
                  moving && !reduced ? (i % 2 ? "kenburns-b" : "kenburns-a") : "",
                  !running ? "anim-paused" : "",
                ].join(" ")}
                style={{ objectPosition: s.focus, transformOrigin: s.focus }}
              />
            </div>
          );
        })}
        {/* Ztmavení pod textem: zespodu na mobilu, zleva na desktopu */}
        <div className="absolute inset-0 z-[2] bg-gradient-to-t from-ink/95 via-ink/70 to-ink/35 lg:bg-gradient-to-r lg:from-ink/90 lg:via-ink/60 lg:to-ink/5" />
      </div>

      <p className="sr-only" aria-live={running ? "off" : "polite"}>
        Fotka {index + 1} z {slides.length}: {active.foto.alt}
      </p>

      <div className="absolute inset-x-0 bottom-0 z-10">
        <div className="mx-auto flex max-w-6xl items-end gap-4 px-5 pb-5 sm:px-8 sm:pb-7">
          <ol className="flex flex-1 gap-2 sm:gap-4" aria-label="Fotky z mých zakázek">
            {slides.map((s, i) => {
              const current = i === index;
              return (
                <li key={s.foto.src} className="min-w-0 flex-1">
                  <button
                    type="button"
                    onClick={() => go(i)}
                    aria-current={current ? "true" : undefined}
                    aria-label={`${s.obor}: ${s.popis}`}
                    className="group block w-full pt-3 text-left"
                  >
                    <span className="relative block h-[3px] overflow-hidden bg-white/25 group-hover:bg-white/45">
                      <span
                        key={current ? `on-${index}` : "off"}
                        className={[
                          "absolute inset-y-0 left-0 bg-logo-red",
                          current ? (reduced ? "w-full" : "hero-progress") : "w-0",
                          current && !running ? "anim-paused" : "",
                        ].join(" ")}
                        style={{ animationDuration: `${SLIDE_MS}ms` }}
                      />
                    </span>
                    <span
                      className={`mt-2.5 hidden truncate text-sm font-semibold md:block ${current ? "text-white" : "text-white/55 group-hover:text-white/85"}`}
                    >
                      {s.obor}
                    </span>
                    <span
                      className={`mt-0.5 hidden truncate text-[0.8125rem] lg:block ${current ? "text-white/75" : "text-white/40 group-hover:text-white/65"}`}
                    >
                      {s.popis}
                    </span>
                  </button>
                </li>
              );
            })}
          </ol>
          <button
            type="button"
            onClick={() => setPaused((p) => !p)}
            aria-pressed={paused}
            className="shrink-0 text-[0.8125rem] font-medium text-white/70 underline-offset-4 hover:text-white hover:underline motion-reduce:hidden"
          >
            {paused ? "Spustit" : "Pozastavit"}
          </button>
        </div>
      </div>
    </>
  );
}
