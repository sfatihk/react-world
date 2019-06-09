import React from "react";
import SceneObject from "../../SceneObject";

import CastleBody from "../../../assets/images/castle/castle.png";

const Castle = React.memo(props => (
  <SceneObject
    name="Castle"
    transform={{
      position: props.transform.position,
      scale: { x: 550, y: 550 }
    }}
    imgUrl={CastleBody}
  />
));
export default Castle;
