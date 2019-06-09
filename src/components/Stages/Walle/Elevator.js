import React from "react";

import SceneObject from "../../SceneObject";

const Elevator = React.memo(props => {
  return (
    <SceneObject
      name="Elevator"
      transform={{ position: props.transform.position }}
    >
      <SceneObject
        name="WALLEGROUND"
        color="grey"
        transform={{ position: { x: 0, y: 0 }, scale: { x: 270, y: 2150 } }}
      />
      <SceneObject
        name="WALLEGROUND"
        color="darkslategrey"
        transform={{ position: { x: 20, y: 0 }, scale: { x: 230, y: 300 } }}
      />
      <SceneObject
        name="WALLEGROUND"
        color="darkslategrey"
        transform={{ position: { x: 40, y: 500 }, scale: { x: 100, y: 100 } }}
      />
      <SceneObject
        name="WALLEGROUND"
        color="darkslategrey"
        transform={{ position: { x: 130, y: 750 }, scale: { x: 100, y: 100 } }}
      />
      <SceneObject
        name="WALLEGROUND"
        color="darkslategrey"
        transform={{ position: { x: 40, y: 1000 }, scale: { x: 100, y: 100 } }}
      />
      <SceneObject
        name="WALLEGROUND"
        color="darkslategrey"
        transform={{ position: { x: 130, y: 1250 }, scale: { x: 100, y: 100 } }}
      />
      <SceneObject
        name="WALLEGROUND"
        color="darkslategrey"
        transform={{ position: { x: 40, y: 1500 }, scale: { x: 100, y: 100 } }}
      />
      <SceneObject
        name="WALLEGROUND"
        color="darkslategrey"
        transform={{ position: { x: 20, y: 1825 }, scale: { x: 230, y: 300 } }}
      />
    </SceneObject>
  );
});

export default Elevator;
