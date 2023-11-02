// Generative Art 
// Mason L.
// Nov. 1, 2023
//



function setup(){
  createCanvas(2000, 2000);
  drawThings();
}

function drawThings(){
  let x = random(0,2000);
  let y = random(0,2000);
  let x2 = random(0,2000);
  let y2 = random(0,2000);
  strokeWeight(1);
  for(let i = 0; i < 100000; i++){
    stroke(color(random(0,255)));
    line(x,y,x2,y2);
    x = random(0,2000);
    y = random(0,2000);
    x2 = random(0,2000);
    y2 = random(0,2000);
  }
}