// Generative Art Design 2
// Mason L.
// Oct. 31, 2023
//

let randWidth = Math.random(0, 2000);
let randHeight = Math.random(0, 2000);
let controlWidth = Math.random(0, 2000);
let controlHeight = Math.random(0, 2000);
let controlWidth2 = Math.random(0, 2000);
let controlHeight2 = Math.random(0, 2000);
let randWidth2 = Math.random(0, 2000);
let randHeight2 = Math.random(0, 2000);

function setup() {
  createCanvas(2000, 2000);
  drawCurves();
}

function drawCurves(){
  for(let i = 0; i < 4000; i++){
    strokeWeight(Math.floor(random(1,5)));
    stroke(random(0,255), random(0,255), random(0,255));
    curve(randWidth,randHeight,controlWidth,controlHeight,controlWidth2,controlHeight2,randWidth2,randHeight2)
    randWidth = Math.floor(random(0, 2000));
    randHeight = Math.floor(random(0, 2000));
    controlWidth = Math.floor(random(0, 2000));
    controlHeight = Math.floor(random(0, 2000));
    controlWidth2 = Math.floor(random(0, 2000));
    controlHeight2 = Math.floor(random(0, 2000));
    randWidth2 = Math.floor(random(0, 2000));
    randHeight2 = Math.floor(random(0, 2000));
  }
}