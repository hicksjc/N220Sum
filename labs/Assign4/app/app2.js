//This application should run every ten frames.


var yPos = 10;
//create the array variable
var y = []; // this is going to be the position of the circle over 10 frames.

var x;
var ypos;
var speed = 5;

function setup() {
    createCanvas(600, 600);
    x = width / 2;
    ypos = height / 2;
    //create a for loop that allows us to store the value of y over each frame, starting at zero.
    for (var i = 0; i < 1; i++) {
        y[i] = 0;
    }
}
//Draw a circle at the top center of the screen that moves down 5 pixels per frame over 10 frames.
function draw() {
    background(255);
    y += speed;
    
    //circle(x, 0, 40);
    //over the course of the 10 frames we want the y value to update each time until it reaches the bottom of the screen.
    if (y > height+yPos){
        y = -yPos; 
    }
    
    //set up the circle in the middle of the canvas.
    circle(x, y, 20);
   
    console.log(y);
}
