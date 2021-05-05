import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { Wrapper } from "./Loader";

const SuccessItem = styled.div`
  margin: auto;
  color: #000000;
  text-align: center;
`;

const Success = ({ data }) => {
  //let history = useHistory();

  return (
    <Wrapper>
      <SuccessItem>
        <div> Success</div>

        {/* <div onClick={handleClick}>Go to Home</div> */}
      </SuccessItem>
    </Wrapper>
  );
};

export default Success;
