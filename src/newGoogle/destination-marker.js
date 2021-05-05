import React from "react";
import { Marker, Circle } from "react-google-maps";

function DestinationMarker() {
  const regionOptions = {
    fillOpacity: 0.1,
    strokeWidth: 1,
    strokeOpacity: 0.2
  };

  const destination = {
    lat: 5.755071140968645,
    lng: 0.05037
  };

  const radius = 17.18;

  const MARKER_SIZE = new google.maps.Size(50, 70);
  const MARKER_ICON = "https://i.imgur.com/Rhv5xQh.png";

  return (
    <>
      <Marker
        position={destination}
        title="Destination"
        options={{ icon: { url: MARKER_ICON, scaledSize: MARKER_SIZE } }}
      />
      <Circle center={destination} radius={radius} options={regionOptions} />
    </>
  );
}

export default DestinationMarker;
