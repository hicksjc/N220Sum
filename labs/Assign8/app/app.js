//retrieve the user input by calling the get element by id
var numberInput = document.getElementById("number");

//retrieve the display 
var Display = document.getElementById("display");

//use the isDivide function to determine if what the user entered is divisible by 7
function isDivide() {
    //use an if statement with a %, the % checks for divisible numbers while setting it == 0 takes out any remainders.
    if (numberInput.value % 7 == 0){
        Display.innerHTML = "This number is divisible by 7";
        return true;
    } else {
        Display.innerHTML = "This number is not divisible by 7";
        return false;
    }
}