import React from "react";
import { withGoogleMap, withScriptjs, GoogleMap } from "react-google-maps";
import UserMarker from "./user-marker";
import DestinationMarker from "./destination-marker";
import CircleMarker from "./circle-marker";

const destination = {
  lat: 5.755071140968645,
  lng: 0.05037
};

const userLocation = {
  //  lat: lat,
  // lng: long

  lat: 5.755128,
  lng: 0.050256

  // lat: 5.754487382950839,
  // lng: 0.050190650641205724
};

function MapContainer() {
  const [distance, setDistance] = React.useState(0);

  React.useEffect(() => {
    let didCancel = false;

    async function compute() {
      const to = await new google.maps.LatLng(destination);
      const from = await new google.maps.LatLng(userLocation);

      const distanceMeters = await google.maps.geometry.spherical.computeDistanceBetween(
        from,
        to
      );

      if (!didCancel) {
        setDistance(distanceMeters);
      }
    }

    compute();

    return () => {
      didCancel = true;
    };
  }, []);

  return (
    <GoogleMap ref={(elem) => (this.map = elem)} zoom={15} center={destination}>
      <UserMarker
        distance={distance}
        center={destination}
        userLocation={userLocation}
      />
      <DestinationMarker center={destination} />
      <CircleMarker center={destination} />
    </GoogleMap>
  );
}

export default withScriptjs(withGoogleMap(MapContainer));
