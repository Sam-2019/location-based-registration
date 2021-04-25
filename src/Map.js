import React, { useState, useEffect } from "react";
import GoogleMap from "./googleMaps/new-maps";
import useWatchLocation from "./hooks/useWatchLocation";
import { geolocationOptions } from "./constants/geolocationOptions";

const radius = 17.18;

const Map = () => {
  const { location, cancelLocationWatch, error } = useWatchLocation(
    geolocationOptions
  );
  const [isWatchinForLocation, setIsWatchForLocation] = useState(true);

  useEffect(() => {
    if (!location) return;

    // Cancel location watch after 3sec
    setTimeout(() => {
      cancelLocationWatch();
      setIsWatchForLocation(false);
    }, 3000);
  }, [location, cancelLocationWatch]);

  //console.log(isWatchinForLocation.toString());

  return (
    <>
      <GoogleMap radius={radius} isWatchinForLocation={isWatchinForLocation} />
    </>
  );
};

export default Map;
