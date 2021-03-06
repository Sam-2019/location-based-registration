import React from "react";
import MapContainer from "./MapContanier";

const API_KEY = process.env.GMAPS_API_KEY;
const MAP_URL = `https://maps.googleapis.com/maps/api/js?key=${API_KEY}&v=3.exp&libraries=geometry`;

const Map = () => {
  const containerStyles = {
    height: "100%",
    width: "100%",
    position: "relative"
  };

  return (
    <MapContainer
      googleMapURL={MAP_URL}
      loadingElement={<div style={containerStyles} />}
      containerElement={<div style={containerStyles} />}
      mapElement={<div style={containerStyles} />}
    />
  );
};

export default Map;
