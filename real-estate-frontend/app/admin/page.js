'use client';

import { useState } from 'react';
import Link from 'next/link';

const ADMIN_PASSWORD = 'Bbfg3pd##';

export default function AdminPage() {
  const apiBaseUrl =
    process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5001';
  const [password, setPassword] = useState('');
  const [authorized, setAuthorized] = useState(false);
  const [submissions, setSubmissions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = async (event) => {
    event.preventDefault();
    setErrorMessage('');

    if (password !== ADMIN_PASSWORD) {
      setErrorMessage('Incorrect password.');
      return;
    }

    setAuthorized(true);
    await fetchSubmissions();
  };

  const fetchSubmissions = async () => {
    setIsLoading(true);
    setErrorMessage('');

    try {
      const response = await fetch(`${apiBaseUrl}/api/inquiries`);
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data?.error || 'Failed to load inquiries');
      }
      setSubmissions(data.inquiries || []);
    } catch (error) {
      setErrorMessage(error.message || 'Failed to load inquiries.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-950 px-4 py-12">
      <div className="mx-auto w-full max-w-6xl space-y-8">
        <header className="rounded-3xl bg-white/10 p-10 text-white shadow-2xl backdrop-blur">
          <p className="text-sm uppercase tracking-[0.3em] text-white/60">
            Baxter Property Solutions
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
            Admin Submissions
          </h1>
          <p className="mt-4 max-w-3xl text-lg text-white/80">
            View contact requests submitted through the website.
          </p>
        </header>

        {!authorized ? (
          <section className="rounded-3xl bg-white p-8 shadow-xl">
            <form onSubmit={handleLogin} className="space-y-4">
              <label className="block text-sm font-medium text-gray-700">
                Admin Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500"
                placeholder="Enter password"
              />
              {errorMessage && (
                <p className="text-sm text-red-600">{errorMessage}</p>
              )}
              <button
                type="submit"
                className="inline-flex items-center rounded-full bg-gray-900 px-5 py-2 text-sm font-semibold text-white transition hover:bg-gray-800"
              >
                Sign In
              </button>
              <p className="text-xs text-gray-500">
                Change the password in `app/admin/page.js` before going live.
              </p>
            </form>
          </section>
        ) : (
          <section className="rounded-3xl bg-white p-8 shadow-xl">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <h2 className="text-xl font-semibold text-gray-900">
                Latest submissions
              </h2>
              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={fetchSubmissions}
                  className="rounded-full border border-gray-200 px-4 py-2 text-sm font-semibold text-gray-700 transition hover:bg-gray-100"
                >
                  Refresh
                </button>
                <Link
                  href="/inquiry"
                  className="rounded-full bg-indigo-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-indigo-700"
                >
                  Contact Form
                </Link>
              </div>
            </div>

            {isLoading && (
              <p className="mt-4 text-sm text-gray-500">Loading submissions...</p>
            )}
            {errorMessage && (
              <p className="mt-4 text-sm text-red-600">{errorMessage}</p>
            )}
            {!isLoading && submissions.length === 0 && !errorMessage && (
              <p className="mt-4 text-sm text-gray-500">
                No submissions yet.
              </p>
            )}

            {submissions.length > 0 && (
              <div className="mt-6 overflow-auto rounded-2xl border border-gray-200">
                <table className="min-w-full text-left text-sm">
                  <thead className="bg-gray-50 text-gray-600">
                    <tr>
                      <th className="px-4 py-3 font-semibold">Name</th>
                      <th className="px-4 py-3 font-semibold">Phone</th>
                      <th className="px-4 py-3 font-semibold">Email</th>
                      <th className="px-4 py-3 font-semibold">Message</th>
                      <th className="px-4 py-3 font-semibold">Submitted</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {submissions.map((submission) => (
                      <tr key={submission.id}>
                        <td className="px-4 py-3 text-gray-900">
                          {submission.name}
                        </td>
                        <td className="px-4 py-3 text-gray-700">
                          {submission.phone}
                        </td>
                        <td className="px-4 py-3 text-gray-700">
                          {submission.email}
                        </td>
                        <td className="px-4 py-3 text-gray-700">
                          {submission.message}
                        </td>
                        <td className="px-4 py-3 text-gray-700">
                          {submission.created_at
                            ? new Date(submission.created_at).toLocaleString()
                            : '—'}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </section>
        )}
      </div>
    </main>
  );
}
