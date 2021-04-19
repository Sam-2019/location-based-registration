import React, { useRef, useEffect, useState } from "react";
import mapboxgl from "mapbox-gl";

export default function Turf() {
  const mapContainerRef = useRef(null);
  // starting position
  const [lng, setLng] = useState(0);
  const [lat, setLat] = useState(0);
  const [zoom, setZoom] = useState(1.5);

  // Initialize map when component mounts
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,

      style: 'mapbox://styles/mapbox/light-v10', // stylesheet location
      center: [-93.261, 44.971], // starting position [lng, lat]
      zoom: 10.5 // starting zoom
    });

    map.addControl(
      new mapboxgl.GeolocateControl({
        positionOptions: {
          enableHighAccuracy: true
        },
        trackUserLocation: true
      })
    );

    map.on("load", () => {
      map.addLayer({
        id: 'historical-places',
        type: 'circle',
        source: {
          type: 'vector',
          url: 'mapbox://your-tileset-id-here'
        },
        'source-layer': 'your-source-layer-here',
        paint: {
          'circle-radius': [
            'interpolate', ['linear'], ['zoom'],
            10, ['/', ['-', 2017, ['number', ['get', 'Constructi'], 2017]], 30],
            13, ['/', ['-', 2017, ['number', ['get', 'Constructi'], 2017]], 10],
          ],
          'circle-opacity': 0.8,
          'circle-color': 'rgb(171, 72, 33)'
        }
      });
    });

   

    // Clean up on unmount
    return () => map.remove();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  function location() {
    setLng(-96);
    setLat(37.08);
  }
  return (
    <div>
      <div className="sidebarStyle">
        <div>
          Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
        </div>
        <div>
          <button onClick={location}>Get Location </button>
        </div>
      </div>
      <div className="map-container" ref={mapContainerRef} />
    </div>
  );
}
