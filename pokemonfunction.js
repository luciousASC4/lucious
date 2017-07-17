function randLetter(){
    var alphabetList = ["a", "b", "c", "d", "e", "f","g", "h" , "i" , "j" , "k", "l", "m", "n", "o" , "p" , "q", "r" , "s", "t", "u" , "v", "w", "s", "y", "z" ];
    return alphabetList[Math.round(Math.random() * alphabetList.length -1)];
 
 }


function randWord(){
  var randLength = Math.random() * 10;
  var newstring = []; 
  for( var i= 0; i<randLength; i++){
      newstring.push( randLetter());
  }

  console.log(newstring.join(""));
 }

function randSentence(){
 var randNum = Math.random() * 3;
 var newSentence = []; 
 for( var j= 0; j< randNum; j++){
    newSentence.push(randWord());
 }

 console.log( newSentence.join(" ")+".");

}
randSentence();
