import React from "react";
import styled from "styled-components";

import SceneObject from "../../SceneObject";
import prizeBox2 from "../../../assets/images/prizeBox/prizeBox2.gif";

const MushroomAnimated = React.memo(props => {
  const FixedSceneObject = styled(SceneObject)`
    position: fixed !important;
  `;
  return <FixedSceneObject {...props} name="Prize Box" imgUrl={prizeBox2} />;
});

export default MushroomAnimated;
