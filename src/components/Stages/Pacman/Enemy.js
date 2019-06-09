import React from "react";
import { css, keyframes } from "styled-components";

import SceneObject from "../../SceneObject";

import Enemy1 from "../../../assets/images/enemies/1.png";
import Enemy2 from "../../../assets/images/enemies/2.png";
import Enemy3 from "../../../assets/images/enemies/3.png";
import Enemy4 from "../../../assets/images/enemies/4.png";
import Enemy5 from "../../../assets/images/enemies/5.png";

const enemies = [Enemy1, Enemy2, Enemy3, Enemy4, Enemy5];

const hide = props => keyframes`
  0% {opacity:1}
  100% {opacity:0}
`;

const hideNow = css`
  ${hide} .2s ease-in forwards;
`;

const Enemy = React.memo(props => {
  return (
    <SceneObject
      name="Enemy"
      transform={{
        position: props.transform.position,
        scale: { x: 200, y: 203 },
        opacity: 1
      }}
      imgUrl={props.canChange ? enemies[4] : enemies[props.type - 1]}
      animation={props.canEat ? hideNow : ""}
    />
  );
});

export default Enemy;
