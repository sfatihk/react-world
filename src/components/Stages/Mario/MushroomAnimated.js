import React, { useState, useEffect } from "react";
import styled from "styled-components";

import SceneObject from "../../SceneObject";
import mushroom from "../../../assets/images/mushroom/mushroom.png";
import AnimateCalculation from "../../../utils/AnimateCalculation";

const MushroomAnimated = React.memo(
  (props) => {
    const animations = {
      "0-18500": { position: { x: [100, 100], y: [-100, -100] } },
      "18500-18550": { position: { x: [100, 100], y: [-100, 100] } },
      "18550-18600": { position: { x: [100, 100], y: [100, 0] } },
      "18600-18800": { position: { x: [100, 500], y: [0, 0] } },
      "18800-18900": { position: { x: [500, 600], y: [0, -450] } },
      "18900-18950": { position: { x: [600, 650], y: [-450, -450] } },
      ["18950-" + Infinity]: { position: { x: [650, 650], y: [-450, -450] } },
    };

    const [position, setPosition] = useState({ x: 100, y: 0 });
    useEffect(() => {
      setPosition(AnimateCalculation(animations, props.scroll).position);
    }, [props.scroll]);

    const FixedSceneObject = styled(SceneObject)`
      position: fixed !important;
    `;

    return (
      <FixedSceneObject {...props} name="Mushroom">
        <SceneObject
          imgUrl={mushroom}
          transform={{
            position: position,
            scale: { x: 100, y: 100 },
            rotation: 0,
            opacity: props.scroll > 19100 ? 0 : 1,
          }}
        ></SceneObject>
      </FixedSceneObject>
    );
  },
  (prevProps, nextProps) => prevProps.scroll === nextProps.scroll
);

export default MushroomAnimated;
