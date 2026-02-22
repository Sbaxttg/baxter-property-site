'use client';

const IDX_MAP_SEARCH_URL = 'https://baxterpropertysolutions.idxbroker.com/idx/map/mapsearch';

export default function ActiveListingsPage() {
  return (
    <main className="flex min-h-screen flex-col bg-gray-50">
      <div className="border-b border-gray-200 bg-white px-4 py-3 shadow-sm">
        <p className="text-center text-sm text-gray-600">
          Search live MLS listings below. Results are pulled directly from the MLS via IDX Broker.
        </p>
      </div>
      <div className="relative flex-1" style={{ minHeight: 'calc(100vh - 140px)' }}>
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
