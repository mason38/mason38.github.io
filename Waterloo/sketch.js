// Waterloo 1
// Mason L.
// Nov. 17, 2023
//


let s = Math.floor(random(0,11));
let m = Math.floor(random(0,11));
let l = Math.floor(random(0,11));


function setup() {
  createCanvas(windowWidth, windowHeight);
  isTheDogHappyOrIsTheDogSad(s,m,l);
}

function draw() {
  background(220);
}

function isTheDogHappyOrIsTheDogSad(s,m,l){
  let sum = 0;
  for(let i = 0; i < s; i++){
    sum++;
  }
  for(let i = 0; i < m; i++){
    sum+=2;
  }
  for(let i = 0; i < l; i++){
    sum+=3;
  }
  if(sum>=10){
    print("happy");
  }
  else{
    print("sad");
  }
}