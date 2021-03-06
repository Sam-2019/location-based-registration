import React from "react";
import { useHistory } from "react-router-dom";
import { Wrapper, SuccessItem } from "../styledComponents";
import { Animation } from "../constants/animation";

const Success = ({ data, loading }) => {
  localStorage.setItem("signupID", JSON.stringify(data.signup.id));

  let history = useHistory();

  function goHome() {
    if (loading === false) {
      history.push("/");
    }
  }
  return (
    <Wrapper>
      <SuccessItem>
        <Animation />
        <button id="submit" onClick={goHome}>
          Go Home
        </button>
      </SuccessItem>
    </Wrapper>
  );
};

export default Success;
