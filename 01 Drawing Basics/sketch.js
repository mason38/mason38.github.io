// p5 Drawing Basics
// Mason lam 
// Sept 12, 2023
//

//Global Variables
let busX = 0, busY =  0;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  //move the bus
  if (keyIsPressed){
    if(keyCode===LEFT_ARROW){
      busX = busX - 10;
    }
    if (keyCode===RIGHT_ARROW){
      busX = busX + 10;
    }
    if(keyCode===UP_ARROW){
      busY = busY +10;
    }
    if(keyCode===DOWN_ARROW){
      busY = busY - 10;
    }

  }
  //make the bus
  background(123);
  fill(100, 150, 20);
  rect(50+busX, 50+busY, 100, 50);
  fill(0);
  circle(75+busX, 100+busY, 20);
  circle(125+busX,100+busY,20);

}

// function keyPressed(){
//   print("key: ", key, "\tkeyCode:", keyCode);
//   if(keyCode===LEFT_ARROW){
//     busX = busX - 10
//   }
//   if (keyCode===RIGHT_ARROW){
//     busX = busX + 10
//   }
// }