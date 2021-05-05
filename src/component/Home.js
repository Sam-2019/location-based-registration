import React, { useState, useEffect } from "react";
import Loader from "./Loader";
import Map from "../Map";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [map, setMap] = useState(false);

  //console.log(auth[0].token);

  useEffect(() => {
    let didCancel = false;

    const checkToken = () => {
      const token = localStorage.getItem("signupTOKEN");

      if (!didCancel) {
        const timer = setTimeout(() => {
          if (token) {
            setLoading(false);
            setMap(true);
          }
        }, 3000);

        return () => clearTimeout(timer);
      }
    };

    checkToken();

    return () => {
      didCancel = true;
    };
  }, []);

  return (
    <>
      {loading ? <Loader /> : null}

      {map ? <Map /> : null}
    </>
  );
}
