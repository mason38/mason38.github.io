
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
  else if(oneKey===false){
    for(let x = 0;  x < NUM_COLS; x++){
      for(let y = 0; y < NUM_ROWS; y++){
        if (grid[y][x]===0 || grid[y][x]===2){
          fill(0,100,255);
          rect(x*squareSize, y*squareSize, squareSize, squareSize);
        } 
      }
    }
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
  if(oneKey===true){
    if(grid[gridRow][gridColoumn]===0 && (grid[gridRow+1][gridColoumn] ===1|| grid[gridRow-1][gridColoumn] ===1|| grid[gridRow][gridColoumn+1]===1 || grid[gridRow][gridColoumn-1]===1)){
      grid[gridRow][gridColoumn] = 1;
      image(raft, gridColoumn*squareSize, gridRow*squareSize, 60,60);
    }
  }
  if(casting===0){
    hookTargetPos.x = mouseX;
    hookTargetPos.y = mouseY;
    hookVelocity = p5.Vector.sub(hookTargetPos, hookPos);
    hookVelocity.normalize();
    hookVelocity.mult(6);
    casting = 1;
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
    let floatingWoodPosition = createVector(objects[i].x, objects[i].y);
    let floatingWoodSize = createVector(objects[i].floatingWoodWidth, objects[i].floatingWoodHeight);
    let hookDimensions = createVector(10, 30);
    let hit = (hookPos, hookDimensions, floatingWoodPosition, floatingWoodSize);
    print(hit);
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
  }
  move(){
    this.x += 3;
  }
  display(){
    let floatingWoodWidth = 40;
    let floatingWoodHeight = 20;
    fill(240,230,140);
    rect(this.x, this.y, floatingWoodWidth, floatingWoodHeight);
  }
}

class floatingPlastic extends allObjects{
  constructor(x,y){
    super(x,y);
  }
  move(){
    this.x += 3;
  }
  display(){
    fill(220,240,239);
    circle(this.x, this.y, 20);
  }
}

class floatingBarrels extends allObjects{
  constructor(x,y){
    super(x,y);
  }
  move(){
    this.x += 1;
  }
  display(){
    fill(92,64,51);
    rect(this.x, this.y, 50, 60);
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

