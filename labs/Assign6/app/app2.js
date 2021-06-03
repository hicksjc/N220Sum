//Create a variable for the HTML Div element
let bookDiv = document.getElementById("bookDiv");
//create the array with at least 3 elements
let books = [
    //each element has a Title, Author, and a number of Pages.
    { title: "The Dragonet Prophecy", author: "Tui T. Sutherland", pages: 336 },
    { title: "The Lord of the Rings", author: "J.R.R. Tolkien", pages: 1137 },
    { title: "Eragon", author: "Christopher Paolini", pages: 544 }
]
//Create a for loop that takes the length of the array and creates a new div for each element.
for (let i = 0; i < books.length; i++) {
    //create a new div element.
    let newEL = document.createElement("div");
    //What does the element say?
    newEL.innerHTML = books[i].title + ", By: " + books[i].author + ", Pages: " + books[i].pages;
    //create a new class for styling purposes.
    newEL.classList.add("pages");
    //append the child
    bookDiv.appendChild(newEL);

    //Create an IF statement that changes the look under a certain condition.
    if (books[i].pages >= 400) {
        newEL.style.backgroundColor = "blue";
    }
}
