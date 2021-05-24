//use loop to draw 25 black circles to the screen, oriented horizontally

function setup(){
    createCanvas(800,600);    
}
function draw(){
    //use a loop to draw 25 black circles to the screen oriented horizontally.

    //
    for (let i=1; i<26; i++){
        fill(0,0,0);
        circle(i*30, 150, 10);
        //if divisible by 3, draw a purple circle
        if (i % 3 == 0){ //a percent sign is a way of telling the computer to use a multiple. 
            //it returns the remainder left over when one operand is divided by a second operand.
            fill(255,0,255);
            circle(i*30, 150, 10);
        }
        //if divisible by 5, draw a green square 
        if (i % 5 == 0){
            fill(0,255,0);
            square(i*30, 137, 25);
        }
        //if divisible by 3 AND 5, draw a blue square
         if (i % 3 == 0 && i % 5 == 0){
            fill(0,0,255);
            square(i*27, 137, 25);
        }
    }
    
}