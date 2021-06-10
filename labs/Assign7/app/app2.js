//Retrieve the username inputbox and assign it to a variable. 
let username = document.getElementById("username");
//Retrieve the password inputbox and assign it to a variable.
let password = document.getElementById("password");
//retrieve the div that will diplay the result.
let sumDiv = document.getElementById("check");

function Login(){
    //Create an if statement where if what is inputted into the username and password textboxes equals Username and Password
    //it displays as successful
    //else it displays as wrong information
    //use .value to retrieve user inputted information within the textboxes.
    if ((username.value == "Username") && (password.value == "Password")){
        sumDiv.innerHTML = "You've Logged in Successfully";
    } else {
        sumDiv.innerHTML = "You've entered the wrong information";
    }
}