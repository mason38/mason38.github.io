// Generative Art Design 1
// Mason L.
// Oct. 30, 2023
//



let sectionSize = 10; // space between the center of each circle

function setup() {
  createCanvas(2000, 2000);
  strokeWeight(2);
  drawEverything();
}

function drawEverything(){
  let s = sectionSize;
  for(let x = s/2; x < width-s/2; x += s){ // these for loops make a grid 
    for(let y = s/2; y < height-s/2; y += s){
      push(); // new coordinate system
      translate(x,y);
      for(let i = 0; i < Math.floor(random(0,10)); i++){ // random size circles in a random size circle
        circle(x,y,random(1,s));
      }
      pop(); // revert coordinate system
    }
  }
}

