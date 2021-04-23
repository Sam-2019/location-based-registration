import { useState, useEffect } from "react";

const ComputeDistance = () => {
  const [distance, setDistance] = useState(0);

  useEffect(() => {
    let didCancel = false;

    async function compute() {
      const to = await new google.maps.LatLng(5.755071140968645, 0.05037);
      const from = await new google.maps.LatLng(
        5.754484382930839,
        0.050190650641205724
      );

      const distanceMeters = await new google.maps.geometry.spherical.computeDistanceBetween(
        from,
        to
      );

      console.log(distanceMeters);

      if (!didCancel) {
        setDistance(distanceMeters);
      }

      console.log("Distance in Meters: ", distanceMeters);
    }

    compute();

    return () => {
      didCancel = true;
    };
  }, []);

  return { distance };
};

export default ComputeDistance;
