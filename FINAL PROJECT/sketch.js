
let newGrid = [];
let grid = [
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,2,2,2,2,2,2,2,2,2,2,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,1,1,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,1,1,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,2,2,2,2,2,2,2,2,2,2,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
];
let gameRunning=1;
let NUM_ROWS = 18;
let NUM_COLS = 32;
let squareSize = 60;
let raft;
let gameOverScreen;
let gridColoumn;
let gridRow;
let oneKey = false;
let objects = [];
let woodCount = 8;
let plasticCount = 8;
let playerPostionX;
let playerPostionY;
let hookPos;
let hookTargetPos;
let hookVelocity;
let casting = 0;
let woodOrBarrelHit = false;
let plasticHit = false;
let start = Date.now();
let oceanColors = [];
let placementPhase = 0;//0-not placing   1-item selected   2-placement
let placementItem = "";
let dayCount = 0;
let healthCount = 4;
let maxHealthCount = 4;
let cannonBallVelocity;
let cannonBallObjects = [];
let dayMult = 0;


function preload(){
  raft = loadImage("assets/33770b1f8b51af8.png");
  gameOverScreen = loadImage("assets/pixel-art-sign-skull-with-crossbones-and-game-over-vector-24924421.jpg");
}

function setup() {
  createCanvas(squareSize*NUM_COLS, squareSize*NUM_ROWS);
  //background(0,100,255);
  print(windowHeight);
  print(windowWidth);
  playerPostionX = width/2;
  playerPostionY = height/2;
  hookPos = createVector(playerPostionX, playerPostionY);
  hookTargetPos= createVector(playerPostionX, playerPostionY);
  hookVelocity = createVector(0,0);
  objects.push(new floatingWood(0,random(0, height)));
  oceanColors.push(color(51, 153, 255));
  oceanColors.push(color(255, 153, 102));
  oceanColors.push(color(0, 51, 204));

}

function draw() {
  if(gameRunning===2){
    noLoop();
  }
  gridColoumn = mouseGridX();
  gridRow = mouseGridY();
  // print(gridColoumn, gridRow);
  renderGrid();
  //oneKeyMenu();
  //print(frameCount);
  allOverlays();
  playerData();
  hookData();
  hookCollisions();
  line(playerPostionX,playerPostionY,hookPos.x, hookPos.y);
  gameOver();
  
  
}



function materialsRender(){
  if (frameCount % Math.floor(random(200,400)) === 0){
    objects.push(new floatingWood(0,random(0, height)));
  }
  if (frameCount % Math.floor(random(200,400)) === 0){
    objects.push(new floatingPlastic(0,random(0, height)));
  }
  if (frameCount % Math.floor(random(2000,4000)) === 0){
    objects.push(new floatingBarrels(0,random(0, height)));
  }
  
  if (frameCount % Math.floor(random(0,1000000/dayCount)) === 0){
    objects.push(new floatingPiratesNorth(0,random(0, height*0.05)));
  }
  if (frameCount % Math.floor(random(0,1000000/dayCount)) === 0){
    objects.push(new floatingPiratesSouth(0,random(height*0.83, height*0.85)));
  }
  
  
  for(let o of objects){
    o.move();
    o.display();
  }
  for(let i = 1; i < objects.length-1; i++){
    if(objects[i].x > windowWidth){
      objects.splice(i,1);
    }
  }
}

function renderGrid(){
  for(let x = 0;  x < NUM_COLS; x++){
    for(let y = 0; y < NUM_ROWS; y++){
      strokeWeight(2);
      let currentTile = grid[y][x];
      if (currentTile===1){
        image(raft, x*squareSize, y*squareSize, 60,60);
      }
      else if(currentTile===0 || currentTile===2){
        rect(x*squareSize, y*squareSize, squareSize, squareSize);
      }
    }
  }
  
}

function mouseGridX(){
  let constraintX = constrain(mouseX, 0, width);
  return int(constraintX/squareSize);
}

function mouseGridY(){
  let constraintY = constrain(mouseY, 0, height);
  return int(constraintY/squareSize);
}

