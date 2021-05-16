let s = 40;

function setup() {
  createCanvas(600,400);
  console.log(s);
}

function draw() {
  background(255);
  fill(255,0,0);
  circle(mouseX, mouseY, s);

   if (mouseIsPressed) {
    s = s + 1; 
     console.log(s);
   }
}