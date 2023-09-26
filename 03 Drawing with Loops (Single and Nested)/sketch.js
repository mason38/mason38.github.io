// Drawing with Single and Nested Loops
// Mason L.
// Sept 25. 2023
// Generating a single image with loops

//Global Variables
let numSegments = 50;
let segmentHeight;
const GRID_SPACING = 10;

function setup() {
  createCanvas(windowWidth, windowHeight);
  segmentHeight = height/numSegments;
}

function drawGrid(){
  for (let x = 0; x < width; x = x + GRID_SPACING){
    for (let y = 0; y < height ; y = y + GRID_SPACING){
      fill(0);
      //test 1
      //noCursor();
      //line(mouseX, mouseY, x, y);
      //test 2
      if (dist(x,y,mouseX,mouseY) < 50){
        fill(255,0,0);
      }
      else{
        fill(0);
      }
    }
  }
}

function draw(){
  gradient();
  drawGrid();
}

function gradient(){
  // use a loop to create a gradient background
  noStroke();
  for (let i = 0; i < numSegments; i ++){
    let y = i * segmentHeight;
    let fillValue = map(y,0,height,0,255);
    fill(fillValue, 255, 0);
    rect(0, y, width, segmentHeight);
  }
  stroke(0);
}

