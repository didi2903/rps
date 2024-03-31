let rps = [
    {
        value: "rock",
        winsAgainst: "scissors",
        loosesAgainst: "papper"
    },
    {
        value: "papper",
        winsAgainst: "rock",
        loosesAgainst: "scissors"
    },
    {
        value: "scissors",
        winsAgainst: "papper",
        loosesAgainst: "rock"
    },
]

function clickHandler(event) {
    let random = Math.floor(Math.random() * 3);
    let opponentsChoice = rps[random];
    let usersChoice = rps.filter(function(item){ return item.value === event.currentTarget.value })[0];

    console.log("you clicked " + event.currentTarget.value)
    console.log("opponent clicked " + opponentsChoice.value);

    whoWins(opponentsChoice, usersChoice)
}

function whoWins(opponentsChoice, usersChoice) {
    if(opponentsChoice === usersChoice){
        document.getElementById("message").innerHTML = "It's a tie! Go again!";
    } else {
        if(usersChoice.winsAgainst === opponentsChoice.value){
            document.getElementById("message").innerHTML = "You won!!";
        } else {
            document.getElementById("message").innerHTML = "You lost!!";
        }
    }
}

document.querySelector("#rock").addEventListener("click", clickHandler);
document.querySelector("#scissors").addEventListener("click", clickHandler);
document.querySelector("#papper").addEventListener("click", clickHandler);