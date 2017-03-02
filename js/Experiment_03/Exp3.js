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

  var scene, camera, renderer;
  var wireframe, group;

  //
  // Calling the functions to execute
  init();
  animate();
  // The building of the sketch is down below
  //

  //
  // SETUP
  function init() {
    // Setting up scene, camera and renderer type
    scene = new THREE.Scene(); 
    camera = new THREE.PerspectiveCamera( 75, elementWidth / elementHeight, 0.1, 1000 ); 
    renderer = new THREE.WebGLRenderer(); 

    renderer.setSize(elementWidth, elementHeight); 
    document.getElementById(target).appendChild(renderer.domElement);

    camera.position.z = 5;

    var _canvas = document.getElementsByTagName("canvas")[0].setAttribute("id", "defaultCanvas0");

    // Setting up the geometry to work with
    var geometry = new THREE.BoxGeometry(1, 1, 1, 10, 10, 10);
    var vertices = geometry.vertices;
    var verticesLength = vertices.length;

    var positions = new Float32Array( vertices.length * 3 );
    var colors = new Float32Array( vertices.length * 3 );
    var sizes = new Float32Array( vertices.length );

    var vertex;
    var color = new THREE.Color();

    for (var i = 0; i < verticesLength; i++) {

      vertex = vertices[ i ];
      vertex.toArray( positions, i * 3 );
      color.setHSL( 0.6, 0.75, 0.25 + vertex.y / ( 2 * 100 ) );
      color.toArray( colors, i * 3 );
      sizes[ i ] = i < verticesLength ? 10 : 40;

    }

    var bufGeometry = new THREE.BufferGeometry();
    bufGeometry.addAttribute( 'position', new THREE.BufferAttribute( positions, 3 ) );
    bufGeometry.addAttribute( 'size', new THREE.BufferAttribute( sizes, 1 ) );
    bufGeometry.addAttribute( 'ca', new THREE.BufferAttribute( colors, 3 ) );

    group = new THREE.Points(bufGeometry);
    scene.add(group);

    // Setting up the wireframe
    var wireframeGeometry = new THREE.EdgesGeometry(geometry);
    var mat = new THREE.LineBasicMaterial({ color: 0xffffff, linewidth: 2 });
    
    wireframe = new THREE.LineSegments(wireframeGeometry, mat);

    // var material = new THREE.MeshBasicMaterial( {color: 0x00ff00, wireframe: true } );
    // var cube = new THREE.Mesh(geometry, material);

    scene.add(wireframe);
  }
  // END SETUP
  //

  //
  // DRAW
  // Setting up the draw loop
  function animate() {
    requestAnimationFrame(animate);

    // Calling the draw loop
    render();
  }
  // END DRAW
  //

  //
  // RENDER
  // Setting up what to render and possibly update every frame
  function render() {
    
    wireframe.rotation.x += 0.025;
    wireframe.rotation.y += 0.025;

    renderer.render( scene, camera );
  }
  
  //
  // INTERACTION
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