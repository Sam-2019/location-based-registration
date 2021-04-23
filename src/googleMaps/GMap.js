import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import Location from "../component/Location";

const GMap = ({ radius, currentLocation, currentError }) => {
  const [distance, setDistance] = useState(0);

  const googleMapRef = useRef(null);
  let googleMap = null;

  const containerStyle = {
    width: "100%",
    height: "500px"
  };

  const center = {
    lat: 5.755071140968645,
    lng: 0.05037
  };

  const userLocation = {
    // lat: currentLocation.lat ,
    // lng: currentLocation.lng
    lat: 5.754484382930839,
    lng: 0.050190650641205724
  };

  useEffect(() => {
    googleMap = initGoogleMap();
  }, []);

  const initGoogleMap = () => {
    const map = new google.maps.Map(googleMapRef.current, {
      center: center,
      zoom: 20,
      mapTypeId: "satellite",
      radius: radius
    });

    const premisesContent =
      '<div id="content">' +
      '<div id="siteNotice">' +
      "</div>" +
      '<h1 id="firstHeading" class="firstHeading">Premises</h1>' +
      "</div>";

    const premisesInfo = new google.maps.InfoWindow({
      content: premisesContent
    });

    const premises = new google.maps.Marker({
      position: center,
      map: map
    });
    premises.addListener("click", () => {
      premisesInfo.open(map, premises);
    });

    const userContent =
      '<div id="content">' +
      '<div id="siteNotice">' +
      "</div>" +
      '<h1 id="firstHeading" class="firstHeading">Current Location</h1>' +
      "</div>";

    const userInfo = new google.maps.InfoWindow({
      content: userContent
    });

    const user = new google.maps.Marker({
      position: userLocation,
      map
    });
    user.addListener("click", () => {
      userInfo.open(map, user);
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

    const poly = new google.maps.Polyline({
      strokeColor: "#FF0000",
      strokeOpacity: 1.0,
      strokeWeight: 3,
      map: map
    });

    const geodesicPoly = new google.maps.Polyline({
      strokeColor: "#CC0099",
      strokeOpacity: 1.0,
      strokeWeight: 3,
      geodesic: true,
      map: map
    });

    const path = [premises.getPosition(), user.getPosition()];
    poly.setPath(path);
    geodesicPoly.setPath(path);
  };

  // console.log(center);
  //console.log(currentLocation);

  useEffect(() => {
    let didCancel = false;

    async function compute() {
      const to = await new google.maps.LatLng(center);
      const from = await new google.maps.LatLng(userLocation);

      const distanceMeters = await google.maps.geometry.spherical.computeDistanceBetween(
        from,
        to
      );

      if (!didCancel) {
        setDistance(distanceMeters);
      }

      // console.log("Distance in Meters: ", distanceMeters);
    }

    compute();

    return () => {
      didCancel = true;
    };
  }, []);

  return (
    <div>
      <div ref={googleMapRef} style={containerStyle} />

      {/* <p>Current position:</p>
      <Location location={currentLocation} error={currentError} /> */}

      <div style={{ marginTop: 10, marginBottom: 10 }}>
        You are {Math.round(distance)} meters away from Premises
      </div>

      <div>
        {distance >= radius
          ? "Outside range. Cant Register!"
          : "Please Register"}
      </div>
    </div>
  );
};

export default GMap;

GMap.propTypes = {
  radius: PropTypes.number,
  currentLocation: PropTypes.object,
  currentError: PropTypes.object
};
