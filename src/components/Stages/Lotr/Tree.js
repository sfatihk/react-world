import React from "react";

import SceneObject from "../../SceneObject";

import Tree1 from "../../../assets/images/trees/1.png";
import Tree2 from "../../../assets/images/trees/2.png";
import Tree3 from "../../../assets/images/trees/3.png";
import Tree4 from "../../../assets/images/trees/4.png";
import Tree5 from "../../../assets/images/trees/5.png";
import Tree6 from "../../../assets/images/trees/6.png";

const trees = [Tree1, Tree2, Tree3, Tree4, Tree5, Tree6];

const Tree = React.memo(props => {
  return (
    <SceneObject
      name="Tree"
      transform={{
        position: props.transform.position,
        scale: props.transform.scale
          ? props.transform.scale
          : { x: 500, y: 603 },
        rotation: props.transform.rotation,
        opacity: 1
      }}
      imgUrl={props.type ? trees[props.type - 1] : trees[0]}
    />
  );
});

export default Tree;
