var exp1 = function(p) {
  var bubbles = [];

  var total = 12;
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
    p.createCanvas(elementWidth, elementHeight);
    p.frameRate(30);
      
    for(var i = 0; i < 20; i++) {
      bubbles[i] = new p.Bubble();
    }

    // println("setup!");
  }

  p.draw = function() {
    // console.log("draw!");
    // fill(0, 64);
    // noStroke();
    // rect(0,0,width,height);
    p.background(0);

    for(var i = 0; i < total; i++){  
      bubbles[i].update(); 
      bubbles[i].display();

      // console.log(bubbles[i].position.x);
      
      for(var j = i + 1; j < total; j++){
        if(p.dist(bubbles[i].positionX, bubbles[i].positionX, bubbles[j].positionY, bubbles[j].positionY) < connect + 50) {
          p.stroke(255);
          p.strokeWeight(2);
          p.line(bubbles[i].positionX, bubbles[i].positionY, bubbles[j].positionX, bubbles[j].positionY);
        }
      }
    }
  }

  p.Bubble = function() {
    var c;
    var r = 2;
    var yspeed = p.random(-1.3, 4);
    var xspeed = p.random(-1.3, 4);
    var position = new p5.Vector(p.random(p.width), p.random(p.height));
    var giveLerp;

    this.positionX = position.x;
    this.positionY = position.y;
    
    this.display = function() {
      p.stroke(255, 255);
      p.strokeWeight(2);
      p.noFill();

      p.ellipse(position.x, position.y, r, r);
      // stroke(255);
      // strokeWeight(4.75);
    }
   
    this.update = function() {
      position.y += yspeed * p.random(0, 1);
      position.x += xspeed * p.random(0, 1);
      
      if(position.y > p.height || position.y < 0) {
        yspeed *= -1;
      } else if(position.x > p.width || position.x < 0) {
        xspeed *= -1;
      }

    }
    
  }
}

var experiment_1 = new p5(exp1, 'c1');