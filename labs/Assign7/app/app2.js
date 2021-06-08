let username = document.getElementById("username");
let password = document.getElementById("password");
let sumDiv = document.getElementById("check");

function Login(){
    if ((username.value == "Username") && (password.value == "Password")){
        sumDiv.innerHTML = "You've Logged in Successfully";
    } else {
        sumDiv.innerHTML = "You've entered the wrong information";
    }
}