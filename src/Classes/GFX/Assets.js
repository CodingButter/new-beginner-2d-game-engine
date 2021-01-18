import { ImageLoader, SpriteSheet } from "Classes/GFX";
import spriteSheets from "res/sprites/SpriteSheets";
import { toInt } from "Classes/Utilities/Math";

const allAssets = [];

/**
 * loads the images from the spritesheet
 */
function loadImages() {
  spriteSheets.map(({ label, path, spriteWidth, spriteHeight, assets }) => {
    var image = ImageLoader.loadImage(path, () => {
      allAssets[id].status = "loaded";
    });
    var id = allAssets.length;
    allAssets.push({
      id,
      resourceType: "Image",
      status: "loading"
    });

    var sheet = new SpriteSheet(image);
    Assets[label] = {
      spriteWidth,
      spriteHeight
    };
    assets.forEach((asset) => {
      Assets[label][asset.label] = asset.frames.map((frame) => {
        return Assets.cropAsset(sheet, frame, spriteWidth, spriteHeight);
      });
    });
    return null;
  });
}

const Assets = {
  /**
   * Runs initilization code for the assets
   */
  init: () => {
    loadImages();
  },
  /**
   * Returns a cropped sheet object for rendering
   * @param {Object} sheet
   * @param {Object} frame
   * @param {Integer} spriteWidth
   * @param {Integer} spriteHeight
   * @returns {Sheet}
   */
  cropAsset: (sheet, frame, spriteWidth, spriteHeight) => {
    return sheet.crop(
      frame.x * spriteWidth,
      frame.y * spriteHeight,
      frame.width * spriteWidth,
      frame.height * spriteHeight
    );
  },

  /**
   * returns the current laoding progress of all the assets
   * @returns {Integer}
   */
  getTotalProgress: () => {
    var loaded = allAssets.filter(({ status }) => status === "loaded");
    return toInt(100 * (loaded.length / allAssets.length));
  }
};

export default Assets;
