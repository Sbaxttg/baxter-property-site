'use client';

import Link from 'next/link';

const testimonials = [
  {
    name: 'Lucy Anderson',
    location: 'Triangle, VA',
    quote:
      'Ms. Baxter is very professional with her work. She treats her clients like family. She goes above and beyond in her line of work. Will recommend her anytime.',
  },
  {
    name: 'Joanne',
    location: 'Alexandria, VA',
    quote:
      'Excellent communication, smart strategy, and a smooth closing. We truly felt taken care of from start to finish.',
  },
  {
    name: 'Delmer Portillo',
    location: 'Woodbridge, VA',
    quote:
      'Relocation was stressful, but Gaudy handled the details and kept us on track. We landed in the right home fast.',
  },
];

const clientPhotos = [
  'clients3.jpg',
  'clients4.JPG',
  'clients5.JPG',
  'clients6.jpg',
  'clients8.png',
  'clients10.JPG',
];

export default function PastClientsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-950 px-4 py-12">
      <div className="mx-auto w-full max-w-5xl section-stack">
        <header className="rounded-3xl bg-white/10 p-10 text-white shadow-2xl backdrop-blur">
          <p className="text-sm uppercase tracking-[0.3em] text-white/60">
            Baxter Property Solutions
          </p>
          <h1 className="mt-4 heading-xl">
            Client Testimonials
          </h1>
          <p className="mt-4 max-w-3xl body-copy text-white/80">
            Nothing means more to me than the trust my clients place in me during
            one of the most important decisions of their lives. I'm proud to
            have helped families, first-time buyers, military members, and
            investors achieve their real estate goals. Here's what some of them
            had to say about their experience.
          </p>
        </header>

        <div className="section-separator" />

        <section className="grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.name}
              className="rounded-3xl bg-white p-8 text-gray-700 shadow-xl"
            >
              <p className="text-sm uppercase tracking-[0.2em] text-indigo-500">
                {testimonial.location}
              </p>
              <p className="mt-4 body-copy text-gray-700">
                “{testimonial.quote}”
              </p>
              <p className="mt-6 text-sm font-semibold text-gray-900">
                {testimonial.name}
              </p>
            </article>
          ))}
        </section>

        <div className="section-separator" />

        <section className="space-y-6">
          <div className="text-white">
            <h2 className="heading-lg">Client Moments</h2>
            <p className="mt-2 max-w-2xl body-copy text-white/80">
              Celebrating the journeys and milestones of our past clients.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {clientPhotos.map((photo, index) => (
              <div
                key={photo}
                className="group overflow-hidden rounded-3xl border border-white/10 bg-white/10 p-3 shadow-xl backdrop-blur transition duration-300 hover:-translate-y-1 hover:shadow-2xl"
              >
                <img
                  src={`/images/${photo}`}
                  alt="Past client"
                  className="floaty-card aspect-[4/5] w-full rounded-2xl object-cover transition duration-500 group-hover:scale-105"
                  style={{ animationDelay: `${index * 0.2}s` }}
                />
              </div>
            ))}
          </div>
        </section>

        <div className="section-separator" />

        <section className="rounded-3xl bg-white/10 p-10 text-white shadow-2xl backdrop-blur">
          <h2 className="heading-lg">
            Ready to become the next success story?
          </h2>
          <p className="mt-3 max-w-2xl body-copy text-white/90">
            Let’s map out your goals, timeline, and best strategy for a smooth
            transaction.
          </p>
          <Link
            href="/inquiry"
            className="btn-secondary mt-6"
          >
            Start an inquiry
          </Link>
        </section>
      </div>
    </main>
  );
}
