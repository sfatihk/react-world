import React from "react";
import SceneObject from "../../SceneObject";
import Brick from "../../../assets/images/brick/brick.png";
import PrizeBox from "./PrizeBox";
import PrizeBoxAnimated from "./PrizeBoxAnimated";

const BrickRoof1 = React.memo(props => (
  <SceneObject {...props} name="Brick Roof">
    <SceneObject
      name="Brick"
      transform={{ position: { x: 0, y: 0 }, scale: { x: 100, y: 100 } }}
      imgUrl={Brick}
      bgRepeat
    />
    <PrizeBoxAnimated
      name="Prize Box"
      transform={{ position: { x: 100, y: 0 }, scale: { x: 100, y: 100 } }}
      showMushroom={props.showMushroom}
    />
    <SceneObject
      name="Brick"
      transform={{ position: { x: 200, y: 0 }, scale: { x: 100, y: 100 } }}
      imgUrl={Brick}
      bgRepeat
    />
    <PrizeBox
      name="Prize Box"
      transform={{ position: { x: 300, y: 0 }, scale: { x: 100, y: 100 } }}
    />
    <SceneObject
      name="Brick"
      transform={{ position: { x: 400, y: 0 }, scale: { x: 100, y: 100 } }}
      imgUrl={Brick}
      bgRepeat
    />
  </SceneObject>
));

export default BrickRoof1;
