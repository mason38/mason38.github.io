// local storage and p5.sound library
// Mason L.
// Nov 27, 2023
//


//Global Variables
//localStorage.setItem("numBounces", 0);
//localStorage.getItem("numBounces")   // ===null
//localStorage.has()
let ball;
let totalBounces = 0;
let music;
let bounceSound;
let geometryDashMusic;
let started = false;

function preload(){// this function waits for loads to complete 
  music = loadSound("assets/background.mp3");
  bounceSound = loadSound("assets/bounceSound.wav");
  geometryDashMusic = loadSound("assets/1-0.2 Stereo Madness.mp3");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  ball = new Ball(width/2, height/2);
  if(localStorage.getItem("numBounces")===null){
    localStorage.setItem("numBounces", 0);
  }
  else{
    totalBounces = localStorage.getItem("numBounces");
  }
}

function draw() {
  textSize(30);
  textAlign(CENTER);
  background(220);
  if(started===false){
    text("click to start", width/2, height/2);
    if(mouseIsPressed){
      started = true;
      geometryDashMusic.setVolume(0.3);  // 0-1
      geometryDashMusic.loop();
    }
  }
  else{
    ball.move();
    ball.display();
    text(totalBounces, width/2, height/2);
  }
}


class Ball{
  constructor(x,y){
    this.pos = createVector(x,y);
    this.vel = createVector(random(-6,6), random(-6,6));
  }
  display(){
    circle(this.pos.x, this.pos.y, 30);
  }
  move(){
    this.pos.add(this.vel);
    if(this.pos.x < 0 || this.pos.x > width){
      this.vel.x *= -1;
      totalBounces++;
      localStorage.setItem("numBounces", totalBounces);
      bounceSound.play();
    }
    if(this.pos.y < 0 || this.pos.y > height){
      this.vel.y *= -1;
      totalBounces++;
      localStorage.setItem("numBounces", totalBounces);
      bounceSound.play();
    }
  }
}
