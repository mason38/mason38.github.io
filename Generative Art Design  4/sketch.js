// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


function setup() {
  createCanvas(2000, 2000);
  noStroke();
  noFill();
  something();
}

function something(){
  
  for(let i = 0; i < 500000; i++){
    fill(random(0,255),random(0,255),random(0,255));
    circle(random(0, 2000),random(0,2000),2);
  }
}