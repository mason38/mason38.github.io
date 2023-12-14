
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

function preload(){
  raft = loadImage("assets/33770b1f8b51af8.png");
}

function setup() {
  createCanvas(squareSize*NUM_COLS, squareSize*NUM_ROWS);
  print(windowHeight);
  print(windowWidth);
}

function draw() {
  gridColoumn = mouseGridX();
  gridRow = mouseGridY();
  print(gridColoumn, gridRow);
  renderGrid();
  raftSelectGreen();
  //print(frameCount);
  if (frameCount % 50 === 0){
    objects.push(new floatingWood(0,random(0, height)));
  }
  for(let o of objects){
    o.move();
    o.display();
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
        fill(0,100,255,100);
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
        fill(0,100,255);
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
        if (grid[y][x]===0){
          fill(0,100,255);
          rect(x*squareSize, y*squareSize, squareSize, squareSize);
        }
      }
    }  
  }
}

function mousePressed(){
  if(oneKey===true){
    if(grid[gridRow][gridColoumn]===0 && ( grid[gridRow+1][gridColoumn] || grid[gridRow-1][gridColoumn] || grid[gridRow][gridColoumn+1] || grid[gridRow][gridColoumn-1]) ===1){
      grid[gridRow][gridColoumn] = 1;
      image(raft, gridColoumn*squareSize, gridRow*squareSize, 60,60);
    }
  }
}

class floatingObjects{
  constructor(x,y){
    this.x = x;
    this.y = y;
    this.s = 1;
    this.speedX = 5;
  }

  move(){
    this.x += 1;
  }

  display(){
    strokeWeight(2);
  }
}

class floatingWood extends floatingObjects{
  constructor(x,y){
    super(x,y);
  }
  display(){
    fill("brown");
    rect(this.x, this.y, 20, 10);
  }
}

