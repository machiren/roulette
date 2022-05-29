import { SpringValue, useSpring } from "react-spring";

type HookReturnType = {
  styles: {
    opacity: SpringValue<number>;
  };
  handleAnimationStart: () => void;
  handleAnimationFinish: () => void;
};

export const useRouletteCircle = (): HookReturnType => {
  const [styles, api] = useSpring(() => ({ opacity: 1 }));

  const handleAnimationStart = () => {
    // Update spring with new props
    api.start();
  };
  const handleAnimationFinish = () => {
    // Stop animation
    api.stop();
  };

  return {
    styles,
    handleAnimationStart,
    handleAnimationFinish,
  };
};
