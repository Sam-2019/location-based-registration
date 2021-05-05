import React from "react";
import { SuccessItem, Wrapper } from "../styledComponents";
import { Animation } from "../constants/animation";

export default function AnotherSuccess() {
  return (
    <Wrapper>
      <SuccessItem>
        <Animation />
      </SuccessItem>
    </Wrapper>
  );
}
