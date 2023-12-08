// Using External Libraries
// Mason L.
// Dec 1, 2023
//

let scribble;
let rW = 150, rH = 80;

function setup() {
  createCanvas(windowWidth, windowHeight);
  scribble = new Scribble();
}

function draw() {
  background(220);
  if(collideRectCircle(width/2, height/2, rW, rH, mouseX, mouseY, 120)){
    fill(255,100,250);
  }
  else{
    fill(255);
  }
  rect(width/2, height/2, rW, rH);
  scribble.scribbleEllipse(mouseX, mouseY, 120, 120);
}
