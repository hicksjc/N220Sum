var changeDisplay = ['home', 'about', 'art'];
//variable for div element.
var display = document.getElementById("display");
//variable for current display
var curentDisplay = 0;
display.innerHTML = changeDisplay[0];

//create a function that displays home when home is clicked
function Home(){
    //user innerHTML to display the right thing in the array
    display.innerHTML = changeDisplay[0];
}
//create a function that displays about when about is clicked.
function About(){
    //user innerHTML to display the right thing in the array
    display.innerHTML = changeDisplay[1];
}
//create a function that displays art when art is clicked
function Art(){
    //user innerHTML to display the right thing in the array
    display.innerHTML = changeDisplay[2];
}