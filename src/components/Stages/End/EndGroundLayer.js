import React from "react";
import SceneObject from "../../SceneObject";
import Thanks from "./Thanks";
import EndText from "./EndText";

const visibleRange = [26000, 30000];

const EndGroundLayer = React.memo(props => {
  if (!(visibleRange[0] <= props.scroll && props.scroll < visibleRange[1]))
    return <div />;
  return (
    <SceneObject {...props} name="End Ground Layer">
      <Thanks transform={{ position: { x: 600, y: 600 } }} />
      <Thanks transform={{ position: { x: 100, y: 600 } }} />
      <Thanks transform={{ position: { x: 1000, y: 700 } }} />
      <Thanks transform={{ position: { x: 300, y: 800 } }} />
      <Thanks transform={{ position: { x: 900, y: 900 } }} />
      <Thanks transform={{ position: { x: 800, y: 1000 } }} />
      <Thanks transform={{ position: { x: 100, y: 1000 } }} />
      <Thanks transform={{ position: { x: 1300, y: 1400 } }} />
      <Thanks transform={{ position: { x: 600, y: 1400 } }} />
      <Thanks transform={{ position: { x: 1100, y: 1900 } }} />
      <EndText transform={{ position: { x: 2000, y: 2500 } }} />
    </SceneObject>
  );
});

export default EndGroundLayer;
