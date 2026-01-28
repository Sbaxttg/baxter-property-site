'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Home() {
  const apiBaseUrl =
    process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });
  const [submitStatus, setSubmitStatus] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    setSubmitStatus('');

    try {
      const response = await fetch(`${apiBaseUrl}/api/inquiries`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', phone: '', email: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error:', error);
      setSubmitStatus('error');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main
      id="inquiry"
      className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900 py-12 px-4"
    >
      <div className="max-w-5xl mx-auto section-stack">
        <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-gray-800 via-blue-900 to-sky-300 px-8 py-16 text-white shadow-2xl">
          <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-white/20 blur-2xl" />
          <div className="absolute -bottom-16 -left-16 h-52 w-52 rounded-full bg-white/10 blur-3xl" />
          <div className="relative grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <h1 className="mt-4 heading-xl font-extrabold">
                <span className="block text-white/90">
                  GB Sells Homes | Baxter Property Solutions
                </span>
              </h1>
              <p className="mt-6 max-w-2xl body-copy text-white/90">
                Luxury service, local expertise, and a personal touch for every
                move.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-4">
                <Link href="/about" className="btn-secondary">
                  Meet Gaudy Baxter
                </Link>
                <Link href="/inquiry" className="btn-primary">
                  Contact Me
                </Link>
              </div>
              <div className="mt-4 flex flex-wrap items-center gap-2 text-[10px] text-white/70">
                <span className="rounded-full bg-white/10 px-3 py-1 backdrop-blur">
                  Gaudy.baxter@cbmove.com
                </span>
                <span className="rounded-full bg-white/10 px-3 py-1 backdrop-blur">
                  571-422-8343
                </span>
              </div>
              <div className="mt-4 flex flex-wrap items-center gap-3">
                <a
                  href="https://www.instagram.com/baxterpropertysolutions/"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-secondary icon-btn h-12 w-12 rounded-full p-0"
                  aria-label="Instagram"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="icon-unified"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4zm10 2H7a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2zm-5 3.5a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9zm0 2a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zm5.25-2.25a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                  </svg>
                </a>
                <a
                  href="https://www.facebook.com/baxterg75"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-secondary icon-btn h-12 w-12 rounded-full p-0"
                  aria-label="Facebook"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="icon-unified"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M13.5 9H16V6h-2.5A3.5 3.5 0 0 0 10 9.5V12H8v3h2v6h3v-6h2.3l.7-3H13V9.5c0-.3.2-.5.5-.5z" />
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/in/gaudybaxter/"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-secondary icon-btn h-12 w-12 rounded-full p-0"
                  aria-label="LinkedIn"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="icon-unified"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M6.5 9H4v11h2.5V9zm-1.25-5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM20 13.5V20h-2.5v-6.1c0-1.4-.5-2.4-1.8-2.4-1 0-1.6.7-1.9 1.3-.1.3-.1.7-.1 1.1V20H11V9h2.4v1.5h.1c.4-.7 1.3-1.7 3-1.7 2.1 0 3.5 1.4 3.5 4.3z" />
                  </svg>
                </a>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="w-full max-w-xs overflow-hidden rounded-3xl border border-white/30 bg-white/10 p-3 shadow-2xl backdrop-blur">
                <img
                  src="/images/gaudy-baxter.jpg"
                  alt="Gaudy Baxter"
                  className="framed-image h-auto w-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <div className="section-separator" />

        <section className="overflow-hidden rounded-3xl shadow-2xl">
          <div className="ocean-banner relative flex min-h-[220px] items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-r from-white/5 via-white/10 to-white/5" />
            <img
              src="/images/Logo.png"
              alt="Coldwell Baxter Realty"
              className="framed-image logo-pop relative z-10 h-20 w-auto drop-shadow-2xl sm:h-24 md:h-28"
            />
          </div>
        </section>

        <div className="section-separator" />

        <section className="rounded-3xl bg-white p-8 shadow-xl">
          <div className="grid gap-8 md:grid-cols-[240px_1fr] md:items-center">
            <div className="mx-auto w-full max-w-[240px] overflow-hidden rounded-2xl border border-gray-200 shadow-md">
              <img
                src="/images/gaudy-baxter3.jpg"
                alt="Gaudy Baxter"
                className="framed-image h-auto w-full object-cover"
              />
            </div>
            <div className="space-y-3 text-gray-800">
              <h2 className="heading-lg">
                Gaudy Baxter REALTORS®
              </h2>
              <p className="text-sm font-medium text-gray-600">
                Coldwell Banker Realty
              </p>
              <div className="text-sm text-gray-700">
                <p>310 King St.</p>
                <p>Alexandria, Va 22314</p>
              </div>
              <p className="text-sm text-gray-700">
                M. 571-422-8343 | O. 703-518-8300 |
              </p>
              <p className="text-sm text-gray-700">
                0225240952 VA, SP40003428 DC, 5004794 MD | Gaudy.baxter@cbmove.com
              </p>
              <Link href="/inquiry" className="btn-primary mt-4">
                Contact Me
              </Link>
            </div>
          </div>
        </section>

        <div className="section-separator" />

        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h2 className="heading-lg text-gray-800 mb-2">
            Real Estate Inquiry
          </h2>
          <p className="text-gray-600 mb-8">
            Interested in a property? Send us your information and we'll get back
            to you soon.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                placeholder="Your Name"
              />
            </div>

            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                placeholder="(555) 123-4567"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="4"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                placeholder="Tell us about your real estate needs..."
              />
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full btn-primary disabled:bg-gray-400 disabled:cursor-not-allowed"
            >
              {isLoading ? 'Submitting...' : 'Submit Inquiry'}
            </button>
          </form>

          {submitStatus === 'success' && (
            <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
              <p className="text-green-800 font-medium">
                ✓ Inquiry submitted successfully! We'll contact you soon.
              </p>
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-red-800 font-medium">
                ✗ Failed to submit inquiry. Please try again.
              </p>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
