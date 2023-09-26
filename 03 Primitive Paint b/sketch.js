// Primitive Paint
// Mason Lam
// Sept 15, 2023
// User Interactive Playground

//Global Variables
let overlay;
let circleDiameter;

function setup() {
  createCanvas(windowWidth, windowHeight);
  overlay = createGraphics(width,height);
  
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
  letterShape();
  animateBall();
  fill(50);
  textFont("Georgia", 32);
  text("Mason Lam", 50, 70);
}

function animateBall(){
  fill(50);
  circle(50,50,50);


}
