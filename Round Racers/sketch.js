// Round Racer
// Mason L.
// Oct. 2, 2023
//



function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
}


class RoundRacer{
  constructor(yPosition, color){
    this.xPosition = 0;
    this.yPosition = yPosition;
    this.xSpeed = random(3,15);
    this.color = color;
  }

  move(){
    this.xPosition = this.xPosition + this.xSpeed;
    
  }




}