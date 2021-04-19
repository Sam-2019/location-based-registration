import React, { useRef, useEffect, useState } from "react";
import mapboxgl from "mapbox-gl";
import "./map.css";

mapboxgl.accessToken =
  "pk.eyJ1IjoiZHVrZWR1bmNhbiIsImEiOiJjazk4N3ltdncwOHJsM25xbnk5dmVkczBlIn0.grKHVcc3zB5oG2tFKX2U1w";

const Map = () => {
  const mapContainerRef = useRef(null);

  const [lng, setLng] = useState(5);
  const [lat, setLat] = useState(34);
  const [zoom, setZoom] = useState(1.5);

  var marker = new mapboxgl.Marker({
    color: "#314ccd"
  });
  
  var lngLat = {
    lon: lng,
    lat: lat
  };

  // Initialize map when component mounts
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [lng, lat],
      zoom: zoom
    });

    map.on("load", () => {
      marker.setLngLat(lngLat).addTo(map);
    });

    // Add navigation control (the +/- zoom buttons)
    map.addControl(new mapboxgl.NavigationControl(), "top-right");

    map.on("move", () => {
      setLng(map.getCenter().lng.toFixed(4));
      setLat(map.getCenter().lat.toFixed(4));
      setZoom(map.getZoom().toFixed(2));
    });

    // Clean up on unmount
    return () => map.remove();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div>
      <div className="sidebarStyle">
        <div>
          Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
        </div>
      </div>
      <div className="map-container" ref={mapContainerRef} />
    </div>
  );
};

export default Map;
