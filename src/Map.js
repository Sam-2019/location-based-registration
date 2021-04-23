import React, { useState, useEffect } from "react";
import GoogleMap from "./googleMaps/new-maps";
import useCurrentLocation from "./hooks/useCurrentLocation";
import useWatchLocation from "./hooks/useWatchLocation";
import { geolocationOptions } from "./constants/geolocationOptions";

const radius = 17.18;

const Map = () => {
  const { location: currentLocation, error: currentError } = useCurrentLocation(
    geolocationOptions
  );
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

  return (
    <>
      <GoogleMap
        radius={radius}
        currentLocation={currentLocation}
        currentError={currentError}
      />

      {/* <p>Watch position: (Status: {isWatchinForLocation.toString()})</p>
      <Location location={location} error={error} /> */}
    </>
  );
};

export default Map;
