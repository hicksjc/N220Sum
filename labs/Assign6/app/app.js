//Create an animal object with multiple variables inside.
let myDog = {
    name: "sadie",
    hunger: 100,
    happiness: 100,
    age: 11,
    color: "brown",
};
//variables for HTML stuff
var DogName = document.getElementById("DogName");
var DogHunger = document.getElementById("DogHunger");
var DogHappy = document.getElementById("DogHappy");

// var counterIncrement= -1;
//For set interval make sure you don't put a parenthesis after the function
//This is because when you put a parenthesis after you're actually calling the function immediately an not setting it to execute at a specific time.
var counter = setInterval(HungerLoss, 5000);
var counter2 = setInterval(HappinessLoss, 5000);


//writing stuff in HTML
DogName.innerHTML = "Name: " + myDog.name;
DogHunger.innerHTML = "Hunger: " + myDog.hunger;
DogHappy.innerHTML = "Happiness: " + myDog.happiness;

//Create something where when hunger is at 100 the value slowly decreases until it reaches 0.
//I want to create something that over time decreases the value of hunger and happpiness until it reaches 0.
//I'm going to have to set a timer of some sort that activates after a few seconds have passed without pressing the button.

//This function executes with the set interval function declared earlier
function HungerLoss() {

    //Subtract by one as long as hunger is above 0. Make sure you're setting myDog.hunger = a condition (+/-) a value. Else it won't work
    myDog.hunger = myDog.hunger - 4;

    if (myDog.hunger == 0) {
        alert("Your dog has died!!");
        clearInterval(counter);
        clearInterval(counter2);
        window.location.reload();
    }

    DogHunger.innerHTML = "Hunger: " + myDog.hunger;
}

function HappinessLoss() {
    //subtract happiness by five as long as hunger is above 0 
    myDog.happiness = myDog.happiness - 7;

    if (myDog.happiness == 0) {
        alert("Your dog died of boredom!");
        clearInterval(counter);
        clearInterval(counter2);
        window.location.reload();
    }
    DogHappy.innerHTML = "Happiness: " + myDog.happiness;
}

DogHunger.innerHTML = "Hunger: " + myDog.hunger;
//Create a function that increases the value of hunger every time the button is clicked
function feedSadie() {
    //Increase hunger by incriment of 5 when the function executes
        myDog.hunger = myDog.hunger + 5;

    //error handling 
    if (myDog.hunger > 100) {
        alert("Your dog was overfed and died!");
        clearInterval(counter);
        clearInterval(counter2);
        window.location.reload();
    }
    //display the updated information.
    DogHunger.innerHTML = "Hunger: " + myDog.hunger;

}
//Create a function that increases the value of happiness every time the button is clicked
function playSadie() {
    //Increase happiness by incriment of 5 when the function executes.
        myDog.happiness = myDog.happiness + 5;

    if (myDog.happiness > 100) {
        alert("Your dog was too happy and died of a heart attack!");
        clearInterval(counter2);
        clearInterval(counter);
        window.location.reload();
    }
    //display the updated information.
    DogHappy.innerHTML = "Happiness: " + myDog.happiness;
}