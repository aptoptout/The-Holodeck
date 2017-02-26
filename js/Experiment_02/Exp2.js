// Experiment 02 — The Holodeck
// Martijn de Heer
// http://www.martijndeheer.nl

// February 2017

// Original sketch is made for COMPOSITION 01 
// Original sketch is made by Symbiotic Spark, a collective of visual artists and musicians
// This sketch is adapted and remodeled in P5 and for the web (obviously)
// This sketch uses the instance mode for P5 to create multiple canvases in different DIVS on the page

var exp2_Specs = {
  id : "Experiment 02",
  name : "Navigational 3D space",
  description: "Navigating through 3D space with mouse and keys.",
  repository: {
    link : "https://github.com/martijndeheer/The-Holodeck/blob/gh-pages/js/Experiment_02/Exp2.js",
    representation: "See Experiment 02's code"
  }
};

var exp2 = function(p) {

  var _Boxes = new Array(100);
  var total = 50;
  var z = 0;

  p.setup = function() {
    p.createCanvas(elementWidth, elementHeight, p.WEBGL);
    p.perspective(120, elementWidth / elementHeight, 1, 2000)
    p.frameRate(30);

    for(var i = 0; i < total; i++) {
      _Boxes[i] = new boxShape(0, 0, z, 100);
      z += 10;
      console.log(z);
    }

  };

  p.draw = function() {
    p.background(0);

    var mapRotationX = p.map(p.mouseX, 0, elementWidth, 0, 2 * Math.PI);
    var mapRotationY = p.map(p.mouseY, elementHeight, 0, 0, 2 * Math.PI);

    if((p.mouseX < p.width) && (p.mouseX > 0) && 
       (p.mouseY < p.height) && (p.mouseY > 0)) {
      p.rotateY(mapRotationX);
      p.rotateX(mapRotationY);
    }

    p.ambientLight(255, 255, 255);

    for(var i = 0; i < total; i++) {
      _Boxes[i].show();
    }
  };

  var boxShape = function(centerPosX, centerPosY, centerPosZ, size) {
    var halfSize = size/2;
    var trueSize = size;
    var centerPos = p.createVector(centerPosX, centerPosY, centerPosZ);

    this.show = function() {
      p.translate(0, 0, centerPos.z);
      p.rect(centerPos.x-halfSize, centerPos.y-halfSize, trueSize, trueSize);
    }

  };

};












