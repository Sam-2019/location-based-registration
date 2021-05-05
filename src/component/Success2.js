import React from "react";
import { Wrapper } from "./Loader";
import { SuccessItem, Animation } from "./Success";

export default function AnotherSuccess() {
  return (
    <Wrapper>
      <SuccessItem>
        <Animation />
      </SuccessItem>
    </Wrapper>
  );
}
