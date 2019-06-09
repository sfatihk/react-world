import React from "react";

import SceneObject from "../../SceneObject";

import VolcanoBody from "../../../assets/images/volcano/volcano.png";

const Volcano = React.memo(props => {
  return (
    <SceneObject
      name="Volcano"
      transform={{
        position: props.transform.position,
        scale: { x: 400, y: 400 }
      }}
      imgUrl={VolcanoBody}
    />
  );
});

export default Volcano;
