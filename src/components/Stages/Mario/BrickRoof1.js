import React from "react";
import SceneObject from "../../SceneObject";
import Brick from "../../../assets/images/brick/brick.png";
import prizeBox2 from "../../../assets/images/prizeBox/prizeBox2.png";

const BrickRoof1 = React.memo(props => (
  <SceneObject {...props} name="Brick Roof">
    <SceneObject
      name="Brick"
      transform={{ position: { x: 0, y: 0 }, scale: { x: 100, y: 100 } }}
      imgUrl={Brick}
      bgRepeat
    />
    <SceneObject
      name="Prize Box"
      transform={{ position: { x: 100, y: 0 }, scale: { x: 100, y: 100 } }}
      imgUrl={prizeBox2}
    />
    <SceneObject
      name="Brick"
      transform={{ position: { x: 200, y: 0 }, scale: { x: 300, y: 100 } }}
      imgUrl={Brick}
      bgRepeat
    />
  </SceneObject>
));

export default BrickRoof1;
