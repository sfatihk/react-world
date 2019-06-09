import React from "react";
import SceneObject from "../../SceneObject";

import RedRock from "./RedRock";
import ForcedRock from "./ForcedRock";
import RedstoneStack from "./RedstoneStack";

const visibleRange = [5050, 12600];

const StarwarsGroundLayer = React.memo(props => {
  if (!(visibleRange[0] <= props.scroll && props.scroll < visibleRange[1]))
    return <div />;
  return (
    <SceneObject {...props} name="Starwars Ground Layer">
      <SceneObject
        name="VADER VOLCANO"
        color="orange"
        transform={{ position: { x: -750, y: 0 }, scale: { x: 5800, y: 70 } }}
      />
      <RedRock
        transform={{ position: { x: -50, y: 100 }, scale: { x: 500, y: 1000 } }}
        type="5"
      />
      <RedRock
        transform={{ position: { x: 350, y: 70 }, scale: { x: 500, y: 1000 } }}
        type="2"
      />
      <RedRock
        transform={{ position: { x: 600, y: 100 }, scale: { x: 500, y: 600 } }}
        type="1"
      />
      <ForcedRock
        name="Forced Rock"
        color="white"
        transform={{ position: { x: 1250, y: 320 }, scale: { x: 100, y: 100 } }}
        canPlay={props.scroll > 8050}
      />
      <RedRock
        transform={{ position: { x: 2200, y: 70 }, scale: { x: 550, y: 1000 } }}
        type="3"
      />
      <RedRock
        transform={{
          position: { x: 2700, y: 100 },
          scale: { x: 550, y: 1000 }
        }}
        type="5"
      />
      <RedRock
        transform={{
          position: { x: 4300, y: -613 },
          scale: { x: 450, y: 1000 },
          rotation: 180
        }}
        type="4"
      />
      <SceneObject
        name="VADERGRODUN"
        color="darkred"
        transform={{ position: { x: -50, y: 60 }, scale: { x: 700, y: 40 } }}
      />
      <SceneObject
        name="VADERGRODUN"
        color="darkred"
        transform={{ position: { x: 700, y: 60 }, scale: { x: 970, y: 40 } }}
      />
      <SceneObject
        name="VADERGRODUN"
        color="darkred"
        transform={{ position: { x: 2220, y: 60 }, scale: { x: 990, y: 40 } }}
      />
      <SceneObject
        name="VADERGRODUN"
        color="darkred"
        transform={{ position: { x: 3250, y: 60 }, scale: { x: 360, y: 40 } }}
      />
      <SceneObject
        name="VADERGRODUN"
        color="darkred"
        transform={{ position: { x: 3620, y: 60 }, scale: { x: 360, y: 40 } }}
      />
      <SceneObject
        name="VADERGRODUN"
        color="darkred"
        transform={{ position: { x: 4030, y: 60 }, scale: { x: 1030, y: 40 } }}
      />
      <RedstoneStack
        color="white"
        transform={{ position: { x: 3750, y: 85 }, scale: { x: 100, y: 100 } }}
        canPlay={props.scroll > 10550}
      />
    </SceneObject>
  );
});

export default StarwarsGroundLayer;
