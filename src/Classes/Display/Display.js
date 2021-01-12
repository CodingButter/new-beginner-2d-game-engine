const createDisplay = (title, width, height) => {
  document.title = title;
  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  return canvas;
};

export default class Display {
  constructor({ parent, title, width, height }) {
    this.parent = parent;
    this.title = title;
    this.width = width;
    this.height = height;
    this.canvas = createDisplay(title, width, height);
    this.parent.appendChild(this.canvas);
  }
  getCanvas() {
    return this.canvas;
  }
  getContext() {
    return this.canvas.getContext("2d");
  }
}
