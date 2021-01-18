const keys = [];
const pressedTriggers = [];
const releasedTriggers = [];
window.onkeydown = ({ keyCode }) => {
  keys[keyCode] = true;
  pressedTriggers.map((trigger) => {
    if (String.fromCharCode(keyCode) === trigger.key) {
      trigger.callback();
    }
    return null;
  });
};
window.onkeyup = ({ keyCode }) => {
  keys[keyCode] = false;
  releasedTriggers.map((trigger) => {
    if (String.fromCharCode(keyCode) === trigger.key) {
      trigger.callback();
    }
    return null;
  });
};

const KeyManager = {
  tick: () => {
    KeyManager.left = keys[37] || keys[65];
    KeyManager.up = keys[38] || keys[87];
    KeyManager.right = keys[39] || keys[68];
    KeyManager.down = keys[40] || keys[83];
    KeyManager.shift = keys[16];
  },
  keyPressedTrigger: (key, callback) => {
    pressedTriggers.push({ key, callback });
  },
  keyReleasedTrigger: (key, callback) => {
    releasedTriggers.push({ key, callback });
  }
};

export default KeyManager;
