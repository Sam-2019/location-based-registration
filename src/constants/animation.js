import React from "react";
import Lottie from "react-lottie-player";
import lottieJson from "../constants/data.json";

export function Animation() {
  return (
    <Lottie
      loop={false}
      animationData={lottieJson}
      play
      style={{ width: 250, height: 200 }}
    />
  );
}
