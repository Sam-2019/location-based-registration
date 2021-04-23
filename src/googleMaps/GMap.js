import React, { useEffect, useRef } from "react";

const containerStyle = {
  width: "100%",
  height: "800px"
};

const GMap = ({ radius }) => {
  const googleMapRef = useRef(null);
  let googleMap = null;

  const center = {
    lat: 5.755071140968645,
    lng: 0.05037
  };
  const userLocation = {
    lat: 5.754484382930839,
    lng: 0.050190650641205724
  };

  useEffect(() => {
    googleMap = initGoogleMap();
  }, []);

  // initialize the google map
  const initGoogleMap = (distance) => {
    const map = new google.maps.Map(googleMapRef.current, {
      center: center,
      zoom: 20,
      mapTypeId: "satellite",
      radius: radius
    });

    new google.maps.Marker({
      position: center,
      map: map
    });

    new google.maps.Marker({
      position: userLocation,
      map,
      title: "Hello World!"
    });

    new google.maps.Circle({
      fillOpacity: 0.1,
      strokeWidth: 1,
      strokeOpacity: 0.1,
      fillColor: "green",
      map: map,
      center: center,
      radius: radius,
      draggable: false
    });
  };

  return <div ref={googleMapRef} style={containerStyle} />;
};

export default GMap;
