import React, { Component } from "react";
import FloatedLayer from "./FloatedLayer";

import LotrSkyLayer from "../Stages/Lotr/LotrSkyLayer";
import StarwarsSkyLayer from "../Stages/Starwars/StarwarsSkyLayer";
import WalleSkyLayer from "../Stages/Walle/WalleSkyLayer";

import AnimateCalculation from "../../utils/AnimateCalculation";

export class Sky extends Component {
  constructor(props) {
    super(props);

    this.transform = { position: { x: 0, y: 0 } };

    /* maybe seperated */

    this.animations = {
      "0-1050": { position: { x: [0, -700], y: [0, 0] } },
      "1050-5050": { position: { x: [-700, -3000], y: [0, 0] } },
      "5050-7050": { position: { x: [-3000, -4000], y: [0, 700] } },
      "7050-12100": { position: { x: [-4000, -7000], y: [700, 700] } },
      "12100-12600": { position: { x: [-7000, -7000], y: [700, -1100] } },
      "12600-17650": { position: { x: [-7000, -9000], y: [-1100, -1100] } },
      "17650-22075": { position: { x: [-9000, -12000], y: [-1100, -1100] } },
      "22075-23100": { position: { x: [-12000, -12000], y: [-1100, -1100] } },
      "23100-28150": { position: { x: [-12000, -12000], y: [-1100, -1100] } },
      "28150-33050": { position: { x: [-12000, -12000], y: [-1100, -1100] } }
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
      <FloatedLayer name="Sky Layer" transform={this.transform}>
        <LotrSkyLayer
          {...this.props}
          transform={{ position: { x: 0, y: 0 } }}
        />
        <StarwarsSkyLayer
          {...this.props}
          transform={{ position: { x: 4000, y: -700 } }}
        />
        <WalleSkyLayer
          {...this.props}
          transform={{ position: { x: 7000, y: 1100 } }}
        />
      </FloatedLayer>
    );
  }
}

export default Sky;
