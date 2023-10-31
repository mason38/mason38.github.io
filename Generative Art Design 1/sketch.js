// Generative Art Design 1
// Mason L.
// Oct. 30, 2023
//



let sectionSize = 10;

function setup() {
  createCanvas(windowWidth, windowHeight);
  strokeWeight(2);
  drawEverything();
}

function drawEverything(){
  let s = sectionSize;
  for(let x = s/2; x < width-s/2; x += s){
    for(let y = s/2; y < height-s/2; y += s){
      push(); // new coordinate system
      translate(x,y);
      for(let i = 0; i < Math.floor(random(0,10)); i++){
        circle(x,y,random(1,s));
      }
      pop(); // revert coordinate system
    }
  }
}

