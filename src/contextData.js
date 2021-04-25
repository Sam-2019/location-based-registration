import React, { useState } from "react";
import { useLocalStorage } from "./hooks/useLocalStorage";

const Data = () => {
  const [auth, setAuth] = useLocalStorage("sign-up", "");
  const [lat, setLat] = useState(0);
  const [long, setLong] = useState(0);

  console.log(auth);

  React.useEffect(() => {
    let didCancel = false;

    async function currentPosition() {
      const { geolocation } = navigator;

      if (!didCancel) {
        geolocation.getCurrentPosition(function (position) {
          const pos = [position.coords.latitude, position.coords.longitude];
          // console.log(pos);
          setLat(pos[0]);
          setLong(pos[1]);
        });
      }
    }

    currentPosition();

    return () => {
      didCancel = true;
    };
  }, []);

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
    long
  };
};

export default Data;
