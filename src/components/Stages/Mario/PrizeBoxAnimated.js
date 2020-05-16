import React from "react";
import { css, keyframes } from "styled-components";

import SceneObject from "../../SceneObject";
import lockedBox from "../../../assets/images/prizeBox/lockedBox.png";
import prizeBox2 from "../../../assets/images/prizeBox/prizeBox2.gif";

const rise = props => keyframes`
  0% {bottom:0px;}
  35% {bottom:50px;}
  100% {bottom:0px;}
`;

const riseNow = css`
  ${rise} .3s ease-out forwards;
`;

const PrizeBoxAnimated = React.memo(props => (
  <SceneObject {...props} name="Prize Box">
    <SceneObject
      name="Prize Box"
      transform={{ position: { x: 0, y: 0 }, scale: { x: 100, y: 100 } }}
      imgUrl={props.showMushroom ? lockedBox : prizeBox2}
      animation={props.showMushroom ? riseNow : ""}
    />
  </SceneObject>
));

export default PrizeBoxAnimated;
