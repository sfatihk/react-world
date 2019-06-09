import React from "react";
import styled from "styled-components";

const SceneObject = styled.div.attrs(props => ({
  style: {
    backgroundColor: props.color ? props.color : `none`,

    //POSITION
    left:
      props.transform &&
      props.transform.position &&
      props.transform.position.x !== null
        ? typeof props.transform.position.x === "string"
          ? props.transform.position.x //for different unit
          : `${props.transform.position.x}px`
        : `unset`,

    bottom:
      props.transform &&
      props.transform.position &&
      props.transform.position.x !== null
        ? typeof props.transform.position.y === "string"
          ? props.transform.position.y //for different unit
          : `${props.transform.position.y}px`
        : `unset`,

    //SCALE
    width:
      props.transform &&
      props.transform.scale &&
      props.transform.scale.x !== null
        ? typeof props.transform.scale.x === "string"
          ? props.transform.scale.x //for different unit
          : `${props.transform.scale.x}px`
        : `unset`,

    height:
      props.transform &&
      props.transform.scale &&
      props.transform.scale.y !== null
        ? typeof props.transform.scale.y === "string"
          ? props.transform.scale.y //for different unit
          : `${props.transform.scale.y}px`
        : `unset`,

    opacity:
      props.transform && props.transform.opacity !== null
        ? props.transform.opacity
        : `unset`
  }
}))`
  position: absolute;

  /* ROTATION */
  transform: rotate(
    ${props =>
      props.transform && props.transform.rotation
        ? props.transform.rotation
        : 0}deg
  );
  -ms-transform: rotate(
    ${props =>
      props.transform && props.transform.rotation
        ? props.transform.rotation
        : 0}deg
  ); /* IE 9 */
  -webkit-transform: rotate(
    ${props =>
      props.transform && props.transform.rotation
        ? props.transform.rotation
        : 0}deg
  ); /* Safari 3-8 */

  background-size: ${props => (props.bgRepeat ? "auto" : "100%")} !important;
  background-repeat: ${props =>
    props.bgRepeat ? "repeat" : "no-repeat"} !important;
  background-position: bottom !important;
  background: url(${props => props.imgUrl});
  animation: ${props => props.animation};
`;

export default React.memo(SceneObject);
