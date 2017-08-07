var playerChoice = "r";
var cpuChoice = "s";

if (playerChoice == "r" && cpuChoice == "p"){
    console.log("CPU won because it chose paper.");
}

if (playerChoice == "r" && cpuChoice == "s"){
    console.log("You won because you choose rock.");
}

if (playerChoice == cpuChoice){
    console.log("it's a draw!");
}

if (playerChoice == "p" && cpuChoice == "r"){
    console.log("CPU won because it chose scissors");
}

if (playerChoice == "p" && cpuChoice == "r"){
    console.log("You won because you chose paper.")
}

if (playerChoice == "s" && cpuChoice == "p"){
    console.log("You won because you chose scissors.");
}

if (playerChoice == "s" && cpuChoice == "r"){
    console.log("CPU won because it chose rock.");
}