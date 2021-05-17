var radius = 40;
var x = -radius;
var speed = 0.5;

function setup(){
    createCanvas(800,600);
    ellipseMode(RADIUS);
}
function draw(){
    background(255);
    x += speed; //increases the speed.
    fill(0,195,201);  
    if (x > width+radius){ //if the position is greater than the canvas
        //move to the left edge
        x = -radius;
    }
    arc(x, 60, radius, radius, 0, 7); //The position and shape of the object, x tells the object to continuously update position x.
}