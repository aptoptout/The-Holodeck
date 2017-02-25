// Experiment 01 — The Holodeck
// Martijn de Heer
// http://www.martijndeheer.nl

// January 2017

// Original sketch is made for COMPOSITION 01 
// Original sketch is made by Symbiotic Spark, a collective of visual artists and musicians
// Original sketch is made in Processing 2 by Rafael Henneberke
// This sketch is adapted and remodeled in P5 and for the web (obviously)
// This sketch uses the instance mode for P5 to create multiple canvases in different DIVS on the page

var exp1 = function(p) {
  this.specs = {
    id : "Experiment 01",
    name : "Fast Connecting Dots",
    description: "As the dots fly, \
                  when close enough \
                  they will connect \
                  with each other, \
                  creating a organic \
                  chain of random events.\
                  Hold your mouse inside \
                  the canvas to attract \
                  all the dots as the \
                  mouse has gravitational attraction."
    repository: "https://github.com/martijndeheer/The-Holodeck/blob/gh-pages/js/Experiment_01/Exp1.js"
  };

  var bubbles = new Array(80);
  var attractor;

  var total = 80;
  var connect = 75;

  var mappedSquareTop;
  var mappedSquareRight;
  var mappedSquareBottom;
  var mappedSquareLeft;

  var lerpBool = false;
  var interPola;

  p.setup = function() {
    p.createCanvas(elementWidth, elementHeight);
    p.frameRate(30);
    
    for(var i = 0; i < total; i++) {
      bubbles[i] = new Bubble();
    }

    attractor = new Attractor();
  };

  p.draw = function() {
    p.background(0);
    attractor.attractorUpdate();

    for(var i = 0; i < total; i++){
      var _Force = attractor.calculateAttraction(bubbles[i]);

      if((p.mouseX < p.width) && (p.mouseX > 0) && (p.mouseY < p.height) && (p.mouseY > 0)) {
        bubbles[i].attractThis(_Force);
      } else {
        bubbles[i].acceleration = p.createVector(0, 0);
        bubbles[i].update(); 
      }

      bubbles[i].display();
      
      for(var j = i + 1; j < total; j++){
        if(p.dist(bubbles[j].position.x, bubbles[j].position.y, bubbles[i].position.x, bubbles[i].position.y) < connect) {
          p.stroke(255, 128);
          p.strokeWeight(2);
          p.line(bubbles[i].position.x, bubbles[i].position.y, bubbles[j].position.x, bubbles[j].position.y);
        }
      }
    }
  };

  var Bubble = function() {
    this.mass = p.random(0.2, 3);
    this.r = 1;
    this.yspeed = p.random(-1.3, 4);
    this.xspeed = p.random(-1.3, 4);
    this.position = p.createVector(p.random(p.width), p.random(p.height));
    this.acceleration = p.createVector(0, 0);
    
    this.display = function() {
      p.stroke(255, 170);
      p.strokeWeight(4);
      p.noFill();

      p.point(this.position.x, this.position.y);
    };
   
    this.update = function() {
      this.position.y += this.yspeed * this.mass;
      this.position.x += this.xspeed * this.mass;
      
      if(this.position.y > p.height || this.position.y < 0) {
        this.yspeed *= -1;
      } else if(this.position.x > p.width || this.position.x < 0) {
        this.xspeed *= -1;
      }
    };

    this.attractThis = function(_F) {
      var f = p5.Vector.div(_F, this.mass);
      this.acceleration.add(f);
      this.position.add(this.acceleration);

      if(this.position.y > p.height) {
        this.position.y = p.height;
        this.acceleration.y *= -1;
      } else if(this.position.y < 0) {
        this.acceleration.y *= -1;
        this.position.y = 0;
      } else if(this.position.x > p.width) {
        this.position.x = p.width;
        this.acceleration.x *= -1;
      } else if(this.position.x < 0) {
        this.acceleration.x *= -1;
        this.position.x = 0;
      }
    };
  };

  var Attractor = function() {
    this.mass = 10;
    this.position = p.createVector(0, 0);

    this.attractorUpdate = function() {
      this.position.x = p.mouseX;
      this.position.y = p.mouseY;
    }

    this.calculateAttraction = function(_m) {
      var force = p5.Vector.sub(this.position, _m.position);
      var distance = force.mag();
      distance = p.constrain(distance, 3, 5);
      force.normalize();
      var strength = (1 * this.mass * _m.mass) / (distance * distance);
      force.mult(strength);
      return force;
    };
  };

  function mousePressed() {
    p.remove();
  }
};

