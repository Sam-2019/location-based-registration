import React, { useState, useEffect } from "react";
import GoogleMap from "./googleMaps/new-maps";
import useCurrentLocation from "./hooks/useCurrentLocation";
import useWatchLocation from "./hooks/useWatchLocation";
import { geolocationOptions } from "./constants/geolocationOptions";
import computeDistance from "./hooks/computeDistance";
import Location from "./component/Location";

const radius = 17.18;

const Map = () => {
  const { location: currentLocation, error: currentError } = useCurrentLocation(
    geolocationOptions
  );
  const { location, cancelLocationWatch, error } = useWatchLocation(
    geolocationOptions
  );
  const [isWatchinForLocation, setIsWatchForLocation] = useState(true);

  // const { distance } = computeDistance();

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
      {location === undefined ? (
        <GoogleMap radius={radius} />
      ) : (
        <>
          <p>Current position:</p>
          <Location location={currentLocation} error={currentError} />
        </>
      )}

      {/* <p>Watch position: (Status: {isWatchinForLocation.toString()})</p>
      <Location location={location} error={error} /> */}

      {/* {distance} */}

      {/* {distance <= radius ? <> Cant register </> : <> Please register </>} */}
    </>
  );
};

export default Map;
