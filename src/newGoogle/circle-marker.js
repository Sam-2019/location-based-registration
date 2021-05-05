import React from "react";
import { Circle } from "react-google-maps";

const CircleMarker = ({ center }) => {
  const regionOptions = {
    fillOpacity: 0.1,
    strokeWidth: 1,
    strokeOpacity: 0.2
  };

  const radius = 17.18;

  return <Circle center={center} radius={radius} options={regionOptions} />;
};

export default CircleMarker;
