import { ImageLoader, SpriteSheet } from "Classes/GFX";
import spriteSheets from "res/SpriteSheets";

const Assets = {
  init: () => {
    spriteSheets.map(({ label, path, spriteWidth, spriteHeight, assets }) => {
      Assets[label] = {
        spriteWidth,
        spriteHeight
      };
      var sheet = new SpriteSheet(ImageLoader.loadImage(path));
      assets.map((asset) => {
        Assets.cropAsset({ sheet, label, asset, spriteWidth, spriteHeight });
        return null;
      });
    });
  },
  cropAsset: ({ sheet, label, asset, spriteWidth, spriteHeight }) => {
    Assets[label][asset.label] = sheet.crop(
      asset.x * spriteWidth,
      asset.y * spriteHeight,
      asset.width * spriteWidth,
      asset.height * spriteHeight
    );
  }
};

export default Assets;
