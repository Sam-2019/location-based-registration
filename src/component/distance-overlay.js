import React from "react";

const DistanceOverlay = ({ data }) => {
  return (
    <div className="distance-overlay">
      <div className="distance">Distance</div>

      <div className="number">{data}</div>

      <div className="meters">Meters</div>
    </div>
  );
};

export default DistanceOverlay;
