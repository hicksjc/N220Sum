//Create a tic tac toe game.

var elements = document.getElementsByClassName("cell");

var winningConditions = [
    [elements[0],elements[1],elements[2]],
    [elements[3],elements[4],elements[5]],
    [elements[6],elements[7],elements[8]],
    [elements[0],elements[4],elements[8]],
    [elements[2],elements[4],elements[6]]
]
//each element should change between two colors depending on the turn of the player.
let turn = 1;
//For this turn=1 will be red and turn=2 will be blue.
//Create a loop that loops through elements and allows each cell to be clicked.

for (var i = 0; i < elements.length; i++) {
    elements[i].addEventListener("click", playTurn);
}
//Create a function that allows a player to play a turn.
function playTurn(event) {
    //this function should recognize whos turn it is and change the square based on the color.

    if (turn == 1) {
        turn++;
        this.style.backgroundColor = "#71a455";
        console.log(this);
    } else {
        turn--;
        this.style.backgroundColor = "#97bcce";
        //console.log(this.style.backgroundColor);
    }
    this.removeEventListener("click", playTurn);
    //if a cell already has its background color changed, clicking it won't do anything else.
    console.log(i);
    //I want this to be when a specific color matches in three boxes (winningConditions) it tells the player that they've one
    //|| elements[3 && 4 && 5].style.backgroundColor || elements[6 && 7 && 8].style.backgroundColor || element[0 && 4 && 8].style.backgroundColor || elements[2 && 4 && 6].style.backgroundColor
    if (winningConditions[0].style.backgroundColor === "rgb(113, 164, 85)") {
        console.log("Deactivating");
        alert("you win!");

    } //else if ((elements[i].style.backgroundColor == "rgb(151, 188, 206)") == winningConditions){
    //     console.log("Deactivating");

    // }
    // for (var i = 0; i < elements.length; i++) {
    //     if (elements[0,1,2].style.backgroundColor == "rgb(113, 164, 85)") {
    //         console.log("Deactivating");
    //         alert("you win!");

    //     } else if ((elements[i].style.backgroundColor == "rgb(151, 188, 206)") == winningConditions){
    //         console.log("Deactivating");

    //     }
    // }
    // if (elements[i].style.backgroundColor = "#71a455"){
    //     elements[i].removeEventListener("click", playTurn);
    // }
}