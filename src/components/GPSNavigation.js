// src/components/GPSNavigation.js
import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Polyline } from "react-leaflet";
import L from "leaflet";

const GPSNavigation = () => {
  const [position, setPosition] = useState([13.0827, 80.2707]); // Default: Chennai
  const [path, setPath] = useState([position]);

  useEffect(() => {
    const watchId = navigator.geolocation.watchPosition(
      (pos) => {
        const coords = [pos.coords.latitude, pos.coords.longitude];
        setPosition(coords);
        setPath((prev) => [...prev, coords]);
      },
      (err) => {
        console.error("GPS error:", err);
      },
      { enableHighAccuracy: true, maximumAge: 10000, timeout: 5000 }
    );

    return () => navigator.geolocation.clearWatch(watchId);
  }, []);

  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <MapContainer center={position} zoom={16} scrollWheelZoom={true} style={{ height: "100%", width: "100%" }}>
        <TileLayer
          attribution='&copy; OpenStreetMap contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position} icon={L.icon({ iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png" })} />
        <Polyline positions={path} color="blue" />
      </MapContainer>
    </div>
  );
};

export default GPSNavigation;
