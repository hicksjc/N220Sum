//Create an application with three grey, square divs, in a row. They should be 200px x 200px, and all floated left.
//Give them a margin of 5px.
//Using only one event handler, write event listeners to respond to a click on each element.

//by using Document.getElementsByClassName we are able to call all elements in the docuent with the specified class name.
var elements = document.getElementsByClassName("color");

//Each element should change to a different color: one red, one green, one blue
//use a data attribute on the elements to store the color to be chenged to.

//We then loop through elements.length because we can determine the number of elements with the specified class name to retrieve the info we want.
for(var i = 0; i < elements.length; i++){
    //In this case were adding an event listener to each div that we click on.
    elements[i].addEventListener("click", changeColor);
}
//Once we click on the div it activates the event listener.
function changeColor(){
    //Earlier we called a .length property, this allows us to look at the amound of divs in a numeric form, much like an array.
    //we then determine from the loop, which div we click on and it assigns the event listener accordingly.
    //In the HTML document we used data-color to determine which color the div's would turn into with each string being different.
    //"this", refers to the div we just clicked on, it then looks through that clicked data-color to determine what it is and assigns it to the background color of the div that we clicked on.
    this.style.backgroundColor = this.getAttribute("data-color");
}