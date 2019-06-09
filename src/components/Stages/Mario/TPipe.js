import React from "react";
import SceneObject from "../../SceneObject";
import PipeHead from "../../../assets/images/pipe/pipeHead.png";
import PipeBody from "../../../assets/images/pipe/pipe.png";

const TPipe = React.memo(props => (
  <SceneObject {...props} name="Pipe">
    <SceneObject
      name="Pipe Head"
      transform={{
        position: { x: 0, y: 45 },
        scale: { x: 225, y: 150 },
        rotation: 270
      }}
      imgUrl={PipeHead}
    />
    <SceneObject
      name="Pipe Head"
      transform={{ position: { x: 177, y: 280 }, scale: { x: 145, y: 150 } }}
      imgUrl={PipeHead}
    />
    <SceneObject
      name="Pipe Body"
      transform={{ position: { x: 187, y: -2460 }, scale: { x: 125, y: 2740 } }}
      imgUrl={PipeBody}
      bgRepeat
    />
    <SceneObject
      name="Pipe Body"
      transform={{
        position: { x: 585, y: -2445 },
        scale: { x: 125, y: 680 },
        rotation: 90
      }}
      imgUrl={PipeBody}
      bgRepeat
    />
    <SceneObject
      name="Pipe Head"
      transform={{
        position: { x: 967, y: -2184 },
        scale: { x: 190, y: 150 },
        rotation: 90
      }}
      imgUrl={PipeHead}
    />
  </SceneObject>
));

export default TPipe;
