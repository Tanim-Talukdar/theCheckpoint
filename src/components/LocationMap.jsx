"use client";

import { useEffect, useState } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
} from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const LOCATION = [23.820677610325287, 90.42723974608134];

function createCheckpointIcon() {
  return new L.DivIcon({
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
          color: #3b82f6;
          font-size: 22px;
          filter: drop-shadow(0 0 8px rgba(59, 130, 246, 0.9));
        ">
          <svg
            viewBox="0 0 384 512"
            width="22"
            height="22"
            fill="#3b82f6"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.929 13.774-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"/>
          </svg>
        </div>
      </div>
    `,
    iconSize: [42, 42],
    iconAnchor: [21, 21],
  });
}

export default function LocationMap() {
  const [icon, setIcon] = useState(null);

  useEffect(() => {
    setIcon(createCheckpointIcon());
  }, []);

  if (!icon) {
    return (
      <div className="relative h-[260px] w-full overflow-hidden rounded-2xl border border-white/10 bg-[#07101c]" />
    );
  }

  return (
    <div className="relative h-[260px] w-full overflow-hidden rounded-2xl border border-white/10">
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

        <Marker position={LOCATION} icon={icon}>
          <Popup>
            <div className="text-black">
              <strong>The Checkpoint</strong>
              <br />
              Bashundhara R/A, Dhaka
            </div>
          </Popup>
        </Marker>
      </MapContainer>

      <div className="pointer-events-none absolute inset-0 z-[401] bg-gradient-to-t from-[#030712]/70 via-transparent to-transparent" />

      <div className="pointer-events-none absolute bottom-4 left-4 z-[402] flex items-center gap-2 rounded-lg border border-white/10 bg-[#030712]/80 px-3 py-2 backdrop-blur-md">
        <span className="h-2 w-2 animate-pulse rounded-full bg-blue-500" />

        <span className="text-[9px] font-bold tracking-[0.18em] text-white/70">
          THE CHECKPOINT
        </span>
      </div>
    </div>
  );
}