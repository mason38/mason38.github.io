// Snake Mechanics
// Mason L.
// Oct 11, 2023
// Practice in working with Classes and Arrays (Snake)

//Global Variables
let points = []; //snake coordinates
let speed = 6;  //snake speed
let snakeLength = 30;
let snakeLocation;  //a Point for the where the head is

function setup() {
  createCanvas(windowWidth, windowHeight);
  snakeLocation = new Point(width / 2, height / 2);
  strokeWeight(15);
  initSnake(); //populate the array
}

function initSnake() {
  //place in points[] a bunch of starting Points
  for (let i = 0; i < snakeLength; i++) {
    points.push(createPoint());
  }
}

function createPoint() {
  //return a new Point object ↑ ↓ → ←
  if (keyCode === UP_ARROW) snakeLocation.y -= speed;
  else if (keyCode === DOWN_ARROW) snakeLocation.y += speed;
  else if (keyCode === LEFT_ARROW) snakeLocation.x -= speed;
  else if (keyCode === RIGHT_ARROW) snakeLocation.x += speed;
  //if a different coded key was pressed, no change
  return new Point(snakeLocation.x, snakeLocation.y);
}

function draw() {
  background(220);
  moveAndDisplay();
}

function moveAndDisplay(){
  // loop through the array, and connect all points
  for(let i = 0; i < points.length-1; i++){
    let cur = points[i];  //Point  .x  .y
    let next = points[i+1];
    let alpha = map(i,0,points.length-1,0,150);
    stroke(0,alpha); 
    line(cur.x, cur.y, next.x, next.y);
  }

  //move -delete first element, push new point
  points.splice(0,1);   //deletes element 0
  points.push(createPoint());
}

class Point { //a class for an (x,y) point
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}