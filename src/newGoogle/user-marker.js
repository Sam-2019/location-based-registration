import React from "react";
import { Marker } from "react-google-maps";

const BLACK_MARKER = "https://i.imgur.com/8dOrls4.png?2";
const GREEN_MARKER = "https://i.imgur.com/9v6uW8U.png";

const UserMarker = ({ distance }) => {
  const userLocation = {
    lat: 5.755128,
    lng: 0.050256
  };

  const MARKER_SIZE = new google.maps.Size(25, 35);
  const MARKER_ICON = distance ? GREEN_MARKER : BLACK_MARKER;

  return (
    <>
      <Marker
        position={userLocation}
        title="You"
        options={{ icon: { url: MARKER_ICON, scaledSize: MARKER_SIZE } }}
      />
    </>
  );
};

export default UserMarker;
