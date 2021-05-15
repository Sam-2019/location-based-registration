import React from "react";
import { MapButton, ExclamationTriangle } from "../constants/helper";
import LocationSVG from "./locationSVG";

const ShowLocationandRegister = ({
  distance,
  radius,
  loading,
  showRegister
}) => {
  return (
    <div id="info-box">
      <div className="text-area">
        <div className="svg">
          <LocationSVG />
        </div>

        <div className="premisesXwithin">
          <div className="premises"> ICGC Elim Temple </div>
          {distance >= radius ? (
            <div className="within-premises"> Not on Premises </div>
          ) : (
            <div className="within-premises"> On Premises </div>
          )}
        </div>
      </div>

      <div>
        {distance >= radius ? (
          <MapButton
            id="cant-register"
            value={
              <>
                <ExclamationTriangle />
                Not eligible to Register!
              </>
            }
          />
        ) : (
          <MapButton
            action={showRegister}
            id={loading ? "disable-register" : "register"}
            loading={loading}
            value="Register"
          />
        )}
      </div>
    </div>
  );
};

export default ShowLocationandRegister;
