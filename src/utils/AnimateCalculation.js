/**
 *
 * @param {*} animations
 * @param {*} scroll
 * @param {*} speed
 */
export default function AnimateCalculation(animations, scroll, speed = 1.0) {
  let currFrame = scroll;

  let currAnim = null;
  let deltaTime = 0;

  let frameRange = null;
  Object.keys(animations).some(k => {
    frameRange = k.split("-");
    if (frameRange[0] <= currFrame && frameRange[1] > currFrame) {
      currAnim = animations[k]; //get current animation data
      deltaTime = frameRange[1] - frameRange[0]; //lastFrame - firstFrame
      currFrame -= frameRange[0];
      return true;
    }
    return false;
  });

  return {
    position: {
      x:
        currFrame *
          ((currAnim.position.x[1] - currAnim.position.x[0]) / deltaTime) *
          speed +
        currAnim.position.x[0],
      y:
        currFrame *
          ((currAnim.position.y[1] - currAnim.position.y[0]) / deltaTime) *
          speed +
        currAnim.position.y[0]
    }
  };
}
