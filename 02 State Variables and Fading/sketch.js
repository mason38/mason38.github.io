// State Variables and Fading
// Mason L.
// Sept 22, 2023
//A look at state variables and a fading effect

//Global Variables
let mouseSide; // 
let fillValue = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  updateMouseState();
}

function draw() {
  background(220);
  updateMouseState();
  renderSquares();
}

function updateMouseState(){
  //looks at the mouse position and updates 
  //our "system variable" mouseSide.
  if(mouseX>width/2){
    mouseSide = "right";
  }
  else mouseSide = "left";
  print(mouseSide);
}

function renderSquares(){
  // draw our two rectangles on the screen



  if(mouseSide==="left")fill(0);
  else fill(255);
  rect(0,0,width/2,height); // LEFT RECTANGLE



  
  if(mouseSide==="right"){
    fillValue = 0;
  }
  else{
    
    fillValue += 1;
   
  }
  fillValue = constrain(fillValue, 0, 255);
  fill(fillValue);
  print(fillValue);
  rect(width/2,0,width/2,height); // RIGHT RECTANGLE
}