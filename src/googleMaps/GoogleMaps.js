import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import Register from "../component/register";
import LocationSVG from "../component/locationSVG";
import LocationMarker from "../component/location-marker";
import DistanceOverlay from "../component/distance-overlay";
import { useData } from "../Context/Context";
import { useMutation } from "@apollo/client";
import { useHistory } from "react-router-dom";
import { REGISTER } from "../qraphqlFunctions";
import { MapButton, ExclamationTriangle } from "../constants/helper";

import "./nothing.css";

const radius = 17.18;

const GMap = () => {
  const { currentLat, currentLong, token, auth } = useData();

  let history = useHistory();

  // console.log(lat, long);
  const [distance, setDistance] = useState(0);
  const [form, setForm] = useState(false);

  const [registerNow, { data, loading, error }] = useMutation(REGISTER);

  const googleMapRef = useRef(null);
  let googleMap = null;

  const center = {
    lat: 5.755071140968645,
    lng: 0.05037
  };

  const userLocation = {
    //  lat: currentLat,
    // lng: currentLong

    lat: 5.755128,
    lng: 0.050256

    // lat: 5.754487382950839,
    // lng: 0.050190650641205724
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

        if (distanceMeters === radius) {
        }
      }

      // console.log("Distance in Meters: ", distanceMeters);
    }

    compute();

    return () => {
      didCancel = true;
    };
  }, []);

  function closeRegister() {
    setForm(false);
  }

  function showRegister() {
    registerNow({
      variables: {
        user: String(auth),
        token: String(token.token)
      }
    });

    show();
  }

  function show() {
    if (loading === false) {
      history.push("/");
    }
  }

  return (
    <div>
      <div ref={googleMapRef} id="mapContainer" />

      <DistanceOverlay data={Math.round(distance)} />

      <LocationMarker />

      <div id="info-button">
        <div className="text-area">
          <div className="svg">
            <LocationSVG />
          </div>

          <div className="premisesXwithin">
            <div className="premises"> Name of Premises </div>
            {distance >= radius ? (
              <div className="within-premises"> Not on Premises </div>
            ) : (
              <div className="within-premises"> On Premises </div>
            )}
          </div>
        </div>

        <div>
          {distance >= radius ? (
            <MapButton id="cant-register">
              <ExclamationTriangle />
              Not eligible to Register!
            </MapButton>
          ) : (
            <MapButton action={showRegister} id="register">
              Register
            </MapButton>
          )}
        </div>
      </div>

      {form ? <Register closeRegister={closeRegister} /> : null}
    </div>
  );
};

export default GMap;

GMap.propTypes = {
  radius: PropTypes.number,
  currentLocation: PropTypes.object,
  currentError: PropTypes.string
};
