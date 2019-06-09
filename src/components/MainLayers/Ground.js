import React, { Component } from "react";
import FloatedLayer from "./FloatedLayer";

import LotrGroundLayer from "../Stages/Lotr/LotrGroundLayer";
import StarwarsGroundLayer from "../Stages/Starwars/StarwarsGroundLayer";
import WalleGroundLayer from "../Stages/Walle/WalleGroundLayer";
import MarioGroundLayer from "../Stages/Mario/MarioGroundLayer";
import PacmanGroundLayer from "../Stages/Pacman/PacmanGroundLayer";
import EndGroundLayer from "../Stages/End/EndGroundLayer";

import AnimateCalculation from "../../utils/AnimateCalculation";
import SceneObject from "../SceneObject";

export class Ground extends Component {
  constructor(props) {
    super(props);

    this.transform = { position: { x: 0, y: 0 } };

    /* maybe seperated */

    this.animations = {
      "0-5050": { position: { x: [0, -5050], y: [0, 0] } },
      "5050-7050": { position: { x: [-5050, -5750], y: [0, 700] } },
      "7050-12100": { position: { x: [-5750, -10800], y: [700, 700] } },
      "12100-12600": { position: { x: [-10800, -10800], y: [700, -1100] } },
      "12600-17650": { position: { x: [-10800, -15850], y: [-1100, -1100] } },
      "17650-22175": { position: { x: [-15850, -20375], y: [-1100, -1100] } },
      "22175-22500": { position: { x: [-20375, -20375], y: [-1100, 1200] } },
      "22500-23100": { position: { x: [-20375, -21300], y: [1200, 1200] } },
      "23100-28150": { position: { x: [-21300, -26350], y: [1200, 1200] } },
      "28150-30050": { position: { x: [-26350, -31350], y: [1200, -4200] } }
    };
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (this.props.scroll !== nextProps.scroll) {
      this.transform = AnimateCalculation(this.animations, nextProps.scroll);
      return true;
    }

    return false;
  }

  render() {
    return (
      <FloatedLayer name="GROUND" transform={this.transform} zIndex={30}>
        <SceneObject
          name="MiddleLayer"
          color="grey"
          transform={{
            position: { x: 4556, y: -972 },
            scale: { x: 1100, y: 800 },
            rotation: 45
          }}
        />
        <LotrGroundLayer
          {...this.props}
          transform={{ position: { x: 0, y: 0 } }}
        />
        <StarwarsGroundLayer
          {...this.props}
          transform={{ position: { x: 5750, y: -700 } }}
        />
        <WalleGroundLayer
          {...this.props}
          transform={{ position: { x: 10800, y: 1100 } }}
        />
        <MarioGroundLayer
          {...this.props}
          transform={{ position: { x: 15850, y: 1100 } }}
        />
        <PacmanGroundLayer
          {...this.props}
          transform={{ position: { x: 21200, y: -1200 } }}
        />
        <EndGroundLayer
          {...this.props}
          transform={{ position: { x: 26350, y: -1200 } }}
        />
      </FloatedLayer>
    );
  }
}

export default React.memo(Ground);
