//retrieve the user input
let txtname = document.getElementById("name");

//greet the user after they type their name and click submit
function greet() {
    //greet the user by taking the value of their inputted thing.
    // the txtname.value refers to the value entered in the textbox in HTML. txtname was the value given to the textbox earlier.
    console.log("Hello, " + txtname.value);
}