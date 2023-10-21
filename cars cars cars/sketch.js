// cars cars cars
// Mason L.
// Oct 17, 2023
//

let car;
let eastbound = [];
let westbound = [];
let traffic;

function setup() {
  createCanvas(windowWidth, windowHeight);
  // creates the initial vehicles 
  for(let i = 0; i < 20; i++){
    eastbound.push(new Vehicle(0, random(height/2+height/(100), height/2+height/4), 1));
    i++;
  }
  for(let i = 0; i< 20; i++){
    westbound.push(new Vehicle(0, random(height/2-height/(100), height/4)));
    i++;
  } // makes the one traffic light
  traffic = new TrafficLight(50, 50);
 
}

function draw() {
  background(220);
  drawRoad();
  for(let num in eastbound){ // calls all the functions in the vehicle class for each vehicle
    eastbound[num].action();
  }
  for(let num in westbound){
    westbound[num].action();
  }
  traffic.doEverything(); // calls all the function is the trafficlight class for the traffic light
  
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

function mouseClicked(){ // add a vehicle to array when shift + click or click
  if (keyIsDown(SHIFT)){
    westbound.push(new Vehicle(0, random(height/2-height/100, height/4)))}
  else {
    eastbound.push(new Vehicle(0, random(height/2+height/100, height/2+height/4), 1));
  }
}


class Vehicle{
  constructor(x,y,dir){
    this.x = x;
    this.y = y;
    this.dir = dir;
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
    if (traffic.color2 === "red") { // this will stop the cars when traffic light is red
      this.xSpeed = 0;
    }
  }
    
  

  display(){
    if(this.type === 1){ // two different types of vehicles
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
    if(this.dir === 1){
      this.x += this.xSpeed;
      if(this.x > width) this.x -= width;
    }
    else{
      this.x -= this.xSpeed;
      if(this.x < 0) this.x += width;
    }
  }

  speedUp(){
    let i = Math.floor(random(0,100)); // 1% chance to speed up
    if(i === 1){
      if(this.xSpeed>=15){
        this.xSpeed = 15;
      }
      else{
        this.xSpeed += 1;
      }
    }  
  }
  speedDown(){ // 1% chance to speed down
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
  changeColor(){ // 1% chance to change to random color
    let i = Math.floor(random(0,100));
    if(i === 1){
      this.c = color(random(0,255), random(0,255), random(0,255));
    }
  }
}

class TrafficLight{
  constructor(x,y){
    this.x = x;
    this.y = y;
    this.color1 = "green";
    this.color2 = "black";
    this.starttheframes = false;
    this.onehundredtwentyframes = 120;
  }

  doEverything(){
    this.display();
    this.changeTrafficColor();
  }

  display(){ // make the traffic light display
    fill(150);
    rect(100,100,50,100);
    fill(this.color1);
    ellipse(100,75,30);
    fill(this.color2);
    ellipse(100,125,30);
  }

  changeTrafficColor(){ // changes the light colors when spacebar is pressed and
    if(keyIsPressed){  // starts a countdown from 120 frames until the colors go back to green
      if(key===" "){
        
        this.color1 = "black";
        this.color2 = "red";
        this.starttheframes = true;
        
      }
    }
    if(this.starttheframes===true){
      if(this.onehundredtwentyframes > 0){
        this.onehundredtwentyframes--;
        
      }
      else{
        this.color1 = "green";
        this.color2 = "black";
        this.starttheframes = false;
        this.onehundredtwentyframes = 120;
      }
    }
  }
  
}