'use client';

import { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

function FitBounds({ listings }) {
  const map = useMap();
  useEffect(() => {
    if (!listings || listings.length === 0) return;
    const bounds = L.latLngBounds(listings.map((l) => [l.lat, l.lng]));
    map.fitBounds(bounds, { padding: [24, 24], maxZoom: 14 });
  }, [map, listings]);
  return null;
}

const defaultIcon = new L.Icon({
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

export default function ListingsMap({ listings, height = '100%' }) {
  const defaultCenter = [38.8816, -77.091];
  const defaultZoom = 10;
  const hasListings = listings && listings.length > 0;

  return (
    <div className="relative h-full w-full rounded-r-lg overflow-hidden" style={{ minHeight: height }}>
      <MapContainer
        center={defaultCenter}
        zoom={defaultZoom}
        className="h-full w-full rounded-r-lg z-0"
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {hasListings && <FitBounds listings={listings} />}
        {listings?.map((listing) => (
          <Marker
            key={listing.id}
            position={[listing.lat, listing.lng]}
            icon={defaultIcon}
          >
            <Popup>
              <div className="text-sm">
                <p className="font-semibold text-gray-900">
                  ${listing.price?.toLocaleString()}
                </p>
                <p className="text-gray-600">
                  {listing.beds} BR | {listing.baths} BA | {listing.sqft?.toLocaleString()} Sqft
                </p>
                <p className="text-gray-700">
                  {listing.address}, {listing.city} {listing.state} {listing.zip}
                </p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
