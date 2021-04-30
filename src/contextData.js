import React, { useState } from "react";
import { useLocalStorage } from "./hooks/useLocalStorage";

const Data = () => {
  const [auth, setAuth] = useLocalStorage("sign-up", "");
  const [error, setError] = useState();
  const [lat, setLat] = useState(0);
  const [long, setLong] = useState(0);

  var options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
  };

  console.log(auth);

  // Success handler for geolocation's `getCurrentPosition` method
  const handleSuccess = (pos) => {
    const { latitude, longitude } = pos.coords;

    setLat(latitude);
    setLong(longitude);

    console.log(latitude);
  };

  // Error handler for geolocation's `getCurrentPosition` method
  const handleError = (error) => {
    setError(error.message);
  };

  React.useEffect(() => {
    let didCancel = false;

    async function currentPosition() {
      const { geolocation } = navigator;

      if (!didCancel) {
        if (!geolocation) {
          setError("Geolocation is not supported.");
          return;
        }

        geolocation.getCurrentPosition(handleSuccess, handleError, options);

        // geolocation.getCurrentPosition(function (position) {
        //   const pos = [position.coords.latitude, position.coords.longitude];
        //   // console.log(pos);
        //   setLat(pos[0]);
        //   setLong(pos[1]);
        // });
      }
    }

    currentPosition();

    return () => {
      didCancel = true;
    };
  }, [options]);

  // async function isLoggedIn() {
  //   const loginToken = localStorage.getItem("sign-up");

  //   if (!loginToken) return;

  //   return setAuth((prevAuth) => !prevAuth);
  // }

  async function verify() {
    return;
  }

  // console.log(lat, "lat");
  //console.log(long, "long");

  return {
    auth,
    lat,
    long,
    error
  };
};

export default Data;
