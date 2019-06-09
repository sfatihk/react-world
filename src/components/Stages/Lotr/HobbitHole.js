import React from "react";

import SceneObject from "../../SceneObject";

import HobbitHole1 from "../../../assets/images/hobbitHoles/1.png";
import HobbitHole2 from "../../../assets/images/hobbitHoles/2.png";

const HobbitHoles = [HobbitHole1, HobbitHole2];

const HobbitHole = React.memo(props => {
  return (
    <SceneObject
      name="Hobbit Hole"
      transform={{
        position: props.transform.position,
        scale: props.transform.scale,
        rotation: props.transform.rotation,
        opacity: 1
      }}
      imgUrl={props.type ? HobbitHoles[props.type - 1] : HobbitHoles[0]}
    />
  );
});

export default HobbitHole;
