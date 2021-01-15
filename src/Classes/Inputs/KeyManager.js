const keys = [];

window.onkeydown = ({ keyCode }) => {
  keys[keyCode] = true;
};
window.onkeyup = ({ keyCode }) => {
  keys[keyCode] = false;
};

const KeyManager = {
  tick: () => {
    KeyManager.left = keys[37] || keys[65];
    KeyManager.up = keys[38] || keys[87];
    KeyManager.right = keys[39] || keys[68];
    KeyManager.down = keys[40] || keys[83];
    KeyManager.shift = keys[16];
  }
};

export default KeyManager;
