var gameSeconds = 0
var currentSec  

function setup() {
    createCanvas(1200, 800);
currentSec= second();
}

//ship

function draw() {
    background("black");
    //rect(mouseX, 0, mouseX, 100)
    // rect(50,50,40,80);
    //}
    if (second() != currentSec){
        gameSeconds++
          currentSec = second()
         
    } 



    m = "Time";
    fill(250);
    text(m, 100, 50, 700, 800);
    textSize(32);

    f = "Score";
    fill(250);
    text(f, 600, 50, 700, 800);
    textSize(32);
    //timer();
    textSize(32);
    var s =second();
    var m = minute();
    text("minute" +  m, 100, 100); 
    text("game second" +  gameSeconds, 250, 100);

}

function scoreNumber(){
    //for( i=0; i<;i++)

}

//var gameSeconds = 0
//var currentSec = second();













//var count = 0, countup = true;
//function timer() {
  //  if (count) {
    //    ++count;
    //}
    //else {
      //  console.log(" ");
        //++countup
        //if (count <= 0) {
          //  countup = true;

        //}


        // if(count>=10000000000){
        // countup= false;

    //}    //else{
    // console.log("b");
    // ++countup;
    //if(count<=0)
    //countup= true;

//}
    //}






