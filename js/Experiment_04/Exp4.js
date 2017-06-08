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

  // p.preload = function() {
    
  // }

  p.setup = function() {
    p.createCanvas(elementWidth, elementHeight);
    smallPoint = 4;
    img = p.loadImage("https://martijndeheer.github.io/The-Holodeck/js/Experiment_04/assets/moonwalk.jpg");
    // p.imageMode(p.CENTER);
    p.stroke(127);
    p.fill(255);
  }

  p.draw = function() {
    p.background(0);
    // p.image(img, 0, 0);
    img.loadPixels();
    var leftSpace = elementWidth - img.width;
    var topSpace = elementHeight - img.height;
    // p.print(leftSpace, topSpace);
    // p.translate(leftSpace, topSpace);
    for (var y = 0; y < img.height; y += smallPoint) {
      p.beginShape(p.TRIANGLE_STRIP);
      for (var x = 0; x < img.width; x += smallPoint) {
        var i = y * img.width + x;
        var darkness = (255 - img.pixels[i*4]) / 255;
        var radius = (smallPoint*2) * darkness;

        if(radius < 0.75) {
          p.vertex(x, y);
          // p.vertex(x, y+1);
          p.ellipse(x, y, radius, radius);
        }
      }
      p.endShape();
    }
  }
};