function keyPressed(){
  if(key==="1"){
    if(oneKey===false){
      oneKey = true;
    }
    else{
      oneKey = false;
    }
  }
}

function dayandNight(){
  background(oceanColors[0]);
  if(Date.now()-start>=20000){
    background(oceanColors[1]);
    if(Date.now()-start>=25000){
      background(oceanColors[2]);
      if(Date.now()-start>=35000){
        background(oceanColors[1]);
        if(Date.now()-start>=40000){
          start = Date.now();  
          dayCount = dayCount + 1;
        }
      }
    }
  }
}

function mousePressed(){
  if(casting===0){
    if(oneKey===false){
      hookTargetPos.x = mouseX;
      hookTargetPos.y = mouseY;
      hookVelocity = p5.Vector.sub(hookTargetPos, hookPos);
      hookVelocity.normalize();
      hookVelocity.mult(6);
      casting = 1;
    }
  }
  if(oneKey===true){
    if(placementPhase<=1){
      if(mouseX<140 && mouseX>100 && mouseY<240 && mouseY>200 && woodCount>=2 && plasticCount>=2){
        placementPhase=1;
        placementItem = "raft";
      }     
      if(mouseX<220 && mouseX>180 && mouseY<240 && mouseY>200 && woodCount>=2 && plasticCount>=2 && healthCount<maxHealthCount){
        placementPhase=1;
        placementItem = "repair";
      }
    }
    // if(placementPhase===1){
    // //actual placement
    //   if(placementItem==="raft" && woodCount>=3){
    //     placementPhase===2;
    //   }
    // }
    if(placementPhase===1 && oneKey===true){
      if(placementItem==="raft" && woodCount > 1 && plasticCount > 1){
        if(grid[gridRow][gridColoumn]===0 && (grid[gridRow+1][gridColoumn] ===1|| grid[gridRow-1][gridColoumn] ===1|| grid[gridRow][gridColoumn+1]===1 || grid[gridRow][gridColoumn-1]===1)){
          grid[gridRow][gridColoumn] = 1;
          image(raft, gridColoumn*squareSize, gridRow*squareSize, 60,60);//????
          woodCount = woodCount - 2;
          plasticCount = plasticCount - 2;
          maxHealthCount++;
        }
      }
      if(placementItem==="repair" && woodCount > 1 && plasticCount > 1){
        if(grid[gridRow][gridColoumn]===1){
          if(healthCount<maxHealthCount){
            healthCount++;
            woodCount = woodCount - 2;
            plasticCount = plasticCount - 2;
          }
        }
      }
    }
  }
}

