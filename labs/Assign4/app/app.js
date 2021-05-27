//create an array that has three colors.
var Colors = ["red", "blue", "green"];

function setup(){
    createCanvas(600, 400);
}
function draw(){

    //create a loop that draws a rectangle for each color horizontally.
    //we need to make a loop that looks through the array and can get the colors from them.

    for(i = 0; i < Colors.length; i++){ 
        //the .length is important when targeting an array because it looks at the length of the array, meaning it looks at everything inside of the array
        //When the loop reads the specific colors it outputs that color as a rectangle.

        if(Colors = "red"){
            //fill is the color inside the shape were going to make
            fill(255,0,0);
            //Create a rectangle that is 1/3 of the screen.
            rect(0,0, 200, 133.3);
        }
        if(Colors = "blue"){
            //fill is the color inside the shape were going to make
            fill(0,0,255);
            //Create a rectangle that is 1/3 of the screen.
            rect(200,0, 200, 133.3);
        }
        if(Colors = "green"){
            //fill is the color inside the shape were going to make
            fill(0, 255, 0);
            //Create a rectangle that is 1/3 of the screen.
            rect(400,0,199,133.3);
        }
    }
}