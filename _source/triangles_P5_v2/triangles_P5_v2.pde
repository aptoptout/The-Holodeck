Bubble[]bubbles = new Bubble[400];

int total = 12;
int connect = 0;
int tran = 10;

PVector mappedSquareTop, mappedSquareRight, mappedSquareBottom, mappedSquareLeft;
boolean lerpBool = false;
float interPola;

PVector halfwayLine;
boolean halfWayBool = false;
float halfWayOffset;
float halfWaySpeed = 0.05;

void setup(){
  size(350, 200, P3D);
  noCursor();
  smooth(8);

  for(int i = 0; i < bubbles.length; i++) {
    bubbles[i] = new Bubble();
  }
}

void draw() {
  background(0);
  
  for(int i = 0; i <= total; i++){  
    bubbles[i].update(); 
    bubbles[i].display();
    
    for(int j = i + 1; j <= total; j++){
      if(dist(bubbles[j].position.x, bubbles[j].position.y, bubbles[i].position.x, bubbles[i].position.y) 
      < connect + 50) {
        line(bubbles[i].position.x, bubbles[i].position.y, bubbles[j].position.x, bubbles[j].position.y);
      }
    }
  }
}

class Bubble{
  color c;
  float r = 2;
  float yspeed = random(1, 1.5);
  float xspeed = random(1, 1.5);
  PVector position = new PVector(random(width), random(height));
  PVector giveLerp;
  
  Bubble() {
  }
  
  void display() {
    stroke(255, 100);
    noFill();

    ellipse(position.x, position.y, r, r);
    stroke(255);
    strokeWeight(0.75);
  }
 
  void update() {
    if(!halfWayBool) {
      position.y += yspeed * random(0, 1);
      position.x += xspeed * random(0, 1);
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
  
  PVector gLerp(PVector _p) {
    giveLerp = PVector.lerp(position, _p, interPola);
    return giveLerp;
  }

  void keyPressed() {
    if (key == '.') {   //distance = +200
      xspeed += +50;
    } else if (key == ',') {   //distance = +200
      xspeed += -50;
    }
  }
}