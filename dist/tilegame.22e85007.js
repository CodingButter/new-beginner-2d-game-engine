// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;

function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }

  return bundleURL;
}

function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);

    if (matches) {
      return getBaseURL(matches[0]);
    }
  }

  return '/';
}

function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)\/[^/]+$/, '$1') + '/';
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"node_modules/parcel-bundler/src/builtins/css-loader.js":[function(require,module,exports) {
var bundle = require('./bundle-url');

function updateLink(link) {
  var newLink = link.cloneNode();

  newLink.onload = function () {
    link.remove();
  };

  newLink.href = link.href.split('?')[0] + '?' + Date.now();
  link.parentNode.insertBefore(newLink, link.nextSibling);
}

var cssTimeout = null;

function reloadCSS() {
  if (cssTimeout) {
    return;
  }

  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');

    for (var i = 0; i < links.length; i++) {
      if (bundle.getBaseURL(links[i].href) === bundle.getBundleURL()) {
        updateLink(links[i]);
      }
    }

    cssTimeout = null;
  }, 50);
}

module.exports = reloadCSS;
},{"./bundle-url":"node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"src/styles.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"node_modules/parcel-bundler/src/builtins/css-loader.js"}],"src/Classes/Display/Display.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var createDisplay = function createDisplay(title, width, height) {
  document.title = title;
  var canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  return canvas;
};

var Display = /*#__PURE__*/function () {
  function Display(_ref) {
    var parent = _ref.parent,
        title = _ref.title,
        width = _ref.width,
        height = _ref.height;

    _classCallCheck(this, Display);

    this.parent = parent;
    this.title = title;
    this.width = width;
    this.height = height;
    this.canvas = createDisplay(title, width, height);
    this.parent.appendChild(this.canvas);
  }

  _createClass(Display, [{
    key: "getCanvas",
    value: function getCanvas() {
      return this.canvas;
    }
  }, {
    key: "getContext",
    value: function getContext() {
      return this.canvas.getContext("2d");
    }
  }]);

  return Display;
}();

exports.default = Display;
},{}],"src/Classes/Display/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Display", {
  enumerable: true,
  get: function () {
    return _Display.default;
  }
});

var _Display = _interopRequireDefault(require("./Display.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
},{"./Display.js":"src/Classes/Display/Display.js"}],"src/Classes/GFX/ImageLoader.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var ImageLoader = /*#__PURE__*/function () {
  function ImageLoader() {
    _classCallCheck(this, ImageLoader);
  }

  _createClass(ImageLoader, null, [{
    key: "loadImage",
    value: function loadImage(path) {
      var image = new Image();
      image.src = path;
      return image;
    }
  }]);

  return ImageLoader;
}();

exports.default = ImageLoader;
},{}],"src/Classes/GFX/SpriteSheet.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

CanvasRenderingContext2D.prototype.drawSprite = function (sheet, x, y, width, height) {
  this.drawImage(sheet.sprite, sheet.x, sheet.y, sheet.width, sheet.height, x, y, width, height);
};

var SpriteSheet = /*#__PURE__*/function () {
  function SpriteSheet(image) {
    _classCallCheck(this, SpriteSheet);

    this.sprite = image;
  }

  _createClass(SpriteSheet, [{
    key: "crop",
    value: function crop(x, y, width, height) {
      var sprite = this.sprite;
      return {
        x: x,
        y: y,
        width: width,
        height: height,
        sprite: sprite
      };
    }
  }]);

  return SpriteSheet;
}();

exports.default = SpriteSheet;
},{}],"src/res/levels/MainLevel.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  label: "mainLevel",
  path: "src/res/images/MainLevel.png",
  spriteWidth: 32,
  spriteHeight: 32,
  assets: [{
    label: "dirt",
    x: 0,
    y: 0,
    width: 1,
    height: 1
  }, {
    label: "crate",
    x: 0,
    y: 35,
    width: 1,
    height: 1
  }, {
    label: "fall_tree",
    x: 0,
    y: 7,
    width: 4,
    height: 4
  }]
};
exports.default = _default;
},{}],"src/res/levels/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _MainLevel = _interopRequireDefault(require("./MainLevel"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = [_MainLevel.default];
exports.default = _default;
},{"./MainLevel":"src/res/levels/MainLevel.js"}],"src/res/SpriteSheets.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _levels = _interopRequireDefault(require("./levels"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var _default = _toConsumableArray(_levels.default);

exports.default = _default;
},{"./levels":"src/res/levels/index.js"}],"src/Classes/GFX/Assets.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ = require(".");

