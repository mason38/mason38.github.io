// Perlin Noise Project
// Mason L.
// Oct. 5, 2023
//

//global variables
let noiseShiftMove = 0;
let rectangleWidth = 2;
let noiseShift = 0.01;
let rectHeightTime = 20;
let tallestX = 0; // these are variables for the highest point out of the rectangles
let tallestY = 0; 

function setup() {
  createCanvas(windowWidth, windowHeight);
  generateTerrain(); // makes the terrain
}

function generateTerrain(){
  let x = 0;
  
  rectHeightTime = noiseShiftMove;
  highestY = height; // the highest y point is equal to the height of the canvas
  while(x<width){
    let rectHeight = noise(rectHeightTime);
    rectHeight = map(rectHeight,0,1,0,windowHeight);
    rectHeightTime += noiseShift;
    
    rectMode(CORNERS);
    rect(x, height, x+rectangleWidth, height - rectHeight);
    stroke(0);
    
    // check if this point is higher than the previous point
    if (height - rectHeight < highestY) {
      highestX = x;
      highestY = height - rectHeight;
    }
    
    x += rectangleWidth;
  }
}

function keyPressed(){ // when arrow key left or right is pressed, change rectangle width
  if(keyCode===LEFT_ARROW && rectangleWidth>1) rectangleWidth -= 1;
  else if(keyCode===RIGHT_ARROW) rectangleWidth += 1;
  background(255);
  generateTerrain();
  drawFlag(20, 20);
}

function draw(){
  background(255);
  noiseShiftMove += 0.02;
  generateTerrain();
  drawFlag(20, 20);
}

function drawFlag(x,y){ // draws the flag
  line(highestX, highestY, highestX, highestY - 30); 
  triangle(highestX, highestY - 20, highestX, highestY - 30, highestX + 15, highestY - 25); 
}
