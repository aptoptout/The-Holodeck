var bubbles = [];

// var total = 400;
var connect = 200;
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

function setup() {
  createCanvas(800, 640);
  frameRate(30);
    
  for(var i = 0; i < 12; i++) {
    bubbles[i] = new Bubble();
  }

  // println("setup!");
}

function draw() {
  // console.log("draw!");
  // fill(0, 64);
  // noStroke();
  // rect(0,0,width,height);
  background(0);

  for(var i = 0; i < 12; i++){  
    bubbles[i].update(); 
    bubbles[i].display();

    // console.log(bubbles[i].position.x);
    
    for(var j = i + 1; j < 11; j++){
      if(dist(bubbles[i].positionX, bubbles[j].positionX, bubbles[i].positionY, bubbles[j].positionY) < connect) {
        line(bubbles[i].positionX, bubbles[i].positionY, bubbles[j].positionX, bubbles[j].positionY);
      }
    }
  }
}

function Bubble() {
  var c;
  var r = 1;
  var yspeed = random(-1.3, 4);
  var xspeed = random(-1.3, 4);
  var position = new p5.Vector(random(width), random(height));
  var giveLerp;

  // console.log(position.x);
  
  // this.Bubble = function() {
  //   position = new p5.Vector(random(width), random(height));

  //   r = 1;
    
  //   yspeed = random(-1.3, 4);
  //   xspeed = random(-1.3, 4);
  // }

  this.positionX = position.x;
  this.positionY = position.y;
  
  this.display = function() {
    stroke(255, 255);
    strokeWeight(2);
    noFill();

    ellipse(position.x, position.y, r, r);
    // stroke(255);
    // strokeWeight(4.75);
  }
 
  this.update = function() {
    if(!halfWayBool) {
      position.y += yspeed * 0.3 * random(0, 1) * 50;
      position.x += xspeed * 0.3 * random(0, 1) * 100;
    }
    
    if(position.y > height || position.y < 0) {
      yspeed *= -1;
    } else if(position.x > width || position.x < 0) {
      xspeed *= -1;
    }
    
    if(lerpBool || halfWayBool) {
      interPola += 0.0001;
      interPola = constrain(interPola, 0, 1);
    }
  }
  
  var gLerp = function(_p) {
    giveLerp = new p5.Vector.lerp(position, _p, interPola);
    return giveLerp;
  }

  // this.keyPressed() {
  //   if (key == '.') {   //distance = +200
  //     xspeed += +50;
  //   } else if (key == ',') {   //distance = +200
  //     xspeed += -50;
  //   }
  // }
}