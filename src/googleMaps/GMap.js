import React, { useEffect, useRef, useState } from "react";

const radius = 17.18;

const containerStyle = {
  width: "100%",
  height: "800px"
};

const GMap = () => {
  const [distance, setDistance] = useState(0);
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
    computeDistance();
  }, []);

  // initialize the google map
  const initGoogleMap = () => {
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

  const computeDistance = () => {
    const to = new google.maps.LatLng(5.755071140968645, 0.05037);
    const from = new google.maps.LatLng(
      5.754484382930839,
      0.050190650641205724
    );

    const distanceMeters = google.maps.geometry.spherical.computeDistanceBetween(
      from,
      to
    );

    setDistance(distanceMeters);
  //  console.log("Distance in Meters: ", distanceMeters);
  };

  return <div ref={googleMapRef} style={containerStyle} />;
};

export default GMap;
