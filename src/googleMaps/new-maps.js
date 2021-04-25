import React from "react";
import Loader from "../component/Loader";
import GMap from "./GMap";

// API key of the google map
const GOOGLE_MAP_API_KEY = "";

// load google map script
const loadGoogleMapScript = (callback) => {
  if (
    typeof window.google === "object" &&
    typeof window.google.maps === "object"
  ) {
    callback();
  } else {
    const googleMapScript = document.createElement("script");
    googleMapScript.src = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAP_API_KEY}&libraries=geometry`;
    window.document.body.appendChild(googleMapScript);
    googleMapScript.addEventListener("load", callback);
  }
};

const MyComponent = ({ radius, currentLocation, currentError }) => {
  const [loadMap, setLoadMap] = React.useState(false);

  React.useEffect(() => {
    loadGoogleMapScript(() => {
      setLoadMap(true);
    });
  }, []);

  return (
    <div className="App">
      {!loadMap ? (
        <Loader />
      ) : (
        <GMap
          radius={radius}
          currentLocation={currentLocation}
          currentError={currentError}
        />
      )}
    </div>
  );
};

export default React.memo(MyComponent);
