import React from "react";
import styled from "styled-components";
import { Wrapper } from "./Loader";
import Lottie from "react-lottie-player";
import lottieJson from "../constants/data.json";

export const SuccessItem = styled.div`
  margin: auto;
  color: #000000;
  text-align: center;
`;

const Success = ({ data }) => {
  //let history = useHistory();
  // console.log(data.signup.id);

  localStorage.setItem("signupID", JSON.stringify(data.signup.id));

  return (
    <Wrapper>
      <SuccessItem>
        <Animation />
      </SuccessItem>
    </Wrapper>
  );
};

export default Success;

export function Animation() {
  return (
    <Lottie
      loop={false}
      animationData={lottieJson}
      play
      style={{ width: 250, height: 250 }}
    />
  );
}
