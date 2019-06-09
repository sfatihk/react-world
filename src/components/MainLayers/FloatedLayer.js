import styled from "styled-components";
import SceneObject from "../SceneObject";

const FloatedLayer = styled(SceneObject).attrs(props => ({}))`
  height: 100% !important;
  width: 100% !important;
  margin-left: 50%;
  position: fixed;
`;

export default FloatedLayer;
