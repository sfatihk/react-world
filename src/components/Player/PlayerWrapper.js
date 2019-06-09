import styled from "styled-components";
import SceneObject from "../SceneObject";

const PlayerWrapper = styled(SceneObject)`
  position: fixed;
  width: 100% !important;

  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;

  align-items: flex-end;
  justify-content: center;

  z-index: 2;
  animation: ${props => props.animation};

  bottom: 0px !important;
`;

export default PlayerWrapper;
