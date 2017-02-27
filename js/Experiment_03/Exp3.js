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
  library : {
    link : "Three.js",
    representation : "Threejs"
  },
  description: "Taking an 3D model and map data to its points.",
  repository: {
    link : "https://github.com/martijndeheer/The-Holodeck/blob/gh-pages/js/Experiment_03/Exp3.js",
    representation: "See Experiment 03's code"
  }
};


var scene = new THREE.Scene(); 
var camera = new THREE.PerspectiveCamera( 75, elementWidth / elementHeight, 0.1, 1000 ); 
var renderer = new THREE.WebGLRenderer(); 

renderer.setSize( elementWidth, elementHeight ); 
document.getElementById("c1").append( renderer.domElement );