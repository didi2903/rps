let rps = ["rock", "papper", "scissors"];

function rock(opponent) {

    console.log("you clicked rock")

    console.log(opponent)

    if(opponent === rps[0]) {
        document.getElementById("message").innerHTML = "Go again!";
    }
}

function papper() {
}

function scissors() {
}

function game() {
    let random = Math.floor(Math.random() * 3);
    let opponent = rps[random];
    console.log(opponent);
}

game();