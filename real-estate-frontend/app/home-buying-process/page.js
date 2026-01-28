'use client';

import Link from 'next/link';

export default function HomeBuyingProcessPage() {
  return (
    <main className="min-h-screen bg-slate-950 px-4 py-12">
      <div className="mx-auto w-full max-w-5xl section-stack">
        <header className="rounded-3xl bg-white/10 p-10 text-white shadow-2xl backdrop-blur">
          <p className="text-sm uppercase tracking-[0.3em] text-white/60">
            Baxter Property Solutions
          </p>
          <h1 className="mt-4 heading-xl">Home Buying Process</h1>
          <p className="mt-4 max-w-3xl body-copy text-white/80">
            A simple, guided path from first conversation to closing day.
          </p>
        </header>
        <section className="overflow-hidden rounded-3xl shadow-2xl">
          <img
            src="/images/english.PNG"
            alt="Home Buying Process"
            className="framed-image h-auto w-full object-cover"
          />
        </section>
      </div>
    </main>
  );
}
