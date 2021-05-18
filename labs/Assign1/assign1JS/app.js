//Create Variables
//Variables can be used within the code to make life easier
var size1 = 20;
var size2 = 40;

//create setup function
//set up is used to create the space that we work in
//it can also be used to execute the code too if we wish to use it for that
function setup(){
    //create the space to work in
    createCanvas(800,600);   
   
    //fill allows to color a shape in.
    fill(235,198,33);
    //square is one of the shapes we can use in p5
    //it can be used with X, Y, and Size.
    square(400, 300, 150);
    fill(181,58,55);
    //Triangle is another shape 
    //It is used with x1,y1,x2,y2,x3,y3.
    triangle(400, 300, 550, 300, 475, 200);
    fill(148, 16, 10);
    //A rectangle is yet another shape 
    //It is used with x, y, w, h.
    rect(405, 350, size2, 60);
    fill(255, 154, 150);
    //Quad much like triangle can be used the same just with an extra x and y
    //x1,y1,x2,y2,x3,y3,x4,y4
    quad(406, 380, 425, 410, 445, 380, 425, 351);
    fill(168,127,210);
    //This rectangle uses round corners
    //x, y, w, h, top-left, top-right,bottom-right, bottom-left
    rect(450, 380, 50, 70, 30, 30, 0, 0);
    fill(0, 0, 0);
    //Circle is the most basic shape.
    //x, y, radius
    circle(490, 420, 5)
    fill(148, 16, 10);
    rect(505, 350, size2, 60);
    fill(255,154,150);
    quad(545, 380, 525, 410, 506, 380, 525, 351);
    
    
  
    fill(173,134,93);
    rect(700, 300, size1, 150);
    fill(170, 134, 93);
    rect(650, 310, 10, 100);
    fill(0, 0, 0);
    circle(656, 430, size1);
    fill(255,255,255)
    circle(656, 430, 10);
    fill(21, 161, 30);
    circle(710, 290, 80);
}
