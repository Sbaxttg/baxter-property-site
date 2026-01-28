'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isInicioOpen, setIsInicioOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-slate-950 via-indigo-950 to-slate-950 text-white shadow-lg">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-3">
        <Link
          href="/"
          className="inline-flex items-center"
          aria-label="Baxter Property Solutions"
        >
          <img
            src="/images/logo4.jpg"
            alt="Baxter Property Solutions"
            className="framed-image h-16 w-auto opacity-95 mix-blend-screen brightness-110 sm:h-20 md:h-24 lg:h-28"
          />
        </Link>
        <nav className="hidden flex-1 flex-wrap items-center justify-end gap-x-5 gap-y-2 text-sm font-medium text-white/80 lg:flex">
          <Link href="/" className="transition hover:text-white">
            Home
          </Link>
          <Link href="/about" className="transition hover:text-white">
            About Me
          </Link>
          <Link href="/inquiry" className="transition hover:text-white">
            Contact Me
          </Link>
          <Link href="/active-listings" className="transition hover:text-white">
            Active Listings
          </Link>
          <Link href="/past-clients" className="transition hover:text-white">
            Past Clients
          </Link>
          <Link href="/home-buying-process" className="transition hover:text-white whitespace-nowrap">
            Home Buying Process
          </Link>
          <Link href="/financing-landing" className="transition hover:text-white">
            Financing
          </Link>
          <div className="relative">
            <div className="inline-flex items-center gap-2">
              <Link
                href="/inicio-de-compra"
                className="transition hover:text-white whitespace-nowrap"
              >
                Inicio De Compra
              </Link>
              <button
                type="button"
                onClick={() => setIsInicioOpen((prev) => !prev)}
                className="text-base text-white/80 transition hover:text-white"
                aria-expanded={isInicioOpen}
                aria-label="Toggle Preguntas Frecuentes submenu"
              >
                ▾
              </button>
            </div>
            {isInicioOpen && (
              <div className="absolute left-0 top-full mt-2 min-w-[220px] rounded-xl border border-white/10 bg-slate-950/95 py-2 text-white/90 shadow-2xl">
                <Link
                  href="/preguntas-frecuentes"
                  className="block px-4 py-2 text-sm transition hover:bg-white/10"
                  onClick={() => setIsInicioOpen(false)}
                >
                  Preguntas Frecuentes
                </Link>
              </div>
            )}
          </div>
          <Link
            href="/admin"
            className="rounded-full border border-white/20 px-3 py-1 text-white/90 transition hover:border-white/50 hover:text-white"
          >
            Admin
          </Link>
        </nav>
      </div>
    </header>
  );
}