function allOverlays(){
  if(oneKey===true){
    //menu overlay
    textSize(10);
    fill(255);
    rect(50, 50, 300, height-100);
    fill(0);
    text("Wood Count = " + woodCount, 100, 100);
    text("Plastic Count = " + plasticCount, 100, 125);
    strokeWeight(1);
    line(50, 150, 350, 150);
    text("Structures", 175, 165);
    line(50, 180, 350, 180);
    strokeWeight(0);
    image(raft, 100, 200, 40, 40);
    text("2 Wood, 2 Plastic", 70, 260);
    fill(100);
    rect(180, 200, 40, 40);
    fill(255);
    text("REPAIR", 182, 220);
    fill(0);
    text("2 Wood, 2 Plastic", 160, 260);

    textSize(20);
    text("press 1 to exit the build menu", 70, height - 150);

    //placement overlays
    if(placementPhase===1){
      if(placementItem==="raft"){
        fill(255);
        rect(400,50,700,height*0.1);
        fill(0);
        textSize(20);
        text("Placing a raft tile will increase your maximum health by +1", 425, 75,575, 100);
        for(let x = 0;  x < NUM_COLS; x++){
          for(let y = 0; y < NUM_ROWS; y++){
            fill(0,100,255,100);
            if(grid[y][x]===1){//at raft             
              if(grid[y+1][x]===0){
                fill(0,255,100,100);
                rect(x*squareSize, (y+1)*squareSize, squareSize, squareSize);
              } 
                        
              if(grid[y-1][x]===0){
                fill(0,255,100,100);
                rect(x*squareSize, (y-1)*squareSize, squareSize, squareSize);  
              }
                  
              if(grid[y][x+1]===0){
                fill(0,255,100,100);        
                rect((x+1)*squareSize, y*squareSize, squareSize, squareSize);
              } 
              
              if(grid[y][x-1]===0){
                fill(0,255,100,100);
                rect((x-1)*squareSize, y*squareSize, squareSize, squareSize);
              }   
              
            }
          }
        }
      }
    }
    if(placementItem==="repair"){
      fill(255);
      rect(400,50,700,height*0.1);
      fill(0);
      textSize(20);
      text("Click anywhere on the raft to repair (+1 health)", 425, 75, 575, 100);
      for(let x = 0;  x < NUM_COLS; x++){
        for(let y = 0; y < NUM_ROWS; y++){
          fill(0,100,255,100);
          if(grid[y][x]===1){//at raft             
            fill(0,255,100,100);
            rect(x*squareSize, y*squareSize, squareSize, squareSize);
          }
        }
      }
    }
  }
  else if(oneKey===false){
    //no longer in the menu
    dayandNight();
    materialsRender();
    cannonBall();
    fill(255);
    textSize(20);
    text("Press 1 To Enter The Build Menu", 70, height -150);
    text("Plastic Count: " + plasticCount, width/2-75, height*0.85);
    text("Wood Count: " + woodCount, width/2-75, height*0.83);
    textSize(50);   
    text("DAY " + dayCount, width/2-75, height*0.9);
    textSize(10);
    for(let x = 0;  x < NUM_COLS; x++){
      for(let y = 0; y < NUM_ROWS; y++){
        if (grid[y][x]===1){
          image(raft, x*squareSize, y*squareSize, 60,60);
        }
      }
    }
    placementPhase=0;  
    placementItem="";
  }
  fill("red");
  rect(playerPostionX-50, playerPostionY+30, 100,20);
  fill("green");
  let takeOffGreen = map(maxHealthCount-healthCount,0,maxHealthCount,0,100);
  rect(playerPostionX-50, playerPostionY+30, 100-takeOffGreen,20);
}

function playerData(){
  fill(255, 204, 153);
  strokeWeight(2);
  circle(playerPostionX, playerPostionY, 45);
  
}

function hookData(){
  let playerPos = createVector(playerPostionX,playerPostionY);
  hookPos.add(hookVelocity);
  fill(51,51,51);
  rect(hookPos.x, hookPos.y, 10, 15);
  fill(153, 0, 0);
  rect(hookPos.x, hookPos.y-15,10,15 );
  fill(51,51,51);
  circle(mouseX, mouseY, 10);
  if(casting===1 && dist(hookPos.x, hookPos.y, hookTargetPos.x, hookTargetPos.y) < 10){
    hookVelocity=createVector(0,0);
    casting = 2;

    hookVelocity = p5.Vector.sub(playerPos, hookPos);
    hookVelocity.normalize();
    hookVelocity.mult(6);

  }
  if(casting===2 && dist(hookPos.x, hookPos.y, playerPos.x, playerPos.y) < 10){
    hookVelocity = createVector(0,0);
    casting = 0;
  }
}

function cannonBall(){
  for(let i = 0; i < objects.length; i++){
    if(objects[i].objectHeight===150){
      if(objects[i].x+75===playerPostionX){
        if(objects[i].y<height/2){
          cannonBallObjects.push(new cannonBallNorth(playerPostionX, objects[i].y+225));
        }
        else{
          cannonBallObjects.push(new cannonBallSouth(playerPostionX, objects[i].y-150));
        }
      }
    }
  }
  for (let ball of cannonBallObjects){
    ball.move();
    ball.display();
  }
  for(let i = 0; i < cannonBallObjects.length; i++){
    if(cannonBallObjects[i].num===1){
      if(cannonBallObjects[i].y>=playerPostionY){
        cannonBallObjects.splice(i,1);
        healthCount -= 1;    
      }
    }
    else{
      if(cannonBallObjects[i].y<=playerPostionY){
        cannonBallObjects.splice(i,1);
        healthCount -= 1;    
      }
    }
  }
}

