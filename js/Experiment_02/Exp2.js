// Experiment 02 — The Holodeck
// Martijn de Heer
// http://www.martijndeheer.nl

// February 2017

// Original sketch is made for COMPOSITION 01 
// Original sketch is made by Symbiotic Spark, a collective of visual artists and musicians
// This sketch is adapted and remodeled in P5 and for the web (obviously)
// This sketch uses the instance mode for P5 to create multiple canvases in different DIVS on the page

var exp2 = function(p) {

  p.setup = function() {
    p.createCanvas(elementWidth, elementHeight, p.WEBGL);
    p.perspective(120, elementWidth / elementHeight, 1, 2000)
    p.frameRate(30);    
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

    p.noFill();
    p.stroke(255);
    p.strokeWeight(1);
    p.ambientLight(255, 255, 255);

    p.beginShape();
      vertex(0, 0, 0);
      vertex(100, 0, 0);
      vertex(100, 100, 0);
      vertex(0, 100, 0);

      vertex(0, 0, 100);
      vertex(100, 0, 100);
      vertex(100, 100, 100);
      vertex(0, 100, 100);
    p.endShape(CLOSE);
  };

};