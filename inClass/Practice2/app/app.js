function setup(){
    createCanvas(400,400);
}
function draw(){
    //if the mouse is on the lower left corner (if mouseX= 400 && mouseY = 400) draw circle at x y = 0
    background(100);


    circle(width - mouseX, height - mouseY, 30);
   //when mouse is in corner 
    //display circle in opposite corner.
    
    //Center of canvas is 200, 200. How can we get the circle to display opposite to the center itself?
        //so if my mouse is x amount away from the center we need to offset that by subtracking that amount from the circle position

    //the offset between the mouse and circle would increase the more the mouse goes away from the center.

    //when mouseX and mouseY are x amount from center.

        //finding the distance between center and mouse = the distance between circle and center.
        //but the distance between circle and mouse is twice of mouse to center OR circle to center.

//for mouseX 

}