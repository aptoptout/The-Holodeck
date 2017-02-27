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
  name : "Starting with Threejs",
  library : {
    link : "Three.js",
    representation : "Threejs"
  },
  description: "As I've enjoyed the short and quick acquaintance with P5js I've also noted its current short comings. At least of what I was hoping to do with it. These experiments all have a root in the visuals made by Symbiotic Spark during the COMPOSITION 01 show and have mostly been made in Processing with the P3D renderer. WEBGL in P5js is far under developed comparing this with the P3D renderer in Processing. Threejs is a library specifically for WEBGL so therefor I've decided to also look into Threejs.",
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

  var _canvas = document.getElementsByTagName("canvas")[0].setAttribute("id", "defaultCanvas0");

  // Setting up what to draw (in this case a cube)
  var geometry = new THREE.BoxGeometry(1, 1, 1);
  // Setting up the wireframe
  var wireframeGeometry = new THREE.EdgesGeometry(geometry);
  var mat = new THREE.LineBasicMaterial({ color: 0xffffff, linewidth: 2 });
  var wireframe = new THREE.LineSegments(wireframeGeometry, mat);

  // var material = new THREE.MeshBasicMaterial( {color: 0x00ff00, wireframe: true } );
  // var cube = new THREE.Mesh(geometry, material);

  scene.add(wireframe);
  // END SETUP
  //

  //
  // DRAW
  // Setting up the draw loop
  function render() {
    requestAnimationFrame( render );

    wireframe.rotation.x += 0.025;
    wireframe.rotation.y += 0.025;

    renderer.render( scene, camera );
  }

  // Calling the draw loop
  render();
  // END DRAW
  //

  document.onkeydown = checkKey;

  function checkKey(e) {
    e = e || window.event;

    if (e.keyCode == '38') {
      // up arrow
      camera.position.z--;
    }
    else if (e.keyCode == '40') {
      // down arrow
      camera.position.z++;
    }
    else if (e.keyCode == '37') {
      // left arrow
      camera.position.x--;
    }
    else if (e.keyCode == '39') {
     // right arrow
     camera.position.x++;
    }
  }

};