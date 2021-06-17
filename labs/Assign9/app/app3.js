var create = document.getElementById("createObjects");

let objects = [

    { color: "#FF0000", height: 100, width: 300 },

    { color: "#FFFF00", height: 200, width: 200 },

    { color: "#ff0000", height: 300, width: 100 }
];

//create a function that displays the divs
function display() {
    //Create a for loop that allows to display each div.
    //reference the assignment where you created an element.
    for(var i=0; i < objects.length; i++){
        //create new div.
        let newEl = document.createElement("div");
        //style div based on array.
        newEl.style.height = objects[i].height + "px";
        newEl.style.width = objects[i].width + "px";
        newEl.style.backgroundColor = objects[i].color;
        // newEl.style.backgroundColor = objects[i].color;
        create.appendChild(newEl);
    }

}
