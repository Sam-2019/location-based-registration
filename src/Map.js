import React from "react";
import GoogleMap from "./googleMaps/new-maps";
import MapGeo from "./newGoogle/google-map";

const radius = 17.18;

const Map = () => {
  return <GoogleMap radius={radius} />;
};

export default Map;
