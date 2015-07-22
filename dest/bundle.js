/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/assets/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(2);

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _imageJpg = __webpack_require__(3);

	var _imageJpg2 = _interopRequireDefault(_imageJpg);

	__webpack_require__(4);

	var CanvasImage = (function () {
	  function CanvasImage(image) {
	    this.canvas = document.createElement('canvas');
	    this.context = this.canvas.getContext('2d');
	    document.body.appendChild(this.canvas);
	    this.width = this.canvas.width = image.width;
	    this.height = this.canvas.height = image.height;
	    this.context.drawImage(image, 0, 0, this.width, this.height);
	  }

	  CanvasImage.prototype.clear = function () {
	    return this.context.clearRect(0, 0, this.width, this.height);
	  };

	  CanvasImage.prototype.update = function (imageData) {
	    return this.context.putImageData(imageData, 0, 0);
	  };

	  CanvasImage.prototype.getPixelCount = function () {
	    return this.width * this.height;
	  };

	  CanvasImage.prototype.getImageData = function () {
	    return this.context.getImageData(0, 0, this.width, this.height);
	  };

	  CanvasImage.prototype.removeCanvas = function () {
	    return this.canvas.parentNode.removeChild(this.canvas);
	  };

	  return CanvasImage;
	})();

	var sourceImage = document.getElementById("source");
	var createPixel = function createPixel(color) {
	  var div = document.createElement('div');
	  div.style.backgroundColor = color;
	  return div;
	};

	var addPixel = function addPixel(color) {
	  document.body.appendChild(createPixel(color));
	};

	var image = new CanvasImage(sourceImage);
	var imageData = image.getImageData();
	var pixels = imageData.data;
	var pixelCount = image.getPixelCount();
	var allPixels = [];
	var i = 0;

	while (i < pixelCount) {
	  var offset = i * 4;
	  var r = pixels[offset + 0];
	  var g = pixels[offset + 1];
	  var b = pixels[offset + 2];
	  //var a = pixels[offset + 3];

	  var hash = ((1 << 24) + (r << 16) + (g << 8) + b).toString(16);
	  if (!allPixels[hash]) {
	    allPixels[hash] = 1;
	  } else {
	    allPixels[hash]++;
	  }

	  addPixel('#' + hash);

	  i++;
	}

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "image.jpg"

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "style.css"

/***/ }
/******/ ]);