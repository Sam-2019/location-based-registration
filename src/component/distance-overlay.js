import React from "react";

const DistanceOverlay = ({ distance }) => {
  return (
    <>
      {distance > 1000 ? null : (
        <div className="distance-overlay">
          <div className="distance">Distance</div>

          <div className="number">{distance}</div>

          <div className="meters">Meters</div>
        </div>
      )}
    </>
  );
};

export default DistanceOverlay;
