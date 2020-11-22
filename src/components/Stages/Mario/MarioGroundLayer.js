import React from "react";

import SceneObject from "../../SceneObject";

import Pipe from "./Pipe";
import TPipe from "./TPipe";
import BrickRoof1 from "./BrickRoof1";
import BrickRoof2 from "./BrickRoof2";
import Bush from "./Bush";
import Hill from "./Hill";
import Castle from "./Castle";
import RisingFlag from "./RisingFlag";

import GroundTile from "../../../assets/images/groundTiles/1.png";
import PrizeBox from "./PrizeBox";
import MushroomAnimated from "./MushroomAnimated";

const visibleRange = [15500, 24550];

const MarioGroundLayer = React.memo((props) => {
  if (!(visibleRange[0] <= props.scroll && props.scroll < visibleRange[1]))
    return <div />;
  return (
    <SceneObject {...props} name="Mario Ground Layer">
      <SceneObject
        name="MARIOGROUND"
        color="green"
        transform={{ position: { x: 0, y: -50 }, scale: { x: 2325, y: 150 } }}
        imgUrl={GroundTile}
        bgRepeat
      />
      <SceneObject
        name="MARIOWATER"
        color="blue"
        transform={{ position: { x: 2325, y: 0 }, scale: { x: 540, y: 70 } }}
      />
      <SceneObject
        name="MARIOGROUND"
        transform={{
          position: { x: 2850, y: -2300 },
          scale: { x: 2500, y: 2400 },
        }}
        imgUrl={GroundTile}
        bgRepeat
      />
      <Hill transform={{ position: { x: 275, y: 100 } }} />
      <Bush transform={{ position: { x: 675, y: 100 } }} />
      <PrizeBox transform={{ position: { x: 350, y: 450 } }} />
      <MushroomAnimated
        transform={{ position: { x: 750, y: 550 } }}
        animStartScroll={18500}
        scroll={props.scroll}
      />
      <BrickRoof1
        transform={{ position: { x: 750, y: 450 } }}
        showMushroom={props.scroll > 18500}
      />
      <Bush transform={{ position: { x: 1600, y: 100 } }} />
      <Pipe transform={{ position: { x: 1500, y: 100 } }} />
      <BrickRoof2 transform={{ position: { x: 2325, y: 200 } }} />
      <RisingFlag
        transform={{ position: { x: 3105, y: 425 } }}
        canPlay={props.scroll > 20600}
      />
      <RisingFlag
        transform={{ position: { x: 3265, y: 695 } }}
        canPlay={props.scroll > 20600}
      />
      <RisingFlag
        transform={{ position: { x: 3545, y: 425 } }}
        canPlay={props.scroll > 20600}
      />
      <Castle transform={{ position: { x: 3078, y: 95 } }} />
      <TPipe transform={{ position: { x: 4278, y: 95 } }} />
    </SceneObject>
  );
});

export default MarioGroundLayer;
