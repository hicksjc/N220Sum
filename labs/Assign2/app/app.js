//set the initial size of the circle
let circleSize = 30;
var x;
var offset = 10;

//create set up function
function setup(){
    //create the canvas space to work in
    createCanvas(400, 300);
    x = width/2;
}
//set up the animation function
function draw(){
    //Color the circle red initially just to test
    // red = color('rgb(255,0,0)');
    // blue = color('rgb(0,0,255)');
    //the Circle must move with the mouse!
    background(255); //background clears the entire canvas (be sure to use this before any other function inside of this one)

    //line is a placement
    //line(x,0,x, height);
    if (mouseX > x){
        fill(255,0,0);
    }
    if (mouseX < x){
        fill(0,0,255);
    }
    circle(mouseX,mouseY,circleSize);

    //make line go specific way according to where the cursor is.
    // if (mouseX > x){
    //     x += 0.5;
    //     offset = -10;
    // }
    // if (mouseX < x){
    //     x-= 0.5;
    //     offset = 10;
    // }

    //Remember, the line has the value of x set to it 
    //what we are doing is saying that if the curser is > x, aka the cursor is on the right side, it's going to move the line to the right
    //it does this because we set x as the value for line, so the placement of the line is increasing.

    //what we need to do is if mouseX > x: change the color of the circle.
    //if mouseX < X: Change the color of the circle 
}