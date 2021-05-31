//create a for loop that puts 100 squarer divs on the page.
for (var i=0; i < 100; i++){
    
    //create an element of a div
    let newEl = document.createElement("div");

    //style each new div
    newEl.style.float = "left";
    newEl.style.height = "20px";
    newEl.style.width = "20px";
    //call the random color function as a background color
    newEl.style.backgroundColor = randomColor();
    //use append child to move the newly created div to a new location so that they don't overlap.
    document.body.appendChild(newEl);
}

//create a function of a random color
function randomColor(){
    //random color for r 
    var r = Math.round( Math.random() * 255);
    //random color for g
    var g = Math.round( Math.random() * 255);
    //random color for b
    var b = Math.round( Math.random() * 255);
    //rgb random color using variables previously defined
    var colorString = "rgb(" + r + "," + g + "," + b + ")";
    //return the variable for each new created element.
    return colorString;
}
