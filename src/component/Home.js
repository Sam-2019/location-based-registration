import React, { useState, useEffect } from "react";
import Loader from "./Loader";
import { useLocalStorage } from "../hooks/useLocalStorage";
import Map from "../Map";
import Signup from "./sign-up";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [map, setMap] = useState(false);
  const [signup, setSignup] = useState(false);
  const auth = useLocalStorage("sign-up", "");

  //console.log(auth[0].token);

  useEffect(() => {
    let didCancel = false;

    const checkToken = () => {
      const token = localStorage.getItem("sign-up");

      if (!didCancel) {
        const timer = setTimeout(() => {
          if (token) {
            setLoading(false);
            setMap(true);
          } else {
            setLoading(false);
            setSignup(true);
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
      <>{loading ? <Loader /> : null}</>

      {map ? <Map /> : null}

      {signup ? <Signup /> : null}
    </>
  );
}
