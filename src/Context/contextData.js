import React, { useState, useRef } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

const Data = () => {
  const [token] = useLocalStorage("signupTOKEN", "");
  const [auth] = useLocalStorage("signupID", "");

  const [currentLat, setCurrentLat] = useState(0);
  const [currentLong, setCurrentLong] = useState(0);
  // const [currentPositionError, setCurrentPositionError] = useState("");

  const [watchLat, setwatchLat] = useState(0);
  const [watchLong, setwatchLong] = useState(0);
  // const [watchPositionError, setWatchPositionError] = useState("");

  const [locationError, setLocationError] = useState("");

  const locationWatchId = useRef(null);

  // Success handler for geolocation's `getCurrentPosition` method
  const currentPositionSuccess = (pos) => {
    const { latitude, longitude } = pos.coords;

    setCurrentLat(latitude);
    setCurrentLong(longitude);
  };

  // const currentError = (error) => {
  //   setCurrentPositionError(error.message);
  // };

  // Success handler for geolocation's `watchPosition` method
  const watchPositionSuccess = (pos) => {
    const { latitude, longitude } = pos.coords;

    setwatchLat(latitude);
    setwatchLong(longitude);
  };

  const handleError = (error) => {
    setLocationError(error.message);
  };

  // Clears the watch instance based on the saved watch id
  const cancelLocationWatch = () => {
    const { geolocation } = navigator;

    if (locationWatchId.current && geolocation) {
      geolocation.clearWatch(locationWatchId.current);
    }
  };

  // Error handler for geolocation's `watchPosition` method
  // const watchError = (error) => {
  //   setWatchPositionError(error.message);
  // };

  React.useEffect(() => {
    let didCancel = false;

    async function currentPosition() {
      const options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
      };

      const { geolocation } = navigator;

      if (!didCancel) {
        if (!geolocation) {
          setLocationError("Geolocation is not supported.");
          return;
        }

        // Call Geolocation API
        geolocation.getCurrentPosition(
          currentPositionSuccess,
          handleError,
          options
        );

        // Start to watch the location with the Geolocation API
        locationWatchId.current = geolocation.watchPosition(
          watchPositionSuccess,
          handleError,
          options
        );
      }
    }

    currentPosition();

    return () => {
      didCancel = true;
      cancelLocationWatch();
    };
  }, []);

  return {
    token,
    auth,
    currentLat,
    currentLong,
    watchLat,
    watchLong,
    // currentPositionError,
    // watchPositionError,
    locationError
  };
};

export default Data;
