import React from "react";
import SceneObject from "../../SceneObject";

const Thanks = React.memo(props => (
  <SceneObject
    name="Thanks"
    transform={{
      position: props.transform.position,
      scale: { x: 425, y: 450 },
      rotation: props.transform.rotation
    }}
  >
    <h1 style={{ color: "black" }}>THANKS!</h1>
  </SceneObject>
));
export default Thanks;
