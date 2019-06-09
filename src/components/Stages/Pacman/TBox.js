import React from "react";
import SceneObject from "../../SceneObject";
import BoxBody from "../../../assets/images/boxes/tBox.png";

const TBox = React.memo(props => (
  <SceneObject
    name="TBox"
    transform={{
      position: props.transform.position,
      scale: { x: 750, y: 450 },
      rotation: props.transform.rotation
    }}
    imgUrl={BoxBody}
  />
));
export default TBox;
