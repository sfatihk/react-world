import React from "react";

import SceneObject from "../../SceneObject";

import SauronBody from "../../../assets/images/sauron/sauron.png";

const Sauron = React.memo(props => {
  return (
    <SceneObject
      name="Sauron"
      transform={{
        position: props.transform.position,
        scale: { x: 150, y: 350 }
      }}
      imgUrl={SauronBody}
    />
  );
});

export default Sauron;
