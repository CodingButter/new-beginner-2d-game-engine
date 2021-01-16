import { toInt } from "Classes/Utilities/Math";
function miliToFPS(mils) {
  return 1000 / mils;
}
function fpsToMili(fps) {
  return toInt(1000 / fps);
}
export { miliToFPS, fpsToMili };
