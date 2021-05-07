import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Loader from "./Loader";
import MapLoader from "./googleMaps/MapLoader";

export default function Home() {
  let history = useHistory();
  const [loading, setLoading] = useState(true);
  const [map, setMap] = useState(false);

  useEffect(() => {
    let didCancel = false;

    const checkToken = () => {
      const token = localStorage.getItem("signupTOKEN");

      if (!didCancel) {
        const timer = setTimeout(() => {
          if (token) {
            setLoading(false);
            setMap(true);
          } else {
            history.push("./signup");
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

      {map ? <MapLoader /> : null}
    </>
  );
}
