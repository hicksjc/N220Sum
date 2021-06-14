//create HTML Variables.
var input = document.getElementById("number");
var displaySum = document.getElementById("total");
var displayAverage = document.getElementById("average");

function submit(){
    //Create a variable for the user input 
    let number = input.value;
    //by splitting the user input were able to assign what's entered into an array.
    let splitNumber = number.split(",");

    
    //reduce array
    //create a variable for the sum
    let sum = 0;
    //Create a for loop to calculate the user input
    for(var i = 0; i < splitNumber.length; i++){
        //calculate the sum by adding each number retrieved by the array.
        //because the array normally stores stringed variables we must put Number() in front of it.
       sum += Number(splitNumber[i]);
    }
    //Lastly we calculate the average by dividing the sum by the array.
    var avg = sum/splitNumber.length;

    //Display the sum
    displaySum.innerHTML = sum;
    //Display the average
    displayAverage.innerHTML = avg;

    // console.log(sum);
    // console.log(avg);

}