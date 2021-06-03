//Create a simple JRPG battle system using two objects: one for enemy, and the other for a player

//Each object should have properties for attack, hp, and defense. Display both sets of stats in the document
//Using a button, provide the ability for the player to attack the enemy
//enemyHP -= playerAttack - enemyDefense.

//Have the enemy do the same to the player.
//playerHP -= enemyAttack - playerDefense.


//create the player and enemy objects with their properties.
let player = { HP: 100, attack: 20, defense: 15 };
let enemy = { HP: 100, attack: 20, defense: 15 };

//Varaibles for HTML Stuff
//player Variables
var playerHP = document.getElementById("playerHP");
var playerAttack = document.getElementById("playerAttack");
var playerDefense = document.getElementById("playerDefense");
//Enemy Variables
var enemyHP = document.getElementById("enemyHP");
var enemyAttack = document.getElementById("enemyAttack");
var enemyDefense = document.getElementById("enemyDefense");

//Writing stuff in HTML
//player HTML
playerHP.innerHTML = "HP: " + player.HP;
playerAttack.innerHTML = "Attack: " + player.attack;
playerDefense.innerHTML = "Defense: " + player.defense;
//enemy HTML
enemyHP.innerHTML = "HP: " + enemy.HP;
enemyAttack.innerHTML = "Attack: " + enemy.attack;
enemyDefense.innerHTML = "Defense: " + enemy.defense;

//set a counter so that the enemy's attack executes some time after the players.
var counter = setInterval(attackPlayer, 3000);

//Create a function that executes the attack once the button is clicked
function attackEnemy() {
    //subtract enemy HP based on player damage and enemy defense
    enemy.HP -= player.attack - enemy.defense;

    //error handling 
    if (enemy.HP == 0) {
        alert("You WIN!!!!");
        clearInterval(counter);
        document.getElementById("AttackButton").disabled = true;
        window.location.reload();
    }

    //display updated information
    enemyHP.innerHTML = "HP: " + enemy.HP;
}

//Create a function that executes after the indicated time that reduces the player's HP.
function attackPlayer() {
    //subtract player HP based on enemy damage and player defense 
    player.HP -= enemy.attack - enemy.defense;

    //error handling 
    if (player.HP == 0) {
        alert("You Lose!");
        clearInterval(counter);
        document.getElementById("AttackButton").disabled = true;
        window.location.reload();
    }

    //display updated information
    playerHP.innerHTML = "HP: " + player.HP;
}