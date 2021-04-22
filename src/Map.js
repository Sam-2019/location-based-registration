import React, { useState, useEffect } from "react";
import GoogleMap from "./googleMaps/new-maps";
import useCurrentLocation from "./hooks/useCurrentLocation";
import useWatchLocation from "./hooks/useWatchLocation";
import { geolocationOptions } from "./constants/geolocationOptions";
import Location from "./component/Location";

function Map() {
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
      <GoogleMap />
      <p>Current position:</p>
      <Location location={currentLocation} error={currentError} />

      <p>Watch position: (Status: {isWatchinForLocation.toString()})</p>
      <Location location={location} error={error} />
    </>
  );
}

export default Map;
