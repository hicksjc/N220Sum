function setup(){
    createCanvas(400,400);
}
function draw(){
    background(200);
    noFill();

    //for loop that determines the number of circles there are.
    //As long as i is less than 40 it will keep adding circles until there are a total of 40 circles.
    for(var i = 0; i < 40; i++){
        //Add the circle
        //x, y, Size
        //The size increases by 6 times the number of i because each circle needs to be spaced evenly apart.
        circle(200, 200, i * 6);
    }
}
