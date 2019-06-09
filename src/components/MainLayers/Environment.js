import React, { Component } from "react";
import FloatedLayer from "./FloatedLayer";
import LotrEnvironmentLayer from "../Stages/Lotr/LotrEnvironmentLayer";
import StarwarsEnvironmentLayer from "../Stages/Starwars/StarwarsEnvironmentLayer";
import WalleEnvironmentLayer from "../Stages/Walle/WalleEnvironmentLayer";

import AnimateCalculation from "../../utils/AnimateCalculation";
export class Environment extends Component {
  constructor(props) {
    super(props);

    this.transform = { position: { x: 0, y: 0 } };

    /* maybe seperated */

    this.animations = {
      "0-5050": { position: { x: [0, -4000], y: [0, 0] } },
      "5050-7050": { position: { x: [-4000, -4800], y: [0, 700] } },
      "7050-12100": { position: { x: [-4800, -9750], y: [700, 700] } },
      "12100-12600": { position: { x: [-9750, -9750], y: [700, -1100] } },
      "12600-17650": { position: { x: [-9750, -13000], y: [-1100, -1100] } },
      "17650-22075": { position: { x: [-13000, -16250], y: [-1100, -1100] } },
      "22075-23100": { position: { x: [-16250, -16250], y: [-1100, -1100] } },
      "23100-28150": { position: { x: [-16250, -16250], y: [-1100, -1100] } },
      "28150-33050": { position: { x: [-16250, -16250], y: [-1100, -1100] } }
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
      <FloatedLayer name="GROUND" transform={this.transform}>
        <LotrEnvironmentLayer
          {...this.props}
          transform={{ position: { x: 0, y: 0 } }}
        />
        <StarwarsEnvironmentLayer
          {...this.props}
          transform={{ position: { x: 4800, y: -700 } }}
        />
        <WalleEnvironmentLayer
          {...this.props}
          transform={{ position: { x: 9750, y: 1100 } }}
        />
      </FloatedLayer>
    );
  }
}

export default React.memo(Environment);
