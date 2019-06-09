import React from "react";
import SceneObject from "../../SceneObject";

const visibleRange = [5050, 12600];

const StarwarsEnvironmentLayer = React.memo(props => {
  if (!(visibleRange[0] <= props.scroll && props.scroll < visibleRange[1]))
    return <div />;
  return (
    <SceneObject {...props} name="Starwars Environment">
      <SceneObject
        name="rock-ground"
        color="grey"
        transform={{ position: { x: -200, y: 0 }, scale: { x: 5250, y: 170 } }}
      />
    </SceneObject>
  );
});

export default StarwarsEnvironmentLayer;
