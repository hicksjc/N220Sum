let statement = ["hi", "bye", "hello world"];
var randIndex = Math.floor(Math.random() * statement.length);
var randEntry = statement[randIndex];

function fortune(){

    let statements = statement[Math.floor(Math.random()*statement.length)];
    //dvresponse.innerHTML = statements;
    //display one response at random
    document.getElementById("response").innerHTML = statements;
}