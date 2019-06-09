import React from "react";
import { css, keyframes } from "styled-components";
import SceneObject from "../../SceneObject";
import Flag from "../../../assets/images/castle/flag.png";

const rise = props => keyframes`
  0% {bottom:-100px;}
  100% {bottom:-50px;}
`;

const riseNow = css`
  ${rise} 1s ease-in forwards;
`;

const RisingFlag = React.memo(props => {
  return (
    <SceneObject name="Rising Flag" transform={props.transform}>
      <SceneObject
        name="Ghost"
        transform={{ scale: { x: 50, y: 100 }, rotation: 0 }}
        imgUrl={Flag}
        animation={props.canPlay ? riseNow : ""}
      />
    </SceneObject>
  );
});

export default RisingFlag;
