//create an array that has three colors.
var Colors = ["red", "blue", "green"];

function setup(){
    createCanvas(800, 600);
}
function draw(){

    //create a loop that draws a rectangle for each color horizontally.
    //we need to make a loop that looks through the array and can get the colors from them.

    for(i = 0; i < Colors.length; i++){ 
        //the .length is important when targeting an array because it looks at the length of the array, meaning it looks at everything inside of the array
        
        
        for(var i = 0; i < Colors.length; i++){
            //When the loop reads the specific colors it outputs that color as a rectangle.
            fill(Colors[i]);
            rect(200 * i, 100, 199, 100);
        }
    }
}