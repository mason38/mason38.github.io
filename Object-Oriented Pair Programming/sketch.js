// OOP Pair Programming Starter Code
// Mason Lam, Alex Sahar
// Oct 16, 2023


// ------------------------------------------------------------------------- //
// You don't need to edit this section...

let enterprise;
let shipImage, bulletImage;

function preload() {
  shipImage = loadImage("assets/enterprise.png");
  bulletImage = loadImage("assets/laser-shot.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  enterprise = new Ship(width/2, height/2, shipImage);
}

function draw() {
  background("black");
  enterprise.update();
  enterprise.display();
}

function keyPressed() {
  enterprise.handleKeyPress();
}

// ------------------------------------------------------------------------- //
// Start editing here!

class Ship {
  constructor(x, y, theImage) {
    // define the variables needed for this ship
    this.x = x, this.y = y;
  }

  update() {
    // move ship -- you might want to use the keyIsDown() function here
    if(keyIsDown(UP_ARROW)){
      this.y -= 10;
    }
    if(keyIsDown(DOWN_ARROW)){
      this.y += 10;
    }
    if(keyIsDown(LEFT_ARROW)){
      this.x -= 10;
    }
    if(keyIsDown(RIGHT_ARROW)){
      this.x += 10;
    }
    // if doing extra for experts, show bullet(s)
  }

  display() {
    image(shipImage, this.x, this.y);
  }

  handleKeyPress() {
    if(key===" "){
      image(bulletImage, this.x, this.y);
    }
  }
}

// ------------------------------------------------------------------------- //

// Extra for Experts 
//  - you can instantiate a bullet (or a bullet array) within the Ship class,
//    and call the display and update functions in the logical location of the 
//    Ship class. If you create an array of bullets, you might want to think about
//    when the bullets should be removed from the array...

class Bullet {
  constructor(x, y, dx, dy, theImage) {
    this.x = x, this.y = y;
  }

  update() {
    // what does the bullet need to do during each frame? how do we know if it is off screen?
  }

  display() {
    image(bulletImage, this.x, this.y);
  }

  isOnScreen() {
    // check if the bullet is still on the screen
  }
}

