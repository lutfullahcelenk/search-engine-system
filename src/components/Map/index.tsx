import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const Map = () => {
  const position = { lat: 41.08, lng: 29.05 };

  return (
    <div className="w-full">
      <MapContainer center={position} zoom={12} maxZoom={30} minZoom={2}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.jawg.io/jawg-sunny/{z}/{x}/{y}{r}.png?access-token={accessToken}"
          accessToken="i0sWc78lMuGghhd8kl1ZmmvDbl8hfdBQFZZ2FJzSYdjVcA8neQSJ7IgFuzM30ZX6"
          maxNativeZoom={26}
        />
        <Marker position={position}>
          <Popup>TesoDev is everywhere...</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Map;
