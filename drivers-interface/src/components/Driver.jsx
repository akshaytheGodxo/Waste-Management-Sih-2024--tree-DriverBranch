import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import 'leaflet-routing-machine';

const RoutingMachine = ({ start, end }) => {
  const map = useMap();

  useEffect(() => {
    if (!map) return;

    const routingControl = L.Routing.control({
      waypoints: [
        L.latLng(start[0], start[1]),
        L.latLng(end[0], end[1]),
      ],
      routeWhileDragging: true,
    }).addTo(map);

    return () => map.removeControl(routingControl);
  }, [map, start, end]);

  return null;
};

const geocodeLocation = async (location) => {
  try {
    const response = await fetch(
      `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(
        location
      )}`
    );
    const data = await response.json();

    if (data.length > 0) {
      const { lat, lon } = data[0];
      return {
        latitude: parseFloat(lat),
        longitude: parseFloat(lon),
      };
    } else {
      throw new Error('Location not found');
    }
  } catch (error) {
    console.error('Geocoding error:', error);
    return null;
  }
};

const MapComponent = () => {
  const [startLocation, setStartLocation] = useState(null);
  const [endLocation, setEndLocation] = useState(null);
  const [destination, setDestination] = useState('');

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setStartLocation([latitude, longitude]);
      },
      (error) => {
        console.error('Error getting user location:', error);
        setStartLocation([51.505, -0.09]); // Fallback location
      }
    );
  }, []);

  const handleDestinationSubmit = async () => {
    const coordinates = await geocodeLocation(destination);
    if (coordinates) {
      setEndLocation([coordinates.latitude, coordinates.longitude]);
    } else {
      alert('Destination not found');
    }
  };

  return (
    <div>
      <input
        type="text"
        value={destination}
        onChange={(e) => setDestination(e.target.value)}
        placeholder="Enter destination"
      />
      <button onClick={handleDestinationSubmit}>Show Route</button>
      <MapContainer
        center={startLocation || [51.505, -0.09]} // Initial center
        zoom={13}
        style={{ height: '100vh', width: '100%' }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {startLocation && endLocation && (
          <RoutingMachine start={startLocation} end={endLocation} />
        )}
      </MapContainer>
    </div>
  );
};

export default MapComponent;
