
function setup(){
    createCanvas(400,400);
}
function draw(){
    background(200);
    noFill();

    //for loop
    for(var i = 0; i < 40; i++){
        circle(200, 200, i * 6);
    }
}
