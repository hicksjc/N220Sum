//Create a function with an input e1 will serve as a variable within this.
function changeStyle(e1) {
    //create a variable with a document element of e1, this allows us to manipulate multiple individually with each call.
var el = document.getElementById(e1);
//style the variables
el.style.backgroundColor = "blue";
el.style.width = "20px";
}
//Create three funcitons that serve as onclick functions
function changeDiv1(){
    //by putting "div1" in the changeStyle() we are assigning the id of div1 to the variable of e1 then using it in the document.getElementById
    changeStyle("div1");
}
function changeDiv2(){
    changeStyle("div2");
}
function changeDiv3(){
    changeStyle('div3');
}