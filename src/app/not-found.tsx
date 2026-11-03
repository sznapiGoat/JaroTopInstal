import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto max-w-6xl px-5 pt-40 pb-28 sm:px-8">
      <h1 className="font-display text-4xl font-bold sm:text-5xl">Tahle stránka tu není</h1>
      <p className="mt-5 text-lg text-muted">
        Možná se změnila adresa.{" "}
        <Link href="/" className="font-semibold text-red underline underline-offset-4">
          Zpět na úvod
        </Link>
      </p>
    </section>
  );
}
