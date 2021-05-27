let row_num = 3; //this specified the number of rows

function setup(){
    createCanvas(800,600);
}
function draw(){
    fill(255,0,0);

    //create a pyramid of squares

    //for each row, insert the specified number row_num
    
    //We want to display a pyramid with each row increasing it's square by 1. (Or each row has an additional column)
    for (let row = 0; row <= row_num; row++){ 
    //we are letting row equal zero, when row value is less than or equal to our defined row_num which is 3 we increase the value of row by one.  


        //add an additional column for each row. within that additional column add one more square
        for (let column = 0; column <= row; column++){
        //We are letting column start off as zero, when the column value is less than or equal to the number of rows it creates a square based on 
        //the amount of columns
            //insert a square 
            //create one more square (x, y, size)
            square(column * 50, row * 50, 50);
        }
    }
}