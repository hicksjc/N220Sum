var dvSize = document.getElementById("IncreaseSize");

var Width = 100; //set value of initial Width
var Height = 100; //set value of initial Height

dvSize.style.backgroundColor = "#00FF00";
dvSize.style.width = Width + "px"; //set initial Width
dvSize.style.height = Height + "px"; //set initial Height


function Size() {
    //when the function executes it's going to increase the width and height by 10% or 1.1

    dvSize.style.width = (Width * 1.1) + "px";
    dvSize.style.height = (Height * 1.1) + "px";
    
    //Store the previous calculation into the variables declared above
    //What this does is allows the function to keep executing because it stores the current values after it's clicked.
    Width = (Width * 1.1);
    Height = (Height * 1.1);

    //This works now I need to do it with each click
}


