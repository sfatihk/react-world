//character images
import mario_01 from "../../assets/images/mario/mario_01.png";
import mario_02 from "../../assets/images/mario/mario_02.png";
import mario_03 from "../../assets/images/mario/mario_03.png";
import mario_11 from "../../assets/images/mario/mario_11.png";
import mario_12 from "../../assets/images/mario/mario_12.png";
import mario_13 from "../../assets/images/mario/mario_13.png";

import gandalf_01 from "../../assets/images/gandalf/gandalf_01.png";
import gandalf_02 from "../../assets/images/gandalf/gandalf_02.png";
import gandalf_03 from "../../assets/images/gandalf/gandalf_03.png";
import gandalf_11 from "../../assets/images/gandalf/gandalf_11.png";
import gandalf_12 from "../../assets/images/gandalf/gandalf_12.png";
import gandalf_13 from "../../assets/images/gandalf/gandalf_13.png";

import pacman_01 from "../../assets/images/pacman/pacman_01.png";
import pacman_02 from "../../assets/images/pacman/pacman_02.png";
import pacman_11 from "../../assets/images/pacman/pacman_11.png";
import pacman_12 from "../../assets/images/pacman/pacman_12.png";

import vader_01 from "../../assets/images/vader/vader_01.png";
import vader_02 from "../../assets/images/vader/vader_02.png";
import vader_03 from "../../assets/images/vader/vader_03.png";
import vader_11 from "../../assets/images/vader/vader_11.png";
import vader_12 from "../../assets/images/vader/vader_12.png";
import vader_13 from "../../assets/images/vader/vader_13.png";

import walle_01 from "../../assets/images/walle/walle_01.png";
import walle_02 from "../../assets/images/walle/walle_02.png";
import walle_03 from "../../assets/images/walle/walle_03.png";
import walle_11 from "../../assets/images/walle/walle_11.png";
import walle_12 from "../../assets/images/walle/walle_12.png";
import walle_13 from "../../assets/images/walle/walle_13.png";

const heroes = {
  space: {
    speed: 30,
    delimiter: 10, // speed / step
    frames: [
      ["", "", ""], //backward
      ["", "", ""], //forward
    ],
  },
  mario: {
    speed: 30,
    delimiter: 10, // speed / step
    frames: [
      [mario_01, mario_02, mario_03], //backward
      [mario_11, mario_12, mario_13], //forward
    ],
  },
  gandalf: {
    speed: 30,
    delimiter: 10, // speed / step
    frames: [
      [gandalf_01, gandalf_02, gandalf_03], //backward
      [gandalf_11, gandalf_12, gandalf_13], //forward
    ],
  },
  pacman: {
    speed: 30,
    delimiter: 10, // speed / step
    frames: [
      [pacman_01, pacman_02, pacman_02], //backward
      [pacman_11, pacman_12, pacman_12], //forward
    ],
  },
  vader: {
    speed: 30,
    delimiter: 10, // speed / step
    frames: [
      [vader_01, vader_02, vader_03], //backward
      [vader_11, vader_12, vader_13], //forward
    ],
  },
  walle: {
    speed: 30,
    delimiter: 10, // speed / step
    frames: [
      [walle_01, walle_02, walle_03], //backward
      [walle_11, walle_12, walle_13], //forward
    ],
  },
};

let count = 0;
let lastDirection = 1;
let currentHero = "gandalf";

const heroesShowUp = {
  "0-7050": { hero: "gandalf" },
  "7050-12100": { hero: "vader" },
  "12100-12600": { hero: "space" },
  "12600-17650": { hero: "walle" },
  "17650-21975": { hero: "mario" },
  "21975-23100": { hero: "space" },
  "23100-28150": { hero: "pacman" },
  "28150-29050": { hero: "space" },
};

/** search in `animations` by frame(scroll) */
const determineAnim = (scroll) => {
  try {
    let anim = null;

    const currFrame = scroll;

    let animRange;
    Object.keys(heroesShowUp).some((k) => {
      animRange = k.split("-");

      //if it out of current range
      if (currFrame < animRange[0] || animRange[1] <= currFrame) {
        return false;
      }

      anim = heroesShowUp[k];
      return true;
    });

    if (anim === undefined || anim === null || anim === "") return currentHero;

    return anim.hero;
  } catch (e) {
    return currentHero;
  }
};

/**
 *
 * @param {*} onScrolling
 * @param {*} scrollDirection
 */
const getWalkAnimation = (onScrolling, scrollDirection, scroll) => {
  if (onScrolling) {
    currentHero = determineAnim(scroll);
    if (scrollDirection === lastDirection) {
      count = count === heroes[currentHero].speed - 1 ? 0 : count + 1;
    } else {
      count = 0;
    }
    lastDirection = scrollDirection;
  }

  return heroes[currentHero].frames[scrollDirection][
    Math.floor(count / heroes[currentHero].delimiter)
  ];
};

export default getWalkAnimation;
