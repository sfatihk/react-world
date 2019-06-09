import React from "react";
import SceneObject from "../../SceneObject";
import DeathStar from "./DeathStar";

const visibleRange = [5050, 12600];

const StarwarsSkyLayer = React.memo(props => {
  if (!(visibleRange[0] <= props.scroll && props.scroll < visibleRange[1]))
    return <div />;
  return (
    <SceneObject {...props} name="Starwars Sky Layer">
      <DeathStar
        name="DeathStar"
        transform={{ position: { x: 1000, y: 200 } }}
      />
      <SceneObject
        name="Desert"
        color="moccasin"
        transform={{ position: { x: 0, y: 0 }, scale: { x: 5050, y: 303 } }}
      />
      <SceneObject
        name="Desert-corner"
        color="moccasin"
        transform={{
          position: { x: -107, y: 45 },
          scale: { x: 150, y: 240 },
          rotation: 45
        }}
      />
    </SceneObject>
  );
});

export default StarwarsSkyLayer;
