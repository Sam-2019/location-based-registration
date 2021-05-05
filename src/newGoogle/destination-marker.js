import React from "react";
import { Marker, Circle } from "react-google-maps";

const BLACK_MARKER = "https://i.imgur.com/8dOrls4.png?2";
const GREEN_MARKER = "https://i.imgur.com/9v6uW8U.png";

function UserMarker() {
  const regionOptions = {
    fillOpacity: 0.1,
    strokeWidth: 1,
    strokeOpacity: 0.2
  };

  const center = {
    lat: 5.755071140968645,
    lng: 0.05037
  };

  const userLocation = {
    lat: 5.755128,
    lng: 0.050256
  };

  const MARKER_SIZE = new google.maps.Size(50, 70);
  const MARKER_ICON = "https://i.imgur.com/Rhv5xQh.png";

  const MARKER_SIZE = new google.maps.Size(25, 35);
  const MARKER_ICON = within ? GREEN_MARKER : BLACK_MARKER;

  return (
    <>
      <Marker
        position={userLocation}
        title="You"
        options={{ icon: { url: MARKER_ICON, scaledSize: MARKER_SIZE } }}
      />
      <Circle center={center} radius={17.18} options={regionOptions} />
    </>
  );
}

export default UserMarker;
