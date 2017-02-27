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


var exp3 = function(target) {

  //
  // SETUP
  // Setting up scene, camera and renderer type
  var scene = new THREE.Scene(); 
  var camera = new THREE.PerspectiveCamera( 75, elementWidth / elementHeight, 0.1, 1000 ); 
  var renderer = new THREE.WebGLRenderer(); 

  renderer.setSize(elementWidth, elementHeight); 
  document.getElementById(target).appendChild(renderer.domElement);

  camera.position.z = 5;

  var _canvas = document.getElementsByTagName("canvas")[0];
  canvas.setAttribute("id", "defaultCanvas0");

  // Setting up what to draw (in this case a cube)
  var geometry = new THREE.BoxGeometry(1, 1, 1);
  var material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
  var cube = new THREE.Mesh(geometry, material);

  scene.add(cube);
  // END SETUP
  //

  //
  // DRAW
  // Setting up the draw loop
  function render() {
    requestAnimationFrame( render );

    cube.rotation.x += 0.1;
    cube.rotation.y += 0.1;

    renderer.render( scene, camera );
  }

  // Calling the draw loop
  render();
  // END DRAW
  //

};