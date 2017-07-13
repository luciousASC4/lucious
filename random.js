function rand(number){
return Math.round(Math.random() * number);

}

console.log (rand(10));

var artist = ["drake", "chance", "travis scott", "migos"];

console.log( artist[14]);

function randArtist(){
    console.log(artist[Math.round(Math.random()* artist.length-1)])
}

for(var i=0; i<5; i++){
randArtist();

}

