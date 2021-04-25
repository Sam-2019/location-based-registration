import React from "react";
import styled from "styled-components";
import { Wrapper } from "./Loader";

const SuccessItem = styled.div`
  margin: auto;
  color: #000000;
  text-align: center;
`;

export default function Success() {
  return (
    <Wrapper>
      <SuccessItem>
        <div> Success</div>

        <div>Go to Home</div>
      </SuccessItem>
    </Wrapper>
  );
}
