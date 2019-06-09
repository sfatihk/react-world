import React from "react";
import SceneObject from "../../SceneObject";
import BoxBody from "../../../assets/images/boxes/box.png";

const Box = React.memo(props => (
  <SceneObject
    name="Box"
    transform={{
      position: props.transform.position,
      scale: { x: 425, y: 450 },
      rotation: props.transform.rotation
    }}
    imgUrl={BoxBody}
  />
));
export default Box;
