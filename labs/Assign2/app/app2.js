var radius = 40;
var x = -radius; //this is going to be the position, the position is -40, the shape will start outside of the canvas.
var speed = 0.5;



function setup(){
    createCanvas(800,600);
    ellipseMode(RADIUS);
}
function draw(){
    //background(255);
    x += speed; //increases the speed. x increases to the variable of speed.
    fill(0,195,201);  
    //we want the circle to move back to the previous x position 
    if (x > width+radius){ //if the circle passes the boundaries of the canvas
        //move back immediately to the left edge
        x = -radius;
    }
    //X in the case of this shape is the position, 
    arc(x, 60, radius, radius, 0, 7); //The position and shape of the object, x tells the object to continuously update position x because x is equal to speed.
    console.log(x);
}