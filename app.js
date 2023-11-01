"use strict"; 

// hello("Mongol", 10);
// function hello(name){
//     console.log("Hello " + name)
// }

// hello("Nandin", 10);
// hello("Haliun", 10);


// function test(){
//     alert("Button clicked")
// }




// function sum(a,b){
//     alert(a+b)
// }

// sum(10,20);
// sum(20,30);

// function color(){
//     document.getElementsByTagName("body") [0].style.backgroundColor = "aqua"  ;
// }
var computer = document.querySelector(".computer");
var player = document.querySelector(".player");
var winner = document.querySelector(".winner");

function play(playerChoice){
    var random = Math.floor(Math.random()*3);
    console.log(random);
    var computerChoice;

    if(random == 0){
        computerChoice = "paper";
        computer.innerText = "Computer choice : paper";

    }else if(random == 1){
        computerChoice = "scissor";
        computer.innerText = "Computer choice : scissor";

    }else{
        computerChoice = "rock";
        computer.innerText = "Computer choice : rock";

    }


    player.innerText = "Player choice: "  + playerChoice ;


    if(playerChoice == computerChoice){
        winner.innerText = ("Draw");

    } else if (
        (playerChoice == "paper"&& computerChoice=="rock") ||
        (playerChoice == "rock"&& computerChoice=="scissor") ||
        (playerChoice == "scissor"&& computerChoice=="paper")
    ) {
        winner.innerText = "You win!";

    } else{
        winner.innerText = "Computer win!";

    }
    console.log(playerChoice);
    console.log(computerChoice);
}
    
