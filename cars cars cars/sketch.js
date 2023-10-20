// cars cars cars
// Mason L.
// Oct 17, 2023
//

let car;

function setup() {
  createCanvas(windowWidth, windowHeight);
  car = new Vehicle(0, random(height/4, height/2+height/4));
}

function draw() {
  background(220);
  drawRoad();
  car.action();
  
  
}

function drawRoad(){
  rectMode(CENTER);
  fill(0);
  rect(windowWidth/2, windowHeight/2, windowWidth, windowHeight*0.5);
  let x = 0;
  fill(color(255, 255, 0));
  while(x < width){
    rect(x, height/2, 16, height*0.005);
    x += 32;
  }
}



class Vehicle{
  constructor(x,y){
    this.x = x;
    this.y = y;
    this.c = color(random(0,255), random(0,255), random(0,255));
    this.type = Math.floor(random(0,2));
    this.xSpeed = 5;
    

  }

  action(){
    this.move();
    this.speedUp();
    this.speedDown();
    this.changeColor();
    this.display();
  }
    
  

  display(){
    if(this.type === 1){
      fill(this.c);
      rectMode(CENTER);
      rect(this.x, this.y, 70, 30, 50, 50, 50, 50);
    }
    else{
      fill(this.c);
      rectMode(CENTER);
      rect(this.x, this.y, 70, 30);
    }
  }
  
  move(){
    this.x += this.xSpeed;
    if(this.x < 0) this.x += width;
    if(this.x > width) this.x -= width;
  }

  speedUp(){
    let i = Math.floor(random(0,100));
    if(i === 1){
      if(this.xSpeed>=15){
        this.xSpeed = 15;
      }
      else{
        this.xSpeed += 1;
      }
    }  
  }
  speedDown(){
    let i = Math.floor(random(0,100));
    if(i === 1){
      if(this.xSpeed<=0){
        this.xSpeed = 0;
      }
      else{
        this.xSpeed -= 1;
      }
    }
  }
  changeColor(){
    let i = Math.floor(random(0,100));
    if(i === 1){
      this.c = color(random(0,255), random(0,255), random(0,255));
    }
  }
}