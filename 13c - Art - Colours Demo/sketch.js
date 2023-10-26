// Colours Demo
// Mason L.
// Oct. 25, 2023
//

let rectWidth = 50;
let rectHeight = 10;
let colors = ["#9D4050", "#D83B6B", "#C29785", "#C29785", "#5EB9D4"]; //  "#A514CC"


function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  drawRGB(width*0.1);   //RGB
  drawHSB(width*0.4);   //HSB
  drawCustom(width*0.7);   //CUSTOM
}

function drawCustom(x){
  colorMode(RGB);
  let index = 0;
  for(let y = 0; y < height; y += rectHeight){
    //option 1: cycle through palette
    fill(colors[index%5]);
    //option 2: random palette selection
    fill(colors[Math.floor(random(colors.length))]);
    rect(x,y,rectWidth,rectHeight);
    index++;
  }
}

function drawHSB(x){
  colorMode(HSB); // 0-360
  for(let y = 0; y < height; y += rectHeight){
    fill(y/3%360, 360,360);
    rect(x,y,rectWidth,rectHeight);
  }
}

function drawRGB(x){
  colorMode(RGB, 255);  //0-255
  for(let y = 0; y < height; y += rectHeight){
    fill(random(255), random(255), random(255));
    rect(x,y,rectWidth,rectHeight);
  }
}
