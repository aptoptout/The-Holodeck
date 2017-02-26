// Experiment 03 — The Holodeck
// Martijn de Heer
// http://www.martijndeheer.nl

// February 2017

// Original sketch is made for COMPOSITION 01 
// Original sketch is made by Symbiotic Spark, a collective of visual artists and musicians
// This sketch is adapted and remodeled in P5 and for the web (obviously)
// This sketch uses the instance mode for P5 to create multiple canvases in different DIVS on the page

var exp3_Specs = {
  id : "Experiment 03",
  name : "Constructing 3D image with data",
  description: "Taking an 3D model and map data to its points.",
  repository: {
    link : "https://github.com/martijndeheer/The-Holodeck/blob/gh-pages/js/Experiment_03/Exp3.js",
    representation: "See Experiment 03's code"
  }
};

var exp3 = function(p) {

  var jsonObject;

  p.setup = function() {
    p.createCanvas(elementWidth, elementHeight, p.WEBGL);
    p.frameRate(30);
    p.loadJSON('https://martijndeheer.github.io/The-Holodeck/js/Experiment_03/Mesh.json', gotData);

  };

  var gotData = function(data) {
    jsonObject = data.meshes;
  }

  p.draw = function() {
    p.background(0);
    
    if(gotData) {
      for(var i = 0; i < jsonObject.vertices.length; i++) {
        z = Math.round(i / (elementWidth * elementHeight));
        y = Math.round((i - z * elementWidth * elementHeight) / elementWidth);
        x = i - elementWidth * (y + elementHeight * z);

        var positionZ = jsonObject.vertices[z];
        var positionY = jsonObject.vertices[y];
        var positionX = jsonObject.vertices[x];

        p.point(positionX, positionY, positionZ);
      }
    }
    
  };

};