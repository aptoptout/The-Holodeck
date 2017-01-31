import ddf.minim.*;
 
Minim minim;
AudioInput input;
AudioPlayer song;

Bubble[]bubbles = new Bubble[400];

int total = 12;
int connect = 200;
int tran = 10;

PVector mappedSquareTop, mappedSquareRight, mappedSquareBottom, mappedSquareLeft;
boolean lerpBool = false;
float interPola;

PVector halfwayLine;
boolean halfWayBool = false;
float halfWayOffset;
float halfWaySpeed = 0.05;

void setup(){
  size(displayWidth, displayHeight, P3D);
  noCursor();
  smooth(8);

  minim = new Minim (this);
  input = minim.getLineIn (Minim.STEREO, 2048);
  song = minim.loadFile("Nmr 3 Symbiotic Spark.mp3", 2048);
  //song.cue(360000);
    
  for(int i = 0; i < bubbles.length; i++) {
    bubbles[i] = new Bubble();
  }
}

void draw() {
  fill(0, tran);
  noStroke();
  rect(0,0,width,height);

  for(int i = 0; i <= total; i++){  
    bubbles[i].update(); 
    bubbles[i].display();
    
    for(int j = i + 1; j <= total; j++){
      if(dist(bubbles[j].position.x, bubbles[j].position.y, bubbles[i].position.x, bubbles[i].position.y) < connect + 200) {
        line(bubbles[i].position.x, bubbles[i].position.y, bubbles[j].position.x, bubbles[j].position.y);
      }
    }
  }
}

void keyPressed(){
   if (key == '-') {
    total = total -1;
  }  else if (key == '=') {  //+point
    total = total +1; 
  } else if (key == 'r') {   //-point
    stroke (0);
  } else if (key == 'u') {   //distance = 0
    connect = 0;
  } else if (key == 'i') {   //distance = -10
    connect += -10;
  } else if (key == 'o') {   //distance = +10
    connect += +10;
  } else if (key == 'p') {   //distance = +200
    connect += +200;
  } else if (key == 'n') {   //transparency -10
    tran += -10;
  } else if (key == 'm') {   //transparency +10
    tran += +10;
  } else if (key == '0') {
    lerpBool = !lerpBool;
    interPola = 0;
  } else if (key == '9') {
    halfWayBool = !halfWayBool;
    interPola = 0;
    halfWayOffset = 0;
  } else if (key == '1') {
    song.play();
  }
}