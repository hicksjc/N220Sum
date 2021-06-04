var circs = [ 100, 100, 20, 300, 200, 20];

var circleSize = 20;
function setup(){
    createCanvas(1000,8000);
    //store X and Y cursor location into array, start new circle with size of 20.
    //for loop that executes every 30 frames
    for(var i = 5; i < 1; i++){
      //adds a new circle to the array based on mouseX and Y location.
        circs.push = new circle(mouseX, mouseY, 20);
        
    }
    console.log(circs);
    // console.log(circs[i]);
}

function draw(){
    // circle(circs[0,1,2]);
    // circle(300,200,20);
    //create for loop to draw circles from array, update every 30 frames 
     for(var i = 0; i < 30; ) {   
        circle(circs[0], circs[1],circs[2] += .1) ;
        circle(circs[i], circs[i], circs[5] += .1);
        //increase the circle size by .1 every time
        circs[3] = circs[3] * .1;
        //draw the new circle stored in the array.
    
        
    }
}
