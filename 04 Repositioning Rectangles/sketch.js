// Repositioning Rectangle
// Mason L.
// Sept. 27, 2023
// Simple GUI creation / Geometry practice

//Global Variables
let x, y, rWidth, rHeight;
let rLeft, rRight, rTop, rBottom;
let mouseOver = false; // are we hovering over the rect?
let pickedUp = false; // are we currently moving it?
let xOff, yOff; // so we can grab away from center

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
  x = width/2, y = height/2;
  rWidth = 200; rHeight = 100;
}

function updateEdgePosition(){
  //update the left/right/top/bottom properties
  rLeft = x - rWidth/2;
  rRight = x + rWidth/2;
  rTop = y - rHeight/2;
  rBottom = y + rHeight/2;
}


function drawRectangle(){
  //render the rectangle and handle dragging...
  updateEdgePosition();
  print(rLeft, rRight, rTop, rBottom);

  if (mouseX>rLeft && mouseX < rRight && mouseY > rTop && mouseY < rBottom){
    mouseOver = true;
    fill(170,190,50);
  }
  else{
    mouseOver = false; 
    fill(35,70,125);
  }

  if(pickedUp){
    x = mouseX + xOff;
    y = mouseY + yOff;
  }
  rect(x, y, rWidth, rHeight);
}

function mousePressed(){
  //triggers exactly 1 per click (on down action)
  if(mouseOver){
    pickedUp = true;
    xOff = x - mouseX; 
    yOff = y - mouseY;
  }
}

function mouseReleased(){
  pickedUp = false;
}

function draw() {
  background(220);
  drawRectangle();
}
