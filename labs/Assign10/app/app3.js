//An Application with 3 buttons that ask questions.

//Data-answer attribute.
//instead we use a class so that we can access the buttons as an array.
var button = document.getElementsByClassName("btn");
var answers = document.getElementById("answers");
//Display the answer to the button's question by retrieving data-attribute

//Use a for loop so that each button can be clicked multiple times for each result in data-attribute.
for(var i = 0; i<button.length; i++){
    //by accessing the buttons as an array we are able to determine which button is being clicked, then we run the function.
    button[i].addEventListener("click", showAnswer);
}

//This function should display our answer.
function showAnswer(){
//We was to display the answer through .innerHTML, "this" is targeting the button we clicked.
//Retrieve data-answer from the button clicked and assign it to the div HTML.
answers.innerHTML = this.getAttribute("data-answer");
}
