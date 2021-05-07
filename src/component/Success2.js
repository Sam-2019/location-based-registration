import React from "react";
import { PopupWrapper, Popup } from "../styledComponents";
import { Animation } from "../constants/animation";

export default function AnotherSuccess() {
  return (
    <PopupWrapper>
      <Popup>
        <Animation />
        Registeration successful
      </Popup>
    </PopupWrapper>
  );
}
