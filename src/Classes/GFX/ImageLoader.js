export default class ImageLoader {
  static loadImage(path, onLoad) {
    const image = new Image();
    image.src = path;
    if (onLoad) {
      image.onload = onLoad;
    }
    return image;
  }
}
