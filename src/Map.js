import React, { useState, useEffect } from "react";
import GoogleMap from "./googleMaps/new-maps";
import useCurrentLocation from "./hooks/useCurrentLocation";
import useWatchLocation from "./hooks/useWatchLocation";
import { geolocationOptions } from "./constants/geolocationOptions";
import Signup from "./component/sign-up";
import Register from "./component/register";
import Success from "./component/registerSuccess";

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

  //console.log(isWatchinForLocation.toString());

  const loginToken = localStorage.getItem("sign-up");

  console.log(loginToken);

  return (
    <>
      <GoogleMap
        radius={radius}
        currentLocation={currentLocation}
        currentError={currentError}
        isWatchinForLocation={isWatchinForLocation}
      />
    </>
  );
};

export default Map;
