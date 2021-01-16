import Vector from "./Vector";
import Rectangle from "./Rectangle";

function toInt(value) {
  return value | 0;
}

function getDistance(x1, y1, x2, y2) {
  return Math.sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1));
}

export { Vector, toInt, Rectangle, getDistance };
