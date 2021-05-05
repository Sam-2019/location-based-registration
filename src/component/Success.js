import React from "react";
import { Wrapper, SuccessItem } from "../styledComponents";
import { Animation } from "../constants/animation";

const Success = ({ data }) => {
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
