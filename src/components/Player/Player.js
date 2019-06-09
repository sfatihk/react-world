import React from "react";
import PlayerWrapper from "./PlayerWrapper";
import getWalkAnimation from "./PlayerWalkEffect";
import getJumpAnimation from "./PlayerJumpAnimations";
import SceneObject from "../SceneObject";

const Player = props => {
  return (
    <PlayerWrapper name="Player Wrapper">
      <SceneObject
        name="Real Player"
        transform={{
          rotation: 0,
          scale: { x: 300, y: 400 }
        }}
        animation={getJumpAnimation(props.scroll)}
        imgUrl={getWalkAnimation(
          props.onScrolling,
          props.scrollDirection,
          props.scroll
        )}
      />
    </PlayerWrapper>
  );
};

export default Player;
