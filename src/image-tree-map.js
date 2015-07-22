import imagePath from './image.jpg';
import './style.css';

var CanvasImage = (function() {
  function CanvasImage(image) {
    this.canvas = document.createElement('canvas');
    this.canvas.style.display = 'none';
    this.context = this.canvas.getContext('2d');
    document.body.appendChild(this.canvas);
    this.width = this.canvas.width = image.width;
    this.height = this.canvas.height = image.height;
    this.context.drawImage(image, 0, 0, this.width, this.height);
  }

  CanvasImage.prototype.clear = function() {
    return this.context.clearRect(0, 0, this.width, this.height);
  };

  CanvasImage.prototype.update = function(imageData) {
    return this.context.putImageData(imageData, 0, 0);
  };

  CanvasImage.prototype.getPixelCount = function() {
    return this.width * this.height;
  };

  CanvasImage.prototype.getImageData = function() {
    return this.context.getImageData(0, 0, this.width, this.height);
  };

  CanvasImage.prototype.removeCanvas = function() {
    return this.canvas.parentNode.removeChild(this.canvas);
  };

  return CanvasImage;

})();


const sourceImage = document.getElementById("source");
var image = new CanvasImage(sourceImage);
var target = document.getElementById('target');
target.style.width = image.width;
target.style.height = image.height;

const createPixel = function(color) {
  const span = document.createElement('span');
  span.style.backgroundColor = color;
  return span;
};

const addPixel = function(color) {
  target.appendChild(createPixel(color));
};


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

  var hash = ((r << 16) + (g << 8) + b).toString(16);
  if (!allPixels[hash]) {
    allPixels[hash] = 1;
  } else {
    allPixels[hash]++;
  }
  i++;
}

var sort = [];
var keys = Object.keys(allPixels);
for (i = 0; i < keys.length; i++) {
  sort.push({ color: keys[i], count: allPixels[keys[i]] });
}
sort.sort(function(a, b) {
  return b.count - a.count;
})

for (i = 0; i < sort.length; i++) {
  for (var c = 0; c < sort[i].count; c++)
    addPixel('#' + sort[i].color);
}

