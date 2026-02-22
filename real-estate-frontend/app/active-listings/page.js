'use client';

const IDX_MAP_SEARCH_URL = 'https://baxterpropertysolutions.idxbroker.com/idx/map/mapsearch';

export default function ActiveListingsPage() {
  return (
    <main className="flex h-[100dvh] max-h-[100dvh] flex-col overflow-hidden bg-gray-50">
      <div className="flex-shrink-0 border-b border-gray-200 bg-white px-3 py-2 sm:px-4 sm:py-3 shadow-sm">
        <p className="text-center text-xs text-gray-600 sm:text-sm">
          Search live MLS listings below. Results are pulled directly from the MLS via IDX Broker.
        </p>
      </div>
      <div className="relative min-h-0 flex-1">
        <iframe
          src={IDX_MAP_SEARCH_URL}
          title="MLS Map Search - Baxter Property Solutions"
          className="absolute inset-0 h-full w-full border-0"
          allowFullScreen
        />
      </div>
    </main>
  );
}
