import React from "react";
import PropTypes from "prop-types";

const Location = ({ location, error }) => {
  return (
    <div>
      {location ? (
        <code>
          Latitude: {location.lat}, Longitude: {location.lng}
        </code>
      ) : (
        <p>Loading...</p>
      )}
      {error && <p className="errorMessage">Location Error: {error}</p>}
    </div>
  );
};

Location.propTypes = {
  location: PropTypes.object,
  error: PropTypes.string
};

export default Location;
