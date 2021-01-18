var windowWidth, windowHeight;

/**
 * Creates the canvas element
 * @param {String} title
 * @param {Integer} width
 * @param {Integer} height
 */
function createDisplay(parent, title, width, height) {
  document.title = title;
  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  parent.appendChild(canvas);
  return canvas;
}

export default class Display {
  /**
   * Display constructor
   * @param {Handler} handler
   * @param {HtmlElement} parent
   * @param {String} title
   * @param {Integer} width
   * @param {Integer} height
   */
  constructor(handler, parent, title, width, height) {
    this.handler = handler;
    this.parent = parent;
    this.title = title;
    this.width = width;
    this.height = height;
    this.canvas = createDisplay(parent, title, width, height);

    window.onresize = () => {
      this.updateSize();
    };
  }

  /**
   * Updates the canvas and display class width and height
   * to match the windows innerWidth and innerHeight
   */
  updateSize() {
    windowWidth = Math.min(this.handler.getMaxGameWidth(), window.innerWidth);
    windowHeight = Math.min(
      this.handler.getMaxGameHeight(),
      window.innerHeight
    );
    this.handler.getGame().setWidth(windowWidth);
    this.handler.getGame().setHeight(windowHeight);
  }

  /**
   * Returns the canvas element
   */
  getCanvas() {
    return this.canvas;
  }

  /**
   * returns an instance of a CanvasRenderingContext2d object
   */
  getContext() {
    return this.canvas.getContext("2d");
  }

  /**
   * returns the current innerWidth of the window
   */
  static getWindowWidth() {
    return windowWidth;
  }

  /**
   * returns the current innerHeight of the window
   */
  static getWindowHeight() {
    return windowHeight;
  }
}
