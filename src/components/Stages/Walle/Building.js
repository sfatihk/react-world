import React from "react";

import SceneObject from "../../SceneObject";

import Building1 from "../../../assets/images/buildings/1.png";
import Building2 from "../../../assets/images/buildings/2.png";
import Building3 from "../../../assets/images/buildings/3.png";
import Building4 from "../../../assets/images/buildings/4.png";
import Building5 from "../../../assets/images/buildings/5.png";

const buildings = [Building1, Building2, Building3, Building4, Building5];

const Building = React.memo(props => {
  return (
    <SceneObject
      name="Building"
      transform={{
        position: props.transform.position,
        scale: props.transform.scale,
        rotation: props.transform.rotation,
        opacity: 1
      }}
      imgUrl={props.type ? buildings[props.type - 1] : buildings[0]}
    />
  );
});

export default Building;
