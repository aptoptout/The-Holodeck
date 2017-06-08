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

    p.imageMode(p.CENTER);
    p.noStroke();
    p.fill(0);
  }

  p.draw = function() {
    p.background(255);
    img.loadPixels();
    var stepSize = p.round(constrain(p.mouseX / 8, 6, 32));
    for (var y = 0; y < height; y += stepSize) {
      for (var x = 0; x < width; x += stepSize) {
        var i = y * elementWidth + x;
        var darkness = (255 - img.pixels[i*4]) / 255;
        var radius = stepSize * darkness;
        ellipse(x, y, radius, radius);
      }
    }
  }
};

