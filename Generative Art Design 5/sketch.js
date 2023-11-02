// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let squareSize = 5;

function setup() {
  createCanvas(2000, 2000);
  strokeWeight(2);
  rectMode(CENTER);
  noFill();
  drawRectangles();
}

function drawRectangles() {
  let s = squareSize;
  let centerX = width / 2;
  let centerY = height / 2;
  for (let s = 1000; s < 200000; s++) {
    let rAmount = map(s, 1000, 2000, 1, 45);
    rotate(radians(random(-rAmount, rAmount)));
    let offset = map(s, 1000, 2000, 0, 15);
    square(centerX, centerY, s);
  }
}



