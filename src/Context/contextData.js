import React, { useState } from "react";
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

  const [error, setError] = useState("");

  // Success handler for geolocation's `getCurrentPosition` method
  const currentPositionSuccess = (pos) => {
    const { latitude, longitude } = pos.coords;

    setCurrentLat(latitude);
    setCurrentLong(longitude);
  };

  const handleError = (error) => {
    setError(error.message);
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

  // Error handler for geolocation's `watchPosition` method
  // const watchError = (error) => {
  //   setWatchPositionError(error.message);
  // };

  React.useEffect(() => {
    let didCancel = false;

    async function currentPosition() {
      var options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
      };

      const { geolocation } = navigator;

      if (!didCancel) {
        if (!geolocation) {
          setError("Geolocation is not supported.");
          return;
        }

        geolocation.getCurrentPosition(
          currentPositionSuccess,
          handleError,
          options
        );
        geolocation.watchPosition(watchPositionSuccess, handleError, options);
      }
    }

    currentPosition();

    return () => {
      didCancel = true;
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
    error
  };
};

export default Data;
