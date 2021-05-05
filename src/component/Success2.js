import React from "react";
import { Wrapper } from "./Loader";
import { SuccessItem } from "./Success";

const Success2 = () => {
  return (
    <Wrapper>
      <SuccessItem>
        <div> Success</div>

        {/* <div onClick={handleClick}>Go to Home</div> */}
      </SuccessItem>
    </Wrapper>
  );
};

export default Success2;
