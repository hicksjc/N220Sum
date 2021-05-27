let oos = [ 15, 22, 10, 5 ]; //oos are the sizes that each circle could be 
let ahs = [ "#ed1a80", "#000000", "#ed1a80", "#fcba03" ] //aahs are the colors that each circle could be.

function setup() {
  createCanvas(400, 400);

}

function draw() {

  background(50);
  translate(200,200);
  
  if (mouseIsPressed) {
    oos.push(Math.random() * 25); //this increases the probability of larger circles.
    //The code below increases or decreases the probability of a specific color appearing.
    if(Math.random() < .4 ) {
      ahs.push("#fcba03");
    } else {
      ahs.push("#ed1a80");
    }
    //I want to make different colors appear 
    if (Math.random() < .5) { //Probability of a specific color appearing 
        //if the probability is less than .5 make this color.
        ahs.push("#800080");
    } else {
        //is the probability is anything else make this color.
        ahs.push("#000000");
    }
  }
  
  for( let i = 0; i < oos.length; i++) {
    fill(ahs[i]);
    circle(sin(i) * 40, cos(i)* 40, oos[i]); //This changes the width and height of the circle that the animation is inside of.
  }
  
}

 