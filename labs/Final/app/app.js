//Create a tic tac toe game.

var elements = document.getElementsByClassName("cell");

var winner = document.getElementById("winner");
//each element should change between two colors depending on the turn of the player.
let turn = 1;
//For this turn=1 will be red and turn=2 will be blue.
//Create a loop that loops through elements and allows each cell to be clicked.

// var winningConditions = [
//     ["0","1","2"],
//     ["3","4","5"],
//     ["6","7","8"],
//     /*["0","4","8"]*/,
//     ["2","4","6"],
//     /*["0","3","6"]*/,
//     ["1","4","7"],
//     ["2","5", "8"]];

for (var i = 0; i < elements.length; i++) {
    elements[i].addEventListener("click", playTurn);
}
//Create a function that allows a player to play a turn.
function playTurn() {
    //this function should recognize whos turn it is and change the square based on the color.

    if (turn == 1) {

        this.style.backgroundColor = "#71a455";
        //console.log(this);
        //if the win conditions of tic tac toe equal the same color and the turn is still equal to one display a you win.
        if ((elements[0].style.backgroundColor == "rgb(113, 164, 85)" && elements[1].style.backgroundColor == "rgb(113, 164, 85)" && elements[2].style.backgroundColor == "rgb(113, 164, 85)") ||
            (elements[3].style.backgroundColor == "rgb(113, 164, 85)" && elements[4].style.backgroundColor == "rgb(113, 164, 85)" && elements[5].style.backgroundColor == "rgb(113, 164, 85)") ||
            (elements[6].style.backgroundColor == "rgb(113, 164, 85)" && elements[7].style.backgroundColor == "rgb(113, 164, 85)" && elements[8].style.backgroundColor == "rgb(113, 164, 85)") ||
            (elements[0].style.backgroundColor == "rgb(113, 164, 85)" && elements[3].style.backgroundColor == "rgb(113, 164, 85)" && elements[6].style.backgroundColor == "rgb(113, 164, 85)") ||
            (elements[1].style.backgroundColor == "rgb(113, 164, 85)" && elements[4].style.backgroundColor == "rgb(113, 164, 85)" && elements[7].style.backgroundColor == "rgb(113, 164, 85)") ||
            (elements[2].style.backgroundColor == "rgb(113, 164, 85)" && elements[5].style.backgroundColor == "rgb(113, 164, 85)" && elements[8].style.backgroundColor == "rgb(113, 164, 85)") ||
            (elements[0].style.backgroundColor == "rgb(113, 164, 85)" && elements[4].style.backgroundColor == "rgb(113, 164, 85)" && elements[8].style.backgroundColor == "rgb(113, 164, 85)") ||
            (elements[2].style.backgroundColor == "rgb(113, 164, 85)" && elements[4].style.backgroundColor == "rgb(113, 164, 85)" && elements[6].style.backgroundColor == "rgb(113, 164, 85)")
        ) {
            winner.innerHTML = "You Win!";
        }

        turn++;
    } else if (turn == 2) {
        this.style.backgroundColor = "#97bcce";
        if ((elements[0].style.backgroundColor == "rgb(151, 188, 206)" && elements[1].style.backgroundColor == "rgb(151, 188, 206)" && elements[2].style.backgroundColor == "rgb(151, 188, 206)") ||
            (elements[3].style.backgroundColor == "rgb(151, 188, 206)" && elements[4].style.backgroundColor == "rgb(151, 188, 206)" && elements[5].style.backgroundColor == "rgb(151, 188, 206)") ||
            (elements[6].style.backgroundColor == "rgb(151, 188, 206)" && elements[7].style.backgroundColor == "rgb(151, 188, 206)" && elements[8].style.backgroundColor == "rgb(151, 188, 206)") ||
            (elements[0].style.backgroundColor == "rgb(151, 188, 206)" && elements[3].style.backgroundColor == "rgb(151, 188, 206)" && elements[6].style.backgroundColor == "rgb(151, 188, 206)") ||
            (elements[1].style.backgroundColor == "rgb(151, 188, 206)" && elements[4].style.backgroundColor == "rgb(151, 188, 206)" && elements[7].style.backgroundColor == "rgb(151, 188, 206)") ||
            (elements[2].style.backgroundColor == "rgb(151, 188, 206)" && elements[5].style.backgroundColor == "rgb(151, 188, 206)" && elements[8].style.backgroundColor == "rgb(151, 188, 206)") ||
            (elements[0].style.backgroundColor == "rgb(151, 188, 206)" && elements[4].style.backgroundColor == "rgb(151, 188, 206)" && elements[8].style.backgroundColor == "rgb(151, 188, 206)") ||
            (elements[2].style.backgroundColor == "rgb(151, 188, 206)" && elements[4].style.backgroundColor == "rgb(151, 188, 206)" && elements[6].style.backgroundColor == "rgb(151, 188, 206)")
        ) {
            winner.innerHTML = "You Win!";
        }
        turn--;

        //console.log(this.style.backgroundColor);
    }
    this.removeEventListener("click", playTurn);

    //checkWinners(this.style.backgroundColor);

    //if a cell already has its background color changed, clicking it won't do anything else.
    // console.log(i);
    //I want this to be when a specific color matches in three boxes (winningConditions) it tells the player that they've one
    //|| elements[3 && 4 && 5].style.backgroundColor || elements[6 && 7 && 8].style.backgroundColor || element[0 && 4 && 8].style.backgroundColor || elements[2 && 4 && 6].style.backgroundColor
    // if (winningConditions[0].style.backgroundColor === "rgb(113, 164, 85)") {
    //     console.log("Deactivating");
    //     alert("you win!");

    // } 



    //else if ((elements[i].style.backgroundColor == "rgb(151, 188, 206)") == winningConditions){
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
function reset(){
    location.reload();
}
// function checkWinners(marksArray){

//     //for loop to get the first array from winning conditions.
//     for (let i=0; i<winningConditions.length; i++){
//         //set up a variable to cound the number of wings
//         var numWins = 0;
//         //for loop to go over each value in each array.
//         for (var p=0; p<winningConditions.length; p++){
//             //if statement to match number in winning conditions array to number in marksArray
//             //uses .indexOf to return the position of the first occurrence of a specified value in a string.
//             //the specified value being the strings in the array winningConditions.
//             //The method returns -1 if the search value never occurs, so we set it to != -1 because we want to execute what's occurring
//             if(marksArray.indexOf(winningConditions[i][p]) != -1){
//                 numWins = numWins + 1;
//                 console.log(numWins);
//             }
//         }
//         //when numWins hits 3, that means some combo of moves has matched to a complete array in winningConditions.
//         if (numWins === 3){
//             alert("You Win");
//         }
//     }
// }