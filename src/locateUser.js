import React from "react";
import { geolocated } from "react-geolocated";

function Demo() {
  const { isGeolocationAvailable, isGeolocationEnabled, coords } = geolocated();
  return !isGeolocationAvailable ? (
    <div>Your browser does not support Geolocation</div>
  ) : !isGeolocationEnabled ? (
    <div>Geolocation is not enabled</div>
  ) : coords ? (
    <>
      <>{coords.latitude}</>

      <>{coords.longitude}</>

      <>{coords.altitude}</>

      <>{coords.heading}</>

      <>{coords.speed}</>
    </>
  ) : (
    <div>Getting the location data&hellip; </div>
  );
}

export default geolocated({
  positionOptions: {
    enableHighAccuracy: false
  },
  userDecisionTimeout: 5000
})(Demo);
