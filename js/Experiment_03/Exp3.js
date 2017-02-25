// Experiment 03 — The Holodeck
// Martijn de Heer
// http://www.martijndeheer.nl

// February 2017

// Original sketch is made for COMPOSITION 01 
// Original sketch is made by Symbiotic Spark, a collective of visual artists and musicians
// This sketch is adapted and remodeled in P5 and for the web (obviously)
// This sketch uses the instance mode for P5 to create multiple canvases in different DIVS on the page

var exp3 = function(p) {

  p.preload = function() {
    p.loadJSON('https://martijndeheer.github.io/The-Holodeck/Experiment_03/Mesh.json');
  }

  p.setup = function() {
    p.createCanvas(elementWidth, elementHeight, p.WEBGL);
    p.frameRate(30);    
  };

  p.draw = function() {
    p.background(0);
    
    p.noFill();
    p.stroke(255);
    p.strokeWeight(1);

    p.rotateX(p.mouseX);

    p.rectMode(p.CENTER);
    p.rect(elementWidth/2, elementHeight/2, 100, 100);
  };

};