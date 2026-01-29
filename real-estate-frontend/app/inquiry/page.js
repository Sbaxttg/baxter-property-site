'use client';

import { useState } from 'react';

export default function InquiryPage() {
  const apiBaseUrl =
    process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5001';
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
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-950 px-4 py-12">
      <div className="mx-auto w-full max-w-3xl section-stack">
        <header className="rounded-3xl bg-white/10 p-10 text-white shadow-2xl backdrop-blur">
          <p className="text-sm uppercase tracking-[0.3em] text-white/60">
            Baxter Property Solutions
          </p>
          <h1 className="mt-4 heading-xl">
            Contact Me
          </h1>
          <p className="mt-4 max-w-2xl body-copy text-white/80">
            Share your details and what you’re looking for. I’ll follow up
            quickly with next steps.
          </p>
        </header>

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
            </div>
          </div>
        </section>

        <div className="section-separator" />

        <section className="bg-white rounded-2xl shadow-xl p-8">
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
                ✓ Inquiry submitted successfully! We&apos;ll contact you soon.
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
        </section>
      </div>
    </main>
  );
}
