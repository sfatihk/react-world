import React from "react";

import SceneObject from "../../SceneObject";
import Building from "./Building";

const visibleRange = [7050, 19650];

const WalleEnvironmentLayer = React.memo(props => {
  if (!(visibleRange[0] <= props.scroll && props.scroll < visibleRange[1]))
    return <div />;
  return (
    <SceneObject {...props} name="Walle Environment Layer">
      <Building
        transform={{ position: { x: 0, y: 0 }, scale: { x: 200, y: 800 } }}
        type="2"
      />
      <Building
        transform={{ position: { x: 250, y: 0 }, scale: { x: 200, y: 800 } }}
        type="1"
      />
      <Building
        transform={{ position: { x: 650, y: 0 }, scale: { x: 350, y: 800 } }}
        type="5"
      />
      <Building
        transform={{ position: { x: 1050, y: 0 }, scale: { x: 350, y: 800 } }}
        type="5"
      />
      <Building
        transform={{ position: { x: 1600, y: 0 }, scale: { x: 300, y: 800 } }}
        type="3"
      />
      <Building
        transform={{
          position: { x: 1900, y: 0 },
          scale: { x: 300, y: 800 },
          rotation: -30
        }}
        type="4"
      />
      <Building
        transform={{
          position: { x: 2500, y: -700 },
          scale: { x: 350, y: 1500 }
        }}
        type="1"
      />
    </SceneObject>
  );
});

export default WalleEnvironmentLayer;
