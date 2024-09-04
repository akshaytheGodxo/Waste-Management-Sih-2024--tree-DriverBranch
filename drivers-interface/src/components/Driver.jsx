import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import { useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import 'leaflet-routing-machine';
import axios from 'axios';

// Custom color and styles for the divIcon
const myCustomColour = '#583470';

const markerHtmlStyles = `
  background-color: ${myCustomColour};
  width: 3rem;
  height: 3rem;
  display: block;
  left: -1.5rem;
  top: -1.5rem;
  position: relative;
  border-radius: 3rem 3rem 0;
  transform: rotate(45deg);
  border: 1px solid #FFFFFF;
`;

const createCustomIcon = (color) => {
  const iconHtmlStyles = `
    background-color: ${color};
    width: 3rem;
    height: 3rem;
    display: block;
    left: -1.5rem;
    top: -1.5rem;
    position: relative;
    border-radius: 3rem 3rem 0;
    transform: rotate(45deg);
    border: 1px solid #FFFFFF;
  `;

  return L.divIcon({
    className: "my-custom-pin",
    iconAnchor: [0, 24],
    labelAnchor: [-6, 0],
    popupAnchor: [0, -36],
    html: `<span style="${iconHtmlStyles}" />`
  });
};

const RoutingMachine = ({ start, destinations }) => {
  const map = useMap();

  useEffect(() => {
    if (!map || !start || !destinations.length) return;

    const routingControl = L.Routing.control({
      waypoints: [
        L.latLng(start[0], start[1]),
        ...destinations.map((dest) => L.latLng(dest[0], dest[1])),
      ],
      routeWhileDragging: true,
      createMarker: (i, waypoint, n) => {
        const color = i === 0 ? 'green' : i === n - 1 ? 'red' : 'blue'; // Different color markers
        return L.marker(waypoint.latLng, {
          icon: createCustomIcon(color),
        });
      },
    }).addTo(map);

    return () => map.removeControl(routingControl);
  }, [map, start, destinations]);

  return null;
};

const geocodeLocation = async (location) => {
  try {
    const response = await fetch(
      `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(location)}`
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
  const [endLocations, setEndLocations] = useState([]);

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

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get('http://localhost:5000/orders');
        const orders = response.data;

        const locationPromises = orders.map(async (order) => {
          const coordinates = await geocodeLocation(order.location);
          if (coordinates) {
            return [coordinates.latitude, coordinates.longitude];
          }
          return null;
        });

        const locations = await Promise.all(locationPromises);
        setEndLocations(locations.filter((loc) => loc !== null));
      } catch (error) {
        console.error('Error fetching orders:', error);
      }
    };

    fetchOrders();
  }, []);

  return (
    <div>
      <MapContainer
        center={startLocation || [51.505, -0.09]} // Initial center
        zoom={13}
        style={{ height: '100vh', width: '100%' }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {startLocation && endLocations.length > 0 && (
          <>
            <Marker position={startLocation} icon={createCustomIcon('green')} />
            {endLocations.map((location, index) => (
              <Marker key={index} position={location} icon={createCustomIcon('blue')} />
            ))}
            <RoutingMachine start={startLocation} destinations={endLocations} />
          </>
        )}
      </MapContainer>
    </div>
  );
};

export default MapComponent;
