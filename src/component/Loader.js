import React from "react";
import styled from "styled-components";

export const Wrapper = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  display: flex;
  align-content: center;
`;

export const Load = styled.div`
  margin: auto;
  color: #000000;
  text-align: center;
`;

export default function Loader() {
  return (
    <Wrapper>
      <Load>Loading....</Load>
    </Wrapper>
  );
}
