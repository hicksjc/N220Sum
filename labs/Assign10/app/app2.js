//get elements.
var btnOne = document.getElementById("btnOne");
var btnTwo = document.getElementById("btnTwo");
var btnThree = document.getElementById("btnThree");
var btnFour = document.getElementById("btnFour");
var btnFive = document.getElementById("btnFive");
var btnSix = document.getElementById("btnSix");
var btnSeven = document.getElementById("btnSeven");
var btnEight = document.getElementById("btnEight");
var btnNine = document.getElementById("btnNine");
//Call the color div, or the object that is going to change color.
var Display = document.getElementById("colorDisplay");
//Determine the RGB values.
var red = 0;
var blue = 0;
var green = 0;

//add event listeners
//Each event listener should be separate because they are separate buttons that do different things.
btnOne.addEventListener("click", increaseColor);
btnTwo.addEventListener("click", increaseColor2);
btnThree.addEventListener("click", increaseColor3);
btnFour.addEventListener("click", increaseColor4);
btnFive.addEventListener("click", increaseColor5);
btnSix.addEventListener("click", increaseColor6);
btnSeven.addEventListener("click", increaseColor7);
btnEight.addEventListener("click", increaseColor8);
btnNine.addEventListener("click", increaseColor9);

//Each event listener is different but adds 1, 5, or 10 to the red, green, and blue values.
function increaseColor(event){
    red = red + 1;
    colorChange();
}
function increaseColor2(event){
    blue = blue + 1;
    colorChange();
}
function increaseColor3(event){
    green = green + 1;
    colorChange();
}
function increaseColor4(event){
    red = red + 5;
    colorChange();
}
function increaseColor5(event){
    blue = blue + 5;
    colorChange();
}
function increaseColor6(event){
    green = green + 5;
    colorChange();
}
function increaseColor7(event){
    red = red + 10;
    colorChange();
}
function increaseColor8(event){
    blue = blue + 10;
    colorChange();
}
function increaseColor9(event){
    green = green + 10;
    colorChange();

}

//This changes the color of the div.
function colorChange(){
    //Write the current color in a div with the rgb value
    document.getElementById('currentColor').textContent = "Current Color: rgb(" + red + "," + green + "," + blue + ")";
    //change the color of the div based on the values determined earlier, as the user presses the buttons these values change and this should update each time if done correctly.
    Display.style.backgroundColor = "rgb(" + red + "," + green + "," + blue + ")";
}