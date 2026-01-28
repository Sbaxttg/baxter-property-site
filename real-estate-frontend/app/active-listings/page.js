'use client';

import Link from 'next/link';

const listings = [
  {
    id: 'listing-1',
    title: 'Luxury Townhome',
    location: 'Alexandria, VA',
    price: '$645,000',
    details: '3 beds • 2.5 baths • 1,920 sq ft',
  },
  {
    id: 'listing-2',
    title: 'Single Family Retreat',
    location: 'Woodbridge, VA',
    price: '$735,000',
    details: '4 beds • 3 baths • 2,640 sq ft',
  },
  {
    id: 'listing-3',
    title: 'Modern Condo',
    location: 'Arlington, VA',
    price: '$515,000',
    details: '2 beds • 2 baths • 1,180 sq ft',
  },
];

export default function ActiveListingsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-950 px-4 py-12">
      <div className="mx-auto w-full max-w-6xl space-y-10">
        <header className="rounded-3xl bg-white/10 p-10 text-white shadow-2xl backdrop-blur">
          <p className="text-sm uppercase tracking-[0.3em] text-white/60">
            Baxter Property Solutions
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
            Active Listings
          </h1>
          <p className="mt-4 max-w-3xl text-lg text-white/80">
            A curated selection of active listings. Reach out for full details,
            showing availability, or additional market options.
          </p>
        </header>

        <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {listings.map((listing) => (
            <article
              key={listing.id}
              className="rounded-3xl bg-white p-8 text-gray-700 shadow-xl"
            >
              <p className="text-sm uppercase tracking-[0.2em] text-indigo-500">
                {listing.location}
              </p>
              <h2 className="mt-3 text-xl font-semibold text-gray-900">
                {listing.title}
              </h2>
              <p className="mt-2 text-lg font-semibold text-indigo-600">
                {listing.price}
              </p>
              <p className="mt-4 text-sm text-gray-600">{listing.details}</p>
              <Link
                href="/inquiry"
                className="mt-6 inline-flex items-center rounded-full bg-indigo-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-indigo-700"
              >
                Request details
              </Link>
            </article>
          ))}
        </section>

        <section className="rounded-3xl bg-white/10 p-8 text-white shadow-2xl backdrop-blur">
          <h2 className="text-2xl font-semibold">
            Want a full MLS search?
          </h2>
          <p className="mt-3 max-w-2xl text-white/80">
            Share your preferred neighborhood, budget, and must-have features
            and I’ll send a tailored list.
          </p>
          <Link
            href="/inquiry"
            className="mt-6 inline-flex items-center rounded-full bg-white/20 px-5 py-2 text-sm font-semibold text-white transition hover:bg-white/30"
          >
            Start an inquiry
          </Link>
        </section>
      </div>
    </main>
  );
}
