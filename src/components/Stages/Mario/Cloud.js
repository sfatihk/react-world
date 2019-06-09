import React from "react";
import SceneObject from "../../SceneObject";

import CloudBody from "../../../assets/images/cloud/cloud.png";

const Cloud = React.memo(props => (
  <SceneObject
    name="Cloud"
    transform={{
      position: props.transform.position,
      scale: { x: 200, y: 150 }
    }}
    imgUrl={CloudBody}
  />
));
export default Cloud;
