import React from "react";

import SceneObject from "../../SceneObject";

import TrashBody from "../../../assets/images/trash/trash.png";

const Trash = React.memo(props => {
  return (
    <SceneObject
      name="Trash"
      transform={{
        position: props.transform.position,
        scale: { x: 150, y: 150 },
        rotation: props.transform.rotation
      }}
      imgUrl={TrashBody}
    />
  );
});

export default Trash;
