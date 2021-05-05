import React from "react";
import { Marker } from "react-google-maps";

function DestinationMarker() {
  const destination = {
    lat: 5.755071140968645,
    lng: 0.05037
  };

  const MARKER_SIZE = new google.maps.Size(50, 70);
  const MARKER_ICON = "https://i.imgur.com/Rhv5xQh.png";

  return (
    <Marker
      position={destination}
      title="Destination"
      options={{ icon: { url: MARKER_ICON, scaledSize: MARKER_SIZE } }}
    />
  );
}

export default DestinationMarker;
