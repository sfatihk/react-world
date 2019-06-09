import React from "react";
import SceneObject from "../../SceneObject";

import BushBody from "../../../assets/images/bush/bush.png";

const Bush = React.memo(props => (
  <SceneObject
    name="Bush"
    transform={{
      position: props.transform.position,
      scale: { x: 250, y: 150 }
    }}
    imgUrl={BushBody}
  />
));
export default Bush;
