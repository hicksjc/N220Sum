let xPositions = []; //Create an array to use for the x position.
let yPositions = []; //Create an array to use for the y position.

function setup(){
    //set up the canvas useing createCanvas(x, y)
    createCanvas(600,300);
    //this determines the color of the shape.
    fill(255,12,129);
}
function draw(){
    //background allows us to manipulate the color of the background and remove anything else we may not want.
    background(0);
    //if the length of the array is greater than 10 were going to call a shift function
    if(xPositions.length > 10){
        //what a shift function does is it takes the first element from an array and returnes that removed element//
        xPositions.shift();
    }
    //we do the same for y, this is creating and limiting the length of our trail for our snake in both the x and y direction.
    if (yPositions.length > 10){
        //call another shift function.
        yPositions.shift();
    }
    //the push function adds new items to the array and returns the new length.
    xPositions.push(mouseX);
    yPositions.push(mouseY);

    //Note: Because the push function is adding length, we needed if statements to remove the extra length and limit it to 10.
    //The push function basically updates the position, and the shift function makes sure the length stays at 10.

    //Now we create a for loop that loops the length of the arrays in both the x and y direction.
    //This should be similar to the nested for loop examples done before.
    
    //We want to display the length of the arrays wherever the mouse is located in the x position.
    //every time the mouse moves the value of i increases
    //I is set as less than xPosition because xPosition can not be greater than 10 even though we call it in the if statement, it isn't what we as programmers want.
    for(var i = 0; i < xPositions.length; i++){
        //Here we do the same thing but in the y direction.
        for (var i=0; i < yPositions.length; i++){
            //and Finally we give our shape the x and y values of our arrays and just any random radius.
            circle(xPositions[i], yPositions[i], 10);
            
        }
    }
}