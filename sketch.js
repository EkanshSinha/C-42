var hours;
var minute;
var seconds

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255);  
  drawSprites();

  hr = hour();
  mn = minute();
  sc = second();

  let h = hour();
text('Current hour:\n' + h, 5, 50);
sacAngle = map(sc,0,60,0,360);
}

function line(){
stroke(255,0,0);
strokeWeight(7);
line(0,0,100,0);
arc(50, 50, 80, 80, 0, PI + QUARTER_PI, PIE);

}
