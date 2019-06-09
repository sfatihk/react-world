import React from "react";
import { css, keyframes } from "styled-components";
import SceneObject from "../../SceneObject";
const rise = props => keyframes`
  0%  {bottom: props.transform.position.x;left: 10600px }
  100% {bottom: 0px;left: 10600px}
`;

const push = props => keyframes`
  0%  {left: props.transform.position.y }
  100% {left: 10600px}
`;

const forceRise = css`
  ${rise} 2s forwards;
`;

const forcePush = css`
  ${push} .5s forwards ease-in;
`;

const Elevator = React.memo(props => {
  return (
    <SceneObject
      name="Elevator Wrapper"
      {...props}
      animation={
        props.scroll > 11990 ? forceRise : props.scroll > 10500 ? forcePush : ""
      }
    />
  );
});

export default Elevator;
