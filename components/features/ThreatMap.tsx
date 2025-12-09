"use client";

import { MapContainer, TileLayer, Marker, Popup, Circle } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { useEffect } from "react";

// Fix for Leaflet marker icons in Next.js
const iconUrl = "https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon.png";
const iconRetinaUrl = "https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon-2x.png";
const shadowUrl = "https://unpkg.com/leaflet@1.9.3/dist/images/marker-shadow.png";

const customIcon = new L.Icon({
    iconUrl,
    iconRetinaUrl,
    shadowUrl,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
});

const threats = [
    {
        id: 1,
        title: "Sahel Jihadist Insurgency",
        position: [13.51, 2.12] as [number, number], // Approximate location near Niger/Burkina border
        description: "High activity of JNIM and ISGS groups. Cross-border attacks frequent.",
        intensity: "High",
        color: "#ef4444", // Red
        radius: 150000,
    },
    {
        id: 2,
        title: "Northwest Banditry",
        position: [12.17, 6.66] as [number, number], // Zamfara State
        description: "Kidnapping for ransom and cattle rustling syndicates operating in forests.",
        intensity: "High",
        color: "#f97316", // Orange
        radius: 100000,
    },
    {
        id: 3,
        title: "Gulf of Guinea Piracy",
        position: [3.5, 5.5] as [number, number], // Offshore Niger Delta
        description: "Piracy incidents targeting oil tankers and commercial shipping.",
        intensity: "Medium",
        color: "#eab308", // Yellow
        radius: 200000,
    },
    {
        id: 4,
        title: "Middle Belt Conflicts",
        position: [7.73, 8.52] as [number, number], // Benue State
        description: "Farmer-herder resource disputes and communal violence.",
        intensity: "Medium",
        color: "#f97316", // Orange
        radius: 80000,
    },
];

export default function ThreatMap() {
    // Ensure map only renders on client
    useEffect(() => {
        // This effect runs only on client
    }, []);

    return (
        <div className="h-[600px] w-full rounded-2xl overflow-hidden border border-white/10 z-0 relative">
            <MapContainer
                center={[9.082, 8.6753]} // Center of Nigeria
                zoom={5}
                scrollWheelZoom={false}
                style={{ height: "100%", width: "100%" }}
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
                    url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
                />

                {threats.map((threat) => (
                    <div key={threat.id}>
                        <Circle
                            center={threat.position}
                            pathOptions={{ color: threat.color, fillColor: threat.color, fillOpacity: 0.2 }}
                            radius={threat.radius}
                        />
                        <Marker position={threat.position} icon={customIcon}>
                            <Popup className="custom-popup">
                                <div className="p-2">
                                    <h3 className="font-bold text-gray-900">{threat.title}</h3>
                                    <p className="text-sm text-gray-700 my-1">{threat.description}</p>
                                    <span className={`text-xs font-bold px-2 py-1 rounded-full text-white ${threat.intensity === "High" ? "bg-red-500" : "bg-yellow-500"
                                        }`}>
                                        {threat.intensity} Intensity
                                    </span>
                                </div>
                            </Popup>
                        </Marker>
                    </div>
                ))}
            </MapContainer>
        </div>
    );
}
