import React from "react";
import { animated } from "react-spring";
import { useRouletteCircle } from "./hooks/useRouletteCircle";

export const RouletteCircle = () => {
  const { styles, handleAnimationStart, handleAnimationFinish } =
    useRouletteCircle();

  return (
    <React.Fragment>
      <animated.div style={styles}>i will fade</animated.div>
    </React.Fragment>
  );
};
