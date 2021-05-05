import React from "react";
import Lottie from "react-lottie-player";
import lottieJson from "../constants/data.json";
import { Wrapper, SuccessItem } from "../styledComponents";

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
