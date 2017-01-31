class Bubble{
  color c;
  float r;
  float yspeed;
  float xspeed;
  PVector position, giveLerp;
  
  Bubble() {
    position = new PVector(input.mix.level () * width, input.mix.level () * width);

    r = 1;
    
    yspeed = random(-1.3, 4);
    xspeed = random(-1.3, 4);
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
      position.y += yspeed * 0.3 * input.mix.level() * 50;
      position.x += xspeed * 0.3 * input.mix.level() * 100;
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