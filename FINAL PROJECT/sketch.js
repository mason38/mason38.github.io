
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

let NUM_ROWS = 18;
let NUM_COLS = 32;
let squareSize = 60;
let raft;
let gridColoumn;
let gridRow;
let oneKey = false;
let objects = [];
let woodCount = 0;
let plasticCount = 0;
let playerPostionX;
let playerPostionY;
let hookPos;
let hookTargetPos;
let hookVelocity;
let casting = 0;
let woodHit = false;
let plasticHit = false;
let barrelHit = false;

function preload(){
  raft = loadImage("assets/33770b1f8b51af8.png");
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
}

function draw() {
  gridColoumn = mouseGridX();
  gridRow = mouseGridY();
  // print(gridColoumn, gridRow);
  renderGrid();
  raftSelectGreen();
  //print(frameCount);
  
  hotBar();
  line(playerPostionX,playerPostionY,hookPos.x, hookPos.y);
  playerData();
  hookData();
  hookCollisions();
  print(millis);
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
      strokeWeight(0);
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

function raftSelectGreen(){
  if(oneKey===true){
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
    text("3 wood", 100, 260);
  }
  else if(oneKey===false){
    background("blue");
    // for(let x = 0;  x < NUM_COLS; x++){
    //   for(let y = 0; y < NUM_ROWS; y++){
    //     if (grid[y][x]===0 || grid[y][x]===2){
    //       fill(0,100,255);
    //       rect(x*squareSize, y*squareSize, squareSize, squareSize);
    //     } 
    //   }
    // }
    materialsRender();
    for(let x = 0;  x < NUM_COLS; x++){
      for(let y = 0; y < NUM_ROWS; y++){
        if (grid[y][x]===1){
          image(raft, x*squareSize, y*squareSize, 60,60);
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
  
}

function mouseClicked(){
  if(oneKey===true){
    if(mouseX<140 && mouseX>100 && mouseY<240 && mouseY>200){
      if(woodCount>=3){
        woodCount = woodCount - 3;
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
        if(grid[gridRow][gridColoumn]===0 && (grid[gridRow+1][gridColoumn] ===1|| grid[gridRow-1][gridColoumn] ===1|| grid[gridRow][gridColoumn+1]===1 || grid[gridRow][gridColoumn-1]===1)){
          grid[gridRow][gridColoumn] = 1;
          image(raft, gridColoumn*squareSize, gridRow*squareSize, 60,60);
        }
      }
    }
  }
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

function hotBar(){
  for (let i = 1; i < 11; i++){
    strokeWeight(1);
    fill(255);
    rect((10+i)*60,windowHeight-60,60,60);
  }
}

function hookCollisions(){

  for (let i = 0; i < objects.length; i++){
    woodHit = collideRectRect(hookPos.x, hookPos.y, 10, 30, objects[i].x, objects[i].y, objects[i].objectWidth, objects[i].objectHeight);
    plasticHit = collideRectCircle(hookPos.x, hookPos.y, 10, 30, objects[i].x, objects[i].y, objects[i].circleDiameter);
    barrelHit = collideRectRect(hookPos.x, hookPos.y, 10, 30, objects[i].x, objects[i].y, objects[i].objectWidth, objects[i].objectHeight);

    if (woodHit){
      if (objects[i].objectHeight===20){
        objects.splice(i,1);
        woodCount += 1;
        print(woodCount);
      }      
    }
    if (plasticHit){
      objects.splice(i,1);
      plasticCount += 1;
      print(plasticCount);
    }
    if (barrelHit){
      if (objects[i].objectHeight===60){
        objects.splice(i,1);
        woodCount += Math.floor(random(3,6));
        plasticCount += Math.floor(random(3,6));
        print(woodCount);
        print(plasticCount);
      }     
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
    fill(92,64,51);
    rect(this.x, this.y, this.objectHeight, this.objectWidth);
  }
}

class nonFloatingWood extends allObjects{
  constructor(x,y){
    super(x,y);
  }
  display(){
    fill(240,230,140);
    rect(this.x, this.y, 40, 20);
  }
}

