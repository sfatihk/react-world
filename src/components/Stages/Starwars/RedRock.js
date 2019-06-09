import React from "react";

import SceneObject from "../../SceneObject";

import RedRock1 from "../../../assets/images/redstones/1.png";
import RedRock2 from "../../../assets/images/redstones/2.png";
import RedRock3 from "../../../assets/images/redstones/3.png";
import RedRock4 from "../../../assets/images/redstones/4.png";
import RedRock5 from "../../../assets/images/redstones/5.png";

const redRocks = [RedRock1, RedRock2, RedRock3, RedRock4, RedRock5];

const RedRock = React.memo(props => {
  return (
    <SceneObject
      name="Red Rock"
      transform={{
        position: props.transform.position,
        scale: props.transform.scale,
        rotation: props.transform.rotation
      }}
      imgUrl={props.type ? redRocks[props.type - 1] : redRocks[0]}
    />
  );
});

export default RedRock;
