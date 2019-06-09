import React from "react";

import SceneObject from "../../SceneObject";
import City from "./City";

const visibleRange = [7050, 19650];

const WalleSkyLayer = React.memo(props => {
  if (!(visibleRange[0] <= props.scroll && props.scroll < visibleRange[1]))
    return <div />;
  return (
    <SceneObject {...props} name="Walle Sky Layer">
      <City transform={{ position: { x: 550, y: 0 } }} />
    </SceneObject>
  );
});

export default WalleSkyLayer;
