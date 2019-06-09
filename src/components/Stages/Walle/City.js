import React from "react";

import SceneObject from "../../SceneObject";

import CityBody from "../../../assets/images/city/city.png";

const City = React.memo(props => {
  return (
    <SceneObject
      name="City"
      transform={{
        position: props.transform.position,
        scale: { x: 1200, y: 800 }
      }}
      imgUrl={CityBody}
    />
  );
});

export default City;
