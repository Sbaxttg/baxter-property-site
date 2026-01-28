'use client';

import Link from 'next/link';

const aboutText = [
  'I am a REALTOR® with Coldwell Baxter Realty – Alexandria Office, committed to delivering exceptional real estate service built on trust, expertise, and results. Originally from El Salvador and raised in Northern Virginia, I am proud to have called Virginia home for over 45 years. Having lived in Prince William County since 1989, I have experienced the area’s growth and transformation firsthand—providing me with deep insight into local markets, neighborhoods, and emerging opportunities.',
  'I proudly serve a diverse range of clients, with a strong emphasis on military families, first-time homebuyers, and those seeking strategic real estate solutions. With extensive knowledge of military housing programs, VA loans, and relocation processes, I work tirelessly to ensure smooth and stress-free transitions for service members and their families. My goal is to protect my clients’ benefits while helping them secure a home that fits both their lifestyle and long-term goals.',
  'For first-time homebuyers, I specialize in connecting clients with homeownership programs, grants, and incentives designed to help them leave more money in their pockets while fulfilling their dream of becoming homeowners. I believe in education, transparency, and empowerment—guiding clients through every step of the process with clarity and confidence.',
  'My professional background includes experience in Federal Acquisition, Personal Property Management, Federal Fleet Management, IT, and customer service, allowing me to approach real estate with a strategic, detail-oriented, and solutions-driven mindset. Combined with a strong foundation in marketing and client relations, I tailor innovative strategies to meet each client’s needs efficiently and effectively.',
  'Whether you are purchasing your first home, relocating due to military service, upgrading to your next residence, or investing in real estate, I am committed to delivering honest guidance, exceptional service, and results that exceed expectations. Helping others achieve their goals is at the core of everything I do, and I look forward to making your real estate journey a successful and rewarding one.',
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-950 px-4 py-12">
      <div className="mx-auto w-full max-w-5xl section-stack">
        <header className="rounded-3xl bg-white/10 p-10 text-white shadow-2xl backdrop-blur">
          <p className="text-sm uppercase tracking-[0.3em] text-white/60">
            Baxter Property Solutions
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
            Meet Gaudy Baxter
          </h1>
          <p className="mt-4 max-w-3xl text-lg text-white/80">
            A trusted advisor with a deep Northern Virginia perspective and a
            dedication to clients who deserve exceptional guidance.
          </p>
          <div className="mt-6 flex flex-wrap gap-3 text-sm">
            <span className="rounded-full bg-white/15 px-4 py-2">
              Coldwell Baxter Realty – Alexandria Office
            </span>
            <span className="rounded-full bg-white/15 px-4 py-2">
              Military relocation specialist
            </span>
            <span className="rounded-full bg-white/15 px-4 py-2">
              First-time homebuyer advocate
            </span>
          </div>
        </header>

        <div className="section-separator" />

        <section className="grid gap-6 lg:grid-cols-[2fr_1fr]">
          <div className="rounded-3xl bg-white p-8 shadow-xl space-y-6 text-gray-700">
            {aboutText.map((paragraph) => (
              <p key={paragraph} className="body-copy text-gray-700">
                {paragraph}
              </p>
            ))}
          </div>

          <aside className="space-y-6">
            <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/10 p-3 shadow-xl backdrop-blur">
              <img
                src="/images/gaudy-baxter2.jpg"
                alt="Gaudy Baxter"
                className="h-auto w-full rounded-2xl object-cover"
              />
            </div>
            <div className="rounded-3xl bg-white/10 p-8 text-white shadow-2xl backdrop-blur">
              <h2 className="heading-lg">Signature Promise</h2>
              <p className="mt-3 text-sm text-white/80">
                Clear communication, strategic guidance, and a custom plan for
                every client.
              </p>
            </div>
            <div className="rounded-3xl bg-white/10 p-8 text-white shadow-2xl backdrop-blur">
              <h2 className="heading-lg">Call or Text</h2>
              <p className="mt-2 text-lg font-semibold">571-422-8343</p>
              <p className="mt-2 text-sm text-white/80">
                Let’s talk about your next move.
              </p>
            </div>
            <div className="rounded-3xl bg-white/10 p-8 text-white shadow-2xl backdrop-blur">
              <h2 className="heading-lg">Ready for a plan?</h2>
              <p className="mt-3 body-copy text-white/90">
                I help clients compare financing options, build timelines, and
                identify the best path forward.
              </p>
              <Link
                href="/"
                className="btn-secondary mt-6"
              >
                Back to inquiry form
              </Link>
            </div>
          </aside>
        </section>
      </div>
    </main>
  );
}
