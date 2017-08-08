//var playerChoice = "r";
//var cpuChoice = "s";

//if //(playerChoice == "r" && cpuChoice == "p"){
  //  console.log("CPU won because it chose paper.");
//}


//if (playerChoice == "r" && cpuChoice == "s"){
  //  console.log("You won because you choose rock.");
//}

//if (playerChoice == cpuChoice){
   // console.log("it's a draw!");
//}

//if (playerChoice == "p" && cpuChoice == "r"){
  //  console.log("CPU won because it chose scissors");
//}

//if (playerChoice == "p" && cpuChoice == "r"){
  //  console.log("You won because you chose paper.")
//}

//if (playerChoice == "s" && cpuChoice == "p"){
  //  console.log("You won because you chose scissors.");
//}

//if (playerChoice == "s" && cpuChoice == "r"){
  //  console.log("CPU won because it chose rock.");

//}


   // var compare = function(playerChoice, cpuChoice) {
     //if (playerChoice === cpuChoice) 
    

   // $("button").click(function(){
     //   alert("rock");
   // });


    //var options = ["rock", "paper", "scissor"];

   // var select = function (){
    // var pick = options[Math.floor(Math.random()*3)];
    // return pick;
     
 //}
   // select();

  //  function compare() {
  //compMakeAchoice();
  //if ((cpuChoice == "rock" && playerChoice == "rock") || (cpuChoice == "paper" && cpuChoice == "paper") || (cpuChoice == "scissors" && playerChoice == "scissors")) {
    //document.getElementById("result").innerHTML = "Winner: " + "No one won. Both chose " + playerChoice;
  //} else if ((cpuChoice == "rock" && playerChoice == "paper") || (cpuChoice == "paper" && playerChoice == "scissors") || (cpuChoice == "scissors" && playerChoice == "rock")) {
    //playerscore++;
    //document.getElementById("playerscore").innerHTML = "Player Score: " + playerscore;
    //document.getElementById("result").innerHTML = "Winner: " + "You won (Your Choice:" + playerChoice + " and Computer's choice:" + cpuChoice + ")";
 // } else {
    //computerscore++;
    //document.getElementById("computerscore").innerHTML = "Computer Score: " + computerscore;
   // document.getElementById("result").innerHTML = "Winner: " + "Computer won (Your Choice:" + playerChoice + " and Computer's choice:" + cpuChoice + ")";
 // }
//

  //  }

  var playerscore = 0;
var computerscore = 0;
var userChoice;
var computerChoice;

function choose(choice) {
  userChoice = choice;
}

function compMakeAchoice() {
  computerChoice = Math.floor((Math.random() * 3) + 1);
  alert(computerChoice);
  if (computerChoice == 1) {
    computerChoice = "rock";
  } else if (computerChoice == 2) {
    computerChoice = "paper";
  } else if (computerChoice == 3) {
    computerChoice = "scissors";
  }
}

function compare() {
  compMakeAchoice();
  if ((computerChoice == "rock" && userChoice == "rock") || (computerChoice == "paper" && userChoice == "paper") || (computerChoice == "scissors" && userChoice == "scissors")) {
    document.getElementById("result").innerHTML = "Winner: " + "No one won. Both chose " + userChoice;
  } else if ((computerChoice == "rock" && userChoice == "paper") || (computerChoice == "paper" && userChoice == "scissors") || (computerChoice == "scissors" && userChoice == "rock")) {
    playerscore++;
    document.getElementById("playerscore").innerHTML = "Player Score: " + playerscore;
    document.getElementById("result").innerHTML = "Winner: " + "You won (Your Choice:" + userChoice + " and Computer's choice:" + computerChoice + ")";
  } else {
    computerscore++;
    document.getElementById("computerscore").innerHTML = "Computer Score: " + computerscore;
    document.getElementById("result").innerHTML = "Winner: " + "Computer won (Your Choice:" + userChoice + " and Computer's choice:" + computerChoice + ")";
  }
}