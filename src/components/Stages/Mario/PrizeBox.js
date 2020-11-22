import React from "react";
import SceneObject from "../../SceneObject";
import prizeBox2 from "../../../assets/images/prizeBox/prizeBox2.gif";

const PrizeBox = React.memo(props => (
  <SceneObject {...props} name="Prize Box">
    <SceneObject
      name="Prize Box"
      transform={{ position: { x: 0, y: 0 }, scale: { x: 100, y: 100 } }}
      imgUrl={prizeBox2}
    />
  </SceneObject>
));

export default PrizeBox;
