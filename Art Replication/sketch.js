// Art Replication
// Mason L.
// Oct. 26, 2023
//



function setup() {
  createCanvas(windowWidth, windowHeight);
  drawLines();
}




function drawLines(){
  let i;
  let x = random(0, windowWidth); // the variables for each point of the line
  let y = random(0, windowHeight);
  let newX = 0;
  let newY = 0;
  for(i = 0; i < 100; i++){ // repeat 100 times, alternate changing newX, newY
    if(i%2===0){ // if the i is an even number change newX to random
      newX = random(0, windowWidth);
    }
    else{ // if i is odd change newY to random
      newY = random(0, windowHeight);
    }
    strokeWeight(2);
    if(i === 0){ // creates a dot for the first line
      line(newX, newY, newX, newY);
    }
    else{ // after creating the dot, draw the lines
      line(x,y,newX,newY);
    }
    x = newX; // the end of the firs line will now be the start of the second line
    y = newY;
  }
}