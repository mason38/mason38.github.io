// Perlin Noise Project
// Mason L.
// Oct. 5, 2023
//

//global variables
let noiseShiftMove = 0;
let rectangleWidth = 2;
let noiseShift = 0.01;
let rectHeightTime = 20;

function setup() {
  createCanvas(windowWidth, windowHeight);
  
}


function generateTerrain(){
  let x = 0;
  rectHeightTime = noiseShiftMove;
  while(x<width){
    let rectHeight = noise(rectHeightTime);
    rectHeight = map(rectHeight,0,1,0,windowHeight);
    rectHeightTime += noiseShift;
    
    rectMode(CORNERS);
    rect(x, height, x+rectangleWidth, height - rectHeight);
    stroke(0);
    x+=rectangleWidth;
  }
}

function keyPressed(){
  if(keyCode===LEFT_ARROW && rectangleWidth>1) rectangleWidth -= 1;
  else if(keyCode===RIGHT_ARROW) rectangleWidth += 1;
  background(255);
  generateTerrain();
}

function draw(){
  background(255);
  noiseShiftMove += 0.02;
  generateTerrain();
  drawFlag(20,20);
}

function drawFlag(x,y){
  line(x, y, x, y+30);
  triangle(x,y+10,x,y,x+15,y+5);
}
