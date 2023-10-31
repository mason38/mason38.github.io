// Generative Art Design
// Mason L.
// Oct 27, 2023
//



function setup() {
  createCanvas(2000, 2000);
  strokeWeight(2);
  drawPoint();
}

function drawPoint(){
  for(let dot = 0; dot < 2; dot++){
    let xDot = random(0, 2000);
    let yDot = random(0, 2000);
    for(let i = 0; i < 500; i++){
      line(xDot, yDot, random(0, 2000), random(0,2000));
    }
  }
}