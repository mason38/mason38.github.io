// Multi-Colored Grid
// Mason L.
// Sept. 27 2023
//



let gridSpacing = 30;
let overlay;

function setup() {
  createCanvas(windowWidth, windowHeight);
  drawGrid();
}

function mousePressed() {
  if(mouseButton === LEFT){
    gridSpacing = gridSpacing - 5;
  }
}

function drawGrid(){
  for (let x = 0; x < width; x = x + gridSpacing){
    for (let y = 0; y < height ; y = y + gridSpacing){
      square(x,y,gridSpacing);
      fill(random(0,255), random(0,255), random(0,255));
    }
  }
}



function draw(){
  mousePressed();
  
}