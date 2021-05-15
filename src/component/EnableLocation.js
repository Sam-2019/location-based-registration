import React from "react";
import { PopupWrapper, Popup } from "../styledComponents";

export default function EnableLocation() {
  return (
    <PopupWrapper>
      <Popup>
        <h2>Location access denied!</h2>

        <h4>To resolve this issue,</h4>

        <h6> * Kindly turn on your location</h6>

        <h6>* Reload the page.</h6>

        <div>Thank you..</div>
      </Popup>
    </PopupWrapper>
  );
}
