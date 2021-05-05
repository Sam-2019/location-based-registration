import React, { useState } from "react";
import { useLocalStorage } from "./hooks/useLocalStorage";

const Data = () => {
  const [token] = useLocalStorage("signupTOKEN", "");
  const [auth] = useLocalStorage("signupID", "");
  const [error, setError] = useState();
  const [lat, setLat] = useState(0);
  const [long, setLong] = useState(0);

  // Success handler for geolocation's `getCurrentPosition` method
  const handleSuccess = (pos) => {
    const { latitude, longitude } = pos.coords;

    setLat(latitude);
    setLong(longitude);
  };

  // Error handler for geolocation's `getCurrentPosition` method
  const handleError = (error) => {
    setError(error.message);
  };

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

        geolocation.getCurrentPosition(handleSuccess, handleError, options);
      }
    }

    currentPosition();

    return () => {
      didCancel = true;
    };
  }, []);

  async function verify() {
    return;
  }

  return {
    token,
    auth,
    lat,
    long,
    error
  };
};

export default Data;
