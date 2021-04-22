import React from "react";
import {
  GoogleMap,
  LoadScript,
  Circle,
  Marker,
  StreetViewService,
  InfoBox,
  DistanceMatrixService
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

const optionsInfo = { closeBoxURL: "", enableEventPropagation: true };

const onLoad = (circle, infoBox, distanceMatrixService) => {
  // console.log("Circle onLoad circle: ", circle);
  //console.log("infoBox: ", infoBox);
  console.log("distanceMatrixService: ", distanceMatrixService);
};

const onUnmount = (circle, distanceMatrixService) => {
  // console.log("Circle onUnmount circle: ", circle);
  console.log(
    "DistanceMatrixService onUnmount distanceMatrixService: ",
    distanceMatrixService
  );
};

const origin1 = { lat: 55.93, lng: -3.118 };
const origin2 = "Greenwich, England";
const destinationA = "Stockholm, Sweden";
const destinationB = { lat: 50.087, lng: 14.421 };

const optionsDistance = {
  origins: [origin1, origin2],
  destinations: [destinationA, destinationB],
  travelMode: google.maps.TravelMode.DRIVING,
  unitSystem: google.maps.UnitSystem.METRIC,
  avoidHighways: false,
  avoidTolls: false
};

function callback(response, status) {
  console.log(response, status);

  response: DistanceMatrixResponse,
  status: DistanceMatrixStatus

}

function MyComponent() {
  return (
    <LoadScript googleMapsApiKey="AIzaSyAyesbQMyKVVbBgKVi2g6VX7mop2z96jBo">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={20.5}
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
          <InfoBox onLoad={onLoad} options={optionsInfo} position={center}>
            <div
              style={{
                backgroundColor: "yellow",
                opacity: 0.75,
                padding: 12,
                width: "auto"
              }}
            >
              <div style={{ fontSize: 16, fontColor: `red` }}>
                ICGC Elim Temple
              </div>
            </div>
          </InfoBox>
          <DistanceMatrixService
            onLoad={onLoad}
            onUnmount={onUnmount}
            options={optionsDistance}
            callback={callback}
          ></DistanceMatrixService>
        </>
      </GoogleMap>
    </LoadScript>
  );
}

export default React.memo(MyComponent);