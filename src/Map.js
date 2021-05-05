import React from "react";
import GoogleMap from "./googleMaps/new-maps";
import AnotherMap from "./googleMaps/google-map";

const radius = 17.18;

const Map = () => {
  return <GoogleMap radius={radius} />;
};

export default Map;
