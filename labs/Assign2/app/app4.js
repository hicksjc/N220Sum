var x = 40; //position
var y = 40; //position
var size = 50; //size of circle
var velocityX = 5;
var velocityY = 5;
var directionX = 3;
var directionY = 3;

function setup(){
    createCanvas(800,600);
}

function draw(){
    clear();
    fill(0, 255, 0);
    circle(x, y, size);
    //update direction after bouncing off the wall
    directionX = x = x + 3 + velocityX;
    directionY = y = y + 6 + velocityY;
    //reverse the direction of the ball after it bounces off the wall
    if(x < 500 || x > 5){
        directionX *= -1;
    }
    if(y < 500 || y > 5){
        directionY *= -1;
    }

}