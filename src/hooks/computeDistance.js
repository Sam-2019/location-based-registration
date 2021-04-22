import { useState, useEffect } from "react";

const ComputeDistance = () => {
  const [distance, setDistance] = useState(0);

  useEffect(() => {
    compute();
  }, []);

  const compute = () => {
    const to = new google.maps.LatLng(5.755071140968645, 0.05037);
    const from = new google.maps.LatLng(
      5.754484382930839,
      0.050190650641205724
    );

    const distanceMeters = google.maps.geometry.spherical.computeDistanceBetween(
      from,
      to
    );

    setDistance(distanceMeters);
    //  console.log("Distance in Meters: ", distanceMeters);
  };

  return { distance };
};

export default ComputeDistance;
