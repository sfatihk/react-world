import React from "react";
import SceneObject from "../../SceneObject";

import HillBody from "../../../assets/images/hill/hill.png";

const Hill = React.memo(props => (
  <SceneObject
    name="Hill"
    transform={{
      position: props.transform.position,
      scale: { x: 350, y: 150 }
    }}
    imgUrl={HillBody}
  />
));
export default Hill;
