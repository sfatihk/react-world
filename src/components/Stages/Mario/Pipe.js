import React from "react";
import SceneObject from "../../SceneObject";
import PipeHead from "../../../assets/images/pipe/pipeHead.png";
import PipeBody from "../../../assets/images/pipe/pipe.png";

const Pipe = React.memo(props => (
  <SceneObject {...props} name="Pipe">
    <SceneObject
      name="Pipe Head"
      transform={{ position: { x: 0, y: 175 }, scale: { x: 145, y: 150 } }}
      imgUrl={PipeHead}
    />
    <SceneObject
      name="Pipe Body"
      transform={{ position: { x: 10, y: 0 }, scale: { x: 125, y: 175 } }}
      imgUrl={PipeBody}
      bgRepeat
    />
  </SceneObject>
));

export default Pipe;
