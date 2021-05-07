import React, { useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

const Data = () => {
  const [token] = useLocalStorage("signupTOKEN", "");
  const [auth] = useLocalStorage("signupID", "");

  const [currentPositionLat, setCurrentPositionLat] = useState(0);
  const [currentPositionLong, setCurrentPositionLong] = useState(0);
  // const [currentPositionError, setCurrentPositionError] = useState("");

  const [watchPositionLat, setwatchPositionLat] = useState(0);
  const [watchPositionLong, setwatchPositionLong] = useState(0);
  // const [watchPositionError, setWatchPositionError] = useState("");

  const [error, setError] = useState("");

  // Success handler for geolocation's `getCurrentPosition` method
  const currentPositionSuccess = (pos) => {
    const { latitude, longitude } = pos.coords;

    setCurrentPositionLat(latitude);
    setCurrentPositionLong(longitude);
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

    setwatchPositionLat(latitude);
    setwatchPositionLong(longitude);
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
    currentPositionLat,
    currentPositionLong,
    watchPositionLat,
    watchPositionLong,
    // currentPositionError,
    // watchPositionError,
    error
  };
};

export default Data;
