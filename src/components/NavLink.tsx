"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navigace } from "@/lib/site";

export function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  const active = usePathname() === href;
  return (
    <Link
      href={href}
      aria-current={active ? "page" : undefined}
      className={`rounded-full px-4 py-2 hover:bg-plaster ${active ? "bg-plaster" : ""}`}
    >
      {children}
    </Link>
  );
}

/** Mobilní menu: tlačítko v pilulce hlavičky, pod ní rozbalený panel s odkazy. */
export function MobilMenu() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => setOpen(false), [pathname]);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-controls="mobil-menu"
        className="rounded-full bg-plaster px-4 py-2 text-[0.9375rem] font-semibold"
      >
        {open ? "Zavřít" : "Menu"}
      </button>
      {open && (
        <nav
          id="mobil-menu"
          aria-label="Hlavní (mobil)"
          className="absolute inset-x-0 top-full mt-2 rounded-2xl bg-paper p-2 shadow-[0_8px_30px_rgb(20_20_20/0.12)]"
        >
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
    </div>
  );
}
