'use client';

import { useState } from 'react';

const IDX_ADVANCED_SEARCH_URL = 'https://baxterpropertysolutions.idxbroker.com/idx/search/advanced';
const IDX_MAP_SEARCH_URL = 'https://baxterpropertysolutions.idxbroker.com/idx/map/mapsearch';

export default function ActiveListingsPage() {
  const [view, setView] = useState('advanced'); // 'advanced' | 'map'

  const iframeSrc = view === 'map' ? IDX_MAP_SEARCH_URL : IDX_ADVANCED_SEARCH_URL;

  return (
    <main className="flex min-h-screen flex-col bg-gray-50">
      <div className="border-b border-gray-200 bg-white px-4 py-3 shadow-sm">
        <p className="mb-3 text-center text-sm text-gray-600">
          Search live MLS listings below. Results are pulled directly from the MLS via IDX Broker.
        </p>
        <div className="flex justify-center gap-2">
          <button
            type="button"
            onClick={() => setView('advanced')}
            className={`rounded-lg px-4 py-2 text-sm font-medium transition ${
              view === 'advanced'
                ? 'bg-indigo-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            Advanced Search
          </button>
          <button
            type="button"
            onClick={() => setView('map')}
            className={`rounded-lg px-4 py-2 text-sm font-medium transition ${
              view === 'map'
                ? 'bg-indigo-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            Map Search
          </button>
        </div>
      </div>
      <div className="relative flex-1" style={{ minHeight: 'calc(100vh - 180px)' }}>
        <iframe
          key={view}
          src={iframeSrc}
          title={view === 'map' ? 'MLS Map Search - Baxter Property Solutions' : 'MLS Property Search - Baxter Property Solutions'}
          className="absolute inset-0 h-full w-full border-0"
          allowFullScreen
        />
      </div>
    </main>
  );
}
