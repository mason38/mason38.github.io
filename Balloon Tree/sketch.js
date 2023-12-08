// Balloon Tree
// Mason L.
// Dec. 4, 2023
//



let scale = 15;
let depth = 6;

function setup() {
  createCanvas(500, 500);
  background(255);
  
}

function draw() {
  background(255);
  //randomSeed(50);
  drawTree(width/2, height*.9, 90, depth);
}

function drawLine( x1,  y1,  x2,  y2,  depth) {
  //draw a line segment connecting (x1,y1) to (x2,y2)
  strokeWeight(depth*1.25);
  line(x1, y1, x2, y2);
}

function drawTree(x1, y1, angle, depth) {
  if (depth > 0) {
    let x2 = x1 + (cos(radians(angle))*depth*scale);     //calculate endpoints of current branch
    let y2 = y1 - (sin(radians(angle))*depth*scale);     //using trig ratios. Get shorter based on depth
    
    drawLine(x1, y1, x2, y2, depth);
    if (depth < 5) drawLeaf(x2, y2, depth);
    
    //for a 2-branch tree:
    let offset = map(mouseX, 0 , width, 0, 30); // for each branch of the tree
    drawTree(x2, y2, angle - offset, depth-1);
    drawTree(x2, y2, angle + offset, depth-1);
    drawTree(x2, y2, angle, depth-1);
  }
}

function drawLeaf(x2, y2, depth){ // draws the leaves as circles, random fill colour and size
  strokeWeight(1);
  fill(random(0,255), random(0,255), random(0,255));
  let numb = random(3,20);
  circle(x2, y2, depth*numb);
}
function keyTyped(){ // increases and decreases depth 
  if( key === "x"){
    depth++;
  }
  if(key === "z"){
    depth--;
  }
}