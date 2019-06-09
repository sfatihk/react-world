import React from "react";
import SceneObject from "../../SceneObject";
import HobbitHole from "./HobbitHole";
import Tree from "./Tree";
import Frodo from "./Frodo";

const visibleRange = [0, 8050];

const LotrGroundLayer = React.memo(props => {
  if (!(visibleRange[0] <= props.scroll && props.scroll < visibleRange[1]))
    return <div />;
  return (
    <SceneObject {...props} name="Lotr Ground Layer">
      <SceneObject
        name="GRASS"
        color="#4bab3e"
        transform={{
          position: { x: -1500, y: -700 },
          scale: { x: 6500, y: 800 }
        }}
      />
      <SceneObject
        transform={{ position: { x: -500, y: 20 }, scale: { x: 2000, y: 100 } }}
      >
        <h2 style={{ color: "#11722E" }}>Please scroll down :)</h2>
      </SceneObject>
      <Tree transform={{ position: { x: 700, y: 35 } }} type="2" />
      <Tree transform={{ position: { x: 970, y: 35 } }} type="3" />
      <Tree transform={{ position: { x: 1300, y: 35 } }} type="1" />
      <Tree
        transform={{ position: { x: 1650, y: 35 }, scale: { x: 600, y: 703 } }}
        type="6"
      />
      <Tree transform={{ position: { x: 2000, y: 35 } }} type="4" />
      <Tree transform={{ position: { x: 2000, y: 35 } }} type="4" />
      <HobbitHole
        transform={{ position: { x: 1500, y: 99 }, scale: { x: 1000, y: 323 } }}
        type="1"
      />
      <Tree
        transform={{ position: { x: 3300, y: 47 }, scale: { x: 400, y: 503 } }}
        type="1"
      />
      <Tree transform={{ position: { x: 3500, y: 35 } }} type="3" />
      <Tree
        transform={{ position: { x: 3800, y: -27 }, scale: { x: 600, y: 803 } }}
        type="6"
      />
      <Tree transform={{ position: { x: 4100, y: 35 } }} type="2" />
      <Frodo
        transform={{ position: { x: 3950, y: 100 }, scale: { x: 600, y: 803 } }}
        canPlay={3700 < props.scroll}
      />
    </SceneObject>
  );
});

export default LotrGroundLayer;
