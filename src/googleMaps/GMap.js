import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import { useData } from "../Context";
import Register from "../component/register";
import SVG from "../component/svg";
import "./nothing.css";

const GMap = ({ radius }) => {
  const { lat, long } = useData();
  const [distance, setDistance] = useState(0);
  const [form, setForm] = useState(false);

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
    // lat: lat,
    // lng: long

    lat: 5.755128,
    lng: 0.050256

    //   lat: 5.754487382950839,
    //  lng: 0.050190650641205724
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
  // console.log(currentLocation);

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
          setButtonState(true);
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
    setForm(true);
  }

  return (
    <div>
      <div ref={googleMapRef} id="mapContainer" />

      <div className="distance-overlay">
        <div className="distance">Distance</div>

        <div className="number"> {Math.round(distance)} </div>

        <div className="meters">Meters</div>
      </div>

      <div className="location-marker">
        <svg
          width="24px"
          height="24px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 8.25C9.92893 8.25 8.25 9.92893 8.25 12C8.25 14.0711 9.92893 15.75 12 15.75C14.0711 15.75 15.75 14.0711 15.75 12C15.75 9.92893 14.0711 8.25 12 8.25Z"
            fill="black"
          />
          <path
            fillRule="evenodd"
            clip-rule="evenodd"
            d="M12 1.25C12.4142 1.25 12.75 1.58579 12.75 2V3.28169C16.9842 3.64113 20.3589 7.01581 20.7183 11.25H22C22.4142 11.25 22.75 11.5858 22.75 12C22.75 12.4142 22.4142 12.75 22 12.75H20.7183C20.3589 16.9842 16.9842 20.3589 12.75 20.7183V22C12.75 22.4142 12.4142 22.75 12 22.75C11.5858 22.75 11.25 22.4142 11.25 22V20.7183C7.01581 20.3589 3.64113 16.9842 3.28169 12.75H2C1.58579 12.75 1.25 12.4142 1.25 12C1.25 11.5858 1.58579 11.25 2 11.25H3.28169C3.64113 7.01581 7.01581 3.64113 11.25 3.28169V2C11.25 1.58579 11.5858 1.25 12 1.25ZM4.75 12C4.75 16.0041 7.99594 19.25 12 19.25C16.0041 19.25 19.25 16.0041 19.25 12C19.25 7.99594 16.0041 4.75 12 4.75C7.99594 4.75 4.75 7.99594 4.75 12Z"
            fill="black"
          />
        </svg>
      </div>

      <div id="info-button">
        {distance >= radius ? (
          <button id="cant-register">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="29"
              height="20"
              fill="red"
              className="bi bi-exclamation-triangle-fill"
              viewBox="0 0 16 16"
            >
              <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
            </svg>
            Not eligible to Register!
          </button>
        ) : (
          <>
            <div className="text-area">
              <div className="svg">
                <SVG />
              </div>

              <div className="premisesXwithin">
                <div className="premises"> Name of Premises </div>
                <div className="within-premises"> On Premises </div>
              </div>
            </div>

            <div
              id="register-div"
              onClick={() => {
                showRegister(false);
              }}
            >
              Register
            </div>
          </>
        )}
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

const TextContainer = () => {
  <div className="text-container">
    <div className="distance-text">
      You are {Math.round(distance)} meters away from Premises.
    </div>

    <div>
      {distance >= radius ? (
        <div className="cant-register">Not eligible to Register!</div>
      ) : null}
    </div>

    <div>
      {distance >= radius ? null : (
        <button
          id="register"
          onClick={() => {
            showRegister(false);
          }}
        >
          Register
        </button>
      )}
    </div>

    <button id="drop">FInd Me</button>

    {/* <p>Current position:</p>
<Location location={currentLocation} error={currentError} /> */}

    {/* <div style={{ marginTop: 10, marginBottom: 10 }}>
  You are {Math.round(distance)} meters away from Premises
</div> */}

    {/* <div>{distance >= radius ? "Outside range. Cant Register!" : null}</div> */}

    {form ? <Register closeRegister={closeRegister} /> : null}
  </div>;
};
