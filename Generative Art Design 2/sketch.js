// Generative Art Design 2
// Mason L.
// Oct. 31, 2023
//

let randWidth = random(0, width);
let randHeight = random(0, height);
let controlWidth = random(0, width);
let controlHeight = random(0, height);
let controlWidth2 = random(0, width);
let controlHeight2 = random(0, height);
let randWidth2 = random(0, width);
let randHeight2 = random(0, height);

function setup() {
  createCanvas(windowWidth, windowHeight);
  noFill();
  stroke(255, 102, 0);
  curve(5, 26, 5, 26, 73, 24, 73, 61);
  stroke(0);
  curve(5, 26, 73, 24, 73, 61, 15, 65);
  stroke(255, 102, 0);
  curve(73, 24, 73, 61, 15, 65, 15, 65);
  drawCurves();
}

function drawCurves(){
  strokeWeight(2);
  stroke(0);
  for(let i = 0; i < 100; i++){
    //curve(controlWidth, controlHeight, randWidth, randHeight, randWidth2, randHeight2, controlWidth2, controlHeight2);
    
    randWidth = random(0, width);
    randHeight = random(0, height);
    controlWidth = random(0, width);
    controlHeight = random(0, height);
    controlWidth2 = random(0, width);
    controlHeight2 = random(0, height);
    randWidth2 = random(0, width);
    randHeight2 = random(0, height);
  }
}