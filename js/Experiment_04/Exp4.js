// Experiment 04 — The Holodeck
// Martijn de Heer
// http://www.martijndeheer.nl

// June 2017

var exp4_Specs = {
  id : "Experiment 04",
  name : "Draw Triangulate Image",
  library : {
    link : "P5js",
    representation : "P5js"
  },
  description: "Drawing a triangulated version of an image",
  repository: {
    link : "https://github.com/martijndeheer/The-Holodeck/blob/gh-pages/js/Experiment_04/Exp4.js",
    representation: "See Experiment 04's code"
  }
};

var exp4 = function(p) {
  var img;
  var smallPoint, largePoint;

  p.preload = function() {
    img = p.loadImage("https://martijndeheer.github.io/The-Holodeck/js/Experiment_04/assets/moonwalk.jpg");
  }

  p.setup = function() {
    p.createCanvas(elementWidth, elementHeight);
    p.frameRate(60);

    smallPoint = 4;
    largePoint = 40;

    p.imageMode(CENTER);
    p.noStroke();
    p.background(255);
    img.loadPixels();
  }

  p.draw = function() {
    var pointillize = p.map(mouseX, 0, elementWidth, smallPoint, largePoint);
    var x = p.floor(p.random(img.width));
    var y = p.floor(p.random(img.height));
    var pix = img.get(x, y);
    p.fill(pix, 128);
    p.ellipse(x, y, pointillize, pointillize);
  }
};

