//Create variables for the div and button.
var input = document.getElementById("words");
var foundIt = document.getElementById("foundBadWord");
//Create an array of bad words.
let badWords = ["clear", "water", "tires"];

//Fixed an issue where the total count for bad words found didn't increase.
//The problem was I assigned total=0 inside the button function which reset it back to 0 each time
var total = 0;
function findBadWord(){

    //set a value for the user input
    let lookingFor = input.value;

    let wordsplit = lookingFor.split(" ");
    

    //Create a for loop that's the length of the array of badwords.
    for(var i=0; i < wordsplit.length; i++){
        for(let x=0;x<badWords.length; x++){
        //If a bad word is found through user input...
        if(wordsplit[i] == badWords[x]){ 
            //increase the total by one
            total++;
            //display a message that increases by the total amount of times a bad word is found.
            foundIt.innerHTML = "That's a Bad Word, you've found " + total + " Bad Words.";
        } 
    }
          
    }
}