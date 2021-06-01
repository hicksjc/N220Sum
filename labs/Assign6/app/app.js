let myDog = {
    name: "sadie",
    hunger: 25,
    happiness: 25,
    age: 11,
    color: "brown",

};

console.log(myDog.name);
function feedSadie(){
    myDog.hunger = myDog.hunger + 5;
    console.log(myDog.hunger);
}
function playSadie(){
    myDog.happiness = myDog.happiness + 5;
    
}