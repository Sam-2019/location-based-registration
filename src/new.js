import React, { useRef, useEffect, useState } from "react";
import mapboxgl from "mapbox-gl";

const Map = () => {
  const mapContainerRef = useRef(null);

  // Initialize map when component mounts
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [-96, 37.8], // starting position
      zoom: 3 // starting zoom
    });

    // Add navigation control (the +/- zoom buttons)
    // Add geolocate control to the map.
    map.addControl(
      new mapboxgl.GeolocateControl({
        positionOptions: {
          enableHighAccuracy: true
        },
        trackUserLocation: true
      })
    );

    // Clean up on unmount
    return () => map.remove();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div>
      <div className="sidebarStyle"></div>
      <div className="map-container" ref={mapContainerRef} />
    </div>
  );
};

export default Map;
