var input = document.getElementById("words");
var foundIt = document.getElementById("foundBadWord");
let badWords = ["clear", "water", "tires"];

function findBadWord(){

    let lookingFor = input.value;

    let total = 0;
    for(var i=0; i < badWords.length; i++){
        if(badWords[i] == lookingFor){ 
            total++;
            var newTotal = total;
            foundIt.innerHTML = "That's a Bad Word, you've found " + newTotal + " Bad Words.";
        } 
        
    }
    console.log(total);
}