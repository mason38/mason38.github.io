// Puzzle Game Starter
// Mason L.
// Nov. 6, 2023
//A first foray into working with 2D arrays.

let grid = [[],[],[],[]];
const NUM_ROWS = 4;
const NUM_COLS = 5;
let rectWidth = 50;
let rectHeight = 50;
let col, row; // x and y position of the mouse (grid)

function setup() {
  randomGrid();
  createCanvas(rectWidth*NUM_COLS, rectHeight*NUM_ROWS);
}

function randomGrid(){
  
  for (let i = 0; i < grid.length; i++){
    for (let s = 0; s < 5; s++){
      let number = Math.floor(random(0,2));
      if(number === 0){
        grid[i].push(number);
      }
      else{
        grid[i].push(255);
      }
    }
  }
}

function draw() {
  col = getCurrentX();
  row = getCurrentY();
  background(220);
  renderGrid();
  //print(col,row);
  winCondition();
  //print(int(mouseX/rectWidth));
  // if(frameCount%1===0){
  //   let rX = floor(random(NUM_COLS));
  //   let rY = floor(random(NUM_ROWS));
    //grid[rY][rX] = random(255);
  //}
}

function mousePressed(){
  if (keyIsDown(SHIFT)){ // if shift key is down when mouse is clicked, flip only one on the mouse
    flip(col,row);
  }
  else{
    // when the mouse is pressed, flip the corresponding 2D array value
    // also going to flip 4 cardinal neighbour (N, S, E, W)
    flip(col,row); // flip "active tile"

    // flip the neighbouring tiles too
    if(row>0) flip(col,row-1); // flip the above
    if(col < NUM_COLS-1) flip(col+1,row);
    if(row < NUM_ROWS-1) flip (col, row+1);
    if(col>0) flip(col-1, row);
  }
}

function winCondition(){
  let first = grid[0][0];

  for(let x = 0; x < NUM_COLS; x ++){
    for(let y = 0; y < NUM_ROWS; y ++){
      let item = grid[y][x];
      print(item);
      if (item !== first){
        return;
      }
    }
  }
  if(first === 0){
    fill(255);
  }
  else{
    fill(0);
  }
  text("winner winner chicken dinner", 50, 25);
}

function flip(x,y){
  //at a given x,y flip the value in our 2D array
  //0 to 255  255 to 0
  if (grid[y][x] === 0){
    grid[y][x] = 255;
  }
  else{
    grid[y][x] = 0;
  }
}

function getCurrentX(){
  //return the current column mouse is in
  let constrainX = constrain(mouseX,0,width-1);
  return int(constrainX/rectWidth);
}

function getCurrentY(){
  //return the current row mouse is in
  let constrainY = constrain(mouseY,0,height-1);
  return int(constrainY/rectHeight);
}

function renderGrid(){
  //creates a 2D of squares using info from our 2D Array for the 
  //corresponding fill values
  for(let x = 0; x < NUM_COLS; x++){
    for(let y = 0; y < NUM_ROWS; y++){
      let fillValue = grid[y][x];
      fill(fillValue);
      rect(x*rectWidth, y*rectHeight, rectWidth, rectHeight);
    }
  }
}