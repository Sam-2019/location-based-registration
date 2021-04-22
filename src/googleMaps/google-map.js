import React from "react";
import {
  GoogleMap,
  LoadScript,
  Circle,
  Marker,
  StreetViewService
} from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "800px"
};

const userLocation = {
  lat: 5.754484382930839,
  lng: 0.050190650641205724
};

const center = {
  lat: 5.755071140968645,
  lng: 0.05037
};

const options = {
  strokeColor: "grey",
  strokeOpacity: 0.8,
  strokeWeight: 2,
  fillColor: "#ffffff57",
  fillOpacity: 0.35,
  clickable: false,
  draggable: false,
  editable: false,
  visible: true,
  radius: 17.18,
  zIndex: 1
};

const onLoad = (circle) => {
  console.log("Circle onLoad circle: ", circle);
};

const onUnmount = (circle) => {
  console.log("Circle onUnmount circle: ", circle);
};

function MyComponent() {
  return (
    <LoadScript googleMapsApiKey="AIzaSyAyesbQMyKVVbBgKVi2g6VX7mop2z96jBo">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={21}
        mapTypeId="satellite"
      >
        {/* Child components, such as markers, info windows, etc. */}
        <>
          <Circle
            // optional
            onLoad={onLoad}
            // optional
            onUnmount={onUnmount}
            // required
            center={center}
            // required
            options={options}
          />

          <Marker position={center} />

          <Marker position={userLocation} />
        </>
      </GoogleMap>
    </LoadScript>
  );
}

export default React.memo(MyComponent);
