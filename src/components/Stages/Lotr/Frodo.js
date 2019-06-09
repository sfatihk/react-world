import React from "react";
import { css, keyframes } from "styled-components";
import SceneObject from "../../SceneObject";
import frodo from "../../../assets/images/frodo/frodo.png";

const appear = props => keyframes`
  0%  {opacity: 1 }
  100% {opacity: 0}
`;

const appearNow = css`
  ${appear} 1s forwards;
`;

const Frodo = React.memo(props => {
  return (
    <SceneObject name="Ghost Cube Wrapper" transform={props.transform}>
      <SceneObject
        name="Ghost"
        transform={{
          position: { x: 0, y: 0 },
          scale: { x: 150, y: 400 },
          rotation: 0,
          opacity: 1
        }}
        imgUrl={frodo}
        animation={props.canPlay ? appearNow : ""}
      />
    </SceneObject>
  );
});

export default Frodo;