var _SpriteSheets = _interopRequireDefault(require("../../res/SpriteSheets"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Assets = {
  init: function init() {
    _SpriteSheets.default.map(function (_ref) {
      var label = _ref.label,
          path = _ref.path,
          spriteWidth = _ref.spriteWidth,
          spriteHeight = _ref.spriteHeight,
          assets = _ref.assets;
      Assets[label] = {};
      var sheet = new _.SpriteSheet(_.ImageLoader.loadImage(path));
      assets.map(function (asset) {
        Assets.cropAsset({
          sheet: sheet,
          label: label,
          asset: asset,
          spriteWidth: spriteWidth,
          spriteHeight: spriteHeight
        });
        return null;
      });
    });
  },
  cropAsset: function cropAsset(_ref2) {
    var sheet = _ref2.sheet,
        label = _ref2.label,
        asset = _ref2.asset,
        spriteWidth = _ref2.spriteWidth,
        spriteHeight = _ref2.spriteHeight;
    Assets[label][asset.label] = sheet.crop(asset.x * spriteWidth, asset.y * spriteHeight, asset.width * spriteWidth, asset.height * spriteHeight);
  }
};
var _default = Assets;
exports.default = _default;
},{".":"src/Classes/GFX/index.js","../../res/SpriteSheets":"src/res/SpriteSheets.js"}],"src/Classes/GFX/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "ImageLoader", {
  enumerable: true,
  get: function () {
    return _ImageLoader.default;
  }
});
Object.defineProperty(exports, "SpriteSheet", {
  enumerable: true,
  get: function () {
    return _SpriteSheet.default;
  }
});
Object.defineProperty(exports, "Assets", {
  enumerable: true,
  get: function () {
    return _Assets.default;
  }
});

var _ImageLoader = _interopRequireDefault(require("./ImageLoader"));

var _SpriteSheet = _interopRequireDefault(require("./SpriteSheet"));

var _Assets = _interopRequireDefault(require("./Assets"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
},{"./ImageLoader":"src/Classes/GFX/ImageLoader.js","./SpriteSheet":"src/Classes/GFX/SpriteSheet.js","./Assets":"src/Classes/GFX/Assets.js"}],"src/Classes/Game.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Display = require("./Display");

var _GFX = require("./GFX");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

//Set Private Variables
var parent, width, height, title, running, display, g, lastTime, x;

var Game = /*#__PURE__*/function () {
  function Game(_ref) {
    var parentElement = _ref.parentElement,
        gameTitle = _ref.gameTitle,
        gameWidth = _ref.gameWidth,
        gameHeight = _ref.gameHeight;

    _classCallCheck(this, Game);

    parent = parentElement;
    title = gameTitle;
    width = gameWidth;
    height = gameHeight;
    running = false;
  } //Tick Method runs all game update logic


  _createClass(Game, [{
    key: "tick",
    value: function tick(deltaTime) {
      x += 60 * deltaTime;
    } //After Ticking the Render Method Displays all the updated graphics to the screen

  }, {
    key: "render",
    value: function render() {
      //Clear Screen
      g.clearRect(0, 0, width, height); //Draw Stuff

      g.fillStyle = "#ccc";
      g.fillRect(0, 0, width, height);
      g.drawSprite(_GFX.Assets.mainLevel.dirt, x, 0, 64, 64);
    }
  }, {
    key: "init",
    value: function init() {
      x = 0;
      display = new _Display.Display({
        parent: parent,
        title: title,
        width: width,
        height: height
      });
      g = display.getContext(); //Temp Code

      _GFX.Assets.init();

      var self = this;

      var renderLoop = function renderLoop() {
        self.render();

        if (running) {
          requestAnimationFrame(renderLoop);
        }

        return null;
      };

      var tickLoop = function tickLoop(now) {
        if (lastTime === undefined) lastTime = now;
        var deltaTime = (now - lastTime) / 1000;
        lastTime = now;
        self.tick(deltaTime);
        if (running) setTimeout(function () {
          tickLoop(Date.now());
          return null;
        }, 100);
        return null;
      };

      tickLoop(Date.now());
      requestAnimationFrame(renderLoop);
    }
  }, {
    key: "start",
    value: function start() {
      if (running) return;
      running = true;
      this.init();
    }
  }, {
    key: "stop",
    value: function stop() {
      running = false;
    }
  }]);

  return Game;
}();

exports.default = Game;
},{"./Display":"src/Classes/Display/index.js","./GFX":"src/Classes/GFX/index.js"}],"src/tilegame.js":[function(require,module,exports) {
"use strict";

require("./styles.css");

var _Game = _interopRequireDefault(require("./Classes/Game"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = document.querySelector("#app");
var gameWidth = 400;
var gameHeight = 400;
var parentElement = app;
var gameTitle = "TileGame";
var game = new _Game.default({
  gameWidth: gameWidth,
  gameHeight: gameHeight,
  parentElement: parentElement,
  gameTitle: gameTitle
});
game.start();
},{"./styles.css":"src/styles.css","./Classes/Game":"src/Classes/Game.js"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "63627" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","src/tilegame.js"], null)
//# sourceMappingURL=/tilegame.22e85007.js.map