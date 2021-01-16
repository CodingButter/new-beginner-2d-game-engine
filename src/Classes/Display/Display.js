var windowWidth, windowHeight;

const createDisplay = (title, width, height) => {
  document.title = title;
  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  return canvas;
};

export default class Display {
  constructor({ handler, parent, title, width, height }) {
    this.handler = handler;
    this.parent = parent;
    this.title = title;
    this.width = width;
    this.height = height;
    this.canvas = createDisplay(title, width, height);
    this.parent.appendChild(this.canvas);
    window.onresize = () => {
      this.setSize();
    };
  }

  setSize() {
    windowWidth = Math.min(this.handler.getMaxGameWidth(), window.innerWidth);
    windowHeight = Math.min(
      this.handler.getMaxGameHeight(),
      window.innerHeight
    );
    this.handler.getGame().setWidth(windowWidth);
    this.handler.getGame().setHeight(windowHeight);
  }
  getCanvas() {
    return this.canvas;
  }
  getContext() {
    return this.canvas.getContext("2d");
  }
  static getWindowWidth() {
    return windowWidth;
  }
  static getWindowHeight() {
    return windowHeight;
  }
}
