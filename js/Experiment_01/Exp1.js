var exp1 = function(p) {
  var bubbles = new Array(400);

  var total = 16;
  var connect = 0;
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
    p.createCanvas(800, 640);
    p.frameRate(30);
    
    for(var i = 0; i < total; i++) {
      bubbles[i] = new Bubble();
    }
  }

  p.draw = function() {
    p.background(0);

    for(var i = 0; i < total; i++){  
      bubbles[i].update(); 
      bubbles[i].display();
      
      for(var j = i + 1; j < total; j++){
        var distance = p.dist(bubbles[i].position, bubbles[j].position);

        if(distance < 1) {
          // console.log(p.dist(bubbles[i].positionX, bubbles[i].positionX, bubbles[j].positionY, bubbles[j].positionY));
          p.stroke(255);
          p.strokeWeight(1);
          p.line(bubbles[i].position.x, bubbles[i].position.y, bubbles[j].position.x, bubbles[j].position.y);
        }
      }
    }
  }

  var Bubble = function() {
    this.c;
    this.r = 2;
    this.yspeed = p.random(-1.3, 4);
    this.xspeed = p.random(-1.3, 4);
    this.position = p.createVector(p.random(p.width), p.random(p.height));
    this.giveLerp;
    
    this.display = function() {
      p.stroke(255, 255);
      p.strokeWeight(2);
      p.noFill();

      p.ellipse(this.position.x, this.position.y, this.r, this.r);
    }
   
    this.update = function() {
      this.position.y += this.yspeed * p.random(0, 1);
      this.position.x += this.xspeed * p.random(0, 1);
      
      if(this.position.y > p.height || this.position.y < 0) {
        this.yspeed *= -1;
      } else if(this.position.x > p.width || this.position.x < 0) {
        this.xspeed *= -1;
      }
    }

    // this.givePosition = function() {
    //   return this.position;
    // }
    
  }
}

var experiment_1 = new p5(exp1, 'c1');