//Create an animal object with multiple variables inside.
let myDog = {
    name: "sadie",
    hunger: 100,
    happiness: 25,
    age: 11,
    color: "brown",
};
var counterIncrement= -1;
var counter = setInterval(HungerLoss(), 1000);
//variables for HTML stuff
var DogName = document.getElementById("DogName");
var DogHunger = document.getElementById("DogHunger");
var DogHappy = document.getElementById("DogHappy");

//writing stuff in HTML
DogName.innerHTML = "Name: " + myDog.name;
DogHunger.innerHTML = "Hunger: " + myDog.hunger;
DogHappy.innerHTML = "Happiness: " + myDog.happiness;

//Create something where when hunger is at 100 the value slowly decreases until it reaches 0.
//I want to create something that over time decreases the value of hunger and happpiness until it reaches 0.
//I'm going to have to set a timer of some sort that activates after a few seconds have passed without pressing the button.

//This function executes with the set interval function declared earlier
function HungerLoss() {

//Subtract by one as long as hunger is above 0
do {
    myDog.hunger - 1;
} while (myDog.hunger != 0);

if (myDog.hunger == 0){
    alert("Your dog has died!!");
}

DogHunger.innerHTML = "Hunger: " + myDog.hunger;
// console.log(myDog.hunger);
}

DogHunger.innerHTML = "Hunger: " + myDog.hunger;
//Create a function that increases the value of hunger every time the button is clicked
function feedSadie(){
    //Increase hunger by incriment of 5 when the function executes
    myDog.hunger = myDog.hunger + 5;
    //display the updated information.
    DogHunger.innerHTML = "Hunger: " + myDog.hunger;

}
//Create a function that increases the value of happiness every time the button is clicked
function playSadie(){
    //Increase happiness by incriment of 5 when the function executes.
    myDog.happiness = myDog.happiness + 5;DogHunger.innerHTML = "Hunger: " + (myDog.hunger - 1);
    //display the updated information.
    DogHappy.innerHTML = "Happiness: " + myDog.happiness;
}