//create a variable of the div element 
var El = document.getElementById("bruh_2");

//set a initial background color of blue to the div
El.style.backgroundColor = "#0000FF";
//style the width of the div
El.style.width = "100px";
//style the height of the div
El.style.height = "100px";
//create a function that changes the color of the div to black
function blackColor(){
    //change color of div to black
    El.style.backgroundColor = "#000000";
}
//create a function that changes the color of the div to blue
function blueColor(){
    //change the color of the div to blue
    El.style.backgroundColor = "#0000FF";
}