let row_num = 3; //this specified the number of rows

function setup(){
    createCanvas(800,600);
}
function draw(){
    fill(255,0,0);

    //for each row 

    //for each row, insert the specified number row_num
    for (let row = 0; row <= row_num; row++){

        //for each column in the row. Increase the number of square by one.
        for (let column = 0; column <= row; column++){
            //insert a square 
            square(column * 50, row * 50, 50);
        }
    }
}