//create variables for each div 
var square1 = document.getElementById("div1");
var square2 = document.getElementById("div2");
var square3 = document.getElementById("div3");

function changeStyle(e1, e2, e3) {
 var e1 = (square1.style.backgroundColor = "blue") && (square1.style.width = "20px");
 var e2 = (square2.style.backgroundColor = "blue") && (square2.style.width = "20px");
 var e3 = (square3.style.backgroundColor = "blue") && (square3.style.with = "20px");
}
function changeDiv1(){
    changeStyle('e1');
}
function changeDiv2(){
    changeStyle('e2');
}
function changeDiv3(){
    changeStyle('e3');
}