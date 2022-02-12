import React, { useState } from "react";
import { useSpring, animated, config } from "react-spring";

 const InAnimated = ({ children }) => {
  const props = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    reverse: false,
    config: config.molasses,
    delay: 400,
  });
  return <animated.div style={props}>{children}</animated.div>;
};

export default InAnimated;
