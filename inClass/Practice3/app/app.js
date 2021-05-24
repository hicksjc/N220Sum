let h = 50; // X Offset
let kl = 100;//Vertical Shift
let pol = .1; //Angle (Period)
let r = 10; //Scaler 
let j = 5; //Circle Spacing 


function setup() {
createCanvas(400, 400);

fill(255,0,0);



}

//For fun : animate it!
function draw() {
// background(220);
//draws a sine curve
for(let i = 0; i < 50; i++) {
  let zf = Math.sin(i * pol) * r; //zf is the y location
  circle(i * j + h, zf + kl, 20);

}
}