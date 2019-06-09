import React from "react";
import { css, keyframes } from "styled-components";
import SceneObject from "../../SceneObject";
import Stone from "../../../assets/images/redstones/stone.png";

const force1 = props => keyframes`
  5% {left: -400px;bottom:300px;}
  100% {left: -400px;bottom:300px;transform:rotate(360deg)}
`;
const force2 = props => keyframes`
  5% {left: -150px;bottom:300px;}
  100% {left: -150px;bottom:300px;transform:rotate(-360deg)}
`;
const force3 = props => keyframes`
  5% {left: 100px;bottom:300px;}
  100% {left: 100px;bottom:300px;transform:rotate(360deg)}
`;
const force4 = props => keyframes`
  5% {left: 400px;bottom:300px;}
  100% {left: 400px;bottom:300px;transform:rotate(-360deg)}
`;
const force5 = props => keyframes`
  5% {left: -300px;bottom:400px;}
  100% {left: -300px;bottom:400px;transform:rotate(-360deg)}
`;
const force6 = props => keyframes`
  5% {left: 0px;bottom:400px;}
  100% {left: 0px;bottom:400px;transform:rotate(360deg)}
`;
const force7 = props => keyframes`
  5% {left: 200px;bottom:400px;}
  100% {left: 200px;bottom:400px;transform:rotate(-360deg)}
`;
const force8 = props => keyframes`
  5% {left: -200px;bottom:500px;}
  100% {left: -200px;bottom:500px;transform:rotate(360deg)}
`;
const force9 = props => keyframes`
  5% {left: 100px;bottom:500px;}
  100% {left: 100px;bottom:500px;transform:rotate(-360deg)}
`;

const force1Now = css`
  ${force1} 7s ease-in forwards;
`;
const force2Now = css`
  ${force2} 7s ease-in forwards;
`;
const force3Now = css`
  ${force3} 7s ease-in forwards;
`;
const force4Now = css`
  ${force4} 7s ease-in forwards;
`;
const force5Now = css`
  ${force5} 6s ease-in forwards;
`;
const force6Now = css`
  ${force6} 6s ease-in forwards;
`;
const force7Now = css`
  ${force7} 6s ease-in forwards;
`;
const force8Now = css`
  ${force8} 5s ease-in forwards;
`;
const force9Now = css`
  ${force9} 5s ease-in forwards;
`;

const RedstoneStack = React.memo(props => {
  return (
    <SceneObject name="Redstone Stack" transform={props.transform}>
      <SceneObject
        name="Forced Rock"
        transform={{
          position: { x: 0, y: 0 },
          scale: { x: 100, y: 100 },
          rotation: 180
        }}
        imgUrl={Stone}
        animation={props.canPlay ? force1Now : ""}
      />
      <SceneObject
        name="Ghost"
        transform={{
          position: { x: 70, y: 0 },
          scale: { x: 100, y: 100 },
          rotation: 45
        }}
        imgUrl={Stone}
        animation={props.canPlay ? force2Now : ""}
      />
      <SceneObject
        name="Ghost"
        transform={{
          position: { x: 150, y: 0 },
          scale: { x: 100, y: 100 },
          rotation: 135
        }}
        imgUrl={Stone}
        animation={props.canPlay ? force3Now : ""}
      />
      <SceneObject
        name="Ghost"
        transform={{
          position: { x: 220, y: 0 },
          scale: { x: 100, y: 100 },
          rotation: 190
        }}
        imgUrl={Stone}
        animation={props.canPlay ? force4Now : ""}
      />

      <SceneObject
        name="Ghost"
        transform={{
          position: { x: 0, y: 70 },
          scale: { x: 100, y: 100 },
          rotation: 290
        }}
        imgUrl={Stone}
        animation={props.canPlay ? force5Now : ""}
      />
      <SceneObject
        name="Ghost"
        transform={{
          position: { x: 90, y: 70 },
          scale: { x: 100, y: 100 },
          rotation: 45
        }}
        imgUrl={Stone}
        animation={props.canPlay ? force6Now : ""}
      />
      <SceneObject
        name="Ghost"
        transform={{
          position: { x: 180, y: 70 },
          scale: { x: 100, y: 100 },
          rotation: 135
        }}
        imgUrl={Stone}
        animation={props.canPlay ? force7Now : ""}
      />

      <SceneObject
        name="Ghost"
        transform={{
          position: { x: 90, y: 120 },
          scale: { x: 100, y: 100 },
          rotation: 45
        }}
        imgUrl={Stone}
        animation={props.canPlay ? force8Now : ""}
      />
      <SceneObject
        name="Ghost"
        transform={{
          position: { x: 180, y: 120 },
          scale: { x: 100, y: 100 },
          rotation: 135
        }}
        imgUrl={Stone}
        animation={props.canPlay ? force9Now : ""}
      />
    </SceneObject>
  );
});

export default RedstoneStack;
