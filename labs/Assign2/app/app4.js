var x = 40; //position
var y = 40; //position
var size = 50; //size of circle
var velocityX = 1; //the initial speed in the x direction
var velocityY = 1;
var directionX = 3; //the current direction of x
var directionY = 3; //the current direcition of y

function setup(){
    createCanvas(800,600);
}

function draw(){
    clear();
    fill(0, 255, 0);
    circle(x, y, size);
    //update direction after bouncing off the wall
    x = x + directionX 
    y = y + directionY;
    //reverse the direction of the ball after it bounces off the wall
    // console.log(x);
    console.log(y);
    if(x == 500 || x < 5){
        console.log("bounce");
        directionX *= -1;
    }
    if(y >= 500 || y < 5){
        console.log("bounce");
        directionY *= -1;
    }
    console.log(directionY);

}