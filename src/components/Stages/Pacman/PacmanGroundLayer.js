import React from "react";
import SceneObject from "../../SceneObject";
import Box from "./Box";
import TBox from "./TBox";
import LBox from "./LBox";
import Enemy from "./Enemy";
import Coin from "./Coin";

const visibleRange = [20000, 28500];

const PacmanGroundLayer = React.memo(props => {
  if (!(visibleRange[0] <= props.scroll && props.scroll < visibleRange[1]))
    return <div />;
  return (
    <SceneObject {...props} name="Pacman Ground Layer">
      <SceneObject
        name="PACMANGROUND"
        color="#2e3fe6"
        transform={{ position: { x: 0, y: 50 }, scale: { x: 5100, y: 50 } }}
      />
      <Box color="#2e3fe6" transform={{ position: { x: 1600, y: 200 } }} />
      <TBox
        color="#2e3fe6"
        transform={{ position: { x: 2700, y: 370 }, rotation: 180 }}
      />
      <LBox color="#2e3fe6" transform={{ position: { x: 3350, y: 380 } }} />
      <LBox
        color="#2e3fe6"
        transform={{ position: { x: 4100, y: 380 }, rotation: 90 }}
      />
      <Enemy
        transform={{ position: { x: 2100, y: 100 } }}
        type="2"
        canChange={props.scroll > 24900}
        canEat={props.scroll > 25100}
      />
      <Enemy
        transform={{ position: { x: 2350, y: 100 } }}
        type="4"
        canChange={props.scroll > 24900}
        canEat={props.scroll > 25300}
      />
      <Enemy
        transform={{ position: { x: 3200, y: 100 } }}
        type="3"
        canChange={props.scroll > 24900}
        canEat={props.scroll > 26100}
      />
      <Enemy transform={{ position: { x: 3200, y: 500 } }} type="4" />
      <Coin
        transform={{ position: { x: 500, y: 200 } }}
        type="1"
        canEat={props.scroll > 23500}
      />
      <Coin
        transform={{ position: { x: 700, y: 200 } }}
        type="1"
        canEat={props.scroll > 23700}
      />
      <Coin
        transform={{ position: { x: 900, y: 200 } }}
        type="1"
        canEat={props.scroll > 23900}
      />
      <Coin
        transform={{ position: { x: 1100, y: 200 } }}
        type="1"
        canEat={props.scroll > 24100}
      />
      <Coin
        transform={{ position: { x: 1300, y: 200 } }}
        type="1"
        canEat={props.scroll > 24300}
      />
      <Coin
        transform={{ position: { x: 1900, y: 400 } }}
        type="2"
        canEat={props.scroll > 24900}
      />
    </SceneObject>
  );
});

export default PacmanGroundLayer;
