import React from "react";
import SceneObject from "../../SceneObject";

import TwitterShareButton from "./TwitterShareButton";

const EndText = React.memo(props => (
  <SceneObject
    name="Thanks"
    transform={{
      position: props.transform.position,
      scale: { x: "auto", y: "auto" },
      rotation: props.transform.rotation
    }}
  >
    <TwitterShareButton />
    <a
      style={{ textDecoration: "none" }}
      href="https://github.com/sfatihk/react-world"
    >
      <h1 style={{ color: "#6B6B6B" }}>
        &gt;View
        <br />
        Source
      </h1>
    </a>

    <a style={{ textDecoration: "none" }} href="https://github.com/sfatihk">
      <h3 style={{ color: "white" }}>sfatihk 2019</h3>
    </a>
  </SceneObject>
));
export default EndText;
