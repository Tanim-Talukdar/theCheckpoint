"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// The Checkpoint - approximate Bashundhara R/A coordinates
const LOCATION = [23.820677610325287, 90.42723974608134];

// Custom blue marker
const checkpointIcon = new L.DivIcon({
  className: "checkpoint-marker",
  html: `
    <div style="
      width: 42px;
      height: 42px;
      border-radius: 50%;
      background: rgba(37, 99, 235, 0.18);
      border: 1px solid rgba(59, 130, 246, 0.7);
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 0 30px rgba(37, 99, 235, 0.45);
    ">
      <div style="
        width: 14px;
        height: 14px;
        border-radius: 50%;
        background: #3b82f6;
        box-shadow: 0 0 15px rgba(59, 130, 246, 0.9);
      "></div>
    </div>
  `,
  iconSize: [42, 42],
  iconAnchor: [21, 21],
});

export default function LocationMap() {
  return (
    <div className="relative h-[260px] w-full overflow-hidden rounded-2xl border border-white/10">
      
      {/* Dark overlay */}
      <div className="pointer-events-none absolute inset-0 z-[400] bg-blue-500/[0.02]" />

      <MapContainer
        center={LOCATION}
        zoom={16}
        scrollWheelZoom={false}
        className="h-full w-full"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <Marker position={LOCATION} icon={checkpointIcon}>
          <Popup>
            <div className="text-black">
              <strong>The Checkpoint</strong>
              <br />
              Bashundhara R/A, Dhaka
            </div>
          </Popup>
        </Marker>
      </MapContainer>

      {/* Map gradient */}
      <div className="pointer-events-none absolute inset-0 z-[401] bg-gradient-to-t from-[#030712]/70 via-transparent to-transparent" />

      {/* LIVE LOCATION LABEL */}
      <div className="pointer-events-none absolute bottom-4 left-4 z-[402] flex items-center gap-2 rounded-lg border border-white/10 bg-[#030712]/80 px-3 py-2 backdrop-blur-md">
        <span className="h-2 w-2 animate-pulse rounded-full bg-blue-500" />

        <span className="text-[9px] font-bold tracking-[0.18em] text-white/70">
          THE CHECKPOINT
        </span>
      </div>
    </div>
  );
}