import React from "react";
import { css, keyframes } from "styled-components";

import SceneObject from "../../SceneObject";

const coinTypes = {
  0: { scale: { x: 50, y: 50 }, color: "#FFE900" },
  1: { scale: { x: 75, y: 75 }, color: "white" }
};
const hide = props => keyframes`
  0% {opacity:1}
  100% {opacity:0}
`;

const hideNow = css`
  ${hide} .2s ease-in forwards;
`;

const Coin = React.memo(props => {
  return (
    <SceneObject
      name="Coin"
      color={coinTypes[props.type - 1].color}
      transform={{
        position: props.transform.position,
        scale: coinTypes[props.type - 1].scale,
        rotation: 0,
        opacity: 1
      }}
      animation={props.canEat ? hideNow : ""}
    />
  );
});

export default Coin;
