/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(1);
module.exports = __webpack_require__(4);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(2);


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* eslint-disable global-require */



if (true) {
  module.exports = __webpack_require__(3);
} else {
  module.exports = require('./patch.dev');
}

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* noop */


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

'user strict';

document.write("Open the javascript console!");
var context = __webpack_require__(5);
var modules = {};
context.keys().forEach(function (key) {
  var module = context(key);
  modules[key] = module;
  customReloadLogic(key, module, false);
});

if (false) {
  module.hot.accept(context.id, function () {
    //You can't use context here. You _need_ to call require.context again to
    //get the new version. Otherwise you might get errors about using disposed
    //modules
    var reloadedContext = require.context("react", true, /\.js$/);
    //To find out what module was changed you just compare the result of the
    //require call with the version stored in the modules hash using strict
    //equality. Equal means it is unchanged.
    var changedModules = reloadedContext.keys().map(function (key) {
      return [key, reloadedContext(key)];
    }).filter(function (reloadedModule) {
      return modules[reloadedModule[0]] !== reloadedModule[1];
    });
    changedModules.forEach(function (module) {
      modules[module[0]] = module[1];
      customReloadLogic(module[0], module[1], true);
    });
  });
}

function customReloadLogic(name, module, isReload) {
  console.log("module " + name + (isReload ? " re" : " ") + "loaded");
}
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(context, "context", "/Users/stevelam/development/webpack-hot-module-reload-with-context-example/app/modules/app.js");

  __REACT_HOT_LOADER__.register(modules, "modules", "/Users/stevelam/development/webpack-hot-module-reload-with-context-example/app/modules/app.js");

  __REACT_HOT_LOADER__.register(customReloadLogic, "customReloadLogic", "/Users/stevelam/development/webpack-hot-module-reload-with-context-example/app/modules/app.js");
}();

;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./a.js": 6,
	"./b.js": 7,
	"./c.js": 8
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 5;

/***/ }),
/* 6 */
/***/ (function(module, exports) {

console.log("a");
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }
}();

;

/***/ }),
/* 7 */
/***/ (function(module, exports) {

console.log("b");
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }
}();

;

/***/ }),
/* 8 */
/***/ (function(module, exports) {

console.log("c");
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }
}();

;

/***/ })
/******/ ]);