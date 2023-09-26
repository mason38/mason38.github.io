// Primitive Paint
// Mason Lam
// Sept 15, 2023
// User Interactive Playground

//Global Variables
//let ballX, xSpeed = 20, 
let ballSize = 50, ballX, ballIncrease = 1;
let overlay;
let circleDiameter;

function setup() {
  createCanvas(windowWidth, windowHeight);
  overlay = createGraphics(width,height);
  ballX = width/2;
  
  
}

function letterShape(){ // this makes shapes at the mouse position when a key is pressed
  if(keyIsPressed){
    if(key==="a") overlay.rect(mouseX, mouseY, 50, 25);
    if(key==="s") overlay.circle(mouseX, mouseY, 30);
    if(key==="d") overlay.ellipse(mouseX, mouseY, 25, 50);
    overlay.fill(random(0,255), random(0,255), random(0,255));
  }
  image(overlay, 0, 0);
}
function draw() {
  background(220);
  animateBall();
  letterShape();
  fill(50);
  textSize(32);
  textFont("Georgia");
  text("Mason Lam", 50, 70);
  reset();
}

function animateBall(){
  // render the ball on the screen
  ballSize = ballSize + ballIncrease;
  if (ballSize > 300 || ballSize < 2){
    ballIncrease *= -1;
  }
  fill(0);
  circle(ballX, windowHeight/2, ballSize);
}

function reset(){
  if (keyIsPressed){
    if(key===" "){
      setup();
    } 
  }
}
