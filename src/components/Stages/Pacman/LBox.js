import React from "react";
import SceneObject from "../../SceneObject";
import BoxBody from "../../../assets/images/boxes/lBox.png";

const LBox = React.memo(props => (
  <SceneObject
    name="LBox"
    transform={{
      position: props.transform.position,
      scale: { x: 435, y: 450 },
      rotation: props.transform.rotation
    }}
    imgUrl={BoxBody}
  />
));
export default LBox;
