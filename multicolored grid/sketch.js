// Multi-Colored Grid
// Mason L.
// Sept. 27 2023
//



let gridSpacing = 30;
let overlay;

function setup() {
  document.addEventListener("contextmenu", event => event.preventDefault()); // for the right click
  createCanvas(windowWidth, windowHeight);
  drawGrid();
}

function mousePressed() { // this function changes the gridSpacing 
  if(mouseButton === LEFT){ // left mouse click decreases gridSpacing by 5
    if(gridSpacing < 10){ // doesn't let gridSpacing go below 0 and crash
      gridSpacing=5;
    }
    else{
      gridSpacing = gridSpacing - 5;
    }
  }
  if(mouseButton === RIGHT){ // right mouse click increases gridSpacing by 5
    gridSpacing = gridSpacing + 5;
  }
  drawGrid();
}


function drawGrid(){ // draws all the squares
  for (let x = 0; x < width; x = x + gridSpacing){
    for (let y = 0; y < height ; y = y + gridSpacing){
      square(x,y,gridSpacing);
      fill(random(0,255), random(0,255), random(0,255));
    }
  }
}


function draw(){ // redraws the grid whe any key is pressed
  if(keyIsPressed){
    drawGrid();
  }
  
  
}