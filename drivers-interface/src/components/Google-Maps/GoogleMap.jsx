import React, { useState, useEffect } from "react";
import { GoogleMap, LoadScript, DirectionsRenderer } from "@react-google-maps/api";

const DriverNav = () => {
  const [directionsResponse, setDirectionsResponse] = useState(null);
  const [distance, setDistance] = useState("");

  const origin = { lat: 37.7749, lng: -122.4194 }; // San Francisco
  const destination = { lat: 34.0522, lng: -118.2437 }; // Los Angeles

  const fetchDirections = () => {
    if (window.google && window.google.maps) {
      const directionsService = new window.google.maps.DirectionsService();
      directionsService.route(
        {
          origin: origin,
          destination: destination,
          travelMode: window.google.maps.TravelMode.DRIVING,
        },
        (result, status) => {
          if (status === window.google.maps.DirectionsStatus.OK) {
            setDirectionsResponse(result);

            const distanceText = result.routes[0].legs[0].distance.text; // Distance in readable format
            setDistance(distanceText);
          } else {
            console.error("Directions request failed due to " + status);
          }
        }
      );
    }
  };

  // Only fetch directions after the API is loaded
  useEffect(() => {
    if (window.google && window.google.maps) {
      fetchDirections();
    }
  }, []);

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <LoadScript 
        googleMapsApiKey="AIzaSyD620DruAxWVA_iAuGrbaDo2XSni-T8t8c"
        onLoad={fetchDirections} // Ensures directions are fetched after the API is loaded
      >
        <GoogleMap
          mapContainerStyle={{ width: "100%", height: "100%" }}
          zoom={7}
          center={origin}
        >
          {directionsResponse && <DirectionsRenderer directions={directionsResponse} />}
        </GoogleMap>

        {/* Display Distance */}
        <div style={{
          position: "absolute", 
          top: "10px", 
          left: "10px", 
          background: "#fff", 
          padding: "10px", 
          borderRadius: "4px"
        }}>
          <h3>Shortest Distance:</h3>
          <p>{distance}</p>
        </div>
      </LoadScript>
    </div>
  );
}

export default DriverNav;
