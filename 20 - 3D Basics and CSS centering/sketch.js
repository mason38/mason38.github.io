// 3D Basics and CSS centering
// Mason L.
// nov. 23
// Building w/ 3D primitives + centering canvas

let angle = 5;

function setup() {
  createCanvas(400, 400, WEBGL);
  angleMode(DEGREES);
} // WEBGL has 0,0 at the center

function draw() {
  background(0);
  rotateY(frameCount);
  angle = map(mouseX, 0 , width, -120,120);
  for(let i = 0; i < 360; i+=45){
    push();
    rotateY(i);
    boxes(30);
    pop();
  }

}

function boxes(size){
  if(size > 3){
    rotateZ(angle);
    translate(size*1.5, 0);
    box(size);

    boxes(size*0.8);
  }
}