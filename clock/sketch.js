// Clock
// Mason L.
// oct. 23
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


function setup() {
  createCanvas(windowWidth, windowHeight);
  background(220);
  drawClock();
}

function draw() {
  
}


function drawClock(){
  strokeWeight(3);
  circle(width/2, height/2, 300);
  for(let i = 0; i < 12; i++){
    push();
    translate(width/2, height/2);
    line(width/2, height/2 + 75, width/2, height/2 + 125);
    
    rotate(radians(30));
    pop();
  }
}