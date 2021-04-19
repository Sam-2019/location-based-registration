import React, { useRef, useEffect, useState } from "react";
import mapboxgl from "mapbox-gl";
import axios from "axios";
import "./map.css";

mapboxgl.accessToken =
  "pk.eyJ1IjoiZHVrZWR1bmNhbiIsImEiOiJjazk4N3ltdncwOHJsM25xbnk5dmVkczBlIn0.grKHVcc3zB5oG2tFKX2U1w";

const Map = () => {
  const mapContainerRef = useRef(null);

  var urlBase = "https://api.mapbox.com/isochrone/v1/mapbox/";
  var profile = "cycling";
  var minutes = 10;

  const [lng, setLng] = useState(5);
  const [lat, setLat] = useState(34);
  const [zoom, setZoom] = useState(1.5);

  const [url, setURL] = useState({});

  var marker = new mapboxgl.Marker({
    color: "#314ccd"
  });

  var lngLat = {
    lon: lng,
    lat: lat
  };

  var query =
    urlBase +
    profile +
    "/" +
    lng +
    "," +
    lat +
    "?contours_minutes=" +
    minutes +
    "&polygons=true&access_token=" +
    mapboxgl.accessToken;

  // Initialize map when component mounts
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [lng, lat],
      zoom: zoom
    });

    async function getUser() {
      try {
        const response = await axios.get(query);
        // console.log(response.data);
        setURL(response.data);
      } catch (error) {
        console.error(error);
      }
    }

    //console.log(url)

    map.on("load", () => {
      map.addSource("iso", {
        type: "geojson",
        data: {
          type: "FeatureCollection",
          features: []
        }
      });

      map.getSource("iso").setData(url);

      map.addLayer(
        {
          id: "isoLayer",
          type: "fill",
          // Use "iso" as the data source for this layer
          source: "iso",
          layout: {},
          paint: {
            // The fill color for the layer is set to a light purple
            "fill-color": "#5a3fc0",
            "fill-opacity": 0.3
          }
        },
        "poi-label"
      );

      marker.setLngLat(lngLat).addTo(map);
    });

    // Add navigation control (the +/- zoom buttons)
    map.addControl(new mapboxgl.NavigationControl(), "top-right");

    map.on("move", () => {
      setLng(map.getCenter().lng.toFixed(4));
      setLat(map.getCenter().lat.toFixed(4));
      setZoom(map.getZoom().toFixed(2));
    });

    getUser();
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
