'use client';

import Link from 'next/link';

export default function FinancingLandingPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-950 px-4 py-12">
      <div className="mx-auto w-full max-w-5xl section-stack">
        <header className="rounded-3xl bg-white/10 p-10 text-white shadow-2xl backdrop-blur">
          <p className="text-sm uppercase tracking-[0.3em] text-white/60">
            Baxter Property Solutions
          </p>
          <h1 className="mt-4 heading-xl">Financing</h1>
          <p className="mt-4 max-w-3xl body-copy text-white/80">
            Understand your financing options and feel confident before making
            an offer.
          </p>
        </header>

        <section className="rounded-3xl bg-white p-10 text-gray-700 shadow-xl">
          <h2 className="heading-lg text-gray-900">
            Meet Our Preferred Lending Partner
          </h2>
          <p className="mt-4 body-copy text-gray-700">
            Your First Step Toward Homeownership—Made Simple
          </p>
          <div className="mt-6 space-y-4 body-copy text-gray-700">
            <p>Buying a home starts with clarity, not confusion.</p>
            <p>
              That’s why we’ve partnered with a trusted, highly experienced
              Preferred Lender who puts your goals first and walks you through
              the financial side of homebuying—step by step.
            </p>
          </div>
        </section>

        <section className="rounded-3xl bg-white p-8 shadow-xl">
          <div className="grid gap-8 md:grid-cols-[240px_1fr] md:items-center">
            <div className="mx-auto w-full max-w-[240px] overflow-hidden rounded-2xl border border-gray-200 shadow-md">
              <img
                src="/images/financing.jpg"
                alt="Alex Navarro"
                className="framed-image h-auto w-full object-cover"
              />
            </div>
            <div className="space-y-3 text-gray-800">
              <h2 className="heading-lg">Guild Mortgage</h2>
              <p className="text-sm font-medium text-gray-600">
                Alex Navarro
              </p>
              <p className="text-sm text-gray-700">Senior Loan Officer</p>
              <p className="text-sm text-gray-700">NMLS# 587693</p>
              <p className="text-sm text-gray-700">703-906-2875</p>
              <p className="text-sm text-gray-700">
                3060 Williams Drive, Suite 3122 And 3123,
              </p>
              <p className="text-sm text-gray-700">Fairfax, VA 22031</p>
            </div>
          </div>
        </section>

        <section className="overflow-hidden rounded-3xl shadow-2xl">
          <img
            src="/images/financing2.png"
            alt="Financing information"
            className="framed-image h-auto w-full object-cover"
          />
        </section>

        <section className="rounded-3xl bg-white p-10 text-gray-700 shadow-xl">
          <h2 className="heading-lg text-gray-900">
            Why We Recommend This Lender
          </h2>
          <ul className="mt-6 space-y-2 body-copy text-gray-700">
            <li>✔ Proven track record of reliability</li>
            <li>✔ Clear communication and fast response times</li>
            <li>✔ Deep knowledge of loan programs and market trends</li>
            <li>✔ Commitment to education—not pressure</li>
            <li>✔ Trusted partner who protects your best interests</li>
          </ul>
          <p className="mt-6 body-copy text-gray-700">
            This partnership allows us to deliver a seamless, 5-Star experience
            from consultation to closing.
          </p>
        </section>
      </div>
    </main>
  );
}
