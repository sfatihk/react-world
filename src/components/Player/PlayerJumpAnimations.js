import { css, keyframes } from "styled-components";

const animations = {
  //vader jumps
  "8000-8650": { startHeight: 200, endHeight: 100, type: "fall" },
  "8700-9320": { startHeight: 100, endHeight: 200, type: "jump" },
  "9370-9800": { startHeight: 200, endHeight: 100, type: "fall" },

  //walle jumps
  "12700-13150": { startHeight: 247, endHeight: 100, type: "fall" },
  "13170-13550": { startHeight: 100, endHeight: 247, type: "jump" },
  "13570-13950": { startHeight: 247, endHeight: 100, type: "fall" },

  "14000-14600": { startHeight: 100, endHeight: 247, type: "jump" },
  "14610-15070": { startHeight: 247, endHeight: 100, type: "fall" },

  "15100-15570": { startHeight: 100, endHeight: 247, type: "jump" },
  "15580-15600": { startHeight: 247, endHeight: 100, type: "fall" },

  "16000-16600": { startHeight: 100, endHeight: 247, type: "jump" },
  "16650-17000": { startHeight: 247, endHeight: 100, type: "fall" },

  //mario jumps

  "18000-18500": { startHeight: 270, endHeight: 100, type: "fall" },
  "18500-18580": { startHeight: 100, endHeight: 270, type: "jump" },
  "18580-18770": { startHeight: 270, endHeight: 100, type: "fall" },

  "18900-19070": { startHeight: 347, endHeight: 100, type: "fall" },
  "19100-19350": { startHeight: 100, endHeight: 347, type: "jump" },
  "19380-19500": { startHeight: 347, endHeight: 100, type: "fall" },

  "1900-19870": { startHeight: 300, endHeight: 100, type: "fall" },
  "19900-20540": { startHeight: 100, endHeight: 300, type: "jump" },
  "20580-21000": { startHeight: 300, endHeight: 100, type: "fall" },

  //pacman jumps
  "23700-24470": { startHeight: 300, endHeight: 100, type: "fall" },
  "24500-25150": { startHeight: 100, endHeight: 300, type: "jump" },
  "25170-26000": { startHeight: 300, endHeight: 100, type: "fall" },

  //end jumps
  "28100-28850": { startHeight: 300, endHeight: 100, type: "fall" },
  "28900-29150": { startHeight: 100, endHeight: 10000, type: "jump" },
  "29150-30000": { startHeight: 300, endHeight: 100, type: "fall" },
};

let lastAnimType = "fall";
let lastKeyframes = [100, 0, 100];

const jump = (props) => keyframes`
  0%  {bottom: ${lastKeyframes[0] + "px"}}
  35%  {bottom: ${lastKeyframes[1] + "px"}}
  100% {bottom: ${lastKeyframes[2] + "px"}}
`;

const freeFall = (props) => keyframes`
  0%  {bottom: ${lastKeyframes[0] + "px"}}
  100% {bottom: ${lastKeyframes[2] + "px"}}
`;

const jumpNow = css`
  ${jump} .3s forwards ease-out;
`;

const fallNow = (props) => css`
  ${freeFall} .1s forwards ease-out;
`;

/** search in `animations` by frame(scroll) */
const determineAnim = (scroll) => {
  let anim = null;

  const currFrame = scroll;

  let animRange;
  Object.keys(animations).some((k) => {
    animRange = k.split("-");

    //if it out of current range
    if (currFrame < animRange[0] || animRange[1] <= currFrame) {
      return false;
    }

    anim = animations[k];
    return true;
  });

  if (anim === undefined || anim === null || anim === "") return false;

  if (lastAnimType === anim.type) return false;

  lastKeyframes = [
    anim.startHeight,
    (anim.endHeight - anim.startHeight) / 2 + anim.endHeight,
    anim.endHeight,
  ];

  lastAnimType = anim.type;
};

/**
 *
 * @param {*} scroll
 */
const getJumpAnimation = (scroll) => {
  determineAnim(scroll);

  return lastAnimType === "jump" ? jumpNow : fallNow;
};

export default getJumpAnimation;
