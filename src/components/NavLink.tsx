"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  const active = usePathname() === href;
  return (
    <Link
      href={href}
      aria-current={active ? "page" : undefined}
      className={`decoration-logo-red decoration-[3px] underline-offset-8 hover:underline ${active ? "underline" : ""}`}
    >
      {children}
    </Link>
  );
}
