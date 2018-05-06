/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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
/******/ 	__webpack_require__.p = "build/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


var _big = __webpack_require__(3);

var _big2 = _interopRequireDefault(_big);

var _small = __webpack_require__(4);

var _small2 = _interopRequireDefault(_small);

__webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var image = document.createElement('img');
// image.src = 'https://loremflickr.com/320/240';

image.src = _small2.default;

document.body.appendChild(image);

var imageBig = document.createElement('img');
imageBig.src = _big2.default;

document.body.appendChild(imageBig);

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//utility functions for mathematical calculations

var sum = function sum(a, b) {
  return a + b;
};

// module.exports = sum; common JS way to export
exports.default = sum; //es6

/***/ },
/* 2 */
/***/ function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "acb80cce9e92e2cb2cc21d49f26fbaa2.png";

/***/ },
/* 4 */
/***/ function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAyCAMAAAAQhsnYAAADAFBMVEWvyAC60DK50jG/10CFnACwyQAeMgC30CusxgAlOAClugCSqQC50iykvQCasACetwCUrACuxQCgtQCMpQCbsgAdMACClgCGnwCwzACXsgC0ywlrgQC30Ca71TCMoQCQpACDmgCJngB9kQCmvwCbswCvygC2ziC90jA3SwC3ziV/mAEvQQA+VwA4TgAvQwA7UwCUqgCXsABziQB/lAAiNQC71Tc0RgCyzQCxyyC3zhu91T4+UgC+1Dq3zhV+nABzkgCiuACqwQAfNABqfgB5jQCtwgCOpwCrwxa70zOUsAC5zy6syACwySGzzSa20R6/2j1xhwCRrQAoOwBOZgAqQQBWdgBjgQCXrQCdtQCQqgBnfACrxgCzyQCzyhK51CZKZQAkOwAuRgBTbACguQB3igCpwABwhACqvwCatgB8lACJogCtxRu30CK6zx690zaFoQG40jtnhgBKYQBbdwBGYQBffwCrxAKJpQBuhQBfcgCiuwCtxxevyRtGWgBDVgC70jd3kAC70CmxxQGqxh+0zitvjwBYcgHE31NugwC0zhh0jgBLXABkeACAmgC4zBCpxgCovQC0zCC92Dy0yxq/2kG81zetxyBWaQC60SS10AMnPgC/1TvB3Um91wB3lgBqigCGpABqhgAxSgCSrxeYsxmGmQBPYQBcbgBYagClvg6pwwC1zQ1TZQCyygM7TgC1zQCNqwCfvBG40wCuyA2zzjGCoABjhQBlggBeeAB7lwBCWwDB2DBNagB7kAArPACyzA9idgCpwg+80yViewBHXgBuiwB3kwCkwBidugWsyC+YtQCpxC2vyieCnQa60w+qxCe/1zWRrA17mgC+1Sq91USkwSGKpBAsPwCxzTe50TWnwiCJqAChviWsyDZsiACPqBGkvyyfvB15lACaqQBWcACowhiergCWsh61zzbB2DmYsQm91ku20E6PrC+jv0aWpgCvyzq50ReEnBFaeQCxzEKeuzBthhh5lRWhugqdtAa911NwixiqxUSCnS6NqDiSqwCpUOfWAAAHh0lEQVRIx03Vd1yTdx4H8B8QCCZACAlEQtgrCQiEPcKSFTaIkiB7b5AhaNhTQFACMiwIKlxbUBwFyy6iCBQtQwRHcfX0znrVuw7b273v89C+Xvf5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"

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


var _sum = __webpack_require__(1);

var _sum2 = _interopRequireDefault(_sum);

__webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//calls functions from sum.js and print results
//depends upon sum.js; needs to require the sum file.

// const sum = require('./sum'); common JS
var total = (0, _sum2.default)(10, 5); //ES6

console.log(total);

/***/ }
/******/ ]);