function hookCollisions(){

  for (let i = 0; i < objects.length; i++){
    woodOrBarrelHit = collideRectRect(hookPos.x, hookPos.y, 10, 30, objects[i].x, objects[i].y, objects[i].objectWidth, objects[i].objectHeight);
    plasticHit = collideRectCircle(hookPos.x, hookPos.y, 10, 30, objects[i].x, objects[i].y, objects[i].circleDiameter);
    

    if (woodOrBarrelHit){
      if (objects[i].objectHeight===20){
        objects.splice(i,1);
        woodCount += 1;
        print(woodCount);
      } 
      else if (objects[i].objectHeight===60){
        objects.splice(i,1);
        woodCount += Math.floor(random(3,6));
        plasticCount += Math.floor(random(3,6));
        print(woodCount);
        print(plasticCount);
      }       
    }
    if (plasticHit){
      objects.splice(i,1);
      plasticCount += 1;
      print(plasticCount);
    }
  }
}

class allObjects{
  constructor(x,y){
    this.x = x;
    this.y = y;
  }

  display(){
    strokeWeight(2);
  }
}

class floatingWood extends allObjects{
  constructor(x,y){
    super(x,y);
    this.objectWidth = 40;
    this.objectHeight = 20;
  }
  move(){
    this.x += 3;
  }
  display(){  
    fill(240,230,140);
    rect(this.x, this.y, this.objectWidth, this.objectHeight);
  }
}

class floatingPlastic extends allObjects{
  constructor(x,y){
    super(x,y);
    this.circleDiameter = 20;
  }
  move(){
    this.x += 3;
  }
  display(){
    fill(220,240,239);
    circle(this.x, this.y, this.circleDiameter);
  }
}

class floatingBarrels extends allObjects{
  constructor(x,y){
    super(x,y);
    this.objectWidth = 50;
    this.objectHeight = 60;
  }
  move(){
    this.x += 1;
  }
  display(){
    strokeWeight(1);
    fill(92,64,51);
    rect(this.x, this.y, this.objectWidth, this.objectHeight);
  }
}

class floatingPiratesNorth extends allObjects{
  constructor(x,y){
    super(x,y);
    this.objectWidth = 150;
    this.objectHeight = 150;
  }
  move(){
    this.x += 1;
  }
  display(){
    fill(102, 51, 0);
    rect(this.x, this.y, this.objectWidth, this.objectHeight);
    fill(51, 51, 51);
    rect(this.x+50, this.y+100, 50, 100);
    fill(255, 204, 153);
    circle(this.x+75, this.y+60, 45);
  }
}

class floatingPiratesSouth extends allObjects{
  constructor(x,y){
    super(x,y);
    this.objectWidth = 150;
    this.objectHeight = 150;
  }
  move(){
    this.x += 1;
  }
  display(){
    fill(102, 51, 0);
    rect(this.x, this.y, this.objectWidth, this.objectHeight);
    fill(51, 51, 51);
    rect(this.x+50, this.y-50, 50, 100);
    fill(255, 204, 153);
    circle(this.x+75, this.y+100, 45);
  }
}

class cannonBallNorth extends allObjects{
  constructor(x,y){
    super(x,y);
    this.objectDiameter = 40;
    this.num = 1;
  }
  move(){
    this.y += 4;
  }
  display(){
    fill(100);
    circle(this.x, this.y, this.objectDiameter);
  }
}

class cannonBallSouth extends allObjects{
  constructor(x,y){
    super(x,y);
    this.objectDiameter = 40;
    this.num = 2;
  }
  move(){
    this.y -= 4;
  }
  display(){
    fill(100);
    circle(this.x, this.y, this.objectDiameter);
  }
}

function gameOver(){
  if(healthCount===0){
    textAlign(CENTER, CENTER);
    image(gameOverScreen, 0, 0, width, height);
    fill(255);
    textSize(69);
    text("DAYS SURVIVED:" + dayCount, width/2, height/2+height/4+height/7);
    gameRunning+=1;

  }
}