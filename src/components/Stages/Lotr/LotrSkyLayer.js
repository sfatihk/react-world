import React from "react";
import SceneObject from "../../SceneObject";
import Sauron from "./Sauron";
import Volcano from "./Volcano";

const visibleRange = [0, 8050];

const LotrSkyLayer = React.memo(props => {
  if (!(visibleRange[0] <= props.scroll && props.scroll < visibleRange[1]))
    return <div />;
  return (
    <SceneObject name="Lotr Sky Layer" {...props}>
      <SceneObject
        name="firstBlock"
        color="#5c5c5c"
        transform={{
          position: { x: 415, y: 166 },
          scale: { x: 240, y: 140 },
          rotation: 45
        }}
      />
      <SceneObject
        name="GRASS"
        color="#5c5c5c"
        transform={{ position: { x: 500, y: 100 }, scale: { x: 2086, y: 270 } }}
      />
      <SceneObject
        name="lastBlock"
        color="#5c5c5c"
        transform={{
          position: { x: 2501, y: 166 },
          scale: { x: 240, y: 140 },
          rotation: 45
        }}
      />
      <Sauron transform={{ position: { x: 1600, y: 290 } }} />
      <Volcano transform={{ position: { x: 1750, y: 330 } }} />
    </SceneObject>
  );
});

export default LotrSkyLayer;
