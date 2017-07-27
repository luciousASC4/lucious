var HP = 100;
var gold = 0;
var numberDefeated= 0;

function updateStats(){
    $("#stats").text("HP: " + HP + " // Gold: " + gold + " //Ogre Slain" + numberDefeated);
}

function spawnogre(){
    $("ogres").prepend(
        "<img src=https://vignette4.wikia.nocookie.net/shrek/images/8/87/Shrek_fierce.jpg/revision/latest?cb=20100604223615/>"
    );
}



function attack(){
    if(HP>0){
        if(Math.random() * 100 > gold){
            gold == gold + 10;
            numberDefeated++;

            $("#ogres").prepend(
                "<p style= ' color:blue'> you won! + 10 gold. </p>"
            );
        }
        else{
            gold --;
            HP--;
            $("#ogres").prepend(
                "<p style = 'color: red'> You lost -1 gold </p>"
            );

        }
 updateStats();
 spawnogre();  
 
}
else{
    //gameover
    $("#ogres").prepend(
        "<h1> Game Over </h1>"
    );
}    
}

$("body").append("<h1> welcome to ogre fighter");

function setup(){
    $("body").append ("<h1> welcome to ogre fighter");

$("body").append(
    "<div> <h3> STATS </h3> <p id='stats'> </p> </div>"

 $("body").append(
        "<button onclick='attack()'>Attack the Ogre! </button>"
    )

     $("body").append(
        "<div id='ogres'></div>"
    );



);

updateStats();



//$("body").append(
    //"<div> <h3> STATS </h3> <p id='stats'> </p> </div>"
//);

}



//setup html element

//add title to html-require some setup Check

// if player has HP 
    //if player defeats ogre
    //add paragraph tag saying "you win"
    //+ gold to player
    //numb of defeated ogres
    //else
    //add paragraph tag saying "you lost"
    //  -gold
    //-hp
    //updates stat
    //add random ogre Image
    //else
    //add papragraph tag saying "game Over"
$(document).ready(setup);
