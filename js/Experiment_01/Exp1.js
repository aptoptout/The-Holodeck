var exp1 = function(p) {
  var bubbles = new Array(400);
  var attractor;

  var total = 16;
  var connect = 50;
  var tran = 10;

  var mappedSquareTop;
  var mappedSquareRight;
  var mappedSquareBottom;
  var mappedSquareLeft;

  var lerpBool = false;
  var interPola;

  var halfwayLine;
  var halfWayBool = false;
  var halfWayOffset;
  var halfWaySpeed = 0.05;

  var _element = document.getElementById("c1");
  var elementWidth = _element.offsetWidth;
  var elementHeight = elementWidth / 1.25;

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

    for(var i = 0; i < total; i++){
      var _Force = attractor.calculateAttraction(bubbles[i]);

      if(mousePressed) {
        bubbles[i].attractThis(_Force);
      } else {
        bubbles[i].update(); 
      }

      bubbles[i].display();
      
      for(var j = i + 1; j < total; j++){
        if(p.dist(bubbles[j].position.x, bubbles[j].position.y, bubbles[i].position.x, bubbles[i].position.y) < connect + 50) {
          p.stroke(255);
          p.strokeWeight(1);
          p.line(bubbles[i].position.x, bubbles[i].position.y, bubbles[j].position.x, bubbles[j].position.y);
        }
      }
    }
  };

  var Bubble = function() {
    this.c;
    this.r = 2;
    this.yspeed = p.random(-1.3, 4);
    this.xspeed = p.random(-1.3, 4);
    this.position = p.createVector(p.random(p.width), p.random(p.height));
    this.acceleration = p.createVector(0, 0);
    
    this.display = function() {
      p.stroke(255, 255);
      p.strokeWeight(2);
      p.noFill();

      p.ellipse(this.position.x, this.position.y, this.r, this.r);
    };
   
    this.update = function() {
      this.position.y += this.yspeed * p.random(0, 1);
      this.position.x += this.xspeed * p.random(0, 1);
      
      if(this.position.y > p.height || this.position.y < 0) {
        this.yspeed *= -1;
      } else if(this.position.x > p.width || this.position.x < 0) {
        this.xspeed *= -1;
      }
    };

    this.attractThis = function(_F) {
      var f = p5.Vector.div(_F, 2);
      this.acceleration.add(f);

      this.position.add(this.acceleration);
    };
  };

  var Attractor = function() {
    this.position = p.createVector(p.mouseX, p.mouseY);
    this.dragOffset = p.createVector(0, 0);

    this.calculateAttraction = function(_m) {
      var force = p5.Vector.sub(this.position, _m.position);
      var distance = force.mag();
      distance = p.constrain(distance, 5, 25);
      var strength = (1 * 1 * 2) / (distance / distance);
      force.mult(strength);
      return force;
    };
  };
};



var experiment_1 = new p5(exp1, 'c1');