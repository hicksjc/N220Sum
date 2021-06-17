var tictactoe = [
    ["x", "x", "x"],
    ["x", "o", "o"],
    ["x", "o", "o"],
]


var verticalArray = [tictactoe[0][0], tictactoe[1][0], tictactoe[2][0]];

console.log(verticalArray);

var result = tictactoe.filter(
    function isDetected(verticalArray){
        return document.write("x");
    }
    );

console.log(result);