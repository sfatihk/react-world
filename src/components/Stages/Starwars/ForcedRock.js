import React from "react";
import { css, keyframes } from "styled-components";
import SceneObject from "../../SceneObject";
import Redstone from "../../../assets/images/redstones/4.png";
const force = props => keyframes`
  0% {left: 0px;bottom:-500px; transform:rotate(180deg)}
  50% {left: 300px;bottom:-300px; transform:rotate(180deg)}
  70% {left: 450px;bottom:-200px; transform:rotate(360deg)}
  100% {left: 450px;bottom:-440px; transform:rotate(360deg)}
`;

const forceNow = css`
  ${force} .7s ease-in forwards;
`;

const ForcedRock = React.memo(props => {
  return (
    <SceneObject name="Forced Rock Wrapper" transform={props.transform}>
      <SceneObject
        name="Ghost"
        transform={{ scale: { x: 500, y: 600 }, rotation: 180 }}
        imgUrl={Redstone}
        animation={props.canPlay ? forceNow : ""}
      />
    </SceneObject>
  );
});

export default ForcedRock;
