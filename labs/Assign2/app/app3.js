var circleSize = 1;
var x;
var y;

function setup(){
    createCanvas(600,400);
    //find the halfway point of the canvas in the x direction;
    x = width/2;
    //find the halfway point of the canvas in the y direction;
    y = height/2;
}
//set up the animate function
function draw(){
    background(255); //keeps previous circles from showing
    //set up the circle in the middle of the canvas
    circle(x, y, circleSize);
    //increase the circle's size
    circleSize = circleSize + 1;
    //if the circle size is above 200
    if (circleSize >= 200){
        //change the circle size back to 1
        circleSize = 1;
    }


}