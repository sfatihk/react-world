import React from "react";
import SceneObject from "../../SceneObject";
import Brick from "../../../assets/images/brick/brick.png";

const BrickRoof2 = React.memo(props => (
  <SceneObject
    name="Brick Roof"
    transform={{
      position: props.transform.position,
      scale: { x: 500, y: 100 }
    }}
    imgUrl={Brick}
    bgRepeat
  />
));

export default BrickRoof2;
